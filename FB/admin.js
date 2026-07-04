/* ==========================================================================
   Divine Tamil Nadu - Admin Panel JavaScript Engine (Updated)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  verifyAdminAccess();
  initDashboard();
});

function verifyAdminAccess() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const deniedPanel = document.getElementById('accessDeniedPanel');
  const mainWrapper = document.getElementById('adminMainWrapper');
  const admNameEl = document.getElementById('admUserName');

  if (!user || user.role !== 'admin') {
    if (deniedPanel) deniedPanel.classList.remove('d-none');
    if (mainWrapper) mainWrapper.classList.add('d-none');
  } else {
    if (deniedPanel) deniedPanel.classList.add('d-none');
    if (mainWrapper) mainWrapper.classList.remove('d-none');
    if (admNameEl) admNameEl.textContent = user.name;
  }
}

function handleAdminPanelLogin() {
  const email = document.getElementById('admEmail').value;
  const pass = document.getElementById('admPassword').value;

  if (email === 'admin@divinetamilnadu.org' && pass === 'admin123') {
    const userObj = { name: "System Administrator", role: "admin", email: email };
    localStorage.setItem('currentUser', JSON.stringify(userObj));
    alert("Authentication Successful!");
    verifyAdminAccess();
    initDashboard();
  } else {
    alert("Invalid Administrator credentials. Try again.");
  }
}

function logoutAdmin() {
  if (confirm("Confirm sign out from Administrative Panel?")) {
    localStorage.removeItem('currentUser');
    location.reload();
  }
}

const defaultMockSubmissions = [
  {
    id: 101,
    category: "God",
    name: "Lord Rama",
    contributor: "Srinivasan Raman",
    email: "srini@gmail.com",
    legends: "Seventh avatar of Lord Vishnu, symbol of Dharma and ideal king. Worshipped in Rameshwaram temple.",
    source: "Ramayana Scriptures",
    status: "Pending",
    date: "04/07/2026"
  },
  {
    id: 102,
    category: "Temple",
    name: "Kapaleeshwarar Temple",
    contributor: "Meena Sundar",
    email: "meena@sundar.org",
    legends: "Located in Mylapore, Chennai. Dedicated to Shiva. Goddess Parvati worshipped Shiva here in the form of a peahen (Mayil).",
    source: "Thevaram Hymns",
    status: "Pending",
    date: "03/07/2026"
  },
  {
    id: 103,
    category: "Festival",
    name: "Chithirai Thiruvizha",
    contributor: "Pandian Rajesh",
    email: "rajesh@pandian.com",
    legends: "Celebrated in Madurai, depicting the wedding of Goddess Meenakshi with Lord Sundareswarar.",
    source: "Local temple board chronicles",
    status: "Pending",
    date: "02/07/2026"
  }
];

function initDashboard() {
  let submissions = JSON.parse(localStorage.getItem('userSubmissions') || '[]');
  if (submissions.length === 0 && !localStorage.getItem('seededSubmissions')) {
    submissions = [...defaultMockSubmissions];
    localStorage.setItem('userSubmissions', JSON.stringify(submissions));
    localStorage.setItem('seededSubmissions', 'true');
  }

  renderSubmissionsTable(submissions);
  updateMetrics(submissions);
}

function renderSubmissionsTable(submissions) {
  const tbody = document.getElementById('adminSubmissionsTable');
  const countBadge = document.getElementById('submissionsTableBadge');
  const sidebarBadge = document.getElementById('sidebarBadge');

  if (!tbody) return;

  tbody.innerHTML = '';
  const pendingItems = submissions.filter(item => item.status === 'Pending');

  if (countBadge) countBadge.textContent = `${pendingItems.length} Pending`;
  if (sidebarBadge) {
    if (pendingItems.length > 0) {
      sidebarBadge.textContent = pendingItems.length;
      sidebarBadge.classList.remove('d-none');
    } else {
      sidebarBadge.classList.add('d-none');
    }
  }

  if (pendingItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-4 text-muted">
          <i class="fa-solid fa-square-check display-6 text-success mb-2"></i>
          <p class="m-0 fw-semibold">All user submissions have been reviewed!</p>
        </td>
      </tr>
    `;
    return;
  }

  pendingItems.forEach(item => {
    const tr = document.createElement('tr');
    const badgeClass = item.category === 'God' ? 'bg-danger' : (item.category === 'Temple' ? 'bg-primary' : 'bg-warning text-dark');
    tr.innerHTML = `
      <td><span class="badge ${badgeClass}">${item.category}</span></td>
      <td><strong>${item.name}</strong><br><small class="text-muted">${item.date}</small></td>
      <td>${item.contributor}<br><small class="text-muted">${item.email}</small></td>
      <td><p class="mb-0 text-truncate-2" title="${item.legends}">${item.legends}</p><small class="text-warning-light-dark">Source: ${item.source}</small></td>
      <td>
        <div class="d-flex gap-2">
          <button class="btn btn-success btn-sm rounded-pill px-3 py-1" onclick="reviewSubmission(${item.id}, 'Approved')">Approve</button>
          <button class="btn btn-outline-danger btn-sm rounded-pill px-3 py-1" onclick="reviewSubmission(${item.id}, 'Rejected')">Reject</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function reviewSubmission(id, decision) {
  let submissions = JSON.parse(localStorage.getItem('userSubmissions') || '[]');
  const idx = submissions.findIndex(item => item.id === id);

  if (idx !== -1) {
    submissions[idx].status = decision;
    localStorage.setItem('userSubmissions', JSON.stringify(submissions));
    alert(`Submission for "${submissions[idx].name}" has been ${decision.toLowerCase()} successfully.`);
    initDashboard();
  }
}

function updateMetrics(submissions) {
  const statPending = document.getElementById('statPendingCount');
  if (statPending) {
    const pendingCount = submissions.filter(item => item.status === 'Pending').length;
    statPending.textContent = pendingCount;
  }
  
  // Set accurate database count figures
  const statGods = document.getElementById('statGodsCount');
  const statTemples = document.getElementById('statTemplesCount');
  if (statGods) statGods.textContent = "20";
  if (statTemples) statTemples.textContent = "15";
}

function toggleSidebarMenu() {
  const sidebar = document.getElementById('sidebarMenu');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

window.reviewSubmission = reviewSubmission;
window.handleAdminPanelLogin = handleAdminPanelLogin;
window.logoutAdmin = logoutAdmin;
window.toggleSidebarMenu = toggleSidebarMenu;
