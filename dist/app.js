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
let movingNodeId = null;
let layoutFrame = null;
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
  const sourceDocuments = [$("#source-document"), $("#canvas-source-document")].filter(Boolean);
  if (!sourceDocuments.some((article) => article.contains(range.commonAncestorContainer))) return null;
  const quote = selection.toString().replace(/\s+/g, " ").trim();
  if (quote.length < 2) return null;
  const block = activeBlock();
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
    const note = { id: uid("note"), ...payload, anchors: anchor ? [anchor] : [], links: [], x: 180 + state.notes.length * 42, y: 110 + state.notes.length * 34, collapsed: false };
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
    const dotA = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const dotB = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dotA.setAttribute("cx", start.x); dotA.setAttribute("cy", start.y); dotA.setAttribute("r", 5);
    dotB.setAttribute("cx", end.x); dotB.setAttribute("cy", end.y); dotB.setAttribute("r", 5);
    dotA.style.fill = linkColor; dotB.style.fill = linkColor;
    svg.append(path, dotA, dotB);
  });
}

function categoryIcon(category) {
  return ({ "탐구": "⌕", "성장": "↗", "협업": "◫", "진로": "◆", "자유 메모": "✦", "활동": "⚡", "캐릭터": "◎", "면접 질문": "?" })[category] || "•";
}

function noteContext(note) {
  const blocks = note.anchors.map((anchor) => state.blocks.find((block) => block.id === anchor.blockId)).filter(Boolean);
  return { grades: [...new Set(blocks.map((block) => block.grade))], subjects: [...new Set(blocks.map((block) => block.subject))] };
}

function canvasItems() {
  state.canvasPositions ||= {};
  const noteItems = state.notes.map((note) => ({ ...note, kind: "note", context: noteContext(note), sourceNote: note }));
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
  return [...noteItems, ...activities, ...personas, ...questions];
}

function renderCanvas() {
  renderCanvasSource();
  renderRecordTable();
  const layer = $("#node-layer");
  layer.innerHTML = "";
  layer.style.transform = `translate(${canvasPan.x}px, ${canvasPan.y}px) scale(${canvasZoom})`;
  $("#zoom-label").textContent = `${Math.round(canvasZoom * 100)}%`;
  const items = canvasItems();
  $("#canvas-empty").hidden = items.length > 0;
  items.forEach((item) => {
    const node = document.createElement("article");
    const kindClass = item.kind === "persona" ? " persona-node" : item.kind === "question" ? " question-node" : item.kind === "activity" ? " activity-node" : "";
    node.className = `canvas-node${item.collapsed ? " collapsed" : ""}${kindClass}`;
    node.dataset.noteId = item.id;
    node.dataset.category = item.category;
    node.dataset.search = `${item.title} ${item.body || ""} ${(item.tags || []).join(" ")}`.toLowerCase();
    node.dataset.grades = item.context.grades.join(",");
    node.dataset.subjects = item.context.subjects.join(",");
    node.style.setProperty("--note-color", item.color || "#5865f2");
    node.style.borderTopColor = item.color || "#5865f2";
    node.style.left = `${item.x ?? 120}px`;
    node.style.top = `${item.y ?? 120}px`;
    const categoryControl = item.kind === "note"
      ? `<button class="node-category-icon category-change" type="button" title="클릭해서 카테고리 변경" aria-label="현재 ${escapeHtml(item.category)} 카테고리. 클릭해서 변경">${categoryIcon(item.category)}</button>`
      : `<span class="node-category-icon" aria-label="${escapeHtml(item.category)} 카테고리">${categoryIcon(item.category)}</span>`;
    const actions = item.kind === "note"
      ? `<input class="node-border-color" type="color" value="${escapeHtml(item.color || "#5865f2")}" aria-label="메모 테두리 색상"><button class="node-mini collapse-node" type="button" aria-label="${item.collapsed ? "펼치기" : "접기"}">${item.collapsed ? "+" : "−"}</button>`
      : "";
    const connector = item.kind === "note" ? `<button class="node-connector" type="button" aria-label="다른 메모로 연결선 드래그"></button>` : "";
    const editTitle = item.kind === "note" ? 'class="node-title-edit" contenteditable="plaintext-only" spellcheck="true"' : "";
    const editBody = item.kind === "note" ? 'class="node-body-edit" contenteditable="true" spellcheck="true"' : "";
    node.innerHTML = `<div class="node-top"><div class="node-category-wrap">${categoryControl}<span class="category-pill">${escapeHtml(item.category)}</span></div><div class="node-actions">${actions}</div></div><h3 ${editTitle}>${escapeHtml(item.title)}</h3><div ${editBody}>${safeNoteHtml(item.bodyHtml || escapeHtml(item.body || ""))}</div>${connector}`;
    enableNodeDrag(node, item);
    if (item.kind === "note") {
      $(".category-change", node).addEventListener("click", (event) => {
        event.stopPropagation();
        const categories = ["탐구", "성장", "협업", "진로", "자유 메모", "활동", "캐릭터", "면접 질문"];
        item.sourceNote.category = categories[(categories.indexOf(item.sourceNote.category) + 1) % categories.length];
        saveState();
        renderCanvas();
        toast(`${item.sourceNote.category} 카테고리로 바꿨어요.`);
      });
      $(".collapse-node", node).addEventListener("click", (event) => {
        event.stopPropagation();
        item.sourceNote.collapsed = !item.sourceNote.collapsed;
        saveState();
        renderCanvas();
      });
      const titleEdit = $(".node-title-edit", node);
      const bodyEdit = $(".node-body-edit", node);
      installFormatting(node, bodyEdit, item.sourceNote);
      if(item.anchors.length){const evidence=document.createElement('div');evidence.className='node-evidence';item.anchors.forEach(anchor=>{const button=document.createElement('button');button.type='button';const block=state.blocks.find(b=>b.id===anchor.blockId);button.textContent=(block?.subject || '원문')+' '+anchor.page+'쪽';button.onclick=()=>{state.activeBlockId=anchor.blockId;recordTab='원문';saveState();renderCanvas();};evidence.append(button);});node.append(evidence);}
      titleEdit.addEventListener("pointerdown", (event) => event.stopPropagation());
      bodyEdit.addEventListener("pointerdown", (event) => event.stopPropagation());
      titleEdit.addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); titleEdit.blur(); } });
      bodyEdit.addEventListener("keydown", (event) => { if ((event.ctrlKey || event.metaKey) && event.key === "Enter") bodyEdit.blur(); });
      titleEdit.addEventListener("blur", () => {
        item.sourceNote.title = titleEdit.textContent.trim() || "제목 없음";
        saveState();
        renderCanvasFilters();
      });
      bodyEdit.addEventListener("blur", () => {
        item.sourceNote.body = bodyEdit.textContent.trim();
        item.sourceNote.bodyHtml = safeNoteHtml(bodyEdit.innerHTML);
        saveState();
        renderCanvasFilters();
      });
      $(".node-border-color", node).addEventListener("input", (event) => {
        event.stopPropagation();
        item.sourceNote.color = event.target.value;
        node.style.setProperty("--note-color", event.target.value);
        node.style.borderColor = event.target.value;
        renderCanvasSource(); renderCrossLinks();
        saveState();
      });
      $(".node-border-color", node).addEventListener("pointerdown", (event) => event.stopPropagation());
      enableConnectorDrag($(".node-connector", node), item.id);
    }
    layer.appendChild(node);
  });
  renderCanvasFilters(items);
  requestAnimationFrame(() => {
    renderEdges();
    renderCrossLinks();
    applyCanvasFilters();
    settleNodes();
  });
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
  node.addEventListener("pointerdown", (event) => {
    if(event.button!==0 || event.target.closest("button,input,[contenteditable]"))return;
    event.preventDefault(); event.stopPropagation();
    node.setPointerCapture(event.pointerId); node.classList.add("dragging"); movingNodeId=note.id;
    const start={x:event.clientX,y:event.clientY,left:parseFloat(node.style.left),top:parseFloat(node.style.top)};
    const move=e=>{node.style.left=(start.left+(e.clientX-start.x)/canvasZoom)+"px";node.style.top=(start.top+(e.clientY-start.y)/canvasZoom)+"px";storeNodePosition(node);settleNodes();};
    const up=()=>{node.classList.remove("dragging");movingNodeId=null;node.removeEventListener("pointermove",move);node.removeEventListener("pointerup",up);node.removeEventListener("pointercancel",up);storeNodePosition(node);settleNodes();saveState();};
    node.addEventListener("pointermove",move);node.addEventListener("pointerup",up);node.addEventListener("pointercancel",up);
  });
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
  const points=closestPoints(a.getBoundingClientRect(),b.getBoundingClientRect()).map(p=>({x:p.x-origin.left,y:p.y-origin.top}));
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',curvedPath(...points));svg.append(path);
 };
 state.notes.forEach(n=>n.links.forEach(id=>draw(n.id,id)));
 canvasItems().filter(n=>n.virtual).forEach(n=>(n.noteIds||[]).forEach(id=>draw(id,n.id)));
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
    title?.focus();
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
    if (action === "highlight") { applyHighlight(selectedAnchor); toast("문장을 하이라이트했어요."); }
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
  
  $("#zoom-in").addEventListener("click", () => { canvasZoom = Math.min(1.5, canvasZoom + .1); renderCanvas(); });
  $("#zoom-out").addEventListener("click", () => { canvasZoom = Math.max(.6, canvasZoom - .1); renderCanvas(); });
  $("#canvas-reset").addEventListener("click", () => { fitCanvas(); });
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
 const tpl=document.createElement('template');tpl.innerHTML=value;
 const walk=parent=>[...parent.childNodes].forEach(el=>{
  if(el.nodeType!==1)return;
  if(['SCRIPT','STYLE','IFRAME','OBJECT','SVG'].includes(el.tagName)){el.remove();return;}
  walk(el);
  if(!['B','STRONG','U','MARK','BR','DIV','P','I','EM'].includes(el.tagName)){el.replaceWith(...el.childNodes);return;}
  [...el.attributes].forEach(a=>el.removeAttribute(a.name));
 });walk(tpl.content);return tpl.innerHTML;
}
function installFormatting(node,editor,note){
 const toolbar=document.createElement('div');toolbar.className='note-formatting';toolbar.setAttribute('role','toolbar');toolbar.setAttribute('aria-label','메모 강조');
 let savedRange=null;
 const remember=()=>{const sel=window.getSelection();if(sel.rangeCount&&editor.contains(sel.getRangeAt(0).commonAncestorContainer))savedRange=sel.getRangeAt(0).cloneRange();};
 editor.addEventListener('keyup',remember);editor.addEventListener('mouseup',remember);
 const persist=()=>{note.body=editor.textContent.trim();note.bodyHtml=safeNoteHtml(editor.innerHTML);saveState();settleNodes();};
 editor.addEventListener('input',persist);
 [['굵게','bold'],['밑줄','underline'],['형광펜','highlight'],['강조 해제','clear']].forEach(([label,command])=>{
  const button=document.createElement('button');button.type='button';button.textContent=label;
  button.onpointerdown=e=>{e.preventDefault();e.stopPropagation();remember();};
  button.onclick=()=>{editor.focus();if(savedRange){const sel=window.getSelection();sel.removeAllRanges();sel.addRange(savedRange);}
   const sel=window.getSelection();if(!sel.rangeCount||!editor.contains(sel.getRangeAt(0).commonAncestorContainer))return;
   if(command==='highlight'){
    const range=sel.getRangeAt(0);if(range.collapsed)return;const mark=document.createElement('mark');mark.append(range.extractContents());range.insertNode(mark);sel.removeAllRanges();
   }else if(command==='clear'){
    const range=sel.getRangeAt(0);if(range.collapsed){const parent=sel.anchorNode.parentElement.closest('mark,u,b,strong');if(parent&&editor.contains(parent))parent.replaceWith(...parent.childNodes);}else{const plain=document.createTextNode(range.toString());range.deleteContents();range.insertNode(plain);}
   }else document.execCommand(command,false,null);
   savedRange=null;persist();
  };toolbar.append(button);
 });editor.before(toolbar);
 editor.addEventListener('paste',e=>{e.preventDefault();document.execCommand('insertText',false,e.clipboardData.getData('text/plain'));persist();});
}
function storeNodePosition(node){
 const position={x:parseFloat(node.style.left)||0,y:parseFloat(node.style.top)||0};
 const note=state.notes.find(n=>n.id===node.dataset.noteId);
 if(note)Object.assign(note,position);else {state.canvasPositions||={};state.canvasPositions[node.dataset.noteId]=position;}
}
function settleNodes(){
 if(layoutFrame)return;let frames=0;
 const tick=()=>{
  const nodes=$$('#node-layer .canvas-node');let changed=false;
  const gap=24;
  for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
   const a=nodes[i],b=nodes[j];let ax=parseFloat(a.style.left),ay=parseFloat(a.style.top),bx=parseFloat(b.style.left),by=parseFloat(b.style.top);
   const dx=(ax+a.offsetWidth/2)-(bx+b.offsetWidth/2),dy=(ay+a.offsetHeight/2)-(by+b.offsetHeight/2);
   const ox=(a.offsetWidth+b.offsetWidth)/2+gap-Math.abs(dx),oy=(a.offsetHeight+b.offsetHeight)/2+gap-Math.abs(dy);
   if(ox<=.3||oy<=.3)continue;changed=true;
   const lockA=a.dataset.noteId===movingNodeId||a.contains(document.activeElement),lockB=b.dataset.noteId===movingNodeId||b.contains(document.activeElement);
   if(lockA&&lockB)continue;
   const force=(matchMedia('(prefers-reduced-motion:reduce)').matches?1:.25);const amount=(Math.min(ox,oy)+.5)*force;
   const shareA=lockA?0:lockB?1:.5,shareB=lockB?0:lockA?1:.5;
   if(ox<oy){const sign=dx>=0?1:-1;ax+=amount*sign*shareA;bx-=amount*sign*shareB;}else{const sign=dy>=0?1:-1;ay+=amount*sign*shareA;by-=amount*sign*shareB;}
   a.style.left=ax+'px';a.style.top=ay+'px';b.style.left=bx+'px';b.style.top=by+'px';
  }
  nodes.forEach(storeNodePosition);renderEdges();renderCrossLinks();frames++;
  if((changed||movingNodeId)&&frames<600)layoutFrame=requestAnimationFrame(tick);else{layoutFrame=null;saveState();}
 };layoutFrame=requestAnimationFrame(tick);
}
function installCanvasPan(){
 const stage=$('#canvas-stage');
 stage.addEventListener('pointerdown',e=>{
  if(e.button!==0||e.target.closest('.canvas-node,button,input'))return;
  e.preventDefault();stage.setPointerCapture(e.pointerId);stage.classList.add('panning');
  const start={x:e.clientX,y:e.clientY,px:canvasPan.x,py:canvasPan.y};let target={...canvasPan},frame=null;
  const animate=()=>{const speed=matchMedia('(prefers-reduced-motion:reduce)').matches?1:.35;canvasPan.x+=(target.x-canvasPan.x)*speed;canvasPan.y+=(target.y-canvasPan.y)*speed;$('#node-layer').style.transform=`translate(${canvasPan.x}px,${canvasPan.y}px) scale(${canvasZoom})`;renderEdges();renderCrossLinks();if(Math.abs(target.x-canvasPan.x)+Math.abs(target.y-canvasPan.y)>.2)frame=requestAnimationFrame(animate);else frame=null;};
  const move=ev=>{target={x:start.px+ev.clientX-start.x,y:start.py+ev.clientY-start.y};if(!frame)frame=requestAnimationFrame(animate);};
  const up=()=>{stage.classList.remove('panning');stage.removeEventListener('pointermove',move);stage.removeEventListener('pointerup',up);stage.removeEventListener('pointercancel',up);};
  stage.addEventListener('pointermove',move);stage.addEventListener('pointerup',up);stage.addEventListener('pointercancel',up);
 });
}

let recordTab = '원문';
function normalizeSemester(value = '') { const match = String(value).match(/[12]학기|[12]·[12]학기/); return match ? match[0] : '학기 미정'; }
function semesterTabs(){
  // 세특은 학년·학기 단위로 먼저 찾고, 해당 화면 안에서는 과목 카드로 나눈다.
  return [...new Set(state.blocks.filter((b) => /세부능력|교과학습/.test(b.section)).map((b) => b.grade + ' ' + normalizeSemester(b.semester)))];
}
function installRecordTabs(){
 const toolbar=$('.canvas-source-toolbar'), tabs=document.createElement('div');tabs.className='record-tabs';
 const draw=()=>{tabs.innerHTML='';[...semesterTabs(),'창체','기록 묶음','원문'].forEach(label=>{const button=document.createElement('button');button.textContent=label;button.type='button';button.onclick=()=>{recordTab=label;renderCanvas();};tabs.append(button);});};
 draw(); toolbar.before(tabs); const review=document.createElement('button');review.className='secondary-button';review.type='button';review.textContent='원본 대조·수정';review.onclick=openReview;toolbar.append(review);
 const table=document.createElement('div');table.id='record-table';table.hidden=true;$('.canvas-source-scroll').prepend(table); window.refreshRecordTabs=draw;
}
function renderRecordTable(){
 const target=$('#record-table');if(!target)return;
 $$('.record-tabs button').forEach((b)=>b.setAttribute('aria-pressed',String(b.textContent===recordTab)));
 const raw=recordTab==='원문';target.hidden=raw;
 ['#canvas-source-document','#canvas-source-title','.canvas-source-meta','.canvas-source-toolbar'].forEach((selector)=>$(selector).hidden=!raw);
 $('#cross-link-layer').style.display=raw?'':'none';if(raw)return;
 const prepared=(b)=>!state.preparedRecordVersion||b.id.startsWith('prepared-');
 const bundle=(b)=>/출결|수상|자격|학폭|학교폭력|봉사/.test(b.section);
 let blocks=[], heading=recordTab;
 if(recordTab==='기록 묶음'){blocks=state.blocks.filter((b)=>prepared(b)&&bundle(b));}
 else if(recordTab==='창체'){blocks=state.blocks.filter((b)=>prepared(b)&&/창의|창체/.test(b.section));}
 else { const [grade, semester]=recordTab.split(' ');blocks=state.blocks.filter((b)=>prepared(b)&&/세부능력|교과학습/.test(b.section)&&b.grade===grade&&normalizeSemester(b.semester)===semester); }
 if(!blocks.length){target.innerHTML='<p class="record-empty">기록 없음</p>';return;}
 // 같은 과목의 여러 원문 블록은 하나의 카드 안에 이어서 보여 준다.
 const key=(b)=>recordTab==='기록 묶음'?b.section:(recordTab==='창체'?b.grade+' · '+b.subject:b.subject);
 const groups=[...new Map(blocks.map((b)=>[key(b),[]])).entries()]; blocks.forEach((b)=>{const list=groups.find(([name])=>name===key(b))[1];if(!list.includes(b))list.push(b);});
 target.innerHTML='<section class="record-card-section"><h3>'+escapeHtml(heading)+'</h3><div class="record-subject-grid">'+groups.map(([name,items])=>'<article class="record-subject-card"><h4>'+escapeHtml(name)+'</h4>'+items.map((b)=>'<div class="record-card-entry"><button class="table-source" data-source="'+escapeHtml(b.id)+'">PDF '+b.page+'쪽</button><p>'+escapeHtml(b.summary||b.text).replace(/\n/g,'<br>')+'</p></div>').join('')+'</article>').join('')+'</div></section>';
 target.querySelectorAll('[data-source]').forEach((button)=>button.onclick=()=>{state.activeBlockId=button.dataset.source;recordTab='원문';saveState();renderCanvas();});
}
async function loadPreparedRecord(){
 try{
  const response=await fetch('./record-data.json');if(!response.ok)return;const data=await response.json();
  const load=()=>{const ids=new Set(state.blocks.map(b=>b.id));state.blocks.push(...data.blocks.filter(b=>!ids.has(b.id)));state.recordName=data.recordName;state.activeBlockId=data.blocks[0].id;state.preparedRecordVersion=data.version;saveState();recordTab=semesterTabs()[0] || '기록 묶음';window.refreshRecordTabs?.();renderAll();renderCanvas();};
  if(!hadSavedData){state.blocks=[];state.notes=[];state.questions=[];state.highlights=[];load();}
  else if(state.preparedRecordVersion!==data.version){const button=document.createElement('button');button.className='secondary-button';button.textContent='정리된 생기부 불러오기';button.onclick=()=>{load();button.remove();};$('.canvas-primary-actions').append(button);}
 }catch(error){console.error('정리된 생기부 읽기 실패',error);}
}

bindEvents();installCanvasPan();installRecordTabs();renderAll();routeTo("canvas");loadPreparedRecord();

function fitCanvas(){const nodes=$$('#node-layer .canvas-node');if(!nodes.length){canvasPan={x:0,y:0};canvasZoom=1;renderCanvas();return;}const bounds=nodes.map(n=>({x:parseFloat(n.style.left),y:parseFloat(n.style.top),w:n.offsetWidth,h:n.offsetHeight}));const left=Math.min(...bounds.map(n=>n.x)),top=Math.min(...bounds.map(n=>n.y)),right=Math.max(...bounds.map(n=>n.x+n.w)),bottom=Math.max(...bounds.map(n=>n.y+n.h));const stage=$('#canvas-stage');canvasZoom=Math.min(1.5,Math.max(.2,Math.min((stage.clientWidth-70)/(right-left),(stage.clientHeight-70)/(bottom-top))));canvasPan={x:(stage.clientWidth-(right-left)*canvasZoom)/2-left*canvasZoom,y:(stage.clientHeight-(bottom-top)*canvasZoom)/2-top*canvasZoom};renderCanvas();}
