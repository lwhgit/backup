var lyricsForm = "<div id='lyrics_form' style='width: 350px; height: 500px; background-color: #fff; position: fixed; display: block; top: 60px; right: 10px; box-shadow: 0px 5px 20px 0px; z-index: 100;'>	<div style='width:  350px; height: 50px;'>		<a id='playBtn' href='javascript: play();' style='width: 40px; height: 40px; margin:  5px; cursor: pointer; line-height: 40px; color: black; text-decoration: none; text-align: center; font-size: 20px; float: left; display: block;'>▶</a>				<div style='width: 250px; height: 40px; line-height: 40px; text-align: center; font-size: 25px; float: left;'>Lyrics</div>				<a id='closeBtn' href='javascript: close();' style='width: 40px; height: 40px; margin:  5px; cursor: pointer; line-height: 40px; color: black; text-decoration: none; text-align: center; font-size: 20px; float: left; display: block;'>X</a>	</div>		<div id='lyrics' style='width: 330px;height: 400px; margin-left: 10px;overflow: hidden;text-align: center;font-size: 15px;box-shadow: inset 0px 0px 5px 0px;'>			<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>		<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'></div>			</div>		<div style='width: 330px; height: 15px; background-color: rgba(238, 149, 255, 0.3); margin-left: 10px; top: 230px; position: absolute;'></div>	</div>";

var lyricsData = [
{lyric: "그럭저럭 지내왔어", time: 10800},
{lyric: "널 만나기 전까진", time: 13800},
{lyric: "술을 너무 마셔서", time: 14800},
{lyric: "좀 문제였지만, 괜찮았어", time: 16000},
{lyric: "네 친구들에게 만나서 반가웠다고 전해줘", time: 20600},
{lyric: "하지만 걔들을 다신 보고 싶진 않아", time: 24900},
{lyric: "이게 널 아프게 할 것을 알지만", time: 31300},
{lyric: "고장 난 차를 타고 도시로 떠났지", time: 33000},
{lyric: "그리고", time: 35500},
{lyric: "4년 동안 전화 한 통 없었어", time: 36600},
{lyric: "그리고 지금 호텔 바에 있는 너는 예뻐 보여", time: 38200},
{lyric: "그리고 난 멈출 수가 없어", time: 40300},
{lyric: "아니 못 멈추겠어", time: 45300},
{lyric: "좀 더 가까이 끌어당겨", time: 50600},
{lyric: "너의 로버 뒷자석에서", time: 52600},
{lyric: "네 차가 아닌걸 알지만", time: 55200},
{lyric: "너의 어깨에 있는 타투를 물고", time: 57800},
{lyric: "침대 시트 끝 쪽을 끌어당겨", time: 60400},
{lyric: "너가 훔친 매트리스", time: 63000},
{lyric: "Boulder에 있는 네 룸메이트 한테서", time: 65300},
{lyric: "우린 변하지 않아", time: 68000},
{lyric: "넌", time: 91500},
{lyric: "좋아보이네", time: 93200},
{lyric: "나와 만났을 때 처럼", time: 94200},
{lyric: "내가 널 떠난 이유를 잊어버렸어", time: 95800},
{lyric: "난 제정신이 아니었어", time: 97900},
{lyric: "함게 Blink-182 노래를 듣자", time: 101500},
{lyric: "Tocson에서 우리 지겹게 들었던", time: 105600},
{lyric: "이게 널 아프게 할 것을 알지만", time: 112400},
{lyric: "고장 난 차를 타고 도시로 떠났지", time: 114000},
{lyric: "그리고", time: 116300},
{lyric: "4년 동안 전화 한 통 없었어", time: 117500},
{lyric: "그리고 지금 호텔 바에 있는 너는 예뻐 보여", time: 119000},
{lyric: "그리고 난 멈출 수가 없어", time: 121500},
{lyric: "아니 못 멈추겠어", time: 126000},
{lyric: "좀 더 가까이 끌어당겨", time: 131200},
{lyric: "너의 로버 뒷자석에서", time: 133500},
{lyric: "네 차가 아닌걸 알지만", time: 136000},
{lyric: "너의 어깨에 있는 타투를 물고", time: 138200},
{lyric: "침대 시트 끝 쪽을 끌어당겨", time: 141100},
{lyric: "너가 훔친 매트리스", time: 143300},
{lyric: "Boulder에 있는 네 룸메이트 한테서", time: 146000},
{lyric: "우린 변하지 않아", time: 148700},
{lyric: "좀 더 가까이 끌어당겨", time: 172000},
{lyric: "너의 로버 뒷자석에서", time: 174000},
{lyric: "네 차가 아닌걸 알지만", time: 176800},
{lyric: "너의 어깨에 있는 타투를 물고", time: 179000},
{lyric: "침대 시트 끝 쪽을 끌어당겨", time: 181500},
{lyric: "너가 훔친 매트리스", time: 184000},
{lyric: "Boulder에 있는 네 룸메이트 한테서", time: 186500},
{lyric: "우린 변하지 않아", time: 189000},
{lyric: "", time: 0}]; // 마지막 interval에서 마지막에 가사 나온후 이거 없으면 배열길이 초과됐다고 뜸.

var number = 0; // 배열 인덱스

var tick = 0; // 0.1초당 100씩 올라가는 변수

var lyricList = null; // html에서 가져올 가사가 보이는 폼(form)

var watch7 = $("#watch7-container"); // 가사 뷰가 추가될 곳
watch7.innerHTML += lyricsForm; // 추가

var lyrics = $("#lyrics"); // 만든 html의 폼
var video = $(".video-stream"); // 유튜브 영상 부분, click이벤트 주면 재생&일시정지 가능

var interval = 0; // 루프 종료를 위한 interval id저장

function getLineForm(str) {
	return "<div style='width: 330px; height: 15px; text-align: center; line-height: 15px;'>" + str + "</div>";
} // 노가다를 하지 않을것이기 때문에 자바스크립트에서 가사 폼들을 만들어서 추가함

function play() {
	video.click(); // 재생과 동시에
	interval = setInterval(function() { // interval 시작
		tick += 100; // 100씩 증가
		if (tick == lyricsData[number].time) { // 다음 가사가 나올 시간 체크해서 처림
			lyricList[0].remove(); // 위에 있는 가사 하나씩 제거 (스크롤 효과)
			number ++;
			console.log(number); // 디버깅용
		}
		console.log(tick); // 디버깅용
	}, 100); // 0.1초당 실행, 밀리초이긴 한데 이게 5정도 아래로 가면 렉때메 더 느려짐
}

function close() { // 가사 뷰를 닫을때 interval 종료와 가사뷰 제거
	clearInterval(interval);
	document.getElementById("lyrics_form").remove();
}

for (var i in lyricsData) { // 위에 배열로 만든 가사데이터 배열을 html로 바꿔서 추가해줌
	lyrics.innerHTML += getLineForm(lyricsData[i].lyric);
}

lyricList = document.getElementById("lyrics").children; // html로 바꿔서 넣어준 가사 폼들을 가져옴
console.log(lyricList.length); // 디버깅
