const STORAGE_KEY = "record-weave-v1";

const sampleState = {
  recordName: "샘플 학교생활기록부",
  blocks: [
    {
      id: "src-science-1",
      grade: "1학년",
      section: "세부능력 및 특기사항",
      subject: "통합과학",
      page: 6,
      text: "생활 속 플라스틱 사용 문제에 관심을 갖고 생분해성 플라스틱의 원리와 한계를 조사함. 자료마다 분해 조건이 다르게 제시된 점을 발견하고, 온도와 습도에 따른 분해 속도를 비교할 수 있는 실험을 직접 설계함. 실험 과정에서 통제 변인의 중요성을 이해하고 예상과 다른 결과가 나온 원인을 미생물 활성 조건과 연결하여 해석함. 기술의 친환경성은 소재 자체뿐 아니라 실제 사용·폐기 환경까지 함께 살펴야 한다는 의견을 논리적으로 제시함."
    },
    {
      id: "src-social-1",
      grade: "1학년",
      section: "세부능력 및 특기사항",
      subject: "통합사회",
      page: 7,
      text: "디지털 접근성 격차를 주제로 자료를 수집하고 기술 보급만으로 문제가 해결되는지 질문함. 고령자의 무인 주문기 사용 경험을 관찰한 뒤 정보 설계와 도움 체계가 함께 마련되어야 한다고 주장함. 조별 토론에서는 상반된 관점을 표로 구조화하여 합의 가능한 대안을 도출하는 데 기여함."
    },
    {
      id: "src-club-1",
      grade: "2학년",
      section: "창의적 체험활동상황",
      subject: "동아리활동",
      page: 10,
      text: "교내 길찾기 불편을 해결하기 위한 웹 지도를 팀과 함께 제작함. 사용자가 실제로 헤매는 지점을 파악하기 위해 신입생 인터뷰를 진행하고, 건물 이름보다 눈에 보이는 표식을 중심으로 경로를 안내하도록 설계를 수정함. 개발 과정에서 역할을 나누되 매주 결과를 함께 검토하는 방식으로 협업함."
    },
    {
      id: "src-math-2",
      grade: "2학년",
      section: "세부능력 및 특기사항",
      subject: "수학Ⅱ",
      page: 12,
      text: "대기 시간에 따른 체감 불편이 선형적으로 증가하지 않는다는 가설을 세우고 설문 결과를 함수로 모델링함. 표본 수가 적어 일반화하기 어렵다는 한계를 스스로 지적하고, 후속 조사에서는 시간대와 이용 목적을 구분해야 한다는 개선안을 제안함."
    },
    {
      id: "src-career-3",
      grade: "3학년",
      section: "창의적 체험활동상황",
      subject: "진로활동",
      page: 16,
      text: "인간 중심 인공지능을 주제로 진로 탐구를 수행함. 추천 시스템의 편리함 뒤에 선택 편향이 강화될 수 있음을 사례로 분석하고, 이용자가 추천 이유를 이해하고 조정할 수 있는 인터페이스가 필요하다는 결론을 제시함. 기술적 성능과 사용자의 통제권을 함께 고려하는 개발자가 되고자 하는 진로 계획을 구체화함."
    },
    {
      id: "src-overall-3",
      grade: "3학년",
      section: "행동특성 및 종합의견",
      subject: "종합의견",
      page: 19,
      text: "궁금한 점을 그대로 넘기지 않고 자료 조사와 작은 실험으로 확인하는 태도가 돋보임. 서로 다른 교과에서 얻은 관점을 연결해 문제를 바라보며, 모둠 활동에서는 동료의 의견을 구조화하고 다음 행동을 제안하는 역할을 꾸준히 수행함."
    }
  ],
  activeBlockId: "src-science-1",
  notes: [
    {
      id: "note-human-tech",
      title: "기술을 환경과 사용자까지 넓혀 보는 시선",
      body: "소재나 기능이 좋다는 설명에서 멈추지 않고, 실제 사용 조건과 그 기술을 쓰는 사람의 경험까지 질문하는 경향이 반복된다.",
      category: "탐구",
      tags: ["인간중심", "기술윤리", "확장된 관점"],
      anchors: [
        { blockId: "src-science-1", quote: "기술의 친환경성은 소재 자체뿐 아니라 실제 사용·폐기 환경까지 함께 살펴야 한다", page: 6 },
        { blockId: "src-social-1", quote: "기술 보급만으로 문제가 해결되는지 질문함", page: 7 },
        { blockId: "src-career-3", quote: "기술적 성능과 사용자의 통제권을 함께 고려하는 개발자", page: 16 }
      ],
      links: ["note-test-small"],
      x: 130,
      y: 140,
      collapsed: false
    },
    {
      id: "note-test-small",
      title: "작게 관찰하고 검증하는 방식",
      body: "막연한 문제의식은 인터뷰, 실험, 설문처럼 확인 가능한 작은 행동으로 바꾼다. 결과가 예상과 다르면 실패로 덮기보다 조건과 한계를 다시 본다.",
      category: "성장",
      tags: ["실험", "사용자관찰", "성찰"],
      anchors: [
        { blockId: "src-science-1", quote: "온도와 습도에 따른 분해 속도를 비교할 수 있는 실험을 직접 설계함", page: 6 },
        { blockId: "src-club-1", quote: "신입생 인터뷰를 진행", page: 10 },
        { blockId: "src-math-2", quote: "표본 수가 적어 일반화하기 어렵다는 한계를 스스로 지적", page: 12 }
      ],
      links: ["note-human-tech", "note-connect-fields"],
      x: 465,
      y: 315,
      collapsed: false
    },
    {
      id: "note-connect-fields",
      title: "교과를 넘나드는 문제 해결",
      body: "과학의 실험 설계, 사회의 접근성 관점, 수학의 모델링을 실제 생활 문제에 함께 적용했다.",
      category: "진로",
      tags: ["융합", "문제해결"],
      anchors: [
        { blockId: "src-social-1", quote: "상반된 관점을 표로 구조화", page: 7 },
        { blockId: "src-math-2", quote: "설문 결과를 함수로 모델링함", page: 12 },
        { blockId: "src-overall-3", quote: "서로 다른 교과에서 얻은 관점을 연결", page: 19 }
      ],
      links: ["note-test-small"],
      x: 750,
      y: 120,
      collapsed: false
    }
  ],
  highlights: [
    { id: "hl-1", blockId: "src-science-1", quote: "기술의 친환경성은 소재 자체뿐 아니라 실제 사용·폐기 환경까지 함께 살펴야 한다", noteId: "note-human-tech" },
    { id: "hl-2", blockId: "src-science-1", quote: "온도와 습도에 따른 분해 속도를 비교할 수 있는 실험을 직접 설계함", noteId: "note-test-small" }
  ],
  questions: [
    { id: "q1", type: "동기", question: "생분해성 플라스틱 탐구를 시작한 계기는 무엇이었나요?", noteIds: ["note-human-tech"], draft: "" },
    { id: "q2", type: "과정", question: "실험에서 본인이 직접 설계하고 판단한 부분을 구체적으로 설명해 주세요.", noteIds: ["note-test-small"], draft: "" },
    { id: "q3", type: "성찰", question: "예상과 다른 결과를 만났을 때 생각이 어떻게 바뀌었나요?", noteIds: ["note-test-small"], draft: "" },
    { id: "q4", type: "전공", question: "여러 활동에서 인간 중심 관점을 강조했는데, 희망 전공과 어떤 관련이 있나요?", noteIds: ["note-human-tech", "note-connect-fields"], draft: "" },
    { id: "q5", type: "확장", question: "같은 활동을 다시 한다면 무엇을 바꾸고 싶나요?", noteIds: ["note-test-small"], draft: "" }
  ],
  activeQuestionId: "q1",
  questionFilter: "전체"
};

const hadSavedData = Boolean(localStorage.getItem(STORAGE_KEY));
let state = loadState();
let selectedAnchor = null;
let activePdfFile = null;
let activePdfUrl = null;
let toastTimer = null;
let canvasZoom = 1;
let canvasPan = {x:0,y:0};
let graphMode = false;
let selectedGraphNoteId = null;
let movingNodeId = null;
let layoutFrame = null;
let allGraphZoom = 1;
let allGraphPan = {x:0,y:0};
let selectedAllGraphNoteId = null;
let canvasFilters = { query: "", category: "전체", grade: "전체", subject: "전체" };

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const uid = (prefix) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

function cloneSample() {
  return JSON.parse(JSON.stringify(sampleState));
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed?.blocks?.length ? parsed : cloneSample();
  } catch {
    return cloneSample();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

function activeBlock() {
  return state.blocks.find((block) => block.id === state.activeBlockId) || state.blocks[0];
}

function blockLabel(block) {
  return `${block.grade} · ${block.subject} · ${block.page}쪽`;
}

function routeTo(route) {
  $$(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === route));
  $$(".route-view").forEach((view) => view.classList.remove("is-active"));
  $(`#${route}-view`)?.classList.add("is-active");
  history.replaceState(null, "", `#${route}`);
  if (route === "canvas") renderCanvas();
  if (route === "graph") renderAllGraph();
  if (route === "persona") renderPersonas();
  if (route === "interview") renderInterview();
}

function renderTree() {
  const tree = $("#record-tree");
  tree.innerHTML = "";
  const grades = [...new Set(state.blocks.map((block) => block.grade))];
  grades.forEach((grade) => {
    const group = document.createElement("div");
    group.className = "tree-group";
    const header = document.createElement("button");
    header.type = "button";
    header.innerHTML = `<span class="tree-chevron">⌄</span><span>${grade}</span>`;
    header.addEventListener("click", () => group.classList.toggle("closed"));
    const children = document.createElement("div");
    children.className = "tree-children";
    state.blocks.filter((block) => block.grade === grade).forEach((block) => {
      const leaf = document.createElement("button");
      leaf.type = "button";
      leaf.className = `tree-leaf${block.id === state.activeBlockId ? " is-active" : ""}`;
      leaf.innerHTML = `<span>${escapeHtml(block.subject)}</span><span>${block.page}쪽</span>`;
      leaf.title = block.section;
      leaf.addEventListener("click", () => selectBlock(block.id));
      children.appendChild(leaf);
    });
    group.append(header, children);
    tree.appendChild(group);
  });
}

function selectBlock(blockId, highlightQuote = "") {
  state.activeBlockId = blockId;
  saveState();
  renderRecord();
  routeTo("record");
  if (highlightQuote) {
    requestAnimationFrame(() => {
      const mark = $$("mark.source-highlight").find((item) => item.textContent.includes(highlightQuote.slice(0, 20)));
      mark?.scrollIntoView({ behavior: "smooth", block: "center" });
      mark?.animate([{ outline: "0 solid #e5a93f" }, { outline: "8px solid transparent" }], { duration: 900 });
    });
  }
}

function renderRecord() {
  const block = activeBlock();
  if (!block) return;
  $("#breadcrumb").innerHTML = `<span>${escapeHtml(block.grade)}</span><b>/</b><span>${escapeHtml(block.section)}</span><b>/</b><strong>${escapeHtml(block.subject)}</strong>`;
  $("#source-kicker").textContent = `${block.grade} · ${block.section}`;
  $("#source-title").textContent = block.subject;
  $("#page-chip").textContent = `PDF ${block.page}쪽`;
  renderSourceText(block);
  renderTree();
  renderNotesForBlock();
  $("#record-status").textContent = state.recordName === sampleState.recordName ? "샘플 기록으로 둘러보는 중" : `${state.blocks.length}개 원문 블록 정리됨`;
  $("#record-status-dot").classList.toggle("ready", state.recordName !== sampleState.recordName);
}

function renderSourceText(block) {
  const article = $("#source-document");
  article.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.className = "source-paragraph";
  const highlights = state.highlights
    .filter((item) => item.blockId === block.id && block.text.includes(item.quote))
    .map((item) => ({ ...item, start: block.text.indexOf(item.quote), end: block.text.indexOf(item.quote) + item.quote.length }))
    .sort((a, b) => a.start - b.start);
  let cursor = 0;
  highlights.forEach((highlight) => {
    if (highlight.start < cursor) return;
    paragraph.append(document.createTextNode(block.text.slice(cursor, highlight.start)));
    const mark = document.createElement("mark");
    mark.className = `source-highlight${highlight.noteId ? " linked" : ""}`;
    mark.dataset.highlightId = highlight.id;
    const linkedNote = state.notes.find((note) => note.id === highlight.noteId);
    mark.style.setProperty("--link-color", linkedNote?.color || highlight.color || "#5865f2");
    mark.textContent = block.text.slice(highlight.start, highlight.end);
    mark.title = highlight.noteId ? "연결된 메모 열기" : "하이라이트";
    paragraph.append(mark);
    cursor = highlight.end;
  });
  paragraph.append(document.createTextNode(block.text.slice(cursor)));
  article.appendChild(paragraph);
}

function renderNotesForBlock() {
  const block = activeBlock();
  const notes = state.notes.filter((note) => note.anchors.some((anchor) => anchor.blockId === block.id));
  $("#note-panel-count").textContent = `${notes.length}개의 생각`;
  const list = $("#note-list");
  list.innerHTML = "";
  notes.forEach((note) => list.appendChild(noteCard(note)));
  if (!notes.length) list.innerHTML = `<p class="dialog-copy">아직 이 원문과 연결된 메모가 없어요.</p>`;
}

function noteCard(note) {
  const card = document.createElement("article");
  card.className = "note-card";
  card.tabIndex = 0;
  card.innerHTML = `<div class="note-card-head"><span class="category-pill">${escapeHtml(note.category)}</span><span class="evidence-count">근거 ${note.anchors.length}</span></div><h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.body || "내용을 채워 보세요.")}</p><div class="tag-row">${note.tags.map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join("")}</div>`;
  card.addEventListener("click", () => openNoteDialog(note));
  card.addEventListener("keydown", (event) => { if (event.key === "Enter") openNoteDialog(note); });
  return card;
}

function getSelectionAnchor() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !selection.rangeCount) return null;
  const range = selection.getRangeAt(0);
  const sourceDocuments = [$("#source-document"), $("#canvas-source-document"), $("#record-table")].filter(Boolean);
  if (!sourceDocuments.some((article) => article.contains(range.commonAncestorContainer))) return null;
  const quote = selection.toString().replace(/\s+/g, " ").trim();
  if (quote.length < 2) return null;
  const selectedElement = range.commonAncestorContainer.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
  const block = state.blocks.find((item) => item.id === selectedElement?.closest("[data-source-block]")?.dataset.sourceBlock) || activeBlock();
  return { blockId: block.id, quote: quote.slice(0, 500), page: block.page, pages:block.sourcePages || [block.page], grade:block.grade, subject:block.subject, semester:block.semester || "", start:block.text.indexOf(quote), end:block.text.indexOf(quote)+quote.length };
}

function showSelectionMenu(event) {
  const anchor = getSelectionAnchor();
  if (!anchor) return;
  event.preventDefault();
  selectedAnchor = anchor;
  const menu = $("#selection-menu");
  menu.hidden = false;
  const x = Math.min(event.clientX, innerWidth - 252);
  const y = Math.min(event.clientY, innerHeight - 190);
  menu.style.left = `${Math.max(8, x)}px`;
  menu.style.top = `${Math.max(8, y)}px`;
}

function applyHighlight(anchor, noteId = null, color = $("#selection-color")?.value || "#5865f2") {
  const existing = state.highlights.find((item) => item.blockId === anchor.blockId && item.quote === anchor.quote);
  if (!existing) state.highlights.push({ id: uid("hl"), ...anchor, noteId, color });
  else {
    if (noteId) existing.noteId = noteId;
    existing.color = color || existing.color || "#5865f2";
  }
  saveState();
  renderRecord();
  if ($("#canvas-view").classList.contains("is-active")) renderCanvas();
}

function openNoteDialog(note = null, anchor = null) {
  const dialog = $("#note-dialog");
  $("#note-form").reset();
  $("#note-id").value = note?.id || "";
  $("#note-dialog-title").textContent = note ? "메모 다듬기" : "새 메모";
  $("#note-title").value = note?.title || "";
  $("#note-body").value = note?.body || "";
  $("#note-category").value = note?.category || "탐구";
  $("#note-tags").value = note?.tags?.join(", ") || "";
  $("#note-color").value = note?.color || "#5865f2";
  $("#delete-note").hidden = !note;
  const preview = $("#note-anchor-preview");
  preview.onclick = null;
  preview.style.cursor = "";
  const activeAnchor = anchor || null;
  dialog.dataset.anchor = activeAnchor ? JSON.stringify(activeAnchor) : "";
  if (activeAnchor) {
    preview.hidden = false;
    preview.innerHTML = `“${escapeHtml(activeAnchor.quote)}”<small>${escapeHtml(blockLabel(state.blocks.find((block) => block.id === activeAnchor.blockId)))}</small>`;
    if (!note) $("#note-title").value = suggestTitle(activeAnchor.quote);
  } else if (note?.anchors?.length) {
    const first = note.anchors[0];
    preview.hidden = false;
    preview.innerHTML = `근거 ${note.anchors.length}개 연결됨<small>${escapeHtml(blockLabel(state.blocks.find((block) => block.id === first.blockId)))}</small>`;
    preview.style.cursor = "pointer";
    preview.title = "연결된 생기부 원문으로 이동";
    preview.onclick = () => { dialog.close(); selectBlock(first.blockId, first.quote); };
  } else preview.hidden = true;
  dialog.showModal();
  setTimeout(() => $("#note-title").focus(), 60);
}

function suggestTitle(quote) {
  const clean = quote.replace(/[.。]$/, "");
  return clean.length > 34 ? `${clean.slice(0, 31)}…` : clean;
}

function saveNoteFromForm() {
  const id = $("#note-id").value;
  const anchor = $("#note-dialog").dataset.anchor ? JSON.parse($("#note-dialog").dataset.anchor) : null;
  const payload = {
    title: $("#note-title").value.trim(),
    body: $("#note-body").value.trim(),
    category: $("#note-category").value,
    tags: $("#note-tags").value.split(",").map((tag) => tag.trim().replace(/^#/, "")).filter(Boolean),
    color: $("#note-color").value || "#5865f2"
  };
  if (!payload.title) return false;
  if (id) {
    const note = state.notes.find((item) => item.id === id);
    Object.assign(note, payload);
    if (anchor && !note.anchors.some((item) => item.blockId === anchor.blockId && item.quote === anchor.quote)) note.anchors.push(anchor);
    if (anchor) applyHighlight(anchor, id, payload.color);
  } else {
    const note = { id: uid("note"), ...payload, canvasTab:recordTab, anchors: anchor ? [anchor] : [], links: [], x: 180 + state.notes.length * 42, y: 110 + state.notes.length * 34 };
    state.notes.push(note);
    if (anchor) applyHighlight(anchor, note.id, payload.color);
  }
  saveState();
  renderRecord();
  toast(id ? "메모를 수정했어요." : "새 메모를 만들었어요.");
  return true;
}

function openLinkDialog(anchor) {
  selectedAnchor = anchor;
  const list = $("#link-note-list");
  list.innerHTML = "";
  state.notes.forEach((note) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "picker-item";
    button.innerHTML = `<span><strong>${escapeHtml(note.title)}</strong><br><small>${escapeHtml(note.category)} · 근거 ${note.anchors.length}</small></span><span>연결</span>`;
    button.addEventListener("click", () => {
      if (!note.color) note.color = $("#selection-color").value || "#5865f2";
      if (!note.anchors.some((item) => item.blockId === anchor.blockId && item.quote === anchor.quote)) note.anchors.push(anchor);
      applyHighlight(anchor, note.id, note.color || $("#selection-color").value);
      saveState();
      $("#link-dialog").close();
      toast("원문을 메모의 근거로 연결했어요.");
    });
    list.appendChild(button);
  });
  $("#link-dialog").showModal();
}

function openReview() {
  const block = activeBlock();
  $("#review-text").value = block.text;
  $("#review-page-label").textContent = `${block.page}쪽`;
  const preview = $("#pdf-preview");
  if (block.id.startsWith("prepared-")) preview.innerHTML = (block.sourcePages || [block.page]).map(page=>`<figure><figcaption>PDF ${page}쪽 · 해당 영역</figcaption><img src="./source-pages/${page}.jpg" alt="PDF ${page}쪽 원문" style="width:100%;height:auto"></figure>`).join("");
  else if (activePdfUrl) preview.innerHTML = `<iframe title="원본 PDF ${block.page}쪽" src="${activePdfUrl}#page=${block.page}&view=FitH"></iframe>`;
  else preview.innerHTML = `<div class="privacy-placeholder"><span>PDF</span><strong>업로드한 원본 PDF는<br>이곳에서만 표시됩니다.</strong></div>`;
  $("#review-dialog").showModal();
}

async function processPdf(file) {
  if (!file) return;
  activePdfFile = file;
  if (activePdfUrl) URL.revokeObjectURL(activePdfUrl);
  activePdfUrl = URL.createObjectURL(file);
  const status = $("#record-status");
  const dot = $("#record-status-dot");
  dot.classList.remove("ready");
  status.textContent = "PDF 구조를 확인하는 중…";
  toast("PDF를 이 기기 안에서 읽기 시작했어요.");
  try {
    const pdfjs = await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs");
    pdfjs.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjs.getDocument({ data: bytes }).promise;
    let ocrModule = null;
    let ocrWorker = null;
    let currentOcrPage = 1;
    const pages = [];
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      currentOcrPage=pageNumber;
      status.textContent = `${pageNumber}/${pdf.numPages}쪽 읽는 중…`;
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      let text = content.items.map((item) => item.str).join(" ").trim();
      if (text.length < 30) {
        if (!ocrModule) ocrModule = await import("https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.esm.min.js");
        if (!ocrWorker) {
          status.textContent = "한글 OCR 엔진 준비 중…";
          ocrWorker = await (ocrModule.createWorker || ocrModule.default.createWorker)("kor+eng", 1, {
            logger: (message) => {
              if (message.status === "recognizing text") status.textContent = `${currentOcrPage}/${pdf.numPages}쪽 OCR ${Math.round((message.progress || 0) * 100)}%`;
            }
          });
        }
        const viewport = page.getViewport({ scale: 1.7 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext("2d", { alpha: false }), viewport }).promise;
        const result = await ocrWorker.recognize(canvas);
        text = result.data.text.trim();
      }
      pages.push({ page: pageNumber, text: removePrivateLines(text) });
      window.__ocrPages = pages;
    }
    if (ocrWorker) await ocrWorker.terminate();
    const blocks = pages.flatMap(segmentPage).filter((block) => block.text.length > 20);
    if (!blocks.length) throw new Error("인식 가능한 학교생활기록 내용을 찾지 못했습니다.");
    state.recordName = file.name;
    state.blocks = blocks;
    state.activeBlockId = blocks[0].id;
    state.highlights = [];
    state.notes = state.notes.filter((note) => !note.anchors.length);
    saveState();
    renderRecord();
    dot.classList.add("ready");
    status.textContent = `${blocks.length}개 원문 블록 정리됨`;
    toast("OCR이 끝났어요. 원본 대조 화면에서 확인해 주세요.");
    openReview();
  } catch (error) {
    console.error(error);
    status.textContent = "읽기에 실패했어요 · 다시 시도해 주세요";
    toast("PDF 읽기에 실패했어요. 인터넷 연결과 파일 상태를 확인해 주세요.");
  }
}

function removePrivateLines(text) {
  const privateWords = ["인적사항", "학적사항", "주민등록번호", "주소", "성명", "보호자", "학번", "사진"];
  return text.split(/\r?\n/).filter((line) => !privateWords.some((word) => line.includes(word))).join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function segmentPage(pageData) {
  if (!pageData.text) return [];
  const text = pageData.text.replace(/\s+/g, " ").trim();
  const sectionNames = ["세부능력 및 특기사항", "창의적 체험활동상황", "행동특성 및 종합의견", "독서활동상황", "교과학습발달상황", "봉사활동실적", "수상경력"];
  const section = sectionNames.find((name) => text.includes(name)) || "기타 기록";
  const gradeMatch = text.match(/([123])\s*학년/);
  const grade = gradeMatch ? `${gradeMatch[1]}학년` : inferGradeByPage(pageData.page);
  const subjects = ["국어", "문학", "독서", "화법과 작문", "수학", "수학Ⅰ", "수학Ⅱ", "미적분", "확률과 통계", "영어", "영어Ⅰ", "영어Ⅱ", "통합과학", "물리학", "화학", "생명과학", "지구과학", "통합사회", "한국사", "사회문화", "생활과 윤리", "정보", "기술·가정", "동아리활동", "진로활동", "자율활동"];
  const subject = subjects.find((name) => text.includes(name)) || (section === "행동특성 및 종합의견" ? "종합의견" : "과목 미분류");
  return [{ id: uid("src"), grade, section, subject, page: pageData.page, text }];
}

function inferGradeByPage(page) {
  if (page <= 7) return "1학년";
  if (page <= 13) return "2학년";
  return "3학년";
}

function renderCanvasSource() {
  const block = activeBlock();
  const article = $("#canvas-source-document");
  const select = $("#canvas-block-select");
  if (!block || !article || !select) return;
  select.innerHTML = state.blocks.filter(item=>!state.preparedRecordVersion || item.id.startsWith('prepared-')).map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === block.id ? "selected" : ""}>${escapeHtml(item.grade)} · ${escapeHtml(item.subject)}</option>`).join("");
  select.onchange = () => {
    state.activeBlockId = select.value;
    saveState();
    renderCanvas();
  };
  $("#canvas-source-section").textContent = `${block.grade} · ${block.section}`;
  $("#canvas-source-page").textContent = `PDF ${block.page}쪽`;
  $("#canvas-source-title").textContent = block.subject;
  $("#canvas-source-section").textContent += block.ocrNeedsReview ? " · OCR 검토 필요" : "";
  article.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.className = "source-paragraph";
  const linkedAnchors = [];
  state.notes.forEach((note) => note.anchors.filter((anchor) => anchor.blockId === block.id && anchor.quote && block.text.includes(anchor.quote)).forEach((anchor) => linkedAnchors.push({
    quote: anchor.quote,
    noteId: note.id,
    start: block.text.indexOf(anchor.quote),
    end: block.text.indexOf(anchor.quote) + anchor.quote.length
  })));
  linkedAnchors.sort((a, b) => a.start - b.start);
  let cursor = 0;
  const used = new Set();
  linkedAnchors.forEach((anchor) => {
    if (anchor.start < cursor || used.has(anchor.quote)) return;
    used.add(anchor.quote);
    paragraph.append(document.createTextNode(block.text.slice(cursor, anchor.start)));
    const mark = document.createElement("mark");
    mark.className = "source-highlight linked";
    mark.dataset.noteId = anchor.noteId;
    const linkedNote = state.notes.find((note) => note.id === anchor.noteId);
    mark.style.setProperty("--link-color", linkedNote?.color || "#5865f2");
    mark.textContent = block.text.slice(anchor.start, anchor.end);
    mark.title = "연결된 메모 열기";
    paragraph.append(mark);
    cursor = anchor.end;
  });
  paragraph.append(document.createTextNode(block.text.slice(cursor)));
  article.appendChild(paragraph);
  article.oncontextmenu = showSelectionMenu;
  article.onclick = (event) => {
    const mark = event.target.closest("mark[data-note-id]");
    const note = state.notes.find((item) => item.id === mark?.dataset.noteId);
    if (note) { const node = document.querySelector('.canvas-node[data-note-id="'+CSS.escape(note.id)+'"]'); node?.querySelector(".node-body-edit")?.focus(); }
  };
}

function renderCrossLinks() {
  const svg = $("#cross-link-layer");
  const split = $("#canvas-split");
  if (!svg || !split || innerWidth <= 760) return;
  svg.innerHTML = "";
  const splitRect = split.getBoundingClientRect();
  $$("#canvas-source-document mark[data-note-id]").forEach((mark) => {
    const node = $(`.canvas-node[data-note-id="${CSS.escape(mark.dataset.noteId)}"]`);
    if (!node) return;
    const a = mark.getBoundingClientRect();
    const b = node.getBoundingClientRect();
    const start = { x: a.right - splitRect.left + 4, y: a.top + a.height / 2 - splitRect.top };
    const end = { x: b.left - splitRect.left - 5, y: b.top + b.height / 2 - splitRect.top };
    const linkColor = state.notes.find((note) => note.id === mark.dataset.noteId)?.color || "#5865f2";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = linkColor;
    const points = closestPoints(a,b).map(p=>({x:p.x-splitRect.left,y:p.y-splitRect.top}));
    Object.assign(start,points[0]); Object.assign(end,points[1]);
    path.setAttribute("d",curvedPath(start,end));
    svg.append(path);
  });
}

function categoryIcon(category) {
  return ({ "탐구": "⌕", "성장": "↗", "협업": "◫", "진로": "◆", "자유 메모": "✦", "활동": "⚡", "캐릭터": "◎", "면접 질문": "?" })[category] || "•";
}
function installStyleMenu(node,note){const trigger=$(".node-style-trigger",node),popover=$(".node-style-popover",node);trigger.onclick=(event)=>{event.stopPropagation();popover.hidden=!popover.hidden;};popover.onclick=(event)=>{const icon=event.target.closest("[data-category]"),color=event.target.closest("[data-color]");if(icon)note.category=icon.dataset.category;if(color)note.color=color.dataset.color;if(!icon&&!color)return;saveState();renderCanvas();};$(".style-spectrum",popover).oninput=(event)=>{note.color=event.target.value;saveState();renderCanvas();};}

function noteContext(note) {
  const blocks = note.anchors.map((anchor) => state.blocks.find((block) => block.id === anchor.blockId)).filter(Boolean);
  return { grades: [...new Set(blocks.map((block) => block.grade))], subjects: [...new Set(blocks.map((block) => block.subject))] };
}

function noteCanvas(note){
 if(RECORD_TABS.includes(note.canvasTab))return note.canvasTab;
 const anchor=(note.anchors||[])[0];const block=state.blocks.find(item=>item.id===anchor?.blockId);
 if(!block)return '1학년 1학기';
 if(/창의|창체/.test(block.section))return '창체';
 if(/출결|수상|자격|학폭|학교폭력|봉사/.test(block.section))return '기록 묶음';
 const tab=block.grade+' '+normalizeSemester(block.semester);
 return RECORD_TABS.includes(tab)?tab:'1학년 1학기';
}
function saveCanvasView(){state.canvasViews||={};state.canvasViews[recordTab]={pan:{...canvasPan},zoom:canvasZoom};saveState();}
function switchCanvas(tab){
 if(tab===recordTab)return;
 saveCanvasView();recordTab=tab;state.activeCanvasTab=tab;graphMode=false;selectedGraphNoteId=null;
 $("#canvas-graph")?.setAttribute("aria-pressed","false");
 const view=state.canvasViews?.[tab];canvasPan=view?.pan?{...view.pan}:{x:0,y:0};canvasZoom=view?.zoom||1;
 saveState();renderCanvas();
}
function graphCoordinates(items){
 const positions=new Map(),count=items.length;
 items.forEach((item,i)=>{const angle=i*2.399963229728653,r=80+Math.sqrt(i)*95;positions.set(item.id,{x:370+Math.cos(angle)*r,y:290+Math.sin(angle)*r});});
 const edges=[];items.forEach(item=>(item.links||[]).forEach(id=>{if(positions.has(id))edges.push([item.id,id]);}));
 for(let step=0;step<90;step++){
  const forces=new Map(items.map(item=>[item.id,{x:0,y:0}]));
  for(let i=0;i<count;i++)for(let j=i+1;j<count;j++){const a=positions.get(items[i].id),b=positions.get(items[j].id),dx=a.x-b.x,dy=a.y-b.y,d2=Math.max(100,dx*dx+dy*dy),force=17000/d2,dist=Math.sqrt(d2);forces.get(items[i].id).x+=dx/dist*force;forces.get(items[i].id).y+=dy/dist*force;forces.get(items[j].id).x-=dx/dist*force;forces.get(items[j].id).y-=dy/dist*force;}
  edges.forEach(([aId,bId])=>{const a=positions.get(aId),b=positions.get(bId),dx=b.x-a.x,dy=b.y-a.y,dist=Math.max(1,Math.hypot(dx,dy)),force=(dist-180)*.012;forces.get(aId).x+=dx/dist*force;forces.get(aId).y+=dy/dist*force;forces.get(bId).x-=dx/dist*force;forces.get(bId).y-=dy/dist*force;});
  items.forEach(item=>{const p=positions.get(item.id),f=forces.get(item.id);p.x+=Math.max(-12,Math.min(12,f.x));p.y+=Math.max(-12,Math.min(12,f.y));});
 }
 return positions;
}
function jumpToNote(id){
 const note=state.notes.find(item=>item.id===id);if(!note)return;
 if(noteCanvas(note)!==recordTab)switchCanvas(noteCanvas(note));
 graphMode=false;renderCanvas();requestAnimationFrame(()=>{const node=$('.canvas-node[data-note-id="'+CSS.escape(id)+'"]');if(node)focusCanvasNote(node);});
}

function canvasItems() {
  state.canvasPositions ||= {};
  const noteItems = state.notes.filter(note=>noteCanvas(note)===recordTab).map((note) => ({ ...note, kind: "note", context: noteContext(note), sourceNote: note }));
  const personas = derivePersonas().slice(0, 0).map((persona, index) => {
    const notes = persona.noteIds.map((id) => state.notes.find((note) => note.id === id)).filter(Boolean);
    const anchors = notes.flatMap((note) => note.anchors);
    const context = noteContext({ anchors });
    const position = state.canvasPositions[`canvas-persona-${index}`] || { x: 350 + index * 38, y: 500 + index * 125 };
    return { id: `canvas-persona-${index}`, title: persona.title, body: persona.description, category: "캐릭터", tags: ["근거 기반"], noteIds: persona.noteIds, anchors, links: [], color: "#8ea1e1", kind: "persona", context, ...position, virtual: true };
  });
  const questions = state.questions.slice(0, 2).map((question, index) => {
    const notes = question.noteIds.map((id) => state.notes.find((note) => note.id === id)).filter(Boolean);
    const anchors = notes.flatMap((note) => note.anchors);
    const context = noteContext({ anchors });
    const position = state.canvasPositions[`canvas-question-${question.id}`] || { x: 55 + index * 300, y: 675 };
    return { id: `canvas-question-${question.id}`, title: question.question, body: "면접 답변과 원문 근거를 함께 확인", category: "면접 질문", tags: [question.type], noteIds: question.noteIds, anchors, links: [], color: "#b28ee8", kind: "question", questionId: question.id, context, ...position, virtual: true };
  });
  const lead = state.notes.find((note) => note.anchors.length);
  const activities = lead ? [{
    id: "canvas-activity-lead",
    title: lead.title,
    body: "계기 → 행동 → 판단 → 결과 → 한계 → 후속 활동",
    category: "활동",
    tags: ["활동 카드"],
    noteIds: [lead.id],
    anchors: lead.anchors,
    links: [],
    color: "#3ba990",
    kind: "activity",
    context: noteContext(lead),
    ...(state.canvasPositions["canvas-activity-lead"] || { x: 45, y: 495 }),
    virtual: true
  }] : [];
  return noteItems;
}

function renderCanvas() {
  renderCanvasSource();
  renderRecordTable();
  const layer = $("#node-layer");
  layer.innerHTML = "";
  layer.style.transform = `translate(${canvasPan.x}px, ${canvasPan.y}px) scale(${canvasZoom})`;
  $("#zoom-label").textContent = `${Math.round(canvasZoom * 100)}%`;
  const items = canvasItems();
  const graphPositions=graphMode?graphCoordinates(items):null;
  $("#canvas-stage").classList.toggle("graph-mode",graphMode);
  $("#canvas-empty").hidden = items.length > 0;
  items.forEach((item) => {
    const node = document.createElement("article");
    const kindClass = item.kind === "persona" ? " persona-node" : item.kind === "question" ? " question-node" : item.kind === "activity" ? " activity-node" : "";
    node.className = `canvas-node${kindClass}${graphMode?" graph-node":""}`;
    node.dataset.noteId = item.id;
    node.dataset.category = item.category;
    node.dataset.search = `${item.title} ${item.body || ""} ${(item.tags || []).join(" ")}`.toLowerCase();
    node.dataset.grades = item.context.grades.join(",");
    node.dataset.subjects = item.context.subjects.join(",");
    node.style.setProperty("--note-color", item.color || "#5865f2");
    node.style.borderTopColor = item.color || "#5865f2";
    node.style.left = `${graphPositions?.get(item.id)?.x ?? item.x ?? 120}px`;
    node.style.top = `${graphPositions?.get(item.id)?.y ?? item.y ?? 120}px`;
    const categoryControl = item.kind === "note"
      ? `<button class="node-category-icon node-style-trigger" type="button" title="아이콘·색 변경" aria-label="아이콘과 색 변경">${categoryIcon(item.category)}</button>`
      : `<span class="node-category-icon" aria-label="${escapeHtml(item.category)} 카테고리">${categoryIcon(item.category)}</span>`;
    const actions = item.kind === "note" && !graphMode ? `<button class="node-mini note-links" type="button" aria-label="연결된 메모">↗</button>` : "";
    const connector = "";
    const editTitle = item.kind === "note" ? 'class="node-title-edit" contenteditable="false" spellcheck="true"' : "";
    const editBody = item.kind === "note" ? 'class="node-body-edit" contenteditable="false" spellcheck="true"' : "";
    node.innerHTML = `<div class="node-top"><div class="node-category-wrap">${categoryControl}</div><div class="node-actions">${actions}</div></div><h3 ${editTitle}>${escapeHtml(item.title)}</h3><div ${editBody}>${safeNoteHtml(item.bodyHtml || escapeHtml(item.body || ""))}</div>${connector}`;
    if(!graphMode)enableNodeDrag(node, item);
    else node.addEventListener("click",()=>jumpToNote(item.id));
    node.addEventListener("dblclick",(event)=>{if(event.target.closest("button,[contenteditable]"))return;focusCanvasNote(node);});
    if (item.kind === "note") {
      const popover=document.createElement("div"); popover.className="node-style-popover"; popover.hidden=true;
      const categories=["탐구","성장","협업","진로","자유 메모","활동","캐릭터","면접 질문"]; const colors=["#5865f2","#57a5e5","#48a986","#e5a94e","#db6b83","#b18ae8"];
      popover.innerHTML="<div class=\"style-icon-list\">"+categories.map((category)=>"<button type=\"button\" data-category=\""+category+"\" aria-label=\""+category+"\">"+categoryIcon(category)+"</button>").join("")+"</div><div class=\"style-color-list\">"+colors.map((color)=>"<button type=\"button\" data-color=\""+color+"\" style=\"--picker-color:"+color+"\" aria-label=\"색상 선택\"></button>").join("")+"</div><input class=\"style-spectrum\" type=\"color\" value=\""+(item.color||"#5865f2")+"\" aria-label=\"메모 색상 직접 선택\">"; node.append(popover);
      installStyleMenu(node, item.sourceNote);
      if(!graphMode){
        const linksButton=$(".note-links",node);
        linksButton.addEventListener("click",event=>{event.stopPropagation();showNoteRelations(node,item.sourceNote);});
      }
      const titleEdit = $(".node-title-edit", node);
      const bodyEdit = $(".node-body-edit", node);
      if(!graphMode)installFormatting(node, bodyEdit, item.sourceNote);
      if(!graphMode&&item.anchors.length){const evidence=document.createElement('div');evidence.className='node-evidence';item.anchors.forEach(anchor=>{const button=document.createElement('button');button.type='button';const block=state.blocks.find(b=>b.id===anchor.blockId);button.textContent=(block?.subject || '원문')+' '+anchor.page+'쪽';button.onclick=()=>{state.activeBlockId=anchor.blockId;switchCanvas(/창의|창체/.test(block?.section||'')?'창체':block?.grade+' '+normalizeSemester(block?.semester));};evidence.append(button);});node.append(evidence);}
      if(!graphMode)[titleEdit,bodyEdit].forEach((editor)=>editor.addEventListener("dblclick",(event)=>{event.stopPropagation();editor.contentEditable="true";editor.focus();}));
      titleEdit.addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); titleEdit.blur(); } });
      bodyEdit.addEventListener("keydown", (event) => { if ((event.ctrlKey || event.metaKey) && event.key === "Enter") bodyEdit.blur(); });
      titleEdit.addEventListener("blur", () => {
        item.sourceNote.title = titleEdit.textContent.trim() || "제목 없음";
        titleEdit.contentEditable="false";
        saveState();
        renderCanvasFilters();
      });
      bodyEdit.addEventListener("blur", () => {
        item.sourceNote.body = bodyEdit.textContent.trim();
        bodyEdit.contentEditable="false";
        item.sourceNote.bodyHtml = safeNoteHtml(bodyEdit.innerHTML);
        saveState();
        renderCanvasFilters();
      });
    }
    layer.appendChild(node);
  });
  renderCanvasFilters(items);
  requestAnimationFrame(() => {
    renderEdges();
    renderCrossLinks();
    applyCanvasFilters();
    if(!graphMode)settleNodes();
  });
}

function showNoteRelations(node,note){
 const existing=node.querySelector('.note-relations');if(existing){existing.remove();return;}
 const panel=document.createElement('div');panel.className='note-relations';
 const incoming=state.notes.filter(other=>(other.links||[]).includes(note.id));
 const outgoing=(note.links||[]).map(id=>state.notes.find(other=>other.id===id)).filter(Boolean);
 panel.innerHTML='<div class="relation-head"><strong>메모 연결</strong><button type="button" class="relation-close" aria-label="닫기">×</button></div><div class="relation-list"></div><button type="button" class="relation-add">＋ 메모 연결</button><label class="relation-move">캔버스 이동<select aria-label="메모 캔버스 이동">'+RECORD_TABS.map(tab=>'<option value="'+escapeHtml(tab)+'"'+(noteCanvas(note)===tab?' selected':'')+'>'+escapeHtml(tab)+'</option>').join('')+'</select></label>';
 const list=panel.querySelector('.relation-list');
 [...outgoing.map(other=>({other,label:'↗'})),...incoming.map(other=>({other,label:'↩'}))].forEach(({other,label})=>{const button=document.createElement('button');button.type='button';button.textContent=label+' '+other.title+' · '+noteCanvas(other);button.onclick=()=>jumpToNote(other.id);list.append(button);});
 if(!list.children.length)list.textContent='연결된 메모 없음';
 panel.querySelector('.relation-close').onclick=()=>panel.remove();
 panel.querySelector('.relation-add').onclick=()=>{list.innerHTML='';state.notes.filter(other=>other.id!==note.id&&!(note.links||[]).includes(other.id)).forEach(other=>{const button=document.createElement('button');button.type='button';button.textContent=other.title+' · '+noteCanvas(other);button.onclick=()=>{note.links||=[];note.links.push(other.id);saveState();renderCanvas();};list.append(button);});};
 panel.querySelector('select').onchange=event=>{note.canvasTab=event.target.value;saveState();renderCanvas();};
 node.append(panel);
}

function renderCanvasFilters(items = canvasItems()) {
  const search = $("#canvas-filter-search");
  const suggestions = $("#canvas-search-suggestions");
  if (!search || !suggestions) return;
  const values = [...new Set([
    ...state.blocks.map((block) => block.grade),
    ...state.blocks.map((block) => block.subject),
    "캐릭터", "질문", "진로", "활동", "탐구", "성장", "협업", "자유 메모"
  ])];
  suggestions.innerHTML = values.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");
  search.value = canvasFilters.query;
  search.oninput = () => {
    canvasFilters.query = search.value.trim().toLowerCase();
    applyCanvasFilters();
  };
  search.onkeydown = (event) => {
    if (event.key !== "Enter") return;
    const query = search.value.trim().toLowerCase();
    const match = state.blocks.find((block) => `${block.grade} ${block.subject} ${block.semester || ""} ${block.section} ${block.summary || ""} ${block.text}`.toLowerCase().includes(query));
    if (match) {
      state.activeBlockId = match.id;
      saveState();
      renderCanvas();
      requestAnimationFrame(() => $("#canvas-filter-search")?.focus());
    }
  };
}

function canvasItemMatches(item) {
  const haystack = `${item.title} ${item.body || ""} ${(item.tags || []).join(" ")} ${item.category} ${item.context.grades.join(" ")} ${item.context.subjects.join(" ")}`.toLowerCase();
  return !canvasFilters.query || haystack.includes(canvasFilters.query);
}

function applyCanvasFilters() {
  const filtering = Boolean(canvasFilters.query);
  canvasItems().forEach((item) => {
    const node = $(`.canvas-node[data-note-id="${CSS.escape(item.id)}"]`);
    if (!node) return;
    const match = canvasItemMatches(item);
    node.classList.toggle("is-dimmed", filtering && !match);
    node.classList.toggle("is-emphasized", filtering && match);
  });
}

function renderCanvasResults(items = canvasItems()) {
  const results = [];
  state.blocks.filter((block) => {
    const q = `${block.subject} ${block.text}`.toLowerCase();
    return (!canvasFilters.query || q.includes(canvasFilters.query)) && (canvasFilters.grade === "전체" || block.grade === canvasFilters.grade) && (canvasFilters.subject === "전체" || block.subject === canvasFilters.subject);
  }).forEach((block) => results.push({ kind: "원문", title: `${block.grade} · ${block.subject}`, detail: `${block.section} · ${block.page}쪽`, action: () => { state.activeBlockId = block.id; saveState(); renderCanvas(); } }));
  items.filter(canvasItemMatches).forEach((item) => results.push({ kind: item.category, title: item.title, detail: item.context.subjects.join(" · ") || "자유 메모", action: () => {
    const node = $(`.canvas-node[data-note-id="${CSS.escape(item.id)}"]`);
    node?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    node?.animate([{ transform: "scale(1)" }, { transform: "scale(1.035)" }, { transform: "scale(1)" }], { duration: 550 });
  } }));
  $("#canvas-result-count").textContent = `${results.length}개`;
  const box = $("#canvas-filter-results");
  box.innerHTML = "";
  results.slice(0, 18).forEach((result) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "canvas-filter-result";
    button.innerHTML = `<small>${escapeHtml(result.kind)}</small><strong>${escapeHtml(result.title)}</strong><span>${escapeHtml(result.detail)}</span>`;
    button.onclick = result.action;
    box.appendChild(button);
  });
  if (!results.length) box.innerHTML = `<p class="dialog-copy">조건에 맞는 기록이 없어요.</p>`;
}

function enableNodeDrag(node, note) {
  let lastPress=0,lastEditor=null;
  node.addEventListener("pointerdown", (event) => {
    const editor=event.target.closest('.node-title-edit,.node-body-edit'),now=performance.now();
    // 한 번 누르면 드래그하고, 같은 글자를 빠르게 두 번 누르면 편집한다.
    if(editor&&editor===lastEditor&&now-lastPress<420){lastPress=0;lastEditor=null;editor.contentEditable='true';editor.focus();return;}
    lastPress=now;lastEditor=editor;
    if(event.button!==0 || event.target.closest("button,input,[contenteditable=\"true\"]"))return;
    event.preventDefault(); event.stopPropagation(); node.setPointerCapture(event.pointerId); node.classList.add("dragging"); movingNodeId=note.id;
    const start={x:event.clientX,y:event.clientY,left:parseFloat(node.style.left),top:parseFloat(node.style.top),time:performance.now()};let target={x:start.left,y:start.top},velocity={x:0,y:0},last={x:start.left,y:start.top,time:start.time},frame=0;
    const paint=()=>{const x=parseFloat(node.style.left),y=parseFloat(node.style.top);node.style.left=(x+(target.x-x)*.48)+"px";node.style.top=(y+(target.y-y)*.48)+"px";storeNodePosition(node);renderEdges();if(!layoutFrame)settleNodes();if(Math.abs(target.x-parseFloat(node.style.left))+Math.abs(target.y-parseFloat(node.style.top))>.2)frame=requestAnimationFrame(paint);else frame=0;};
    const move=e=>{const now=performance.now();if(Math.hypot(e.clientX-start.x,e.clientY-start.y)>5){lastPress=0;lastEditor=null;}target={x:start.left+(e.clientX-start.x)/canvasZoom,y:start.top+(e.clientY-start.y)/canvasZoom};const dt=Math.max(8,now-last.time);velocity={x:(target.x-last.x)/dt*16,y:(target.y-last.y)/dt*16};last={x:target.x,y:target.y,time:now};if(!frame)frame=requestAnimationFrame(paint);};
    const glide=()=>{velocity.x*=.9;velocity.y*=.9;target.x+=velocity.x;target.y+=velocity.y;node.style.left=target.x+"px";node.style.top=target.y+"px";storeNodePosition(node);renderEdges();if(!layoutFrame)settleNodes();if(Math.abs(velocity.x)+Math.abs(velocity.y)>.15)requestAnimationFrame(glide);else{settleNodes();saveState();}};
    const up=()=>{node.classList.remove("dragging");movingNodeId=null;node.removeEventListener("pointermove",move);node.removeEventListener("pointerup",up);node.removeEventListener("pointercancel",up);if(frame)cancelAnimationFrame(frame);requestAnimationFrame(glide);};
    settleNodes();node.addEventListener("pointermove",move);node.addEventListener("pointerup",up);node.addEventListener("pointercancel",up);
  });
}
function focusCanvasNote(node){
 const stage=$('#canvas-stage');const zoom=Math.min(1.5,Math.max(canvasZoom,1.15));const target={x:stage.clientWidth/2-(parseFloat(node.style.left)+node.offsetWidth/2)*zoom,y:stage.clientHeight/2-(parseFloat(node.style.top)+node.offsetHeight/2)*zoom};const from={...canvasPan,zoom:canvasZoom};const began=performance.now();
 const step=(now)=>{const t=Math.min(1,(now-began)/260),ease=1-Math.pow(1-t,3);canvasZoom=from.zoom+(zoom-from.zoom)*ease;canvasPan.x=from.x+(target.x-from.x)*ease;canvasPan.y=from.y+(target.y-from.y)*ease;$('#node-layer').style.transform='translate('+canvasPan.x+'px,'+canvasPan.y+'px) scale('+canvasZoom+')';$('#zoom-label').textContent=Math.round(canvasZoom*100)+'%';renderEdges();if(t<1)requestAnimationFrame(step);else saveCanvasView();};requestAnimationFrame(step);
}

function enableConnectorDrag(handle, sourceId) {
  handle.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    event.preventDefault();
    const stageRect = $("#canvas-stage").getBoundingClientRect();
    const sourceNode = handle.closest(".canvas-node");
    const sourceRect = sourceNode.getBoundingClientRect();
    const start = { x: sourceRect.right - stageRect.left, y: sourceRect.top + sourceRect.height / 2 - stageRect.top };
    const temp = document.createElementNS("http://www.w3.org/2000/svg", "path");
    temp.setAttribute("stroke-dasharray", "5 5");
    $("#edge-layer").appendChild(temp);
    const move = (moveEvent) => {
      const end = { x: moveEvent.clientX - stageRect.left, y: moveEvent.clientY - stageRect.top };
      temp.setAttribute("d", curvedPath(start, end));
    };
    const up = (upEvent) => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
      const target = document.elementFromPoint(upEvent.clientX, upEvent.clientY)?.closest(".canvas-node");
      const targetId = target?.dataset.noteId;
      if (targetId && targetId !== sourceId) {
        const sourceNote = state.notes.find((note) => note.id === sourceId);
        if (!sourceNote.links.includes(targetId)) sourceNote.links.push(targetId);
        saveState();
        toast("두 메모를 연결했어요.");
      }
      renderEdges();
      renderCrossLinks();
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  });
}

function closestPoints(a,b) {
  const axis=(a0,a1,b0,b1)=> a1<b0?[a1,b0]:b1<a0?[a0,b1]:[(Math.max(a0,b0)+Math.min(a1,b1))/2,(Math.max(a0,b0)+Math.min(a1,b1))/2];
  const x=axis(a.left,a.right,b.left,b.right),y=axis(a.top,a.bottom,b.top,b.bottom);
  return [{x:x[0],y:y[0]},{x:x[1],y:y[1]}];
}
function curvedPath(a,b){return 'M '+a.x+' '+a.y+' L '+b.x+' '+b.y;}
function renderEdges(){
 const svg=$("#edge-layer");if(!svg)return;svg.innerHTML="";
 const origin=$("#canvas-stage").getBoundingClientRect(),drawn=new Set();
 const draw=(id,targetId)=>{
  const key=[id,targetId].sort().join('::');if(drawn.has(key))return;drawn.add(key);
  const a=$('.canvas-node[data-note-id="'+CSS.escape(id)+'"]'),b=$('.canvas-node[data-note-id="'+CSS.escape(targetId)+'"]');if(!a||!b)return;
  const ar=a.getBoundingClientRect(),br=b.getBoundingClientRect();const points=[{x:ar.left+ar.width/2-origin.left,y:ar.top+ar.height/2-origin.top},{x:br.left+br.width/2-origin.left,y:br.top+br.height/2-origin.top}];
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',curvedPath(...points));svg.append(path);
 };
 canvasItems().forEach(n=>(n.links||[]).forEach(id=>draw(n.id,id)));

}

// 글·과목·학기·직접 링크만 사용하므로 외부 API 호출과 토큰 사용이 없다.
const GRAPH_STOPWORDS = new Set([
  '그리고','그러나','또한','하지만','따라서','때문','통해','이를','이러한','해당','대한','대해','관한','관련','내용','과정','결과','방법','활동','학생','자신','자신의','스스로','다양한','여러','특히','매우','적극적으로','성실히','열심히','흥미','관심','주제','자료','정보','바탕','기반','새','메모','것','것을','것은','것으로','있는','있다','하며','했다','그리고','및'
]);
const GRAPH_ACTIVITY_WORDS = /^(설명|발표|탐구|조사|분석|작성|수행|참여|확인|학습|진행|정리|활용|시도)(?:함|하였음|하였다|하고|하는|하여|했음|했다)?$/u;
function graphWords(text) {
  const words = String(text || '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
  const result = [];
  for (let word of words) {
    if (GRAPH_STOPWORDS.has(word) || GRAPH_ACTIVITY_WORDS.test(word)) continue;
    if (/^[가-힣]{3,}$/u.test(word)) word = word.replace(/(?:에게서|으로|에서|에게|까지|부터|처럼|보다|께서|이나|라도|은|는|이|가|을|를|의|에|과|와|도|만|로)$/u, '');
    if (word.length < 2 || GRAPH_STOPWORDS.has(word) || GRAPH_ACTIVITY_WORDS.test(word)) continue;
    result.push(word);
    // 조사 변화로 붙은 긴 단어도 비교하되, 조각의 영향은 낮게 준다.
    if (/^[가-힣]{4,}$/u.test(word)) for (let i = 0; i < word.length - 1; i++) result.push('~' + word.slice(i, i + 2));
  }
  return result;
}
function graphTerms(note) {
  const profile = { all:new Map(), priority:new Map(), source:new Map() };
  const add = (value, weight, lane) => {
    for (const word of graphWords(value)) {
      const amount = word.startsWith('~') ? weight * .22 : weight;
      profile.all.set(word, Math.min(24, (profile.all.get(word) || 0) + amount));
      if (lane) profile[lane].set(word, Math.min(24, (profile[lane].get(word) || 0) + amount));
    }
  };
  add(note.title, 5, 'priority');
  (note.tags || []).forEach(tag => add(tag, 5, 'priority'));
  add(note.body, 1.25);
  if (note.bodyHtml) {
    const holder = document.createElement('div'); holder.innerHTML = safeNoteHtml(note.bodyHtml);
    holder.querySelectorAll('b,strong,u,mark,span[style*="color"]').forEach(element => add(element.textContent, 4, 'priority'));
  }
  (note.anchors || []).forEach(anchor => {
    add(anchor.quote, 3.5, 'source');
    const block = state.blocks.find(item => item.id === anchor.blockId);
    if (block?.text) add(block.text, 1.35, 'source');
  });
  return profile;
}
function graphShared(a, b) {
  let shared = 0;
  for (const [term, weight] of a) shared += Math.min(weight, b.get(term) || 0);
  return shared;
}
function graphSimilarity(a, b, profiles) {
  const one = profiles.get(a.id), two = profiles.get(b.id);
  const shared = graphShared(one.all, two.all);
  let total = 0, sharedCount = 0;
  for (const term of new Set([...one.all.keys(), ...two.all.keys()])) {
    total += Math.max(one.all.get(term) || 0, two.all.get(term) || 0);
    if (one.all.has(term) && two.all.has(term) && !term.startsWith('~')) sharedCount++;
  }
  const ac = noteContext(a), bc = noteContext(b);
  const sameSubject = ac.subjects.some(subject => bc.subjects.includes(subject));
  const sameGrade = ac.grades.some(grade => bc.grades.includes(grade));
  const sameSource = (a.anchors || []).some(anchor => (b.anchors || []).some(other => anchor.blockId === other.blockId));
  const linked = (a.links || []).includes(b.id) || (b.links || []).includes(a.id);
  // 원문·제목·본문·태그·강조한 단어를 중심에 두고 학기·학년은 소폭만 반영한다.
  const score = .62 * shared / (total || 1)
    + .14 * Math.min(1, sharedCount / 7)
    + .11 * Math.min(1, graphShared(one.priority, two.priority) / 8)
    + .067 * Math.min(1, graphShared(one.source, two.source) / 12)
    + (sameSource ? .03 : 0) + (sameSubject ? .03 : 0)
    + (noteCanvas(a) === noteCanvas(b) ? .012 : 0)
    + (sameGrade ? .006 : 0) + (a.category === b.category ? .005 : 0);
  return linked ? Math.max(.78, score) : Math.min(1, score);
}
function allGraphPositions(notes) {
  const width = 1700, height = 1100, positions = new Map(), terms = new Map(notes.map(note => [note.id, graphTerms(note)]));
  // 시작 위치를 학기별로 묶지 않아 내용 점수가 실제 배치에 반영되게 한다.
  notes.forEach((note, index) => {
    const angle = index * 2.39996323, radius = 70 + Math.sqrt(index) * 105;
    positions.set(note.id, {x:width / 2 + Math.cos(angle) * radius, y:height / 2 + Math.sin(angle) * radius});
  });
  const pairs = [];
  for (let i = 0; i < notes.length; i++) for (let j = i + 1; j < notes.length; j++) {
    const score = graphSimilarity(notes[i], notes[j], terms);
    if (score >= .16) pairs.push({a:notes[i].id,b:notes[j].id,score});
  }
  for (let step = 0; step < 180; step++) {
    const forces = new Map(notes.map(note => [note.id,{x:0,y:0}]));
    for (let i = 0; i < notes.length; i++) for (let j = i + 1; j < notes.length; j++) {
      const a = positions.get(notes[i].id), b = positions.get(notes[j].id), dx = a.x - b.x, dy = a.y - b.y;
      const d2 = Math.max(400, dx * dx + dy * dy), d = Math.sqrt(d2), push = 13500 / d2;
      forces.get(notes[i].id).x += dx / d * push; forces.get(notes[i].id).y += dy / d * push;
      forces.get(notes[j].id).x -= dx / d * push; forces.get(notes[j].id).y -= dy / d * push;
    }
    for (const pair of pairs) {
      const a = positions.get(pair.a), b = positions.get(pair.b), dx = b.x - a.x, dy = b.y - a.y, d = Math.max(1,Math.hypot(dx,dy));
      const pull = (d - (290 - pair.score * 175)) * pair.score * .012;
      forces.get(pair.a).x += dx / d * pull; forces.get(pair.a).y += dy / d * pull;
      forces.get(pair.b).x -= dx / d * pull; forces.get(pair.b).y -= dy / d * pull;
    }
    notes.forEach(note => { const p = positions.get(note.id), f = forces.get(note.id); p.x = Math.max(85,Math.min(width - 85,p.x + Math.max(-9,Math.min(9,f.x)))); p.y = Math.max(85,Math.min(height - 85,p.y + Math.max(-9,Math.min(9,f.y)))); });
  }
  return positions;
}
function paintAllGraph() { $("#all-graph-world").style.transform = 'translate(' + allGraphPan.x + 'px,' + allGraphPan.y + 'px) scale(' + allGraphZoom + ')'; }
function fitAllGraph() {
  const stage = $("#all-graph-stage");
  allGraphZoom = Math.min(1, Math.max(.25, Math.min(stage.clientWidth / 1700, stage.clientHeight / 1100) * .92));
  allGraphPan = {x:(stage.clientWidth - 1700 * allGraphZoom) / 2,y:(stage.clientHeight - 1100 * allGraphZoom) / 2};
  paintAllGraph();
}
function showAllGraphNote(note) {
  selectedAllGraphNoteId = note.id;
  $$('#all-graph-nodes .all-graph-item').forEach(node => node.classList.toggle('selected',node.dataset.noteId === note.id));
  const anchors = (note.anchors || []).map(anchor => {const block = state.blocks.find(item => item.id === anchor.blockId);return '<li>' + escapeHtml([block?.grade,block?.subject,anchor.quote].filter(Boolean).join(' · ')) + '</li>';}).join('');
  const links = (note.links || []).map(id => state.notes.find(item => item.id === id)).filter(Boolean);
  const panel = $("#all-graph-detail");
  panel.innerHTML = '<span class="graph-detail-meta">' + escapeHtml(noteCanvas(note)) + ' · ' + escapeHtml(noteContext(note).subjects.join(', ') || note.category) + '</span><h2>' + escapeHtml(note.title) + '</h2><div class="graph-detail-body">' + safeNoteHtml(note.bodyHtml || escapeHtml(note.body || '')) + '</div>' + (anchors ? '<h3>근거</h3><ul>' + anchors + '</ul>' : '') + (links.length ? '<h3>연결</h3><div class="graph-detail-links"></div>' : '') + '<button type="button" class="primary-button graph-open-note">캔버스에서 열기</button>';
  const linkBox = panel.querySelector('.graph-detail-links');
  links.forEach(other => {const button = document.createElement('button');button.type='button';button.textContent=other.title;button.onclick=()=>showAllGraphNote(other);linkBox?.append(button);});
  panel.querySelector('.graph-open-note').onclick=()=>{routeTo('canvas');jumpToNote(note.id);};
}
function renderAllGraph() {
  const notes = state.notes, nodes = $("#all-graph-nodes"), edges = $("#all-graph-edges");
  nodes.innerHTML='';edges.innerHTML='';$("#all-graph-empty").hidden=notes.length>0;
  $("#all-graph-count").textContent=notes.length+'개 메모';
  const positions=allGraphPositions(notes), known=new Set(notes.map(note=>note.id)), drawn=new Set();
  notes.forEach(note=>{
    const p=positions.get(note.id), anchor=(note.anchors||[])[0], block=state.blocks.find(item=>item.id===anchor?.blockId), subject=block?.subject||'자유';
    const item=document.createElement('button');item.type='button';item.className='all-graph-item';item.dataset.noteId=note.id;
    item.style.left=(p.x-42)+'px';item.style.top=(p.y-42)+'px';item.style.setProperty('--graph-color',/^#[0-9a-fA-F]{6}$/.test(note.color||'')?note.color:'#5865f2');
    item.innerHTML='<span class="all-graph-circle"><span>'+escapeHtml(noteCanvas(note))+'</span><span>'+escapeHtml(subject)+'</span></span><span class="all-graph-title">'+escapeHtml(note.title)+'</span>';
    item.onclick=()=>showAllGraphNote(note);nodes.append(item);
    (note.links||[]).forEach(id=>{if(!known.has(id))return;const key=[note.id,id].sort().join('::');if(drawn.has(key))return;drawn.add(key);const q=positions.get(id),line=document.createElementNS('http://www.w3.org/2000/svg','line');line.setAttribute('x1',p.x);line.setAttribute('y1',p.y);line.setAttribute('x2',q.x);line.setAttribute('y2',q.y);edges.append(line);});
  });
  // 유사 관계는 그래프에만 그리며 메모의 실제 연결 목록을 바꾸지 않는다.
  const terms=new Map(notes.map(note=>[note.id,graphTerms(note)])),suggestions=[];
  for(let i=0;i<notes.length;i++)for(let j=i+1;j<notes.length;j++){
    const a=notes[i],b=notes[j],key=[a.id,b.id].sort().join('::');if(drawn.has(key))continue;
    const score=graphSimilarity(a,b,terms);if(score>=.28)suggestions.push({a:a.id,b:b.id,score});
  }
  const neighbors=new Map();suggestions.sort((a,b)=>b.score-a.score).forEach(({a,b})=>{
    if((neighbors.get(a)||0)>=3||(neighbors.get(b)||0)>=3)return;
    neighbors.set(a,(neighbors.get(a)||0)+1);neighbors.set(b,(neighbors.get(b)||0)+1);
    const p=positions.get(a),q=positions.get(b),line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.classList.add('similarity-link');line.setAttribute('x1',p.x);line.setAttribute('y1',p.y);line.setAttribute('x2',q.x);line.setAttribute('y2',q.y);edges.prepend(line);
  });
  if(notes.length)showAllGraphNote(notes.find(note=>note.id===selectedAllGraphNoteId)||notes[0]);
  else $("#all-graph-detail").innerHTML='<p>메모를 선택하세요.</p>';
  requestAnimationFrame(fitAllGraph);
}
function installAllGraphPan() {
  const stage = $("#all-graph-stage");
  stage.addEventListener('pointerdown',event=>{
    if(event.button!==0||event.target.closest('.all-graph-item'))return;
    stage.setPointerCapture(event.pointerId);stage.classList.add('panning');
    const start={x:event.clientX,y:event.clientY,panX:allGraphPan.x,panY:allGraphPan.y};
    const move=e=>{allGraphPan={x:start.panX+e.clientX-start.x,y:start.panY+e.clientY-start.y};paintAllGraph();};
    const up=()=>{stage.classList.remove('panning');stage.removeEventListener('pointermove',move);stage.removeEventListener('pointerup',up);stage.removeEventListener('pointercancel',up);};
    stage.addEventListener('pointermove',move);stage.addEventListener('pointerup',up);stage.addEventListener('pointercancel',up);
  });
  stage.addEventListener('wheel',event=>{event.preventDefault();const rect=stage.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top,next=Math.min(2,Math.max(.2,allGraphZoom*(event.deltaY<0?1.1:.9)));allGraphPan={x:x-(x-allGraphPan.x)*next/allGraphZoom,y:y-(y-allGraphPan.y)*next/allGraphZoom};allGraphZoom=next;paintAllGraph();},{passive:false});
}

function renderPersonas() {
  const grid = $("#persona-grid");
  const candidates = derivePersonas();
  grid.innerHTML = "";
  candidates.forEach((persona, index) => {
    const card = document.createElement("article");
    card.className = "persona-card";
    card.innerHTML = `<span class="persona-card-number">0${index + 1}</span><h2>${escapeHtml(persona.title)}</h2><p>${escapeHtml(persona.description)}</p><div class="persona-evidence"></div>`;
    const evidence = $(".persona-evidence", card);
    persona.noteIds.forEach((noteId) => {
      const note = state.notes.find((item) => item.id === noteId);
      if (!note) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "evidence-chip";
      button.textContent = `${note.title} · 근거 ${note.anchors.length}`;
      button.addEventListener("click", () => openNoteDialog(note));
      evidence.appendChild(button);
    });
    grid.appendChild(card);
  });
}

function derivePersonas(){
 return state.notes.filter(n=>n.category==='캐릭터'&&n.anchors.some(a=>state.blocks.some(b=>b.id===a.blockId))).map(n=>({title:n.title,description:n.body,noteIds:[n.id]}));
}

function renderInterview() {
  const types = ["전체", ...new Set(state.questions.map((question) => question.type))];
  const filter = $("#question-filter");
  filter.innerHTML = "";
  types.forEach((type) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${state.questionFilter === type ? " is-active" : ""}`;
    button.textContent = type;
    button.addEventListener("click", () => { state.questionFilter = type; renderInterview(); });
    filter.appendChild(button);
  });
  const questions = state.questionFilter === "전체" ? state.questions : state.questions.filter((q) => q.type === state.questionFilter);
  if (!questions.some((q) => q.id === state.activeQuestionId)) state.activeQuestionId = questions[0]?.id;
  const list = $("#question-list");
  list.innerHTML = "";
  questions.forEach((question) => {
    const evidenceCount = question.noteIds.reduce((sum, id) => sum + (state.notes.find((note) => note.id === id)?.anchors.length || 0), 0);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `question-item${question.id === state.activeQuestionId ? " is-active" : ""}`;
    button.innerHTML = `<small>${escapeHtml(question.type)}</small><h3>${escapeHtml(question.question)}</h3><span>연결된 근거 ${evidenceCount}개</span>`;
    button.addEventListener("click", () => { state.activeQuestionId = question.id; saveState(); renderInterview(); });
    list.appendChild(button);
  });
  renderAnswerPanel();
}

function renderAnswerPanel() {
  const question = state.questions.find((item) => item.id === state.activeQuestionId);
  const panel = $("#answer-panel");
  if (!question) { panel.innerHTML = `<p class="dialog-copy">질문을 선택해 주세요.</p>`; return; }
  const notes = question.noteIds.map((id) => state.notes.find((note) => note.id === id)).filter(Boolean);
  panel.innerHTML = `<span class="eyebrow">${escapeHtml(question.type)} 질문</span><h2>${escapeHtml(question.question)}</h2><div class="answer-guide"><div class="answer-step"><b>1</b><span>활동의 구체적인 장면으로 시작하기</span></div><div class="answer-step"><b>2</b><span>내가 직접 한 행동과 판단을 분리해 말하기</span></div><div class="answer-step"><b>3</b><span>배운 점을 이후 활동이나 전공 관심과 연결하기</span></div></div><label class="field"><span>내 답변 초안</span><textarea id="answer-draft" class="answer-draft" placeholder="완성된 문장보다 핵심 단어부터 적어도 좋아요.">${escapeHtml(question.draft || "")}</textarea></label><div class="answer-evidence"><h3>답변에 쓸 수 있는 근거</h3><div class="persona-evidence" id="answer-evidence-list"></div></div>`;
  $("#answer-draft", panel).addEventListener("input", (event) => { question.draft = event.target.value; saveState(); });
  const list = $("#answer-evidence-list", panel);
  notes.forEach((note) => note.anchors.forEach((anchor) => {
    const block = state.blocks.find((item) => item.id === anchor.blockId);
    if (!block) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "evidence-chip";
    button.textContent = `${block.subject} ${block.page}쪽 · ${anchor.quote.slice(0, 24)}…`;
    button.addEventListener("click", () => selectBlock(block.id, anchor.quote));
    list.appendChild(button);
  }));
  (question.sourceIds || []).forEach((sourceId) => {
    const block = state.blocks.find((item) => item.id === sourceId);
    if (!block || notes.some((note) => note.anchors.some((anchor) => anchor.blockId === sourceId))) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "evidence-chip";
    button.textContent = `${block.subject} ${block.page}쪽 · ${String(block.summary || block.text).slice(0, 24)}…`;
    button.addEventListener("click", () => selectBlock(block.id));
    list.appendChild(button);
  });
}

function generateQuestions() {
  const patterns = [
    ["동기", "이 활동을 시작하게 된 구체적인 계기는 무엇이었나요?"],
    ["과정", "활동에서 본인이 직접 선택하고 판단한 부분은 무엇인가요?"],
    ["성찰", "한계나 예상 밖의 결과를 통해 무엇을 배웠나요?"],
    ["전공", "이 경험이 희망 전공을 바라보는 관점에 어떤 영향을 주었나요?"],
    ["확장", "다시 한다면 무엇을 바꾸거나 더 확인하고 싶나요?"]
  ];
  const candidates = state.notes.filter((note) => note.anchors.length);
  if (!candidates.length) return toast("먼저 원문 근거가 연결된 메모를 만들어 주세요.");
  state.questions = patterns.map(([type, suffix], index) => {
    const note = candidates[index % candidates.length];
    return { id: uid("q"), type, question: `${note.title}과 관련해, ${suffix}`, noteIds: [note.id], draft: "" };
  });
  state.activeQuestionId = state.questions[0].id;
  state.questionFilter = "전체";
  saveState();
  renderInterview();
  toast("메모와 원문 근거로 질문 5개를 만들었어요.");
}

function aiEvidenceSources() {
  const useful = state.blocks.filter((block) => block.id.startsWith("prepared-") && /창의적 체험활동상황|세부능력 및 특기사항|행동특성 및 종합의견/.test(block.section));
  return useful.slice(0, 55).map((block) => ({ sourceId: block.id, grade: block.grade, section: block.section, subject: block.subject, semester: block.semester || "", excerpt: String(block.summary || block.text || "").slice(0, 420) }));
}
function aiNotePayload() { return state.notes.map((note) => ({ noteId: note.id, title: note.title, body: String(note.body || "").slice(0, 700), category: note.category, sourceIds: (note.anchors || []).map((anchor) => anchor.blockId).filter((id) => id.startsWith("prepared-")) })).filter((note) => note.title || note.body); }
function makeAiAnchors(sourceIds) { return sourceIds.map((id) => state.blocks.find((block) => block.id === id)).filter(Boolean).map((block) => ({ blockId: block.id, quote: String(block.summary || block.text || "").slice(0, 160), page: block.page, color: "#5865f2" })); }
async function requestAi(action) {
  const sources = aiEvidenceSources(); if (!sources.length) throw new Error("정리된 생기부 원문을 먼저 불러와 주세요.");
  const response = await fetch("/api/assist", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ action, notes: aiNotePayload(), sources }) });
  const data = await response.json().catch(() => ({})); if (!response.ok) throw new Error(data.error || "AI 분석 요청에 실패했습니다."); return data;
}
async function runAi(action, button) {
  button.disabled = true; const original = button.textContent; button.textContent = "분석 중";
  try {
    const result = await requestAi(action), validSources = new Set(aiEvidenceSources().map((source) => source.sourceId));
    if (action === "links") { let count = 0; (result.links || []).forEach((link) => { const from = state.notes.find((note) => note.id === link.fromNoteId), to = state.notes.find((note) => note.id === link.toNoteId); if (from && to && from !== to && (link.sourceIds || []).some((id) => validSources.has(id)) && !from.links.includes(to.id)) { from.links.push(to.id); count += 1; } }); saveState(); renderCanvas(); toast(count ? "근거가 있는 메모 연결 " + count + "개를 만들었어요." : "새로 연결할 만큼 뚜렷한 메모 관계가 없어요."); }
    if (action === "analysis") { state.notes = state.notes.filter((note) => !note.aiGeneratedPersona); const themes = (result.themes || []).filter((theme) => theme.title && (theme.sourceIds || []).some((id) => validSources.has(id))).slice(0, 3); themes.forEach((theme, index) => state.notes.push({ id: uid("note"), title: theme.title, body: theme.description || "", category: "캐릭터", color: "#5865f2", tags: [], anchors: makeAiAnchors(theme.sourceIds.filter((id) => validSources.has(id))), links: [], x: 650 + index * 44, y: 130 + index * 58, collapsed: false, aiGeneratedPersona: true })); saveState(); renderAll(); renderCanvas(); toast(themes.length ? "근거가 연결된 캐릭터 " + themes.length + "개를 정리했어요." : "근거가 충분한 캐릭터를 찾지 못했어요."); }
    if (action === "questions") { const questions = (result.questions || []).filter((item) => item.question && (item.sourceIds || []).some((id) => validSources.has(id))).slice(0, 6); state.questions = questions.map((item) => ({ id: uid("q"), type: item.type || "탐구", question: item.question, noteIds: (item.noteIds || []).filter((id) => state.notes.some((note) => note.id === id)), sourceIds: item.sourceIds.filter((id) => validSources.has(id)), draft: "" })); state.activeQuestionId = state.questions[0]?.id || null; state.questionFilter = "전체"; saveState(); renderInterview(); toast(questions.length ? "근거가 연결된 예상 질문 " + questions.length + "개를 만들었어요." : "근거가 충분한 질문을 만들지 못했어요."); }
  } catch (error) { toast(error.message || "AI 분석을 다시 시도해 주세요."); } finally { button.disabled = false; button.textContent = original; }
}

function openSearch() {
  const dialog = $("#search-dialog");
  dialog.showModal();
  $("#global-search").value = "";
  renderSearchResults("");
  setTimeout(() => $("#global-search").focus(), 50);
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  const results = [];
  state.blocks.forEach((block) => { if (!q || `${block.subject} ${block.text}`.toLowerCase().includes(q)) results.push({ type: "원문", title: `${block.grade} · ${block.subject}`, text: block.text, action: () => selectBlock(block.id) }); });
  state.notes.forEach((note) => { if (!q || `${note.title} ${note.body} ${note.tags.join(" ")}`.toLowerCase().includes(q)) results.push({ type: "메모", title: note.title, text: note.body, action: () => openNoteDialog(note) }); });
  state.questions.forEach((question) => { if (!q || question.question.toLowerCase().includes(q)) results.push({ type: "면접", title: question.question, text: `${question.type} 질문`, action: () => { state.activeQuestionId = question.id; routeTo("interview"); } }); });
  const container = $("#search-results");
  container.innerHTML = "";
  results.slice(0, 20).forEach((result) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-result";
    button.innerHTML = `<small>${result.type}</small><strong>${escapeHtml(result.title)}</strong><span>${escapeHtml(result.text || "")}</span>`;
    button.addEventListener("click", () => { $("#search-dialog").close(); result.action(); });
    container.appendChild(button);
  });
  if (!results.length) container.innerHTML = `<p class="dialog-copy" style="padding:14px">찾은 내용이 없어요.</p>`;
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `생기부면접-백업-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  toast("백업 파일을 내보냈어요.");
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported.blocks) || !Array.isArray(imported.notes)) throw new Error("invalid");
      state = imported;
      saveState();
      renderAll();
      $("#data-dialog").close();
      toast("백업 내용을 불러왔어요.");
    } catch { toast("올바른 백업 파일이 아니에요."); }
  };
  reader.readAsText(file);
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function renderAll() {
  renderRecord();
  renderPersonas();
  renderInterview();
}

function createInlineCanvasNote() {
  const note = {
    id: uid("note"),
    canvasTab:recordTab,
    title: "새 메모",
    body: "",
    category: "자유 메모",
    color: "#5865f2",
    tags: [],
    anchors: [],
    links: [],
    x: (70-canvasPan.x)/canvasZoom + (state.notes.length % 3) * 38,
    y: (80-canvasPan.y)/canvasZoom + (state.notes.length % 4) * 42,
    collapsed: false
  };
  state.notes.push(note);
  saveState();
  renderCanvas();
  requestAnimationFrame(() => {
    const title = $(`.canvas-node[data-note-id="${CSS.escape(note.id)}"] .node-title-edit`);
    if(title){title.contentEditable="true";title.focus();}
    const selection = window.getSelection();
    if (title && selection) {
      const range = document.createRange();
      range.selectNodeContents(title);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
}

function bindEvents() {
  $$(".nav-item").forEach((item) => item.addEventListener("click", () => routeTo(item.dataset.route)));
  $(".brand").addEventListener("click", (event) => { event.preventDefault(); routeTo("canvas"); });
  $("#upload-card").addEventListener("click", () => $("#pdf-input").click());
  $("#canvas-upload").addEventListener("click", () => $("#pdf-input").click());
  $("#canvas-new-note").addEventListener("click", createInlineCanvasNote);
  $("#canvas-graph").addEventListener("click",()=>routeTo("graph"));
  $("#all-graph-fit").addEventListener("click",fitAllGraph);
  $("#all-graph-back").addEventListener("click",()=>routeTo("canvas"));
  installAllGraphPan();
  $("#upload-open-button").addEventListener("click", () => $("#pdf-input").click());
  $("#pdf-input").addEventListener("change", (event) => processPdf(event.target.files[0]));
  $("#source-document").addEventListener("contextmenu", showSelectionMenu);
  $("#source-document").addEventListener("click", (event) => {
    const mark = event.target.closest("mark[data-highlight-id]");
    if (!mark) return;
    const highlight = state.highlights.find((item) => item.id === mark.dataset.highlightId);
    const note = state.notes.find((item) => item.id === highlight?.noteId);
    if (note) openNoteDialog(note);
    else toast("이 문장은 하이라이트만 되어 있어요.");
  });
  document.addEventListener("pointerdown", (event) => { if (!event.target.closest("#selection-menu")) $("#selection-menu").hidden = true; });
  $$("[data-selection-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.selectionAction;
    $("#selection-menu").hidden = true;
    if (!selectedAnchor) return;
    if (action === "new") {
      const anchor={...selectedAnchor};createInlineCanvasNote();const note=state.notes.at(-1);note.title=suggestTitle(anchor.quote);note.anchors.push(anchor);note.color=$("#selection-color").value;applyHighlight(anchor,note.id,note.color);saveState();renderCanvas();
    }
    if (action === "link") openLinkDialog(selectedAnchor);

  }));
  $("#new-note-button").addEventListener("click", () => openNoteDialog());
  $("#inline-new-note").addEventListener("click", () => openNoteDialog());
  $("#note-form").addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    if (saveNoteFromForm()) $("#note-dialog").close();
  });
  $("#delete-note").addEventListener("click", () => {
    const id = $("#note-id").value;
    if (!id) return;
    state.notes = state.notes.filter((note) => note.id !== id);
    state.notes.forEach((note) => { note.links = note.links.filter((link) => link !== id); });
    state.highlights.forEach((highlight) => { if (highlight.noteId === id) highlight.noteId = null; });
    saveState();
    $("#note-dialog").close();
    renderAll();
    toast("메모를 삭제했어요.");
  });
  $("#review-button").addEventListener("click", openReview);
  $("#save-review").addEventListener("click", () => {
    activeBlock().text = $("#review-text").value.trim();
    activeBlock().ocrNeedsReview=false;
    saveState();
    renderRecord();
    renderCanvas();
    $("#review-dialog").close();
    toast("수정한 원문을 반영했어요.");
  });
  $$("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => $(`#${button.dataset.closeDialog}`).close()));
  $("#search-button").addEventListener("click", openSearch);
  $("#global-search").addEventListener("input", (event) => renderSearchResults(event.target.value));
  $("#more-button").addEventListener("click", () => $("#data-dialog").showModal());
  $("#export-data").addEventListener("click", exportData);
  $("#import-data").addEventListener("change", (event) => importData(event.target.files[0]));
  $("#reset-demo").addEventListener("click", () => {
    state = cloneSample();
    saveState();
    renderAll();
    $("#data-dialog").close();
    toast("샘플 상태로 되돌렸어요.");
  });
  $("#refresh-persona").addEventListener("click", () => { renderPersonas(); toast("현재 근거로 캐릭터를 다시 정리했어요."); });
  
  $("#zoom-in").addEventListener("click", () => { canvasZoom = Math.min(1.5, canvasZoom + .1); saveCanvasView(); renderCanvas(); });
  $("#zoom-out").addEventListener("click", () => { canvasZoom = Math.max(.6, canvasZoom - .1); saveCanvasView(); renderCanvas(); });
  $("#canvas-reset").addEventListener("click", () => { fitCanvas(); saveCanvasView(); });
  $("#canvas-stage").addEventListener("wheel", (event) => {
    if (!event.ctrlKey && !event.metaKey) return;
    event.preventDefault();
    canvasZoom = Math.max(.5, Math.min(1.8, canvasZoom + (event.deltaY < 0 ? .1 : -.1)));
    renderCanvas();
  }, { passive: false });
  $("#canvas-stage").addEventListener("keydown", (event) => {
    if(event.target.closest("[contenteditable],input,textarea"))return;
    if (event.key === "+" || event.key === "=") { event.preventDefault(); canvasZoom = Math.min(1.8, canvasZoom + .1); renderCanvas(); }
    if (event.key === "-") { event.preventDefault(); canvasZoom = Math.max(.5, canvasZoom - .1); renderCanvas(); }
    if (event.key === "0") { event.preventDefault(); canvasZoom = 1; renderCanvas(); }
  });
  $("#close-note-panel").addEventListener("click", () => $("#note-panel").classList.remove("open"));
  $("#show-all-button").addEventListener("click", openSearch);
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openSearch(); }
    if (event.key === "Escape") $("#selection-menu").hidden = true;
  });
  window.addEventListener("resize", () => { if ($("#canvas-view").classList.contains("is-active")) { renderEdges(); renderCrossLinks(); } });
}




function safeNoteHtml(value){
 const tpl=document.createElement('template');tpl.innerHTML=String(value || '');
 const validColor=value=>/^#[0-9a-f]{6}$/i.test(value || '') ? value : null;
 const walk=parent=>[...parent.childNodes].forEach(el=>{
  if(el.nodeType!==1)return;
  if(['SCRIPT','STYLE','IFRAME','OBJECT','SVG'].includes(el.tagName)){el.remove();return;}
  walk(el);
  if(el.tagName==='FONT'){
   const span=document.createElement('span'),color=validColor(el.getAttribute('color'));
   if(color)span.setAttribute('style','color:'+color);
   span.append(...el.childNodes);el.replaceWith(span);return;
  }
  if(!['B','STRONG','U','MARK','BR','DIV','P','I','EM','SPAN'].includes(el.tagName)){el.replaceWith(...el.childNodes);return;}
  const style=el.getAttribute('style') || '';
  [...el.attributes].forEach(attribute=>el.removeAttribute(attribute.name));
  if(el.tagName==='SPAN'){
   const match=style.match(/(?:^|;)\s*color\s*:\s*(#[0-9a-f]{6})\s*(?:;|$)/i);
   if(match)el.setAttribute('style','color:'+match[1]);
   else el.replaceWith(...el.childNodes);
  }
  if(el.tagName==='MARK'){
   const match=style.match(/(?:^|;)\s*--highlight-color\s*:\s*(#[0-9a-f]{6})\s*(?:;|$)/i);
   if(match)el.setAttribute('style','--highlight-color:'+match[1]);
   el.classList.add('note-highlight');
  }
 });walk(tpl.content);return tpl.innerHTML;
}
let activeFormattingPicker=null;
function showFormattingPicker(menu,trigger,onOutside){
 if(activeFormattingPicker)activeFormattingPicker.close(true);
 menu.hidden=false;
 activeFormattingPicker={menu,trigger,close:(commit=true)=>{
  menu.hidden=true;
  if(activeFormattingPicker?.menu===menu)activeFormattingPicker=null;
  if(commit)onOutside?.();
 }};
}
document.addEventListener('pointerdown',event=>{
 const picker=activeFormattingPicker;
 if(picker&&!picker.menu.contains(event.target)&&!picker.trigger.contains(event.target))picker.close(true);
},true);
function installFormatting(node,editor,note){
 const toolbar=document.createElement('div');toolbar.className='note-formatting';toolbar.setAttribute('role','toolbar');let savedRange=null;
 const remember=()=>{const sel=window.getSelection();if(sel.rangeCount&&editor.contains(sel.getRangeAt(0).commonAncestorContainer))savedRange=sel.getRangeAt(0).cloneRange();};
 const persist=()=>{note.body=editor.textContent.trim();note.bodyHtml=safeNoteHtml(editor.innerHTML);saveState();settleNodes();};
 editor.addEventListener('keyup',remember);editor.addEventListener('mouseup',remember);editor.addEventListener('input',persist);
 const restore=()=>{editor.focus();const sel=window.getSelection();if(savedRange){sel.removeAllRanges();sel.addRange(savedRange);}return sel;};
 const colors=['#e34b55','#3b82f6','#48a986','#e5a94e','#b18ae8'];
 const picker=(klass,initial,apply,finish)=>{
  const menu=document.createElement('div');menu.className=klass;menu.hidden=true;
  colors.forEach(color=>{const choice=document.createElement('button');choice.type='button';choice.style.setProperty('--picker-color',color);choice.setAttribute('aria-label',color+' 선택');choice.onpointerdown=event=>event.preventDefault();choice.onclick=()=>{apply(color);finish();};menu.append(choice);});
  const spectrum=document.createElement('input');spectrum.type='color';spectrum.value=initial;spectrum.setAttribute('aria-label','스펙트럼에서 색 선택');spectrum.oninput=()=>apply(spectrum.value);menu.append(spectrum);return menu;
 };
 [['B','굵게','bold'],['U','밑줄','underline']].forEach(([icon,label,command])=>{const button=document.createElement('button');button.type='button';button.className='format-icon format-'+command;button.textContent=icon;button.title=label;button.onpointerdown=event=>{event.preventDefault();remember();};button.onclick=()=>{const sel=restore();if(sel.rangeCount)document.execCommand(command,false,null);persist();};toolbar.append(button);});
 const high=document.createElement('button');high.type='button';high.className='format-icon format-highlight';high.textContent='🖍';high.title='형광펜';high.style.setProperty('--tool-color',note.highlightColor||'#f6dc62');
 const highMenu=picker('highlight-color-menu',note.highlightColor||'#f6dc62',color=>{note.highlightColor=color;high.style.setProperty('--tool-color',color);saveState();},()=>activeFormattingPicker?.close(false));
 high.onpointerdown=event=>{event.preventDefault();remember();};
 high.onclick=()=>{const sel=restore();if(!sel.rangeCount)return;const range=sel.getRangeAt(0),parent=range.commonAncestorContainer.nodeType===1?range.commonAncestorContainer:range.commonAncestorContainer.parentElement,mark=parent?.closest('mark');if(mark&&editor.contains(mark))mark.replaceWith(...mark.childNodes);else if(!range.collapsed){const wrapper=document.createElement('mark');wrapper.className='note-highlight';wrapper.style.setProperty('--highlight-color',note.highlightColor||'#f6dc62');wrapper.append(range.extractContents());range.insertNode(wrapper);}persist();};
 const openHigh=event=>{event.preventDefault();event.stopPropagation();if(activeFormattingPicker?.menu===highMenu)activeFormattingPicker.close(false);else showFormattingPicker(highMenu,high);};
 high.oncontextmenu=openHigh;high.ondblclick=openHigh;toolbar.append(high,highMenu);
 const text=document.createElement('button');text.type='button';text.className='format-icon format-text-color';text.textContent='A';text.title='글자 색';text.style.setProperty('--tool-color',note.textColor||'#e34b55');
 const applyText=()=>{if(!savedRange||savedRange.collapsed||!editor.contains(savedRange.commonAncestorContainer))return;editor.contentEditable='true';const sel=restore();if(!sel.rangeCount)return;document.execCommand('foreColor',false,note.textColor||'#e34b55');persist();editor.contentEditable='false';};
 const textMenu=picker('text-color-menu',note.textColor||'#e34b55',color=>{note.textColor=color;text.style.setProperty('--tool-color',color);saveState();},()=>activeFormattingPicker?.close(true));
 text.onpointerdown=event=>{event.preventDefault();remember();};
 text.onclick=event=>{event.stopPropagation();if(activeFormattingPicker?.menu===textMenu)activeFormattingPicker.close(true);else showFormattingPicker(textMenu,text,applyText);};
 text.oncontextmenu=event=>{event.preventDefault();text.click();};
 toolbar.append(text,textMenu);toolbar.insertBefore(text,high);toolbar.insertBefore(textMenu,high);editor.before(toolbar);
 editor.addEventListener('paste',event=>{event.preventDefault();document.execCommand('insertText',false,event.clipboardData.getData('text/plain'));persist();});
}
function storeNodePosition(node){
 if(graphMode)return;const position={x:parseFloat(node.style.left)||0,y:parseFloat(node.style.top)||0};
 const note=state.notes.find(n=>n.id===node.dataset.noteId);
 if(note)Object.assign(note,position);else {state.canvasPositions||={};state.canvasPositions[node.dataset.noteId]=position;}
}
function settleNodes(){
 if(graphMode||layoutFrame)return;let frames=0;
 const tick=()=>{
  const nodes=$$('#node-layer .canvas-node');let changed=false;
  const gap=24;
  for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
   const a=nodes[i],b=nodes[j];let ax=parseFloat(a.style.left),ay=parseFloat(a.style.top),bx=parseFloat(b.style.left),by=parseFloat(b.style.top);
   const dx=(ax+a.offsetWidth/2)-(bx+b.offsetWidth/2),dy=(ay+a.offsetHeight/2)-(by+b.offsetHeight/2);
   const ox=(a.offsetWidth+b.offsetWidth)/2+gap-Math.abs(dx),oy=(a.offsetHeight+b.offsetHeight)/2+gap-Math.abs(dy);
   if(ox<=.3||oy<=.3)continue;changed=true;
   const lockA=a.dataset.noteId===movingNodeId||(!movingNodeId&&a.contains(document.activeElement)),lockB=b.dataset.noteId===movingNodeId||(!movingNodeId&&b.contains(document.activeElement));
   if(lockA&&lockB)continue;
   const force=(matchMedia('(prefers-reduced-motion:reduce)').matches?1:.25);const amount=(Math.min(ox,oy)+.5)*force;
   const shareA=lockA?0:lockB?1:.5,shareB=lockB?0:lockA?1:.5;
   if(ox<oy){const sign=dx>=0?1:-1;ax+=amount*sign*shareA;bx-=amount*sign*shareB;}else{const sign=dy>=0?1:-1;ay+=amount*sign*shareA;by-=amount*sign*shareB;}
   a.style.left=Math.max(16,ax)+'px';a.style.top=Math.max(16,ay)+'px';b.style.left=Math.max(16,bx)+'px';b.style.top=Math.max(16,by)+'px';
  }
  nodes.forEach(storeNodePosition);renderEdges();renderCrossLinks();frames++;
  if((changed||movingNodeId)&&frames<600)layoutFrame=requestAnimationFrame(tick);else{layoutFrame=null;saveState();}
 };layoutFrame=requestAnimationFrame(tick);
}
function installCanvasPan(){
 const stage=$('#canvas-stage');stage.addEventListener('pointerdown',e=>{
  if(e.button!==0||e.target.closest('.canvas-node,button,input'))return;e.preventDefault();stage.setPointerCapture(e.pointerId);stage.classList.add('panning');
  const start={x:e.clientX,y:e.clientY,px:canvasPan.x,py:canvasPan.y};let target={...canvasPan},velocity={x:0,y:0},last={...canvasPan,time:performance.now()},frame=0;
  const paint=()=>{canvasPan.x+=(target.x-canvasPan.x)*.42;canvasPan.y+=(target.y-canvasPan.y)*.42;$('#node-layer').style.transform='translate('+canvasPan.x+'px,'+canvasPan.y+'px) scale('+canvasZoom+')';renderEdges();if(Math.abs(target.x-canvasPan.x)+Math.abs(target.y-canvasPan.y)>.2)frame=requestAnimationFrame(paint);else frame=0;};
  const move=ev=>{const now=performance.now();target={x:start.px+ev.clientX-start.x,y:start.py+ev.clientY-start.y};const dt=Math.max(8,now-last.time);velocity={x:(target.x-last.x)/dt*16,y:(target.y-last.y)/dt*16};last={x:target.x,y:target.y,time:now};if(!frame)frame=requestAnimationFrame(paint);};
  const glide=()=>{velocity.x*=.91;velocity.y*=.91;canvasPan.x+=velocity.x;canvasPan.y+=velocity.y;$('#node-layer').style.transform='translate('+canvasPan.x+'px,'+canvasPan.y+'px) scale('+canvasZoom+')';renderEdges();if(Math.abs(velocity.x)+Math.abs(velocity.y)>.15)requestAnimationFrame(glide);else saveCanvasView();};
  const up=()=>{stage.classList.remove('panning');stage.removeEventListener('pointermove',move);stage.removeEventListener('pointerup',up);stage.removeEventListener('pointercancel',up);if(frame)cancelAnimationFrame(frame);requestAnimationFrame(glide);};stage.addEventListener('pointermove',move);stage.addEventListener('pointerup',up);stage.addEventListener('pointercancel',up);
 });
}

let recordTab = '1학년 1학기';
const RECORD_TABS=['1학년 1학기','1학년 2학기','2학년 1학기','2학년 2학기','3학년 1학기','창체','기록 묶음'];
function normalizeSemester(value=''){const match=String(value).match(/[12]학기|[12]·[12]학기/);return match?match[0]:'학기 미정';}
function installRecordTabs(){
 const toolbar=$('.canvas-source-toolbar'),tabs=document.createElement('div');tabs.className='record-tabs';
 RECORD_TABS.forEach((label)=>{const button=document.createElement('button');button.type='button';button.textContent=label;button.onclick=()=>switchCanvas(label);tabs.append(button);});
 toolbar.before(tabs);toolbar.hidden=true;
 const table=document.createElement('div');table.id='record-table';$('.canvas-source-scroll').prepend(table);table.addEventListener('contextmenu',showSelectionMenu);
}
function renderRecordTable(){
 const target=$('#record-table');if(!target)return;
 $$('.record-tabs button').forEach((button)=>button.setAttribute('aria-pressed',String(button.textContent===recordTab)));
 ['#canvas-source-document','#canvas-source-title','.canvas-source-meta','.canvas-source-toolbar'].forEach((selector)=>$(selector).hidden=true);
 $('#cross-link-layer').style.display='none';
 const prepared=(block)=>!state.preparedRecordVersion||block.id.startsWith('prepared-');
 const bundled=(block)=>/출결|수상|자격|학폭|학교폭력|봉사/.test(block.section);
 let blocks=[];
 if(recordTab==='기록 묶음')blocks=state.blocks.filter((block)=>prepared(block)&&bundled(block));
 else if(recordTab==='창체')blocks=state.blocks.filter((block)=>prepared(block)&&/창의|창체/.test(block.section));
 else {const [grade,semester]=recordTab.split(' ');blocks=state.blocks.filter((block)=>prepared(block)&&/세부능력|교과학습/.test(block.section)&&block.grade===grade&&normalizeSemester(block.semester)===semester);}
 if(!blocks.length){target.innerHTML='<p class="record-empty">등록된 내용이 없습니다.</p>';return;}
 if(recordTab==='기록 묶음'){
   target.innerHTML='<section class="record-card-section"><h3>기록 묶음</h3><table class="record-bundle-table"><thead><tr><th>영역</th><th>학년</th><th>내용</th></tr></thead><tbody>'+blocks.map((block)=>'<tr><td>'+escapeHtml(block.section)+'</td><td>'+escapeHtml(block.grade)+'</td><td>'+escapeHtml(block.text).replace(/\n/g,'<br>')+'</td></tr>').join('')+'</tbody></table></section>';return;
 }
 const key=(block)=>recordTab==='창체'?block.grade+' · '+block.subject:block.subject;
 const grouped=new Map();blocks.forEach((block)=>{const name=key(block);if(!grouped.has(name))grouped.set(name,[]);grouped.get(name).push(block);});
 target.innerHTML='<section class="record-card-section"><h3>'+escapeHtml(recordTab)+'</h3><div class="record-subject-grid">'+[...grouped].map(([name,items])=>'<article class="record-subject-card"><h4>'+escapeHtml(name)+'</h4>'+items.map((block)=>'<div class="record-card-entry"><p class="record-source-text" data-source-block="'+escapeHtml(block.id)+'">'+escapeHtml(block.text).replace(/\n/g,'<br>')+'</p></div>').join('')+'</article>').join('')+'</div></section>';
}
async function loadPreparedRecord(){
 try{
  const response=await fetch('./record-data.json');if(!response.ok)return;const data=await response.json();
  const load=()=>{const ids=new Set(state.blocks.map(b=>b.id));state.blocks.push(...data.blocks.filter(b=>!ids.has(b.id)));state.recordName=data.recordName;state.activeBlockId=data.blocks[0].id;state.preparedRecordVersion=data.version;saveState();recordTab=RECORD_TABS.includes(state.activeCanvasTab)?state.activeCanvasTab:'1학년 1학기';renderAll();renderCanvas();if($("#graph-view").classList.contains("is-active"))renderAllGraph();};
  if(!hadSavedData){state.blocks=[];state.notes=[];state.questions=[];state.highlights=[];load();}
  else if(state.preparedRecordVersion!==data.version){const button=document.createElement('button');button.className='secondary-button';button.textContent='정리된 생기부 불러오기';button.onclick=()=>{load();button.remove();};$('.canvas-primary-actions').append(button);}
 }catch(error){console.error('정리된 생기부 읽기 실패',error);}
}

recordTab=RECORD_TABS.includes(state.activeCanvasTab)?state.activeCanvasTab:'1학년 1학기';const initialCanvasView=state.canvasViews?.[recordTab];if(initialCanvasView){canvasPan={...initialCanvasView.pan};canvasZoom=initialCanvasView.zoom||1;}
bindEvents();installCanvasPan();installRecordTabs();renderAll();routeTo(location.hash==="#graph"?"graph":"canvas");loadPreparedRecord();

function fitCanvas(){const nodes=$$('#node-layer .canvas-node');if(!nodes.length){canvasPan={x:0,y:0};canvasZoom=1;renderCanvas();return;}const bounds=nodes.map(n=>({x:parseFloat(n.style.left),y:parseFloat(n.style.top),w:n.offsetWidth,h:n.offsetHeight}));const left=Math.min(...bounds.map(n=>n.x)),top=Math.min(...bounds.map(n=>n.y)),right=Math.max(...bounds.map(n=>n.x+n.w)),bottom=Math.max(...bounds.map(n=>n.y+n.h));const stage=$('#canvas-stage');canvasZoom=Math.min(1.5,Math.max(.2,Math.min((stage.clientWidth-70)/(right-left),(stage.clientHeight-70)/(bottom-top))));canvasPan={x:(stage.clientWidth-(right-left)*canvasZoom)/2-left*canvasZoom,y:(stage.clientHeight-(bottom-top)*canvasZoom)/2-top*canvasZoom};renderCanvas();}
