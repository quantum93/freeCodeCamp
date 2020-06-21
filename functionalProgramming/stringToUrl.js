var globalTitle = " Winter Is  Coming";

function urlSlug(title) {
  return title
    .toLowerCase()
    .trim() // 문자열 가운데는 두고 앞뒤의 공백을 삭제
    .split(/\s+/) // 문자열에 1개 또는 그 이상의 공백을 기준으로 분리
    .join("-");
}

console.log(urlSlug(globalTitle));