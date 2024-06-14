let h2;
let TorF;
let question = 0;
let element;
let random = 0;
let True;
let first = 1;
let DontKnow;
let ConsecutiveCorrectAnswers = 0;
let renzoku;
let saikourenzokuseikai;
let atomnumber;

const atom = {
      "H": "水素",
      "He": "ヘリウム",
      "Li": "リチウム",
      "Be": "ベリリウム",
      "B": "ホウ素",
      "C": "炭素",
      "N": "窒素",
      "O": "酸素",
      "F": "フッ素",
      "Ne": "ネオン",
      "Na": "ナトリウム",
      "Mg": "マグネシウム",
      "Al": "アルミニウム",
      "Si": "ケイ素",
      "P": "リン",
      "S": "硫黄",
      "Cl": "塩素",
      "Ar": "アルゴン",
      "K": "カリウム",
      "Ca": "カルシウム",
      "Sc": "スカンジウム",
      "Ti": "チタン",
      "V": "バナジウム",
      "Cr": "クロム",
      "Mn": "マンガン",
      "Fe": "鉄",
      "Co": "コバルト",
      "Ni": "ニッケル",
      "Cu": "銅",
      "Zn": "亜鉛",
      "Ga": "ガリウム",
      "Ge": "ゲルマニウム",
      "As": "ヒ素",
      "Se": "セレン",
      "Br": "臭素",
      "Kr": "クリプトン",
      "Rb": "ルビジウム",
      "Sr": "ストロンチウム",
      "Y": "イットリウム",
      "Zr": "ジルコニウム",
      "Nb": "ニオブ",
      "Mo": "モリブデン",
      "Tc": "テクネチウム",
      "Ru": "ルテニウム",
      "Rh": "ロジウム",
      "Pd": "パラジウム",
      "Ag": "銀",
      "Cd": "カドミウム",
      "In": "インジウム",
      "Sn": "スズ",
      "Sb": "アンチモン",
      "Te": "テルル",
      "I": "ヨウ素",
      "Xe": "キセノン",
      "Cs": "セシウム",
      "Ba": "バリウム",
      "Hf": "ハフニウム",
      "Ta": "タンタル",
      "W": "タングステン",
      "Re": "レニウム",
      "Os": "オスミウム",
      "Ir": "イリジウム",
      "Pt": "白金",
      "Au": "金",
      "Hg": "水銀",
      "Tl": "タリウム",
      "Pb": "鉛",
      "Bi": "ビスマス",
      "Po": "ポロニウム",
      "At": "アスタチン",
      "Rn": "ラドン",
      "Fr": "フランシウム",
      "Ra": "ラジウム",
      "Rf": "ラザホージウム",
      "Db": "ドブニウム",
      "Sg": "シーボーギウム",
      "Bh": "ボーリウム",
      "Hs": "ハッシウム",
      "Mt": "マイトネリウム",
      "Ds": "ダームスタチウム",
      "Rg": "レントゲニウム",
      "Cn": "コペルニシウム",
      "Nh": "ニホニウム",
      "Fl": "フレロビウム",
      "Mc": "モスコビウム",
      "Lv": "リバモリウム",
      "Ts": "テネシン",
      "Og": "オガネソン"
};
const atom_num = {
      "H": "1",
      "He": "2",
      "Li": "3",
      "Be": "4",
      "B": "5",
      "C": "6",
      "N": "7",
      "O": "8",
      "F": "9",
      "Ne": "10",
      "Na": "11",
      "Mg": "12",
      "Al": "13",
      "Si": "14",
      "P": "15",
      "S": "16",
      "Cl": "17",
      "Ar": "18",
      "K": "19",
      "Ca": "20",
      "Sc": "21",
      "Ti": "22",
      "V": "23",
      "Cr": "24",
      "Mn": "25",
      "Fe": "26",
      "Co": "27",
      "Ni": "28",
      "Cu": "29",
      "Zn": "30",
      "Ga": "31",
      "Ge": "32",
      "As": "33",
      "Se": "34",
      "Br": "35",
      "Kr": "36",
      "Rb": "37",
      "Sr": "38",
      "Y": "39",
      "Zr": "40",
      "Nb": "41",
      "Mo": "42",
      "Tc": "43",
      "Ru": "44",
      "Rh": "45",
      "Pd": "46",
      "Ag": "47",
      "Cd": "48",
      "In": "49",
      "Sn": "50",
      "Sb": "51",
      "Te": "52",
      "I": "53",
      "Xe": "54",
      "Cs": "55",
      "Ba": "56",
      "Hf": "72",
      "Ta": "73",
      "W": "74",
      "Re": "75",
      "Os": "76",
      "Ir": "77",
      "Pt": "78",
      "Au": "79",
      "Hg": "80",
      "Tl": "81",
      "Pb": "82",
      "Bi": "83",
      "Po": "84",
      "At": "85",
      "Rn": "86",
      "Fr": "87",
      "Ra": "88",
      "Rf": "104",
      "Db": "105",
      "Sg": "106",
      "Bh": "107",
      "Hs": "108",
      "Mt": "109",
      "Ds": "110",
      "Rg": "111",
      "Cn": "112",
      "Nh": "113",
      "Fl": "114",
      "Mc": "115",
      "Lv": "116",
      "Ts": "117",
      "Og": "118"
};
const atom_key = [
      "H", "He", "Li", "Be", "B", "C", "N", "O",
      "F", "Ne", "Na", "Mg", "Al", "Si", "P",
      "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti",
      "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu",
      "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb",
      "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
      "Sb", "Te", "I", "Xe", "Cs", "Ba", "Hf", "Ta", "W", "Re",
      "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr",
      "Ra", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
      "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const atom_nature = [
      {"1": "常温では気体。ロケットの燃料に使われる。"},
      {"1": "常温では気体。風船を浮かすのに使う。"},
      {"2": "常温では個体。バッテリーや電池に使われる。"},
      {"2": "常温では個体。バネの原料となる。"},
      {"1": "常温では個体。実験器具に使われる。"},
      {"1": "常温では個体。鉛筆の芯に使われる。"},
      {"1": "常温では気体。肥料に使われる。"},
      {"1": "常温では気体。人間が生きていくには欠かせない。"},
      {"1": "常温では気体。歯磨き粉に入っている。"},
      {"1": "常温では気体。◯◯◯サイン(看板や広告)などに使われる。"},
      {"2": "常温では個体。食塩の元。"},
      {"2": "常温では個体。豆腐のにがりに用いられる。"},
      {"2": "常温では個体。一円硬貨の原料。"},
      {"1": "常温では個体。半導体の部品などの原料。"},
      {"1": "常温では個体。肥料に使われる。"},
      {"1": "常温では個体。タイヤの原料。"},
      {"1": "常温では気体。水道水の消毒に使われる。"},
      {"1": "常温では気体。蛍光灯に使われる。"},
      {"2": "常温では個体。肥料に用いられる。"},
      {"2": "常温では個体。牛乳に多く入っている。"},
      {"2": "常温では個体。自転車のフレームなどに"},
      {"2": "常温では個体。屋根の素材などに"},
      {"2": "常温では個体。ドライバーの金属部分"},
      {"2": "常温では個体。メッキ。"},
      {"2": "常温では個体。乾電池に使われる。"},
      {"2": "常温では個体。建築素材(東京タワーなどの)。"},
      {"2": "常温では個体。着色剤に用いられる。"},
      {"2": "常温では個体。◯◯◯◯水素電池"},
      {"2": "常温では個体。10円硬化など"},
      {"2": "常温では個体。金管楽器など"},
      {"2": "常温では個体。信号機の青色の発光ダイオードなど"},
      {"2": "常温では個体。半導体(トランジスタ)など"},
      {"1": "常温では個体。赤信号の発光ダイオードなど"},
      {"1": "常温では個体。コピー機など"},
      {"1": "常温では個体。カメラのフィルムなど"},
      {"1": "常温では個体。懐中電灯など"},
      {"2": "常温では個体。コーヒーやお茶に入っている成分"},
      {"2": "花火など"},
      {"2": "常温では個体。レーザーに使われる"},
      {"2": "常温では個体。ハサミや包丁など"},
      {"2": "常温では個体。リニアモーターカーなど"},
      {"2": "常温では個体。セラミックヒーターなど"},
      {"2": "常温では個体。骨のイメージング剤など"},
      {"2": "常温では個体。HDD(ハードディスク)など"},
      {"2": "常温では個体。車の排気ガスの処理の触媒に"},
      {"2": "常温では個体。ブレスレットなどのアクセサリー"},
      {"2": "常温では個体。食器に使われたりもする"},
      {"2": "常温では個体。ニッケル・◯◯◯◯◯蓄電池など"},
      {"2": "常温では個体。液晶など"},
      {"2": "常温では個体。青銅の鐘"},
      {"2": "常温では個体。銅の着色をするとき"},
      {"1": "常温では個体。DVDなど"},
      {"1": "常温では個体。うがい薬など"},
      {"1": "常温では個体。車のヘッドライトなど"},
      {"2": "常温では個体。原子時計など"},
      {"2": "常温では個体。X線診断の造影剤など"},
      {"2": "常温では個体。ジェットエンジンなど"},
      {"2": "常温では個体。コンデンサーなど"},
      {"2": "常温では個体。ボールペンのペン先など"},
      {"2": "常温では個体。火力発電に用いられる"},
      {"2": "常温では個体。万年筆のペン先など"},
      {"2": "常温では個体。点火プラグなど"},
      {"2": "常温では個体。車の排気ガス処理の触媒"},
      {"2": "常温では個体。携帯電話など"},
      {"2": "常温では液体。す◯◯ん"},
      {"2": "常温では個体。た◯◯む"},
      { "2": "常温では個体。◯◯◯蓄電池、◯◯◯のように重い"},
      { "2": "常温では個体。整腸剤など"},
      { "2": "常温では個体。キュリー夫妻によって発見された"},
      { "1": "常温では個体。不安定で長い間存在できない。"},
      { "1": "常温では気体。ら◯◯温泉"},
      { "2": "常温では個体。ふ◯◯◯うむ"},
      { "2": "常温では個体。ら◯◯む"},
      { "3": "ら◯◯◯◯うむ"},
      { "3": "ど◯◯うむ"},
      { "3": "しー◯◯◯うむ"},
      { "3": "ぼー◯◯む"},
      { "3": "は◯◯◯む"},
      { "3": "まい◯◯◯◯む"},
      { "3": "だーむ◯◯◯◯む"},
      { "3": "れんと◯◯◯む"},
      { "3": "こペ◯◯◯◯む"},
      { "3": "にほ◯◯む"},
      { "3": "ふれろ◯◯む"},
      { "3": "もす◯◯◯む"},
      { "3": "りば◯◯うむ"},
      { "3": "てね◯◯"},
      { "3": "お◯◯そん"}
];

const dontknow = () => {
      value = document.getElementById("answer");
      TorF = document.getElementById("TrueOrFalse");
      True = document.getElementById("TrueAnswer");
      renzoku = document.getElementById("renzokuseikai");
      if (TorF.innerHTML == "") {
            TorF.innerHTML = "❌";
            renzoku.innerHTML = `連続正解回数 : 0`;
            ConsecutiveCorrectAnswers = 0;
            True.innerHTML = `正解 : ${random}`;
            next.style.backgroundColor = "rgb(200, 255, 145)";
            next.style.color = "black";
            DontKnow.style.backgroundColor = "rgb(181, 181, 181)";
            go.style.backgroundColor = "rgb(181, 181, 181)";
      }
}

const hantei = function () {
      DontKnow = document.getElementById("IDontKnow");
      value = document.getElementById("answer");
      TorF = document.getElementById("TrueOrFalse");
      True = document.getElementById("TrueAnswer");
      renzoku = document.getElementById("renzokuseikai");
      saikourenzokuseikai = document.getElementById("saikourenzokuseikai")
      if (!value.value == "" && TorF.innerHTML == "") {
            if (value.value == random) {
                  TorF.innerHTML = "⭕";
                  ConsecutiveCorrectAnswers += 1;
                  if (localStorage.getItem("top") < ConsecutiveCorrectAnswers) {
                        renzoku.innerHTML = `連続正解回数 : ${ConsecutiveCorrectAnswers}`;
                        localStorage.clear();
                        localStorage.setItem("top",`${ConsecutiveCorrectAnswers}`);
                        saikourenzokuseikai.innerHTML = `最高連続正解回数 : ${localStorage.getItem("top")}`;
                  }else{
                        renzoku.innerHTML = `連続正解回数 : ${ConsecutiveCorrectAnswers}`;
                  }
            } else {
                  TorF.innerHTML = "❌";
                  True.innerHTML = `正解 : ${random}`;
                  renzoku.innerHTML = `連続正解回数 : 0`;
                  ConsecutiveCorrectAnswers = 0;
            }
            next.style.backgroundColor = "rgb(200, 255, 145)";
            next.style.color = "black";
            DontKnow.style.backgroundColor = "rgbrgb(181, 181, 181)";
            go.style.backgroundColor = "rgb(181, 181, 181)";
      }
}

window.onload = function () {
      if (localStorage.getItem("top") === null) {
            localStorage.setItem("top", 0);
      }
      let next = document.getElementById("next");
      DontKnow = document.getElementById("IDontKnow");
      let hint = document.getElementById("hint");
      let go = document.getElementById("go");
      let box = document.querySelector("input#answer");
      renzoku = document.getElementById("renzokuseikai");
      renzoku.innerHTML = `${renzoku.innerHTML}0`;
      saikourenzokuseikai = document.getElementById("saikourenzokuseikai");
      saikourenzokuseikai.innerHTML = `最高連続正解回数 : ${localStorage.getItem("top")}`;
      atomnumber = document.getElementById("num");

      const questionFn = next.onclick = function () {
            TorF = document.getElementById("TrueOrFalse");
            if (!TorF.innerHTML == "" || first == 1) {
                  first = 0;
                  value = document.getElementById("answer");
                  True = document.getElementById("TrueAnswer");
                  True.innerHTML = null;
                  value.value = null;
                  TorF = document.getElementById("TrueOrFalse");
                  TorF.innerHTML = null;
                  h2 = document.getElementById("question");
                  element = document.getElementById("questionElement");
                  question = Math.floor(Math.random() * 11);
                  hint.innerHTML = null;
                  if (question < 6) {
                        random = Math.floor(Math.random() * 87);
                        h2.innerHTML = atom_key[random];
                        atomnumber.innerHTML = Object.values(atom_num)[random];
                        element.innerHTML = "この元素記号の元素名を答えてください";
                        switch (Object.keys(atom_nature[random])[0]) {
                              case "1":
                                    hint.innerHTML = `ヒント : 非金属。${Object.values(atom_nature[random])[0]}`;
                                    random = atom[atom_key[random]];
                                    break;
                              case "2":
                                    hint.innerHTML = `ヒント : 金属。${Object.values(atom_nature[random])[0]}`;
                                    random = atom[atom_key[random]];
                                    break;
                              case "3":
                                    hint.innerHTML = `ヒント : 詳しい性質はわからない。${Object.values(atom_nature[random])[0]}`;
                                    random = atom[atom_key[random]];
                                    break;
                        }
                        element.style.color = "blue";
                  } else {
                        random = Math.floor(Math.random() * 87);
                        h2.innerHTML = atom[atom_key[random]];
                        atomnumber.innerHTML = Object.values(atom_num)[random];
                        random = atom_key[random];
                        element.innerHTML = "この元素の元素記号を答えてください";
                        element.style.color = "red";
                  }
            }
            next.style.backgroundColor = "rgb(181, 181, 181)";
            DontKnow.style.backgroundColor = "rgb(186, 254, 255)";
            go.style.backgroundColor = "rgb(218, 255, 85)";
      }

      questionFn();
      next.style.backgroundColor = "rgb(181, 181, 181)";

      box.addEventListener("keydown", (elem) => {
            if (elem.key == "Enter") {
                  hantei();
            }
      });
      addEventListener("keydown", (elem) => {
            if (elem.key == "ArrowRight") {
                  questionFn();
            }
      });
      addEventListener("keydown", (elem) => {
            if (elem.key == "Alt") {
                  dontknow();
            }
      });
      addEventListener("keydown", (elem) => {
            if (elem.key == "Control") {
                  document.getElementById("answer").focus();
            }
      });
}
