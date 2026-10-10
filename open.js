/* JIMTOF2026 웹 동선 페이지 → Obsidian 회사 노트 중계
   주소 #n=<노트 이름> 을 받아, 고정된 볼트·폴더의 노트 링크(obsidian://open)로만 이동한다.
   노트 이름은 주소의 # 뒤에만 있어 서버로 전송되지 않는다. 외부 요청·수집 없음. */
(function () {
  var VAULT = 'Jongtae';
  var DIR = '2_Project/JIMTOF2026/회사/';
  var NAME_RE = /^JIMTOF2026 - [A-Z]{1,2}\d{3,4}(-\d{1,2})? [^\/\\]{1,120}$/;
  var msg = document.getElementById('msg');
  var go = document.getElementById('go');
  var m = /^#n=(.+)$/.exec(location.hash || '');
  var name = '';
  try { if (m) name = decodeURIComponent(m[1]); } catch (e) { name = ''; }
  if (!NAME_RE.test(name) || name.indexOf('..') >= 0) {
    msg.textContent = '열 수 없는 주소입니다.';
    return;
  }
  var link = 'obsidian://open?vault=' + encodeURIComponent(VAULT) + '&file=' + encodeURIComponent(DIR + name);
  document.getElementById('name').textContent = name;
  go.href = link;
  go.hidden = false;
  msg.textContent = '자동으로 열리지 않으면 위 버튼을 누르세요. 열리면 이 탭은 닫아도 됩니다.';
  setTimeout(function () { location.href = link; }, 60);
})();
