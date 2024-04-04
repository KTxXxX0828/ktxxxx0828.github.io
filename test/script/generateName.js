'use strict';

const cityList = [
  'あいおい', 'あいかわ', 'あいこう', 'あいさい', 'あいしょう', 'あいずみ', 'あいだ', 'あいち', 'あいづばんげ', 'あいづみさと', 'あいづわかまつ', 'あいなん', 'あいべつ', 'あいら', 'あおい', 'あおがしま', 'あおき', 'あおば', 'あおもり', 'あか', 'あが', 'あかいがわ', 'あかいわ', 'あかし', 'あがつま', 'あがの', 'あかびら', 'あがわ', 'あかん', 'あき', 'あきおおた', 'あきしま', 'あきた', 'あきたかた', 'あきは', 'あきるの', 'あぐい', 'あぐに', 'あくね', 'あくみ', 'あげお', 'あげまつ', 'あこう', 'あさお', 'あさか', 'あさかわ', 'あさきた', 'あさぎり', 'あさくち', 'あさくら', 'あさご', 'あさひ', 'あさひかわ', 'あさみなみ', 'あしかが', 'あじがさわ', 'あしがらかみ', 'あしがらしも', 'あしきた', 'あしべつ', 'あしや', 'あしょろ', 'あすか', 'あそ', 'あだち', 'あたみ', 'あち', 'あつぎ', 'あっけし', 'あっさぶ', 'あつた', 'あつべつ', 'あつま', 'あづみの', 'あなみず', 'あなん', 'あばしり', 'あびこ', 'あびら', 'あぶ', 'あぶた', 'あべの', 'あま', 'あまがさき', 'あまぎ', 'あまくさ', 'あまみ', 'あみ', 'あや', 'あやうた', 'あやがわ', 'あやせ', 'あやべ', 'あらお', 'あらかわ', 'ありた', 'ありだ', 'ありだがわ', 'あわ', 'あわじ', 'あわしまうら', 'あわら', 'あんじょう', 'あんど', 'あんなか', 'あんぱち', 'いいし', 'いいじま', 'いいだ', 'いいたて', 'いいづか', 'いいづな', 'いいで', 'いいなん', 'いいやま', 'いえ', 'いが', 'いかた', 'いかるが', 'いかわ', 'いき', 'いぐ', 'いくさか', 'いくの', 'いけだ', 'いこま', 'いさ', 'いさはや', 'いさわ', 'いしい', 'いしおか', 'いしがき', 'いしかり', 'いしかわ', 'いしのまき', 'いず', 'いずのくに', 'いすみ', 'いずみ', 'いずみおおつ', 'いずみざき', 'いずみさの', 'いずも', 'いずもざき', 'いせ', 'いせさき', 'いぜな', 'いせはら', 'いせん', 'いそご', 'いそや', 'いたくら', 'いたこ', 'いたの', 'いたばし', 'いたみ', 'いたやなぎ', 'いちかい', 'いちかわ', 'いちかわみさと', 'いちきくしきの', 'いちのせき', 'いちのへ', 'いちのみや', 'いちはら', 'いつき', 'いで', 'いと', 'いといがわ', 'いとう', 'いとしま', 'いとだ', 'いとまん', 'いな', 'いなかだて', 'いながわ', 'いなぎ', 'いなげ', 'いなざわ', 'いなしき', 'いなべ', 'いなみ', 'いなわしろ', 'いぬかみ', 'いぬやま', 'いね', 'いの', 'いばら', 'いばらき', 'いび', 'いびがわ', 'いぶすき', 'いへや', 'いぼ', 'いまかね', 'いまだて', 'いまばり', 'いまべつ', 'いまり', 'いみず', 'いよ', 'いるま', 'いわいずみ', 'いわき', 'いわくに', 'いわくら', 'いわせ', 'いわた', 'いわつき', 'いわて', 'いわで', 'いわない', 'いわぬま', 'いわふね', 'いわみ', 'いわみざわ', 'いんざい', 'いんば', 'うえだ', 'うえの', 'うえのはら', 'うおづ', 'うおぬま', 'うき', 'うきは', 'うきょう', 'うけん', 'うご', 'うさ', 'うじ', 'うしく', 'うじたわら', 'うす', 'うすき', 'うだ', 'うたしない', 'うたづ', 'うちこ', 'うちなだ', 'うつのみや', 'うと', 'うぶやま', 'うべ', 'うまじ', 'うみ', 'うらうす', 'うらかわ', 'うらそえ', 'うらほろ', 'うらやす', 'うらわ', 'うりゅう', 'うるぎ', 'うるま', 'うれしの', 'うわじま', 'うんぜん', 'うんなん', 'えいへいじ', 'えさし', 'えたじま', 'えち', 'えちぜん', 'えどがわ', 'えな', 'えにわ', 'えびな', 'えびの', 'えべつ', 'えりも', 'えんがる', 'えんべつ', 'おいらせ', 'おうじ', 'おうしゅう', 'おうたき', 'おうみはちまん', 'おうむ', 'おうめ', 'おうら', 'おおあみしらさと', 'おおあらい', 'おおい', 'おおいしだ', 'おおいずみ', 'おおいそ', 'おおいた', 'おおえ', 'おおがき', 'おおがた', 'おおかわ', 'おおがわら', 'おおき', 'おおぎみ', 'おおぐち', 'おおくま', 'おおくら', 'おおくわ', 'おおさか', 'おおさかさやま', 'おおさき', 'おおさきかみじま', 'おおさと', 'おおしか', 'おおしま', 'おおず', 'おおぞら', 'おおた', 'おおだ', 'おおだい', 'おおたき', 'おおたけ', 'おおだて', 'おおたま', 'おおたわら', 'おおち', 'おおつ', 'おおづ', 'おおつき', 'おおつち', 'おおとう', 'おおとよ', 'おおなん', 'おおぬま', 'おおの', 'おおのじょう', 'おおはる', 'おおひら', 'おおぶ', 'おおふなと', 'おおま', 'おおまち', 'おおみや', 'おおむた', 'おおむら', 'おおやまざき', 'おおよど', 'おおわに', 'おが', 'おかがき', 'おかざき', 'おがさわら', 'おがち', 'おがの', 'おかや', 'おかやま', 'おがわ', 'おき', 'おぎ', 'おきなわ', 'おきのしま', 'おくいずも', 'おくしり', 'おくたま', 'おぐに', 'おけがわ', 'おけと', 'おごおり', 'おごせ', 'おこっぺ', 'おしか', 'おしの', 'おしゃまんべ', 'おだ', 'おたり', 'おたる', 'おだわら', 'おち', 'おぢか', 'おぢや', 'おといねっぷ', 'おとくに', 'おとふけ', 'おとべ', 'おながわ', 'おの', 'おのみち', 'おばなざわ', 'おばま', 'おびひろ', 'おびら', 'おぶせ', 'おまえざき', 'おみ', 'おみたま', 'おやべ', 'おやま', 'おわせ', 'おわりあさひ', 'おんが', 'おんじゅく', 'おんな', 'かい', 'かいせい', 'かいそう', 'かいた', 'かいづ', 'かいづか', 'かいなん', 'かいふ', 'かいよう', 'かが', 'かがみいし', 'かかみがはら', 'かがみの', 'かがわ', 'かくだ', 'かけがわ', 'かこ', 'かこがわ', 'かごしま', 'かさい', 'かさおか', 'かさぎ', 'かさま', 'かざまうら', 'かさまつ', 'かしば', 'かしはら', 'かしま', 'かしわ', 'かしわざき', 'かしわら', 'かすが', 'かすがい', 'かすかべ', 'かすみがうら', 'かすや', 'かぞ', 'かたがみ', 'かたしな', 'かたの', 'かつうら', 'かつしか', 'かつた', 'かった', 'かづの', 'かつやま', 'かつらお', 'かつらぎ', 'かでな', 'かとう', 'かどがわ', 'かどま', 'かとり', 'かながわ', 'かなざわ', 'かなん', 'かに', 'かにえ', 'かぬま', 'かねがさき', 'かねやま', 'かのあし', 'かのや', 'かばと', 'かほ', 'かほく', 'かま', 'かまいし', 'かまがや', 'かまくら', 'がまごおり', 'かみ', 'かみあまくさ', 'かみいそ', 'かみいた', 'かみいち', 'かみいな', 'かみうけな', 'かみかつ', 'かみかわ', 'かみきた', 'かみきたやま', 'かみぎょう', 'かみこあに', 'かみごおり', 'かみさと', 'かみしほろ', 'かみじま', 'かみす', 'かみすながわ', 'かみたかい', 'かみとんだ', 'かみのかわ', 'かみのくに', 'かみのせき', 'かみのやま', 'かみふらの', 'かみへい', 'かみましき', 'かみみね', 'かみみのち', 'かみやま', 'かめおか', 'かめだ', 'かめやま', 'かも', 'がもう', 'かもえない', 'かもがわ', 'かやべ', 'からつ', 'かりや', 'かりわ', 'かるいざわ', 'かるまい', 'かわい', 'かわうち', 'かわかみ', 'かわきた', 'かわぐち', 'かわごえ', 'かわさき', 'かわじま', 'かわたな', 'かわち', 'かわちながの', 'かわづ', 'かわにし', 'かわぬま', 'かわねほん', 'かわば', 'かわべ', 'かわまた', 'かわみなみ', 'かわもと', 'かわら', 'かんおんじ', 'かんざき', 'かんだ', 'かんな', 'かんなみ', 'かんまき', 'かんら', 'きかい', 'きくがわ', 'きくち', 'きくよう', 'きこない', 'きさらづ', 'きしま', 'きじまだいら', 'きじょう', 'きしわだ', 'きそ', 'きそさき', 'きた', 'きたあいき', 'きたあきた', 'きたあだち', 'きたあづみ', 'きたいばらき', 'きたうわ', 'きたかた', 'きたがた', 'きたかつしか', 'きたかつらぎ', 'きたかみ', 'きたがわ', 'きたかんばら', 'きたきゅうしゅう', 'きたぐんま', 'きたさく', 'きたしおばら', 'きたしたら', 'きたじま', 'きたそうま', 'きただいとう', 'きたつがる', 'きたつる', 'きたなかぐすく', 'きたなごや', 'きたひろしま', 'きたまつうら', 'きたみ', 'きたむらやま', 'きたむろ', 'きたもと', 'きたもろかた', 'きたやま', 'きづがわ', 'きつき', 'ぎなん', 'きのかわ', 'ぎのざ', 'ぎのわん', 'きびちゅうおう', 'ぎふ', 'きほう', 'きほく', 'きみつ', 'きみの', 'きもつき', 'きもべつ', 'きやま', 'きょうごく', 'ぎょうだ', 'きょうたなべ', 'きょうたんご', 'きょうたんば', 'きょうと', 'きょうわ', 'きよかわ', 'ぎょくとう', 'きよさと', 'きよす', 'きよせ', 'きよた', 'きょなん', 'きりしま', 'きりゅう', 'きん', 'きんこう', 'くが', 'くき', 'くさつ', 'くじ', 'くしま', 'くしもと', 'くじゅうくり', 'ぐじょう', 'くしろ', 'くす', 'くずまき', 'くせ', 'くだまつ', 'くっちゃん', 'くどう', 'くどやま', 'くにがみ', 'くにさき', 'くにたち', 'くにとみ', 'くにみ', 'くのへ', 'くま', 'くまがや', 'くまげ', 'くまこうげん', 'くまとり', 'くまの', 'くまもと', 'くみやま', 'くめ', 'くめじま', 'くめなん', 'くらしき', 'くらて', 'くらよし', 'くりはら', 'くりやま', 'くるめ', 'くれ', 'くろいし', 'くろかわ', 'くろしお', 'くろたき', 'くろべ', 'くろまつない', 'くわな', 'くんねっぷ', 'げいせい', 'けいせん', 'けせん', 'けせんぬま', 'げろ', 'げんかい', 'けんぶち', 'こうか', 'こうげ', 'こうさ', 'こうざ', 'こうざき', 'こうし', 'こうしゅう', 'こうた', 'こうち', 'ごうつ', 'こうづしま', 'ごうど', 'こうとう', 'こうなん', 'こうのす', 'こうふ', 'こうべ', 'こうほく', 'こうみ', 'こうや', 'こうら', 'こうりょう', 'こおり', 'こおりやま', 'こが', 'ごか', 'ごかせ', 'こがねい', 'こくぶんじ', 'こくらきた', 'こくらみなみ', 'ここのえ', 'こさい', 'こさか', 'こざがわ', 'こしがや', 'こしみず', 'ごじょう', 'ごじょうめ', 'ごしょがわら', 'こすげ', 'ごせ', 'ごせん', 'こだいら', 'こたけ', 'こだま', 'ごてんば', 'ごとう', 'ことうら', 'ことひら', 'こなん', 'このはな', 'ごのへ', 'こばやし', 'ごぼう', 'こまえ', 'こまがね', 'こまき', 'こまつ', 'こまつしま', 'こもの', 'こもろ', 'こゆ', 'さい', 'さいかい', 'さいき', 'さいじょう', 'さいたま', 'さいと', 'さいはく', 'さいわい', 'さえき', 'ざおう', 'さか', 'さが', 'さかい', 'さかいで', 'さかいみなと', 'さかえ', 'さがえ', 'さかき', 'さかた', 'さかど', 'さかほぎ', 'さがみはら', 'さがら', 'さかわ', 'さきょう', 'さく', 'さくほ', 'さくら', 'さくらい', 'さくらがわ', 'さけがわ', 'さざ', 'ささぐり', 'さしま', 'させぼ', 'さって', 'さっぽろ', 'さつま', 'さつませんだい', 'さど', 'さとしょう', 'さなごうち', 'さぬき', 'さの', 'さばえ', 'ざま', 'さまに', 'ざまみ', 'さむかわ', 'さめがわ', 'さやま', 'さよう', 'さらべつ', 'さる', 'さるふつ', 'さろま', 'さわ', 'さわら', 'さんごう', 'さんじょう', 'さんだ', 'さんとう', 'さんのへ', 'さんぶ', 'さんむ', 'さんようおのだ', 'しいば', 'しおがま', 'しおじり', 'しおや', 'しか', 'しかおい', 'しかべ', 'しかま', 'しき', 'しこくちゅうおう', 'しじょうなわて', 'しすい', 'しずおか', 'しずくいし', 'しそう', 'したら', 'しちかしゅく', 'しちがはま', 'しちのへ', 'しながわ', 'しなの', 'しばた', 'しばやま', 'しぶかわ', 'しぶし', 'しぶや', 'しべちゃ', 'しべつ', 'しほろ', 'しま', 'しまじり', 'しまだ', 'しまばら', 'しままき', 'しまもと', 'しまんと', 'しみず', 'しむかっぷ', 'しめ', 'しもいち', 'しもいな', 'しもかわ', 'しもきた', 'しもきたやま', 'しもぎょう', 'しもごう', 'しもじょう', 'しもすわ', 'しもだ', 'しもたかい', 'しもつが', 'しもつけ', 'しもつま', 'しもにいかわ', 'しもにた', 'しものせき', 'しもへい', 'しもましき', 'しもみのち', 'しゃこたん', 'しゃり', 'しゅうち', 'しゅうなん', 'じょうえつ', 'しょうおう', 'しょうず', 'じょうそう', 'じょうとう', 'しょうどしま', 'しょうない', 'じょうなん', 'しょうばら', 'じょうよう', 'しょうわ', 'しょさんべつ', 'しらおい', 'しらおか', 'しらかわ', 'しらこ', 'しらたか', 'しらぬか', 'しらはま', 'しりうち', 'しろい', 'しろいし', 'しろさと', 'しわ', 'しんおんせん', 'しんかみごとう', 'しんぐう', 'しんごう', 'しんしのつ', 'しんじゅく', 'しんじょう', 'しんしろ', 'じんせき', 'じんせきこうげん', 'しんち', 'しんとう', 'しんとく', 'しんとつかわ', 'しんとみ', 'しんひだか', 'すいた', 'すえ', 'すおうおおしま', 'すかがわ', 'すぎと', 'すぎなみ', 'すくも', 'すざか', 'すさき', 'すさみ', 'ずし', 'すず', 'すずか', 'すその', 'すっつ', 'すながわ', 'すま', 'すみた', 'すみだ', 'すみのえ', 'すみよし', 'すもと', 'するが', 'すわ', 'すんとう', 'せいか', 'せいよ', 'せいろう', 'せき', 'せきがはら', 'せきかわ', 'せたがや', 'せたな', 'せっつ', 'せと', 'せとうち', 'せや', 'せら', 'せんだい', 'ぜんつうじ', 'せんなん', 'せんぼく', 'そうか', 'そうさ', 'そうじゃ', 'そうべつ', 'そうま', 'そうや', 'そうらく', 'そえだ', 'そお', 'そでがうら', 'そとがはま', 'そに', 'そらち', 'たいき', 'だいご', 'たいし', 'たいじ', 'たいしょう', 'だいせん', 'たいとう', 'だいとう', 'たいない', 'たいはく', 'たいわ', 'たか', 'たが', 'たかいし', 'たかいち', 'たかおか', 'たかぎ', 'たかさき', 'たかさご', 'たかしま', 'たがじょう', 'たかす', 'たがた', 'たかちほ', 'たかつ', 'たかつき', 'たかとり', 'たかなべ', 'たかねざわ', 'たかはぎ', 'たかはし', 'たかはた', 'たかはま', 'たかはる', 'たかまつ', 'たがみ', 'たかもり', 'たかやま', 'たからづか', 'たがわ', 'たき', 'たきかわ', 'たきざわ', 'たきのうえ', 'たく', 'たけお', 'たけた', 'たけとみ', 'たけとよ', 'たけはら', 'たこ', 'だざいふ', 'たじみ', 'たじり', 'ただおか', 'ただみ', 'たちあらい', 'たちかわ', 'たっこ', 'たつごう', 'たつの', 'だて', 'たてしな', 'たてばやし', 'たてやま', 'たどつ', 'たなぐら', 'たなべ', 'たの', 'たのはた', 'たばやま', 'たはら', 'たぶせ', 'たま', 'たまかわ', 'たまき', 'たまな', 'たまの', 'たまむら', 'たむら', 'たら', 'たらぎ', 'たらま', 'たるい', 'たるみ', 'たるみず', 'たわらもと', 'たんば', 'たんばささやま', 'ちいさがた', 'ちがさき', 'ちくご', 'ちくさ', 'ちくしの', 'ちくじょう', 'ちくせい', 'ちくぜん', 'ちくほく', 'ちくま', 'ちた', 'ちちぶ', 'ちづ', 'ちっぷべつ', 'ちとせ', 'ちな', 'ちの', 'ちば', 'ちはやあかさか', 'ちぶ', 'ちゃたん', 'ちゅうおう', 'ちょうし', 'ちょうせい', 'ちょうなん', 'ちょうふ', 'ちよだ', 'ちりゅう', 'つ', 'つがる', 'つきがた', 'つくば', 'つくばみらい', 'つくぼ', 'つくみ', 'つしま', 'つちうら', 'つづき', 'つなぎ', 'つなん', 'つの', 'つばた', 'つばめ', 'つべつ', 'つまごい', 'つやま', 'つる', 'つるい', 'つるおか', 'つるが', 'つるがしま', 'つるぎ', 'つるた', 'つるみ', 'つわの', 'ていね', 'てしお', 'てしかが', 'てんえい', 'てんかわ', 'てんどう', 'てんのうじ', 'てんぱく', 'てんり', 'てんりゅう', 'とういん', 'とうえい', 'とうおん', 'とうかい', 'とうがね', 'とうごう', 'どうし', 'とうのしょう', 'とうはく', 'とうべつ', 'とうほう', 'とうほく', 'とうま', 'とうみ', 'とうやこ', 'とうよう', 'とおかまち', 'とおだ', 'とおの', 'とかしき', 'とかち', 'とき', 'ときがわ', 'とぎつ', 'とくしま', 'とくのしま', 'とこなめ', 'ところ', 'ところざわ', 'とさ', 'とさしみず', 'とざわ', 'としま', 'とす', 'とだ', 'とちぎ', 'とつか', 'とつかわ', 'とっとり', 'となき', 'となみ', 'とね', 'とのしょう', 'とば', 'とばた', 'とびしま', 'とべ', 'とまこまい', 'とまた', 'とままえ', 'とまり', 'とみおか', 'とみか', 'とみぐすく', 'とみさと', 'とみや', 'とめ', 'とやま', 'とよあけ', 'とようら', 'とよおか', 'とよかわ', 'とよころ', 'とよさと', 'とよた', 'とよとみ', 'とよなか', 'とよね', 'とよの', 'とよはし', 'とよひら', 'とよやま', 'とりで', 'とわだ', 'とんだばやし', 'ないえ', 'なおしま', 'なか', 'なかい', 'ながい', 'ながいずみ', 'なかうおぬま', 'ながおか', 'ながおかきょう', 'なかがみ', 'なかがわ', 'なかぎょう', 'なかぐすく', 'ながくて', 'なかこま', 'ながさき', 'なかさつない', 'なかしべつ', 'なかじま', 'ながしま', 'ながす', 'ながた', 'なかたど', 'なかたね', 'なかつ', 'なかつがる', 'なかつがわ', 'ながと', 'なかとさ', 'なかどまり', 'ながとろ', 'なかとんべつ', 'なかにいかわ', 'ながぬま', 'なかの', 'ながの', 'なかのじょう', 'なかのと', 'ながのはら', 'ながはま', 'なかはら', 'なかふらの', 'なかま', 'なかむら', 'なかやま', 'ながよ', 'ながら', 'ながれやま', 'ながわ', 'なぎ', 'なきじん', 'なぎそ', 'なご', 'なごみ', 'なごや', 'なす', 'なすからすやま', 'なすしおばら', 'なだ', 'なちかつうら', 'なとり', 'ななえ', 'ななお', 'なにわ', 'なは', 'なはり', 'なばり', 'なみえ', 'なめがた', 'なめがわ', 'なめりかわ', 'なよろ', 'なら', 'ならしの', 'ならは', 'なりた', 'なるさわ', 'なると', 'なんかん', 'なんこく', 'なんじょう', 'なんたん', 'なんと', 'なんぶ', 'なんぽろ', 'なんもく', 'なんよう', 'にいがた', 'にいかっぷ', 'にいざ', 'にいじま', 'にいはま', 'にいみ', 'にかほ', 'にき', 'にし', 'にしあいづ', 'にしあわくら', 'にしいず', 'にしいわい', 'にしうすき', 'にしうわ', 'にしお', 'にしおきたま', 'にしおこっぺ', 'にしかすがい', 'にしかつら', 'にしかわ', 'にしかん', 'にしかんばら', 'にしき', 'にしきょう', 'にしごう', 'にししらかわ', 'にしそのぎ', 'にしたま', 'にしつがる', 'にしとうきょう', 'にしなり', 'にしのおもて', 'にしのしま', 'にしのみや', 'にしはら', 'にしまつうら', 'にしむらやま', 'にしむろ', 'にしめや', 'にしめら', 'にしもろかた', 'にしやつしろ', 'にしよどがわ', 'にしわが', 'にしわき', 'にせこ', 'にた', 'にちなん', 'にっこう', 'にっしん', 'にのへ', 'にのみや', 'にほんまつ', 'にゅう', 'にゅうぜん', 'によどがわ', 'にらさき', 'にわ', 'ぬかた', 'ぬまた', 'ぬまづ', 'ねば', 'ねむろ', 'ねやがわ', 'ねりま', 'のおがた', 'のぎ', 'のざわおんせん', 'のしろ', 'のせ', 'のせがわ', 'のだ', 'のつけ', 'のと', 'ののいち', 'のべおか', 'のへじ', 'のぼりべつ', 'のみ', 'はいばら', 'はえばる', 'はが', 'はかた', 'はぎ', 'はくい', 'はくさん', 'はくば', 'はこだて', 'はこね', 'はさみ', 'はしかみ', 'はしま', 'はしもと', 'はすだ', 'はた', 'はだの', 'はちおうじ', 'はちじょう', 'はちのへ', 'はちまんたい', 'はちろうがた', 'はつかいち', 'はっぽう', 'はとやま', 'はなまき', 'はなみがわ', 'はなわ', 'はにしな', 'はにゅう', 'はびきの', 'はぼろ', 'はまきた', 'はまだ', 'はまとんべつ', 'はまなか', 'はままつ', 'はむら', 'はやかわ', 'はやしま', 'はやま', 'はやみ', 'はら', 'はりま', 'はんだ', 'ばんだい', 'ばんどう', 'はんなん', 'はんのう', 'びえい', 'ひえづ', 'ひおき', 'ひがし', 'ひがしあがつま', 'ひがしいず', 'ひがしいばらき', 'ひがしうすき', 'ひがしうら', 'ひがしおうみ', 'ひがしおおさか', 'ひがしおきたま', 'ひがしかがわ', 'ひがしかぐら', 'ひがしかわ', 'ひがしかんばら', 'ひがしくしら', 'ひがしくにさき', 'ひがしくるめ', 'ひがししらかわ', 'ひがしすみよし', 'ひがしそのぎ', 'ひがしたがわ', 'ひがしちくま', 'ひがしちちぶ', 'ひがしつがる', 'ひがしどおり', 'ひがしなだ', 'ひがしなり', 'ひがしなるせ', 'ひがしね', 'ひがしひろしま', 'ひがしまつうら', 'ひがしまつしま', 'ひがしまつやま', 'ひがしみよし', 'ひがしむらやま', 'ひがしむろ', 'ひがしもろかた', 'ひがしやま', 'ひがしやまと', 'ひがしよしの', 'ひがしよどがわ', 'ひかり', 'ひかわ', 'ひき', 'ひこね', 'ひさやま', 'ひじ', 'びぜん', 'ひた', 'ひだ', 'ひだか', 'ひだかがわ', 'ひたち', 'ひたちおおた', 'ひたちおおみや', 'ひたちなか', 'ひちそう', 'ぴっぷ', 'ひとよし', 'ひの', 'ひのえまた', 'ひのかげ', 'ひので', 'ひのはら', 'びばい', 'びふか', 'びほろ', 'ひみ', 'ひめじ', 'ひめしま', 'ひやま', 'ひゅうが', 'ひょうご', 'ひらいずみ', 'ひらお', 'ひらかた', 'ひらかわ', 'ひらた', 'ひらつか', 'ひらど', 'びらとり', 'ひらない', 'ひらの', 'ひらや', 'ひろお', 'ひろかわ', 'ひろがわ', 'ひろさき', 'ひろしま', 'ひろの', 'ふえふき', 'ふかうら', 'ふかがわ', 'ふかや', 'ふくい', 'ふくおか', 'ふくさき', 'ふくしま', 'ふくち', 'ふくちやま', 'ふくつ', 'ふくやま', 'ふくろい', 'ふじ', 'ふじいでら', 'ふじえだ', 'ふじおか', 'ふじかわ', 'ふじかわぐちこ', 'ふじさき', 'ふじさと', 'ふじさわ', 'ふじつ', 'ふじのみや', 'ふしみ', 'ふじみ', 'ふじみの', 'ふじよしだ', 'ぶぜん', 'ふそう', 'ふだい', 'ふたば', 'ふたみ', 'ふちゅう', 'ふっさ', 'ふっつ', 'ふない', 'ふながた', 'ふなはし', 'ふなばし', 'ふらの', 'ふるう', 'ふるどの', 'ふるびら', 'ふわ', 'ぶんきょう', 'ぶんごおおの', 'ぶんごたかだ', 'へきなん', 'へぐり', 'べつかい', 'べっぷ', 'ほうき', 'ほうす', 'ほうだつしみず', 'ほうふ', 'ほくえい', 'ほくと', 'ほくりゅう', 'ほこた', 'ほどがや', 'ほろいずみ', 'ほろかない', 'ほろのべ', 'ほんじょう', 'ほんべつ', 'まいづる', 'まいばら', 'まえばし', 'まきのはら', 'まくべつ', 'まくらざき', 'まさき', 'ましき', 'ましけ', 'ましこ', 'ますだ', 'まちだ', 'まつうら', 'まつえ', 'まっかり', 'まつかわ', 'まつさか', 'まつざき', 'まつしげ', 'まつしま', 'まつだ', 'まつど', 'まつの', 'まつばら', 'まつぶし', 'まつまえ', 'まつもと', 'まつやま', 'まなづる', 'まにわ', 'まむろがわ', 'まるがめ', 'まるもり', 'まんのう', 'みい', 'みうら', 'みえ', 'みかさ', 'みかた', 'みかたかみなか', 'みかわ', 'みき', 'みくらじま', 'みさき', 'みささ', 'みさと', 'みさわ', 'みしま', 'みずかみ', 'みずなみ', 'みずほ', 'みずま', 'みずまき', 'みたか', 'みたけ', 'みたね', 'みつえ', 'みつけ', 'みと', 'みとよ', 'みどり', 'みなかみ', 'みなと', 'みなの', 'みなべ', 'みなまた', 'みなみ', 'みなみあいき', 'みなみあいづ', 'みなみあきた', 'みなみあしがら', 'みなみあそ', 'みなみあるぷす', 'みなみあわじ', 'みなみいず', 'みなみいせ', 'みなみうおぬま', 'みなみうわ', 'みなみえちぜん', 'みなみおおすみ', 'みなみおぐに', 'みなみかわち', 'みなみかんばら', 'みなみきゅうしゅう', 'みなみこま', 'みなみさいたま', 'みなみさく', 'みなみさつま', 'みなみさんりく', 'みなみしまばら', 'みなみそうま', 'みなみだいとう', 'みなみたね', 'みなみちた', 'みなみつがる', 'みなみつる', 'みなみふらの', 'みなみぼうそう', 'みなみまき', 'みなみまつうら', 'みなみみのわ', 'みなみむろ', 'みなみやましろ', 'みぬま', 'みね', 'みの', 'みのお', 'みのかも', 'みのぶ', 'みのわ', 'みはま', 'みはら', 'みはる', 'みぶ', 'みふね', 'みほ', 'みま', 'みまさか', 'みまた', 'みやき', 'みやぎ', 'みやぎの', 'みやけ', 'みやこ', 'みやこじま', 'みやこのじょう', 'みやざき', 'みやしろ', 'みやだ', 'みやづ', 'みやま', 'みやまえ', 'みやわか', 'みょうこう', 'みょうざい', 'みょうどう', 'みよし', 'みよた', 'むかわ', 'むぎ', 'むこう', 'むさしの', 'むさしむらやま', 'むつ', 'むつざわ', 'むなかた', 'むらかみ', 'むらた', 'むらやま', 'むろと', 'むろらん', 'めいとう', 'めいわ', 'めぐろ', 'めなし', 'めむろ', 'もおか', 'もがみ', 'もじ', 'もせうし', 'もてぎ', 'もとす', 'もとぶ', 'もとみや', 'もとやま', 'もとよし', 'もばら', 'もり', 'もりおか', 'もりぐち', 'もりや', 'もりやま', 'もろつか', 'もろやま', 'もんべつ', 'やいた', 'やいづ', 'やえせ', 'やえやま', 'やお', 'やおつ', 'やかげ', 'やくしま', 'やくも', 'やしお', 'やす', 'やず', 'やすおか', 'やすぎ', 'やすだ', 'やちまた', 'やちよ', 'やつしろ', 'やとみ', 'やない', 'やないづ', 'やながわ', 'やはたにし', 'やはたひがし', 'やはば', 'やひこ', 'やぶ', 'やぶき', 'やま', 'やまえ', 'やまが', 'やまがた', 'やまきた', 'やまぐち', 'やまこし', 'やましな', 'やまぞえ', 'やまだ', 'やまつり', 'やまと', 'やまとこおりやま', 'やまとたかだ', 'やまなかこ', 'やまなし', 'やまのうち', 'やまのべ', 'やまべ', 'やまもと', 'やめ', 'やわた', 'やわたはま', 'ゆあさ', 'ゆうき', 'ゆうすい', 'ゆうばり', 'ゆうふつ', 'ゆうべつ', 'ゆがわ', 'ゆがわら', 'ゆくはし', 'ゆざ', 'ゆざわ', 'ゆすはら', 'ゆに', 'ゆのまえ', 'ゆふ', 'ゆら', 'ゆりはま', 'ゆりほんじょう', 'よいち', 'ようろう', 'よこしばひかり', 'よこすか', 'よこぜ', 'よこて', 'よこはま', 'よさ', 'よさの', 'よしおか', 'よしか', 'よしかわ', 'よしだ', 'よしとみ', 'よしの', 'よしのがり', 'よしのがわ', 'よしみ', 'よっかいち', 'よつかいどう', 'よどがわ', 'よなぐに', 'よなご', 'よなばる', 'よねざわ', 'よみたん', 'よもぎた', 'よりい', 'よろん', 'らうす', 'らんこし', 'らんざん', 'りくぜんたかた', 'りくべつ', 'りしり', 'りしりふじ', 'りっとう', 'りふ', 'りゅうおう', 'りゅうがさき', 'るすつ', 'るもい', 'れいほく', 'れぶん', 'ろくのへ', 'ろっかしょ', 'わが', 'わかさ', 'わかば', 'わかばやし', 'わかまつ', 'わかやま', 'わき', 'わくや', 'わけ', 'わこう', 'わじま', 'わたらい', 'わたり', 'わづか', 'わっかない', 'わっさむ', 'わどまり', 'わのうち', 'わらび'
];

const generateName = () => {
  const index = Math.floor(Math.random() * cityList.length);
  return cityList[index];
}

module.exports = generateName;