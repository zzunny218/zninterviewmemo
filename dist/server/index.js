const json = (body, init = {}) => new Response(JSON.stringify(body), { ...init, headers: { "content-type": "application/json; charset=utf-8", ...(init.headers || {}) } });
const outputText = (response) => response.output_text || response.output?.flatMap(item => item.content || []).filter(item => item.type === "output_text").map(item => item.text).join("\n") || "";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/assist") return env.ASSETS.fetch(request);
    if (request.method !== "POST") return json({ error: "POST 요청만 지원합니다." }, { status: 405 });
    if (!env.OPENAI_API_KEY) return json({ error: "AI 연결이 아직 완료되지 않았습니다." }, { status: 503 });
    try {
      const { action, notes = [], sources = [] } = await request.json();
      if (!['links', 'analysis', 'questions'].includes(action)) return json({ error: "알 수 없는 요청입니다." }, { status: 400 });
      const instructions = `당신은 한국 대학 면접 준비를 돕는 근거 중심 분석가다. 생기부 원문과 메모에 없는 사실을 만들지 마라. 각 제안에는 반드시 제공된 sourceId를 1개 이상 붙여라. 결과는 JSON만 반환한다. links: {"links":[{"fromNoteId":"","toNoteId":"","reason":"","sourceIds":[""]}]}. analysis: {"themes":[{"title":"","description":"","sourceIds":[""]}]}. questions: {"questions":[{"type":"동기|과정|성찰|전공|확장","question":"","noteIds":[""],"sourceIds":[""]}]}. 연결은 뚜렷할 때만 최대 5개, 분석은 최대 3개, 질문은 최대 6개로 제한한다. 요청 종류: ${action}. 메모: ${JSON.stringify(notes)}. 원문 근거: ${JSON.stringify(sources)}`;
      const response = await fetch("https://api.openai.com/v1/responses", { method: "POST", headers: { authorization: `Bearer ${env.OPENAI_API_KEY}`, "content-type": "application/json" }, body: JSON.stringify({ model: "gpt-5-mini", input: instructions, max_output_tokens: 1800 }) });
      if (!response.ok) { const message = response.status === 429 ? "OpenAI API 사용 한도 또는 크레딧을 확인해 주세요." : "AI 분석 요청에 실패했습니다."; return json({ error: message }, { status: response.status }); }
      const payload = await response.json();
      return json(JSON.parse(outputText(payload).replace(/^```json\s*|\s*```$/g, "")));
    } catch { return json({ error: "분석 결과를 읽지 못했습니다. 다시 시도해 주세요." }, { status: 500 }); }
  }
};
