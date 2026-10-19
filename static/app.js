const leftSidebar = document.getElementById('left-sidebar');
const rightSidebar = document.getElementById('right-sidebar');
const workspaceLayout = document.querySelector('.workspace-layout');
const toggleLeftSidebarBtn = document.getElementById('toggle-left-sidebar');
const toggleRightSidebarBtn = document.getElementById('toggle-right-sidebar');
const markdownInput = document.getElementById('markdown-input');
const previewOutput = document.getElementById('preview-output');

function syncSidebarLayoutState() {
    if (!workspaceLayout) {
        return;
    }

    const leftOpen = !!(leftSidebar && leftSidebar.classList.contains('is-open'));
    const rightOpen = !!(rightSidebar && rightSidebar.classList.contains('is-open'));

    if (toggleLeftSidebarBtn) {
        toggleLeftSidebarBtn.classList.toggle('is-active', leftOpen);
        toggleLeftSidebarBtn.setAttribute('aria-pressed', String(leftOpen));
    }

    if (toggleRightSidebarBtn) {
        toggleRightSidebarBtn.classList.toggle('is-active', rightOpen);
        toggleRightSidebarBtn.setAttribute('aria-pressed', String(rightOpen));
    }
}

if (toggleLeftSidebarBtn && leftSidebar) {
    toggleLeftSidebarBtn.addEventListener('click', () => {
        leftSidebar.classList.toggle('is-open');
        syncSidebarLayoutState();
    });
}

if (toggleRightSidebarBtn && rightSidebar) {
    toggleRightSidebarBtn.addEventListener('click', () => {
        rightSidebar.classList.toggle('is-open');
        syncSidebarLayoutState();
    });
}

syncSidebarLayoutState();

function renderPreview() {
    if (!markdownInput || !previewOutput) {
        return;
    }

    const rawText = markdownInput.value;
    const escaped = rawText
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    previewOutput.innerHTML = escaped
        .replace(/^###\s(.+)$/gm, '<h3></h3>')
        .replace(/^##\s(.+)$/gm, '<h2></h2>')
        .replace(/^#\s(.+)$/gm, '<h1></h1>')
        .replace(/\*\*(.+?)\*\*/g, '<strong></strong>')
        .replace(/\*(.+?)\*/g, '<em></em>')
        .replace(/\n/g, '<br>');
}

if (markdownInput && previewOutput) {
    renderPreview();
    markdownInput.addEventListener('input', renderPreview);
}
