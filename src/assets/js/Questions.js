var quizVerb = "";
var quizStr = "Quiz";
var quizVerbAC = "AC";
var quizVerbAL = "AL";
var quizVerbAF = "AF";
var quizVerbMC = "MC";

function chatSetupQuiz(verb){
  quizVerb = verb;
  keepMessages = true;
  load("IrrQuiz");
}

var irregularVerbsQuiz = [
  {question: "Cad eile ____ ___________ sé? (modh coinníollach)", answer: "a déarfadh"},
  {question: "Ní féidir le hAntoin a bhéal a choimeád dúnta. ___________ sé amach aon rud a thiocfadh isteach ina cheann. (modh coinníollach)", answer: "déarfadh"},
  {question: "____ ___________ aon rud faoin mí-ádh a bhain dó níos mó. (briathar saor, aimsir láithreach, diúltach)", answer: "ní deirtear"},
  {question: "Cad a ___________ siad nuair a chuala siad an méid sin? ", answer: "dúirt"},
  {question: "___________ gur siúinéir iontach í. (aimsir láithreach, briathar saor) ", answer: "deirtear"},
  {question: "", answer: ""},
  {question: "", answer: ""},
  {question: "", answer: ""},
  {question: "", answer: ""},
  {question: "", answer: ""},
  {question: "", answer: ""},
];
var abairQuiz = [
  {question: "____ ___________ mé é sin ná é. (aimsir chaite, diúltach)", answer: "ní dúirt"},
  {question: "____ ___________ éinne é sin. (aimsir chaite, diúltach)", answer: "ní dúirt"},
  {question: "Bhí a fhios agam go maith _____ ___________ Deirdre é sin? (aimsir chaite, diúltach)", answer: "nach ndúirt"},
  {question: "____ ___________ mé é sin leat na blianta ó sin? (aimsir chaite, diúltach)", answer: "nach ndúirt"},
  {question: "Cad eile ____ ___________ sé? (modh coinníollach)", answer: "a déarfadh"},
  {question: "___________ gur siúinéir iontach í. (aimsir láithreach, briathar saor) ", answer: "deirtear"},
  {question: "___________ mé leat é anocht. (aimsir fháistineach)", answer: "déarfaidh"},
  {question: "_____ ___________Máiréad aon rud faoi go dtí go mbeidh sí lán-chinnte. (aimsir fháistineach, diúltach)", answer: "ní déarfaidh"},
  {question: "____ ___________ go bhfuil fios a ghnó aige? (tú, modh coinníollach, dearfach)", answer: "an ndéarfá"},
  {question: "Nach é sin a ___________ leat? (mé, aimsir láithreach)", answer: "deirim"},
  {question: "___________ madraí an bhaile é sin leat. (modh coinníollach)", answer: "déarfadh"},
  {question: "___________ go bhfuil sé glan as a mheabhair má thagann an scéal sin amach faoi. (aimsir fháistineach, briathar saor)", answer: "déarfar"},
  {question: "____ ___________ faic faoi sin go fóill? (sinn, aimsir fháistineach)", answer: "ní déarfaimid"},
  {question: "____ ___________ go bhfuil tuairim faoin spéir acu faoi cad atá i ndán dóibh. (mé, modh coinníollach, diúltach)", answer: "ní déarfainn"},
  {question: "____ ___________ aon rud faoin mí-ádh a bhain dó níos mó. (briathar saor, aimsir láithreach, diúltach)", answer: "ní deirtear"},
  {question: "____ ___________ aon rud go dtí go mbeidh deireadh ráite acu sin. (sinn, aimsir fháistineach, diúltach) ", answer: "ní déarfaimid"},
  {question: "Cad a ___________ siad nuair a chuala siad an méid sin? ", answer: "dúirt"},
  {question: "Ní féidir le hAntoin a bhéal a choimeád dúnta. ___________ sé amach aon rud a thiocfadh isteach ina cheann. (modh coinníollach)", answer: "déarfadh"},
  {question: "Dúirt bean liom ____ ___________ bean léi. (aimsir chaite, an fhoirm spleách)", answer: "go ndúirt"},
  {question: "“Bíonn súil le muir, ach ní bhíonn súil le huaigh”, a ___________. (briathar saor, aimsir láithreach)", answer: "deirtear"},
];

var faighQuiz = [
  {question: "___________ mé an méid a bhí uaim ar deireadh thiar thall.", answer: "fuair", answer2: "gheobhaidh"},
  {question: "___________ an spreagadh ó na moltóirí sa chéad bhabhta den gcomórtas. (sinn, aimsir chaite)", answer: "fuaireamar", answer2: "fuair muid"},
  {question: "___ ___________ siad leath den mhéid a bhí ag dul dóibh? (diúltach, aimsir chaite)", answer: "ní bhfuair"},
  {question: "___  ___________ tú aon deis chun an obair a chríochnú? (ceist, aimsir chaite)", answer: "an bhfuair"},
  {question: "____ ___________ siad gach a raibh ag teastáil uatha. (diúltach, aimsir chaite)", answer: "ní bhfuair"},
  {question: "______ ___________ sibh lón san áit a bhfuil sibh ag obair ann? (aimsir láithreach) ", answer: "an bhfaigheann"},
  {question: "______ ___________ tú do chuid feola ón mbúistéir sin? (aimsir láithreach)", answer: "an bhfaigheann"},
  {question: "____ ___________gach éinne a dhéanann obair dheonach san áit aitheantas foirmeálta ina dtuairisc bhliantúil? (diúltach, aimsir láithreach)", answer: "an bhfaigheann"},
  {question: "____ ___________ siad tuarastal ard ón gcomhlacht a bhfuil siad ag obair dóibh? (dearfach, aimsir láithreach)", answer: "an bhfaigheann"},
  {question: "___________ mé é sin duit an chéad rud maidin amárach.", answer: "gheobhaidh"},
  {question: "___________ sé breith a bhéil féin ag deireadh an lae. (dearfach)", answer: "gheobhaidh"},
  {question: "___________ rud éigin le n-ithe go luath anois. (sinn, aimsir fháistineach)", answer: "gheobhaimid", answer2: "gheobhaidh muid"},
  {question: "___________ réidh leis na cinn sin go luath. (briathar saor, aimsir fháistineach)", answer: "gheofar"},
  {question: "______ ___________ é sin ar ais dom chomh luath agus is féidir leat? (tú, aimsir fháistineach) ", answer: "an bhfaighfeá"},
  {question: "___________ ceann nua murach go bhfuil mé an-tógtha leis an sean-cheann seo. (mé, modh coinníollach)", answer: "gheobhainn"},
  {question: "____ ___________an duais fiú muna mbeadh istigh ar an gcomórtas ach iad féin. (diúltach, modh coinníollach)", answer: "ní bhfaighidís", answer2: "ní bhfaigheadh siad"},
  {question: "____ ___________ éinne beo an ceann is fearr ar Mhaebh an lá sin? (diúltach, modh coinníollach)", answer: "ní bhfaigheadh"},
  {question: "___________ ceann nua duit dá mbeadh an ceann sin briste. (mé)", answer: "gheobhainn"},
  {question: "Níl a fhios agam ach ___________ mé amach duit é.", answer: "gheobhaidh"},
  {question: "___________ siad bróga nua sa siopa.", answer: "fuair"},
];

var abairAimsirChaiteQuestions = [
  {question: "___________ sí go raibh sé ar fheabhas.", answer: "dúirt", hint1: "dearfach, aimsir chaite"},
  {question: "___________ Liam go raibh sé tinn.", answer: "dúirt", hint1: "dearfach"},
  {question: "___________ na buachaillí nach raibh éinne eile ann.", answer: "dúirt", hint1: "dearfach"},
  {question: "___________ (sinn) nár chualamar an scéal sin riamh.", answer: "dúramar", hint1: "dearfach"},
  {question: "___________ mé é sin leat cheana.", answer: "dúirt", hint1: "dearfach"},
  {question: "___________ bean liom go ndúirt bean léi.", answer: "dúirt", hint1: "dearfach"},
  {question: "___________ (sinn) ár bpaidreacha ina dhiaidh sin.", answer: "dúramar", hint1: "dearfach"},
  {question: "___________ Síle go raibh an scéal sin fíor.", answer: "dúirt", hint1: "dearfach"},
  {question: "___________ sé go raibh brón air.", answer: "dúirt", hint1: "dearfach"},
  {question: "B’shin é a ___________ mé leat.", answer: "dúirt", hint1: "dearfach"}
];

var abairAimsirChaiteNi = [
  {question: "____ ___________ mé a leithéid riamh.", answer: "ní dúirt"},
  {question: "____ ___________ éinne é sin liom.", answer: "ní dúirt"},
  {question: "____ ___________ sí faic.", answer: "ní dúirt"},
  {question: "____ ___________ (sinn) go rabhamar bréan bailithe de.", answer: "ní dúramar"},
  {question: "____ ___________ tú é sin liom riamh.", answer: "ní dúirt"},
  {question: "____ ___________ Deirdre aon rud faoi.", answer: "ní dúirt"},
  {question: "____ ___________ (sinn) faic le héinne.", answer: "ní dúramar"},
  {question: "____ ___________ siad go raibh ocras orthu.", answer: "ní dúirt"},
  {question: "____ ___________ sibh aon rud liom.", answer: "ní dúirt"},
  {question: "____  ___________ tú é sin linn ag an am.", answer: "ní dúirt"}
];

var abairACBriatharSaor = [
  {question: "___________ gur fear láidir a bhí ann ach níl a fhios ag éinne.", answer: "dúradh"},
  {question: "___________ gur ghoid sí é ach ní chreidim é sin.", answer: "dúradh"},
  {question: "____ ___________ aon rud mar sin sa chúirt.", answer: "ní dúradh"},
  {question: "____ ___________ riamh go raibh sé béalscaoilteach.", answer: "ní dúradh"},
  {question: "___________ go raibh sé beo bocht nuair a cailleadh é.", answer: "dúradh"},
  {question: "____ ___________ aon rud faoina cumas ceoil.", answer: "ní dúradh"},
  {question: "___________ go raibh sé i ndeireadh na feide faoin am a fuair siad é.", answer: "dúradh"},
  {question: "___________ nach raibh maith na muice lena deartháir riamh.", answer: "dúradh"},
  {question: "___________ gur tógadh go dealbh bocht iad.", answer: "dúradh"},
  {question: "___________ go raibh sí ar buile nuair a chuala sí é.", answer: "dúradh"}
];

var abairACCeisteach = [
  {question: "____ ___________ tú leis go raibh tú tinn?", answer: "an ndúirt", answer2:"nach ndúirt"},
  {question: "____ ___________ (sinn) leat go rabhamar ag dul ar laethanta saoire?", answer: "an ndúramar", answer2: "nach ndúramar"},
  {question: "____ ___________ mé é sin leat cheana?", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "____ ___________ tú go raibh tú críochnaithe?", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "___________ mé leat é míle is céad uair cheana?", answer: "", answer2: "nach ndúirt"},
  {question: "____ ___________ é sin i gcónaí? (Briathar Saor)", answer: "", answer2: "nach ndúradh"},
  {question: "____ ___________ (sinn) go mbeimis ag dul ann amárach?", answer: "an ndúramar", answer2: "nach ndúramar"},
  {question: "____ ___________ sé aon rud leat?", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "____ ___________ siad aon rud leat faoi na fadhbanna a bhí acu?", answer: "an ndúirt", answer2: "nach ndúirt"}
];

var abairACSpleach = [
  {question: "Tá mé cinnte ____ ___________ siad é. (dearfach)", answer: "go ndúirt"},
  {question: "Tá mé cinnte ____ ___________ siad é. (diúltach)", answer: "nach ndúirt"},
  {question: "An é ____ ___________ tú aon rud leo? (diúltach)", answer: "nach ndúirt"},
  {question: "D’admhaigh sí ____ ___________ sí é. (dearfach)", answer: "go ndúirt"},
  {question: "Ní dóigh liom ____ ___________ siad a leithéid. (dearfach)", answer: "go ndúirt"},
  {question: "Tá mé lánchinnte ____ ___________(sinn) é sin riamh. (diúltach)", answer: "nach ndúramar"},
  {question: "Tá a fhios ag Dia ____ ___________ sí é glan amach. (dearfach)", answer: "go ndúirt"},
  {question: "Dúirt bean liom ____ ___________ bean léi (dearfach)", answer: "go ndúirt"},
  {question: "Shéan siad ____ ___________siad aon rud mar sin (dearfach)", answer: "go ndúradar"},
  {question: "Is cuimhin liom ____ ___________sí aon rud faoi ag an am (diúltach)", answer: "nach ndúirt"},
];

var abairACCoibhneasta = [
  {question: "___________ Seán liom go raibh an-lá acu.", answer: "dúirt"},
  {question: "____ ___________ mé a leithéid riamh i mo shaol.", answer: "ní dúirt"},
  {question: "____ ___________ tú é sin le héinne eile?", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "____ ___________ mé leat gan é sin a rá go brách arís!", answer: "nach ndúirt"},
  {question: "Tá súil agam  ____ ___________ tú leis é. (dearfach)", answer: "go ndúirt"},
  {question: "Tá súil agam  ____ ___________ tú a leithéid sin léi siúd (diúltach)", answer: "nach ndúirt"},
  {question: "Tá gach ____ ___________ siad fíor is cosúil.", answer: "a dúirt"},
  {question: "____ ___________ tú inné nach raibh spéis dá laghad agat ann? (diúltach)", answer: "nach ndúirt"},
  {question: "Ní dóigh liom ____ ___________ mé é sin.", answer: "go ndúirt"},
  {question: "___________ i gcónaí gur tháinit an bhean sídhe nuair a bhí duine i mbéal a bháis.", answer: "dúradh"}
];

var abairACExtraQuestions = [
  {question: "___________ Seán liom go raibh an-lá acu. ", answer: "dúirt"},
  {question: "____ ___________ mé a leithéid riamh i mo shaol.", answer: "ní dúirt"},
  {question: "____ ___________ tú é sin le héinne eile? ", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "____ ___________ mé leat gan é sin a rá go brách arís! ", answer: "nach ndúirt"},
  {question: "Tá súil agam  ____ ___________ tú leis é. (dearfach)", answer: "go ndúirt"},
  {question: "Tá súil agam  ____ ___________ tú a leithéid sin léi siúd (diúltach)", answer: "nach ndúirt"},
  {question: "Tá gach ____ ___________ siad fíor is cosúil. ", answer: "a dúirt"},
  {question: "____ ___________ tú inné nach raibh spéis dá laghad agat ann? (diúltach)", answer: "nach ndúirt"},
  {question: "Ní dóigh liom ____ ___________ mé é sin.", answer: "go ndúirt"},
  {question: "___________ i gcónaí gur tháinit an bhean sídhe nuair a bhí duine i mbéal a bháis.", answer: "dúradh"}
];

var abairAimsirLaithreachQuestions = [
  {question: "___________ é sin i gcónaí (mé).", answer: "deirim"},
  {question: "___________ siad go bhfuil siad tuirseach de.", answer: "deir"},
  {question: "___________ siad go bhfuil sé go maith.", answer: "deir"},
  {question: "___________ sí go bhfuil gach duine críochnaithe.", answer: "deir"},
  {question: "___________ an rud céanna gach uair (sinn).", answer: "deirimid"},
  {question: "___________ Liam go bhfuil siad beagnach críochnaithe.", answer: "deir"},
  {question: "___________ gach duine é sin ach níl sé fíor.", answer: "deir"},
  {question: "___________ na manaigh paidreacha an chéad rud gach maidin.", answer: "deir"},
  {question: "___________ leat go bhfuil siad sásta (mé).", answer: "deirim"},
  {question: "___________ an rud ceart i gcónaí (sinn).", answer: "deirimid"}
];

var abairAimsirLaithreachNi = [
  {question: "____ ___________ mo chara rudaí mar sin riamh.", answer: "ní deir"},
  {question: "____ ___________ aon rud faoi riamh.", answer: "ní deirim"},
  {question: "____ ___________ siad go mbíonn siad míshásta.", answer: "ní deir"},
  {question: "____ ___________ na rudaí sin riamh (sinn).", answer: "ní deirimid"},
  {question: "____ ___________ aon rud ag an tús (sinn).", answer: "ní deirimid"},
  {question: "____ ___________ aon phaidreacha ar maidin (mé).", answer: "ní deirim"},
  {question: "____ ___________ Séamas aon rud faoin timpiste a tharla dó riamh.", answer: "ní deir"},
  {question: "____ ___________ siad aon rud má bhíonn siad faoi bhrú.", answer: "ní deir"},
  {question: "____ ___________ aon rud faoin eachtra le Deirdre riamh (sinn).", answer: "ní deirimid"},
  {question: "____ ___________ aon rud faoi le Daithí riamh (mé).", answer: "ní deirim"}
];

var abairALBriathorSaor = [
  {question: "___________ go bhfuil sé go maith ach níl a fhios agam faoi.", answer: "deirtear"},
  {question: "____ ___________ mar sin é i nGaeilge Uladh.", answer: "ní deirtear"},
  {question: "___________ go mbeidh samhradh maith againn ach níl a fhios ag éinne.", answer: "deirtear"},
  {question: "___________ go bhfuil gach rud an-daor sa siopa sin.", answer: "deirtear"},
  {question: "___________ go bhfuil Nóra an-mhaith ag Mata.", answer: "deirtear"},
  {question: "___________ go bhfuil seans maith ag Loch Garman Craobh na hÉireann a bhuachan i mbliana.", answer: "deirtear"},
  {question: "____ ___________ aon rud faoin mBreatimeacht níos mó.", answer: "ní deirtear"},
  {question: "___________ go mbeidh stoirm againn ag an deireadh seachtaine.", answer: "deirtear"},
  {question: "____ ___________ aon rud faoi sin níos mó.", answer: "ní deirtear"},
  {question: "____ ___________ mórán faoin easpa fostaíochta atá sa cheantar sin níos mó.", answer: "ní deirtear"}
];

var abairALCeisteach = [
  {question: "___________ é sin i mBéarla Shasana (dearfach, briathar saor).", answer: "an ndeirtear"},
  {question: "____ ___________ go bhfuil na taibléidí sin go dona don gcroí? (diúltach, briathar saor)", answer: "nach ndeirtear"},
  {question: "___________ go bhfuil sé sin as a mheabhar ar fad? (diúltach, briathar saor)", answer: "nach ndeirtear"},
  {question: "___________ aon rud faoin aighneas a bhí acu níos mó? (dearfach, briathar saor).", answer: "an ndeirtear"},
  {question: "___________ é sin rómhinic leat? (dearfach, mé).", answer: "an ndeirim"},
  {question: "___________ aon rud mícheart riamh (dearfach, mé).", answer: "an ndeirim"},
  {question: "____ ___________ sí é sin go minic? (diúltach).", answer: "nach ndeir"},
  {question: "____ ___________ é sin leo gach aon uair? (diúltach, sinn)", answer: "nach ndeirimid"},
  {question: "____ ___________ Seán go bhfuil siad an-sona san áit ina bhfuil siad? (diúltach).", answer: "nach ndeir"},
  {question: "____ ___________ gach duine go bhfuil mí-ádh ag dul leis an teach sin? (diúltach).", answer: "nach ndeir"}
];

var abairALSpleach = [
  {question: "Ceapaim ____ ___________ é sin. (briathar saor)", answer: "go ndeirtear", answer2: "nach ndeirtear"},
  {question: "Is dóigh liom ____ ___________ siad é sin go minic.", answer: "go ndeir", answer2: "nach ndeir"},
  {question: "Deir Síle ____ ___________ Máire an rud céanna? ", answer: "go ndeir", answer2: "nach ndeir"},
  {question: "An bhful sé fíor ____ ___________ Rónán go bhfuil sé chun éirí as? (dearfach)", answer: "go ndeir"},
  {question: "Tá mé cinnte ____ ___________ é sin riamh. (briathar saor, diúltach)", answer: "nach ndeirtear"},
  {question: "Deir sí ____ ___________ sí rudaí mar sin riamh. (diúltach)", answer: "nach ndeir"},
  {question: "Tá sé ag séanadh ____ ___________ sé a leithéid lena rang go rialta.", answer: "go ndeir"},
  {question: "Is é an trua ____ ___________é sin níos minicí. (briathar saor, diúltach)", answer: "nach ndeirtear"},
  {question: "An bhfuil tú ag rá liom ____ ___________rudaí mar sin riamh? (briathar saor)", answer: "go ndeirtear"}
];

var abairALCoibhneasta = [
  {question: "Scríobh síos go beacht gach _____ _______ ____ leat. (mé) ", answer: "a ndeir mé"},
  {question: "Ní bhíonn gach ____ ___________ an fear sin fíor i gcónaí.", answer: "a ndeir"},
  {question: "Níl ach plámas i ngach ____ ___________ sé siúd. ", answer: "a ndeir"},
  {question: "Tá gach ____ ______ _____ leat fíor (lom na fírinne atá ann). (sinn)", answer: "a ndeir muid"},
  {question: "Creid uaimse é. Tá gach  ____ ___________ sí fíor. ", answer: "a ndeir"},
  {question: "Cheapfá ón méid  ____ ___________ faoi go bhfuil sé ar an bhfadhb is mó riamh. (briathar saor)", answer: "a ndeirtear"},
  {question: "Cé go mbíonn siad ag ligean orthu féin go mbíonn siad ag éisteacht imíonn gach  ____ ___________ tú le gaoth. ", answer: "a ndeir"},
  {question: "An fíor ____ ___________ faoi Sheán? (briathar saor)", answer: "a ndeirtear"},
  {question: "Éist go cúramach le gach ____ ___________ leat. (briathar saor)", answer: "a ndeirtear"},
  {question: "Tá gach ______ ___________ faoi fíor. (briathar saor) ", answer: "a ndeirtear"},
];

var abairALExtraQuestions = [
  {question: "_____ Bríd é sin liom go minic. ", answer: "deir"},
  {question: "____ ___________ a leithéid sin faoi riamh (briathar saor, diúltach).", answer: "ní deirtear"},
  {question: "Creidim gach ____ ___________ tú liom. ", answer: "a deir"},
  {question: "____ ___________ siad rudaí mar sin rómhinic. (diúltach)", answer: "a ndeir muid"},
  {question: "____ ___________ Mairéad go bhfuil sé go maith? ", answer: "an ndeir"},
  {question: "___________ paidreacha gach lá. (mé)", answer: "deirim"},
  {question: "___________ gach duine gur bhain siad taitneamh as. ", answer: "deir"},
  {question: "Tá a fhios agam ____ ___________ é sin ach ní chreidim focal de. (briathar saor)", answer: "go ndeirtear"},
  {question: "____ ___________ aon rud sa leabhar faoi? (briathar saor)", answer: "an ndeirtear"},
  {question: "Cad a ___________ i gcónaí. (sinn) ", answer: "deirimid", answer2: "deir muid"}
];

var abairAFQuestions = [
  {question: "___________ mé leat é níos déanaí.", answer: "déarfaidh"},
  {question: "___________ siad linn é nuair a thiocfaidh siad isteach.", answer: "déarfaidh"},
  {question: "___________ Seán glan amach é, táim cinnte.", answer: "déarfaidh"},
  {question: "___________ leo é níos déanaí. (sinn)", answer: "déarfaimid"},
  {question: "Éist anois agus ___________ Brian beag an dán atá aige.", answer: "déarfaidh"},
  {question: "___________ mo mháthair liom é gan dabht.", answer: "déarfaidh"},
  {question: "___________ siad go bhfuil tú as do mheabhair má dhéanann tú é sin.", answer: "déarfaidh"},
  {question: "___________ siad rud éigin deas faoi, is dócha.", answer: "déarfaidh"},
  {question: "___________ Seán leat nach bhfuil aon fhadhb aige.", answer: "déarfaidh"},
  {question: "___________ na cailíní nach bhfuil siad sásta leis an áit.", answer: "déarfaidh"}
];

var abairAFNi = [
  {question: "____ ___________ mé é sin le héinne.", answer: "ní déarfaidh"},
  {question: "____ ___________ Micheál é sin le Nóra, tá mé cinnte.", answer: "ní déarfaidh"},
  {question: "____ ___________ faic leis go dtí go mbeidh sé críochnaithe ar fad. (sinn)", answer: "ní déarfaimid"},
  {question: "____ ___________ mé faic le Brídín go fóill.", answer: "ní déarfaidh"},
  {question: "____ ___________ leis é go fóill. (sinn)", answer: "ní déarfaimid"},
  {question: "____ ___________ mise faic faoi má choimeádann tusa do bhéal dúnta.", answer: "ní déarfaidh"},
  {question: "____ ___________ siadsan aon rud leat.", answer: "ní déarfaidh"},
  {question: "____ ___________ éinne é sin leat.", answer: "ní déarfaidh"},
  {question: "____ ___________ mé a thuilleadh faoi. Tá mo dhóthain ráite agam.", answer: "ní déarfaidh"},
  {question: "____ ___________ é sin leis go brách. (sinn)", answer: "ní déarfaimid"},
];

var abairAFBriatharSaor = [
  {question: "___________ go bhfuil tú leisciúil muna gcríochnaíonn tú é.", answer: "déarfar"},
  {question: "____ ___________ an Coróin Mhuire ar a shon ar a hocht anocht.", answer: "déarfar"},
  {question: "____ ___________ é sin os ard go brách. (diúltach)", answer: "ní déarfar"},
  {question: "___________ go leor faoi ach ní dhéanfar faic mar gheall air.", answer: "déarfar"},
  {question: "___________ gur cur amú airgid atá ann muna n-éiríonn leis.", answer: "déarfar"},
  {question: "____ ___________ aon rud faoin ar tharla. (diúltach)", answer: "ní déarfar"},
  {question: "____ ___________ go brách gur air féin a bhí an locht. (diúltach)", answer: "ní déarfar"},
  {question: "___________ gur as do mheabhar atá tú má dhéanann tú é sin.", answer: "déarfar"},
  {question: "Sin é an scéal a cuireadh amach agus ____ ___________ a mhalairt go brách. (diúltach)", answer: "ní déarfar"},
  {question: "___________ go bhfuil an fhírinne searbh.", answer: "déarfar"}
];

var abairAFCeisteach = [
  {question: "___ ___________ tú liom é chomh luath is a chloiseann tú faoi? (diúltach)", answer: "nach ndéarfaidh"},
  {question: "____ ___________ tú rud éigin faoi ag an díospóireacht anocht? (dearfach)", answer: "an ndéarfaidh"},
  {question: "___________ nach fiú tráithnín é i gceann cúpla bliain eile? (dearfach)", answer: "an ndéarfaidh"},
  {question: "___________ sé é sin, dar leat? (dearfach).", answer: "an ndéarfaidh"},
  {question: "___________ tú rud éigin leis faoin eachtra? (diúltach).", answer: "nach ndéarfaidh"},
  {question: "___________ leis é anocht? (sinn).", answer: "an ndéarfaimid"},
  {question: "____ ___________ go raibh dul amú air? (diúltach, briathar saor).", answer: "nach ndéarfar"},
  {question: "____ ___________ siad nach raibh an t-am acu é a dhéanamh? (dearfach)", answer: "an ndéarfaidh"},
  {question: "____ ___________ amach anseo gur imríodh cos ar bolg air? (diúltach, briathar saor).", answer: "nach ndéarfar"},
  {question: "____ ___________ tú leis go bhfuil mé á lorg? (dearfach).", answer: "an ndéarfaidh"}
];

var abairAFSpleach = [
  {question: "Ceapaim ____ ___________ mé leis é anocht. (dearfach)", answer: "nach ndéarfaidh"},
  {question: "Ní dóigh liom ____ ___________ sé aon rud. (dearfach)", answer: "go ndéarfaidh"},
  {question: "Ceapaim ____ ___________ a thuilleadh faoi? (diúltach, briathar saor) ", answer: "nach ndéarfar"},
  {question: "Tá a fhios agam go maith ____ ___________ Marc aon rud faoi? (diúltach)", answer: "nach ndéarfaidh"},
  {question: "Tá gach éinne a rá ____ ___________ Seán anocht é. (dearfach)", answer: "go ndéarfaidh"},
  {question: "Fan  ____ ___________ mé leat é. (dearfach) ", answer: "go ndéarfaidh"},
  {question: "Táim ag fanacht ____ ___________ sí liom é. (dearfach))", answer: "go ndéarfaidh"},
  {question: "Táim den tuairim ____ ___________ aon rud faoi anocht. (diúltach, briathar saor)", answer: "nach ndéarfar"},
  {question: "Tá mé á rá leat ____ ___________sí aon rud leat go brách. (briathar saor, diúltach)", answer: "nach ndéarfaidh"},
  {question: "Ní dóigh liom ____ ___________mé aon rud. (dearfach)", answer: "go ndéarfaidh"},
];

var abairAFCoibhneasta = [
  {question: "Beidh gach _____ _______ sí leat thar a bheith tábhachtach.  ", answer: "a ndéarfaidh"},
  {question: "Éist lena ___________ siad leat.", answer: "ndéarfaidh"},
  {question: "Beidh gach ____ ___________ sí lán le féin-mholadh. ", answer: "a ndéarfaidh"},
  {question: "Ná creid ____ ___________ siad leat. (sinn)", answer: "a ndéarfaimid"},
  {question: "Scríobhfar síos gach  ____ ___________ tú leo. ", answer: "a ndéarfaidh"},
  {question: "Éist go cúramach lena  ___________ gach duine acu. ", answer: "ndéarfaidh"},
  {question: "Beidh gach  ____ ___________ sí spéisiúil. ", answer: "a ndéarfaidh"},
  {question: "Sin a ___________ mé don uair seo.", answer: "ndéarfaidh"},
  {question: "Cuirfidh ____ ___________ siad leat déistin ort. ", answer: "a ndéarfaidh"},
  {question: "Caithfimid a bheith cúramach faoi gach ______ ___________ leo. (sinn) ", answer: "a ndéarfaimid"},
];

var abairAFExtraQuestions = [
  {question: "____ ___________ mé aon rud leis. (diúltach)", answer: "ní déarfaidh"},
  {question: "___________ Máire liom é níos déanaí ar aon nós. (dearfach)", answer: "déarfaidh"},
  {question: "____ ___________ mé a thuilleadh faoi go dtí anocht. (diúltach)", answer: "ní déarfaidh"},
  {question: "____ ___________ tú le Seán go bhfuil gach duine tuirseach de? (dearfach)", answer: "an ndéarfaidh"},
  {question: "Tá súil agam ____ ___________ Róisín aon rud faoi. ", answer: "nach ndéarfaidh"},
  {question: "Déan nóta de gach ______ ___________ siad leat. ", answer: "a déarfaidh"},
  {question: "___________ nach bhfuil maith na muice leat muna gcríochnaíonn tú é. (briathar saor)", answer: "déarfar"},
  {question: "____ ___________ mé faic go fóill. (diúltach)", answer: "ní déarfaidh"},
  {question: "____ ___________ tú leis é nó an bhfágfaidh tú marbh é? (dearfach)", answer: "an ndéarfaidh"},
  {question: "____ ___________ go bhfuilimid sásta go leor leis?  ", answer: "an ndéarfaimid", answer2: "nach ndéarfaimid"}
];

var abairMCQuestions = [
  {question: "___________ go bhfuil sé imithe. (mé)", answer: "déarfainn"},
  {question: "___________ Séamas rud ar bith chun fáil amach as.", answer: "déarfadh"},
  {question: "Ní raibh sí istigh léi féin, mar a ___________. (tú)", answer: "déarfá"},
  {question: "___________ leat é dá mbeadh sé ar eolas againn. (sinn)", answer: "déarfaimis"},
  {question: "Cad a ___________ faoi sin, dar leat? (siad)", answer: "déarfaidís", answer2: "déarfadh siad"},
  {question: "Sin é a ___________ Síle dá mbeadh sí anseo.", answer: "déarfadh"},
  {question: "___________ go bhfuil gach duine críochnaithe anois. (mé)", answer: "déarfainn"},
  {question: "___________ go bhfuil sé sin ceart go leor anois. (mé)", answer: "déarfainn"},
  {question: "Ná bac leo sin. ___________ aon rud chun éalú amach as an trioblóid.", answer: "déarfaidís"},
  {question: "Cad a ___________ sibhse faoin bplean sin.", answer: "déarfadh"}
];

var abairMCNi = [
  {question: "____ ___________ go raibh an freagra sin ceart. (mé)", answer: "ní déarfainn"},
  {question: "____ ___________ an múinteoir rud mar sin.", answer: "ní déarfadh"},
  {question: "____ ___________ rud mar sin dá mbeadh an scéal ar fad agat. (tú)", answer: "ní déarfá"},
  {question: "____ ___________ mo chara is fearr rud mar sin liom.", answer: "ní déarfadh"},
  {question: "____ ___________ rud mar sin dá mbeidís glic. ", answer: "ní déarfaidís"},
  {question: "____ ___________ Nóra a leithéid riamh.", answer: "ní déarfadh"},
  {question: "____ ___________ go raibh sé caillte murach go bhfuil. (sinn)", answer: "ní déarfaimis", answer2: "ní déarfadh muid"},
  {question: "____ ___________ linn é ar ór ná ar airgead. (siad)", answer: "ní déarfaidís"},
  {question: "____ ___________ go raibh pingin ina phóca aige. (mé)", answer: "ní déarfainn"},
  {question: "____ ___________ Mairéad aon rud amach ós ard ag an gcruinniú. ", answer: "ní déarfadh"},
];

var abairMCBriatharSaor = [
  {question: "_____ ___________ é sin murach go bhfuil sé go han-dona. (diúltach)", answer: "ní déarfaí"},
  {question: "____ ___________ é sin dá mbeadh an aimsir go han-dona. (dearfach)", answer: "déarfaí"},
  {question: "____ ___________ é sin murach go bhfuil sé cinnte. (diúltach)", answer: "ní déarfaí"},
  {question: "___________ é dá mba ghá é a rá. (dearfach)", answer: "déarfaí"},
  {question: "____ ___________ é sin gan chúis. (diúltach)", answer: "ní déarfaí"},
  {question: "___________ glan amach é dá mbeadh sé fíor. ", answer: "déarfaí"},
  {question: "____ ___________ rud mar sin ag cruinniú foirmeálta. (diúltach)", answer: "ní déarfaí"},
  {question: "____ ___________ é dá mbeadh aon slí eile timpeall air. (diúltach)", answer: "ní déarfaí"},
  {question: "____ ___________ rud mar sin ón altóir riamh ná coíche. ", answer: "ní déarfaí"},
  {question: "____ ___________ é sin dá mbeadh aon dul as.", answer: "ní déarfaí"},
];

var abairMCCeisteach = [
  {question: "___ ___________ go bhfuil sé sin fíor? (tú, diúltach)", answer: "nach ndéarfá"},
  {question: "____ ___________ éinne sin leat? (diúltach)", answer: "nach ndéarfadh"},
  {question: "____ ___________ Seán leat é dá mbeadh a fhios aige faoi? (diúltach)", answer: "nach ndéarfadh"},
  {question: "____ ___________ é sin dá mbeadh gach rud sásúil san áit? (dearfach, briathar saor).", answer: "an ndéarfaí"},
  {question: "____ ___________  madraí an bhaile é sin leat? (diúltach).", answer: "nach ndéarfadh"},
  {question: "____ ___________  go bhfuil Caitlín sásta lena post nua? (tú).", answer: "an ndéarfá", answer2: "nach ndéarfá"},
  {question: "____ ___________ é dá mbeadh sé fíor? (diúltach, siad).", answer: "nach ndéarfaidís"},
  {question: "____ ___________ Tomás é dá mbeadh aon dabht air? (diúltach)", answer: "nach ndéarfadh"},
  {question: "____ ___________ é dá mbeidís faoi bhrú? (dearfach).", answer: "an ndéarfaidís"},
  {question: "____ ___________ go bhfuil seans maith acu? (dearfach, tú).", answer: "an ndéarfá"},
];

var abairMCSpleach = [
  {question: "Ní dóigh liom ____ ___________ mo chara rud mar sin fúm. ", answer: "go ndéarfadh"},
  {question: "Tá mé cinnte ____ ___________ aon duine le ciall aon rud mar sin. (diúltach)", answer: "nach ndéarfadh"},
  {question: "Tá mé cinnte ____ ___________ aon rud mar sin? (mé, diúltach) ", answer: "nach ndéarfainn"},
  {question: "Dá ___________ éinne eile é sin déarfaí go raibh sé as a mheabhair? ", answer: "ndéarfadh"},
  {question: "Tá mé cinnte ____ ___________ sé é sin dá gcaithfeadh sé. (dearfach)", answer: "go ndéarfadh"},
  {question: "An gceapann tusa  ____ ___________ Bríd é sin. (dearfach) ", answer: "go ndéarfadh"},
  {question: "Bhí a fhios agam go maith ____ ___________ sibhse é sin. (dearfach)", answer: "go ndéarfadh"},
  {question: "Dá ___________ é sin leat chaithfinn an tír a fhágáil. (mé)", answer: "ndéarfainn"},
  {question: "Dá ___________glan amach é bheadh deireadh leis. (siad)", answer: "ndéarfaidís"},
  {question: "Ní dóigh liom ____ ___________Aoife é sin riamh. (dearfach)", answer: "go ndéarfadh"},
];

var abairMCExtraQuestions = [
  {question: "___________ go bhfuil an ceann sin go maith. (mé)", answer: "déarfainn"},
  {question: "____ ___________ go bhfuil siad críochnaithe go fóill. (mé, diúltach)", answer: "déarfaidh"},
  {question: "Cad a ___________ dá gcloisfidís an scéal sin? (siad)", answer: "déarfaidís"},
  {question: "Cad a ___________ Máirtín faoi sin, dar leat? ", answer: "déarfadh"},
  {question: "____ ___________ go bhfuil sé sin ceart anois? (tú)", answer: "an ndéarfá", answer2: "nach ndéarfá"},
  {question: "______ ___________ éinne é sin. (diúltach) ", answer: "ní déarfadh"},
  {question: "______ ___________ sibhse é sin?", answer: "an déarfadh"},
  {question: "Cad eile a ___________? (siad)", answer: "déarfaidís"},
  {question: "Ní dóigh liom ____ ___________ muintir na háite é sin faoi? (dearfach)", answer: "go ndéarfadh"},
  {question: "____ ___________ é sin faoi dá mbeadh sé saibhir? (briathar saor)", answer: "an ndéarfaí", answer2: "nach ndéarfaí"},
];

var faighACQuestions = [
  {question: "___________ mé bronntanas deas do mo bhreithlá.", answer: "fuair"},
  {question: "___________ siad an ceann is fearr orainn.", answer: "fuair"},
  {question: "___________ tú an rud a bhí ag dul duit.", answer: "fuair"},
  {question: "___________ freagra ar ais ar deireadh. (sinn)", answer: "fuaireamar"},
  {question: "___________ tusa an dara duais.", answer: "fuair"},
  {question: "___________ torthaí na scrúduithe inné. (sinn)", answer: "fuaireamar"},
  {question: "___________ siad bróga nua sa siopa.", answer: "fuair"},
  {question: "___________ sé gach a raibh ag dul dó.", answer: "fuair"},
  {question: "___________ sí luach a saothair.", answer: "fuair"},
  {question: "___________ amach ar deireadh cé a bhí taobh thiar de. (sinn)", answer: "fuaireamar"},
];

var faighACNi = [
  {question: "____ ___________ mé amach riamh cé a rinne é.", answer: "ní bhfuair"},
  {question: "____ ___________ sí aon fhreagra ar a hiarratas.", answer: "ní bhfuair"},
  {question: "____ ___________ aon sásamh uaidh. (sinn)", answer: "ní bhfuaireamar"},
  {question: "____ ___________ siad aon áit cheart le fanacht i mBaile Átha Cliath.", answer: "ní bhfuair"},
  {question: "____ ___________ sí aon scéal faoin madra a chaill sí.", answer: "ní bhfuair"},
  {question: "____ ___________ aon fhreagra go fóill. (sinn)", answer: "ní bhfuaireamar"},
  {question: "____ ___________ siad aon rud ceart le n-ithe.", answer: "ní bhfuair"},
  {question: "____ ___________ mé aon rud a bhí uaim sa siopa sin.", answer: "ní bhfuair"},
  {question: "____ ___________ siad a gcearta riamh san áit sin.", answer: "ní bhfuair"},
  {question: "____  ___________ aon duais an uair seo. (sinn)", answer: "ní bhfuaireamar"},
];

var faighACBriathorSaor = [
  {question: "___________ tásc ná tuairisc air ón lá a d’imigh sé. (diúltach)", answer: "ní bhfuarthas"},
  {question: "___________ an t-airgead a chaill mé san ionad siopadóireachta. (dearfach)", answer: "fuarthas"},
  {question: "Bhí sé os comhair na cúirte agus ___________ ciontach é.", answer: "fuarthas"},
  {question: "Cuardaíodh an teach ó bhun go barr ach ____ ___________ aon rud ann. (diúltach)", answer: "ní bhfuarthas"},
  {question: "___________ piscín beag sa pháirc agus níl a fhios ag éinne cé leis é.", answer: "fuarthas"},
  {question: "Tar éis an lá a chaitheamh ag cuardach ___________ é ar deireadh.", answer: "fuarthas"},
  {question: "____ ___________ amach riamh cé a rinne an slad sa halla.", answer: "ní bhfuarthas"},
  {question: "Cailleadh é agus ____ ___________ ar ais é riamh ó shin.", answer: "ní bhfuarthas"},
  {question: "____ ___________ amach riamh cár chuir sí na fáinní cluaise i bhfolach.", answer: "ní bhfuarthas"},
  {question: "___________ sionnach marbh ar thaobh an bhóthair.", answer: "fuarthas"},
];

var faighACCeisteach = [
  {question: "____ ___________ tú amach aon rud faoin timpiste? (dearfach)", answer: "an bhfuair"},
  {question: "____ ___________ tú aon scéal ó Chathal? (dearfach)", answer: "an bhfuair"},
  {question: "____ ___________ Síle a leabhar ar ais fós? (dearfach)", answer: "an bhfuair"},
  {question: "____ ___________ siad an méid a bhí uatha? (diúltach)", answer: "nach bhfuair"},
  {question: "Cuardaíodh an áit ach ____ ___________ faic na ngrást ann.", answer: "an bhfuair"},
  {question: "____ ___________ beirt fhear ciontach as bean óg a mharú inniu? (briathar saor, dearfach)", answer: "an bhfuarthas"},
  {question: "____ ___________ aon rud sa seomra? (siad, dearfach)", answer: "an bhfuaireadar"},
  {question: "____ ___________ tú do dhóthain fós? (diúltach)", answer: "nach bhfuair"},
  {question: "____ ___________ corp an fhir a thit le faill fós? (briathar saor, dearfach)", answer: "an bhfuarthas"},
  {question: "____ ___________ amach cad ba chúis leis an tinneas a bhí orthu (siad, dearfach)", answer: "an bhfuaireadar"},
];

var faighACSpleach = [
  {question: "Tá súil agam ____ ___________ tú é. (dearfach)", answer: "go bhfuair"},
  {question: "Tá súil agam ____ ___________ tú an fliú. (diúltach)", answer: "nach bhfuair"},
  {question: "An fíor ____ ___________ Breandán post nua? (dearfach)", answer: "go bhfuair"},
  {question: "Ceapaim ____ ___________ tú an rud céanna is a fuair mise. (dearfach)", answer: "go bhfuair"},
  {question: "An dóigh leat ____ ___________ sí gach a raibh uaithi? (dearfach)", answer: "go bhfuair"},
  {question: "Tá súil agam ____ ___________tú aon drochscéal. (diúltach)", answer: "nach bhfuair"},
  {question: "Tá a fhios agam ____ ___________ tásc ná tuairisc orthu ó shin. (diúltach, briathar saor)", answer: "nach bhfuarthas"},
  {question: "An dóigh leat ____ ___________ sí mórán airgid as an leabhar a scríobh sí? (dearfach)", answer: "go bhfuair"},
  {question: "An gceapann tú ____ ___________sí an scoláireacht? (dearfach)", answer: "go bhfuair"},
  {question: "Deirtear ____ ___________siad bás den ocras (dearfach)", answer: "go bhfuair"},
];

var faighACCoibhneasta = [
  {question: "B’shin ____ ___________ sa chófra. (briathar saor)", answer: "a bhfuarthas"},
  {question: "B’shin  ____ ___________ sí sa teach sin. ", answer: "a bhfuair"},
  {question: "Chaill siad gach ____ ___________ siad sa chasaíne. ", answer: "a bhfuair"},
  {question: "Tá gach ____ ___________ siad ar maidin imithe anois. ", answer: "a bhfuair"},
  {question: "Tá gach  ____ ___________ sí riamh fós aici. ", answer: "a bhfuair"},
  {question: "Tá gach ____ ___________ an madra ite aige. ", answer: "a bhfuair"},
  {question: "Tá gach ____ ___________ siad ite acu. ", answer: "a bhfuair"},
  {question: "B’shin ____ ___________ tar éis na hiarrachta ar fad. (briathar saor)", answer: "a bhfuarthas"},
  {question: "B’shin  ____ ___________ an gadaí sa teach.", answer: "a bhfuair"},
  {question: "Tá gach ____ ___________ caillte arís.", answer: "a bhfuair"},
];

var faighACExtraQuestions = [
  {question: "___________ mé litir sa phost ar maidir. ", answer: "fuair"},
  {question: "____ ___________ tú aon scéal ó do chara fós?", answer: "an bhfuair", answer2: "nach bhfuair"},
  {question: "____ ___________ mé néal codlata aréir. (diúltach) ", answer: "ní bhfuair"},
  {question: "____ ___________ aon chuireadh don phósadh sin. (sinn, diúltach) ", answer: "ní bhfuaireamar"},
  {question: "____ ___________ tú do charr ar ais fós? (diúltach)", answer: "nach bhfuair"},
  {question: "Tá súil agam  ____ ___________ tú d’fhón ar ais. (dearfach)", answer: "go bhfuair"},
  {question: "Tá a fhios agam ____ ___________ siad oiread is iasc amháin ón loch i mbliana. (diúltach) ", answer: "nach bhfuair"},
  {question: "____ ___________ bosca mór seacláide nuair a bhíomar críochnaithe. (dearfach)", answer: "fuaireamar"},
  {question: "Tá ____ ___________ siad de mhilseáin ite acu.", answer: "a bhfuair"},
  {question: "Ní fiú a bheith ag caint faoi na rudaí ____ ___________ . (sinn, diúltach)", answer: "nach bhfuaireamar"},
];

var faighALQuestions = [
  {question: "___________ sí páipéar nuachta gach maidin agus í ag dul ag obair.", answer: "faigheann"},
  {question: "___________ ár gcuid nuachta ó na meáin shóisialta don gcuid is mó. (sinn)", answer: "faighimid"},
  {question: "___________ sí lón sa bhialann beagnach gach lá.", answer: "faigheann"},
  {question: "___________ sé airgead maith ar an obair a dhéanann sé.", answer: "faigheann"},
  {question: "___________ iasacht ón gcomhar creidmheasa ó am go chéile. (mé)", answer: "faighim"},
  {question: "___________ tú luach do shaothair i gcónaí.", answer: "faigheann"},
  {question: "___________ bronntanas Nollag gach bliain. (sinn)", answer: "faighimid"},
  {question: "___________ siad leabhair ón leabharlann gach seachtain.", answer: "faigheann"},
  {question: "___________ an-deacair é uaireanta. (mé)", answer: "faighim"},
  {question: "___________ sé bainne ón siopa gach tráthnóna.", answer: "faigheann"},
];

var faighALNi = [
  {question: "____ ___________ sí aon mholadh riamh as a cuid oibre.", answer: "ní fhaigheann"},
  {question: "____ ___________ siad sin torthaí maithe sna scrúduithe riamh.", answer: "ní fhaigheann"},
  {question: "____ ___________ aon rud sa bhreis uatha sin riamh. (sinn)", answer: "ní fhaighimid"},
  {question: "____ ___________ siad aon rud nach mbíonn ag dul dóibh.", answer: "ní fhaigheann"},
  {question: "____ ___________ ach drochnuacht san áit seo. (sinn)", answer: "ní fhaighimid"},
  {question: "Bíonn sí i gcónaí gnóthach. ____ ___________ sí sos riamh.", answer: "ní fhaigheann"},
  {question: "____ ___________ tú aon rud nach mbíonn tuillte go maith agat.", answer: "ní fhaigheann"},
  {question: "____ ___________ codladh na hoíche, fiú, leis an méid imní atá air.", answer: "ní fhaigheann"},
  {question: "____ ___________ na páistí sin cead a gcos riamh.", answer: "ní fhaigheann"},
  {question: "____ ___________ daoine áirithe a gcearta riamh.", answer: "ní fhaigheann"},
];

var faighALBriathorSaor = [
  {question: "___________ ór i mianaigh san Afraic Theas.", answer: "faightear"},
  {question: "____ ___________ fíoruisce glégheal ón tobar sin.", answer: "faightear"},
  {question: "___________ amach faoi na pleananna rúnda i gcónaí.", answer: "faightear"},
  {question: "___________ sméara dubha deasa ó na driseacha sa bhfómhar.", answer: "faightear"},
  {question: "___________ úlla ó Ard Mhacha.", answer: "faightear"},
  {question: "____ ___________ torthaí arda sa scoil sin riamh. (diúltach)", answer: "ní fhaightear"},
  {question: "____ ___________ muisiriúin a fhásann go fiáin sa pháirc sin níos mó.", answer: "ní fhaightear"},
  {question: "____ ___________ ach corrcheann anois is arís.", answer: "ní fhaightear"},
  {question: "___________ sionnaigh marbh ar an mbóthar sin go rialta.", answer: "faightear"},
  {question: "____ ___________ fuil as cloch!", answer: "ní fhaightear"},
];
var faighALCeisteach = [
  {question: "___________ tú uair an chloig saor ag am lóin? (dearfach).", answer: "an bhfaigheann"},
  {question: "____ ___________ éinne an rud atá uathu? (dearfach)", answer: "an bhfaigheann"},
  {question: "_____ ___________ sí a deis go rímhinic? (diúltach)", answer: "nach bhfaigheann"},
  {question: "_____ ___________tú an seans chun dul ar ais abhaile go minic? (dearfach)", answer: "an bhfaigheann"},
  {question: "_____ ___________ na micléinn seachtain léitheoireachta i mí Eanáir? (dearfach).", answer: "an bhfaigheann"},
  {question: "_____ ___________ an traonach in Éirinn níos mó (diúltach, briathar saor).", answer: "nach bhfaightear"},
  {question: "____ ___________ Éamonn áit ar an bhfoireann go rialta? (diúltach).", answer: "nach bhfaigheann"},
  {question: "____ ___________ tú do chuid glasraí díreach ón bhfeirm? (dearfach)", answer: "an bhfaigheann"},
  {question: "____ ___________ mórán de na micléinn an freagra ceart ar an gceist sin? (dearfach).", answer: "an bhfaigheann"},
  {question: "____ ___________ é sin uathu gach bliain? (sinn, diúltach).", answer: "nach bhfaighimid"},
];

var faighALSpleach = [
  {question: "Cén fáth ____ ___________ tú rothar nua duit féin? (diúltach)", answer: "nach bhfaigheann"},
  {question: "Is dóigh liom ____ ___________ sí an traein isteach gach maidin.", answer: "go bhfaigheann"},
  {question: "An bhfuil tú cinnte ____ ___________ sé síob abhaile gach lá? (diúltach)", answer: "nach bhfaigheann"},
  {question: "Tá a fhios agam go maith ____ ___________ an páiste sin cead a chin i gcónaí? (dearfach)", answer: "go bhfaigheann"},
  {question: "Tá mé cruthaithe ____ ___________ daoine bochta bás ag aois níos óige ná daoine saibhre. (dearfach)", answer: "go bhfaigheann"},
  {question: "An bhfuil tú cinnte ____ ___________ siad airgead breise ar an obair sin? (diúltach)", answer: "nach bhfaigheann"},
  {question: "Tá a fhios agam ____ ___________ airgead an-mhaith ach is obair chrua í. (mé, dearfach)", answer: "go bhfaigheann"},
  {question: "Deir sí ____ ___________ sí sásamh as na cuimhní cinn atá aici. (dearfach)", answer: "go bhfaigheann"},
  {question: "Deirtear ____ ___________sé pinsean ó rialtas na Breataine freisin. (dearfach)", answer: "go bhfaigheann"},
  {question: "Tá a fhios agam ____ ___________siad bia folláin ar scoil gach lá? (dearfach)", answer: "go bhfaigheann"},
];

var faighALCoibhneasta = [

];

var faighALExtraQuestions = [
  {question: "___________Siobhán a cuid glasraí sa mhargadh sráide. (dearfach) ", answer: "faigheann"},
  {question: "___________ ár ndóthain le n-ithe san áit ach seachas sin níl rudaí go maith anseo. (sinn, dearfach).", answer: "faighimid"},
  {question: "___________ gach duine an méid atá ag dul dóibh. (dearfach) ", answer: "faigheann"},
  {question: "____ ___________ tú ríomhphost uaidh ó am go chéile? (dearfach)", answer: "an bhfaigheann"},
  {question: "____ ___________ sí scéal uaidh ach anois is arís. (diúltach) ", answer: "ní fhaigheann"},
  {question: "An bhfuil tú cinnte _____ ___________ an lámh in uachtar air go minic? (diúltach)", answer: "nach bhfaigheann"},
  {question: "_____ ___________ sí airgead óna tuismitheoirí go rialta. (diúltach) ", answer: "ní fhaigheann"},
  {question: "___________ siúcra as biotas. (briathar saor)", answer: "faightear"},
  {question: "Táim cinnte ____ ___________ siadsan aon chúnamh ó éinne? (diúltach)", answer: "nach bhfaigheann"},
  {question: "_____ ___________ tusa an bus isteach gach maidin? ", answer: "an bhfaigheann"},
];

var faighAFQuestions = [
  {question: "___________ lón istigh i lár na cathrach níos déanaí.", answer: "gheobhaimid"},
  {question: "___________ tú ard-mholadh má dhéanann tú é sin.", answer: "gheobhaidh"},
  {question: "___________ tú amach é sách luath.", answer: "gheobhaidh"},
  {question: "___________ mé tuairisc air sin duit maidin amárach.", answer: "gheobhaidh"},
  {question: "___________ sí gach a bhfuil uaithi sa siopa sin.", answer: "gheobhaidh"},
  {question: "___________ tú bás luath má leanann tú leis sin.", answer: "gheobhaidh"},
  {question: "Níl a fhios agam ach ___________ mé amach duit é.", answer: "gheobhaidh"},
  {question: "___________ sé post maith amach anseo má leanann sé mar sin.", answer: "gheobhaidh"},
  {question: "Ná bí buartha. ___________ amach é níos déanaí. (sinn)", answer: "gheobhaimid"},
  {question: "Fan soicind agus ___________ gheobhaidh mé mála duit.", answer: "gheobhaidh"},
];

var faighAFNi = [
  {question: "____ ___________ tú aon leabhar maith ar an seilf sin.", answer: "ní bhfaighidh"},
  {question: "____ ___________ Cathal amach faoina chuid torthaí go dtí amárach.", answer: "ní bhfaighidh"},
  {question: "Ní fiú a bheith ag éisteach leis seo. ____ ___________ aon sásamh uaidh. (sinn)", answer: "ní bhfaighimid"},
  {question: "____ ___________ amach cé a rinne é sin go brách. (sinn)", answer: "ní bhfaighimid"},
  {question: "____ ___________ tú aon toradh ar an obair sin. ", answer: "ní bhfaighidh"},
  {question: "____ ___________ sí an eochair sin ar ais níos mó.", answer: "ní bhfaighidh"},
  {question: "____ ___________ tú aon rud amach muna gcuireann tú ceist.", answer: "ní bhfaighidh"},
  {question: "Tá sé imithe. ____ ___________ anocht é ach go háirithe. (sinn)", answer: "ní bhfaighimid"},
  {question: "____ ___________ tú bus eile anois go dtí maidin amárach.", answer: "ní bhfaighidh"},
  {question: "____ ___________ an bus sin. Beidh sé róluath dúinn. (sinn)", answer: "ní bhfaighimid"},
];

var faighAFBriathorSaor = [
  {question: "___________ é luath nó mall. (dearfach)", answer: "gheofar"},
  {question: "____ ___________ amach mar gheall air sin riamh ná choíche. (diúltach)", answer: "ní bhfaighfear"},
  {question: "___________ é má leanann siad orthu den chuardach. (dearfach)", answer: "gheofar"},
  {question: "_____ ___________ amach cé a ghoid an pictiúr sin go brách. (diúltach)", answer: "ní bhfaighfear"},
  {question: "_____ ___________ aon torthaí ar na hiarrachtaí laga sin atá ar bun acu . (diúltach)", answer: "ní bhfaighfear"},
  {question: "____ ___________ cúnamh nuair a bheidh sé ródhéanach. (dearfach)", answer: "gheofar"},
  {question: "____ ___________ amach é má leanann sé air ag fiosrú. (dearfach)", answer: "gheofar"},
  {question: "___________ faic na ngrást san áit sin. (diúltach)", answer: "ní bhfaighfear"},
  {question: "___________ é ar deireadh má leanann siad orthu ag cuardach. (dearfach)", answer: "gheofar"},
  {question: "Tá siad amuigh i lár na farraige in áit éigin agus _____ ___________ go brách arís iad.", answer: "ní bhfaighfear"},
];

var faighAFCeisteach = [
  {question: "___ ___________ sé aon toradh air sin, dar leat? (dearfach)", answer: "an bhfaighidh"},
  {question: "____ ___________ siad an chéad duais, dar leat? (dearfach)", answer: "an bhfaighidh"},
  {question: "____ ___________ siad rud éigin as? (diúltach)", answer: "nach bhfaighidh"},
  {question: "____ ___________ tú anocht é, an gceapann tú? (dearfach).", answer: "an bhfaighidh"},
  {question: "____ ___________ Tadhg cúiteamh airgid as ana málaí a cailleadh ag an aerfort? (diúltach).", answer: "nach bhfaighidh"},
  {question: "____ ___________ tú rud éigin deas dom? (diúltach).", answer: "nach bhfaighidh"},
  {question: "____ ___________ siad na torthaí go luath? (dearfach).", answer: "an bhfaighidh"},
  {question: "____ ___________ suíochán ansiúd in aice na fuinneoige? (sinn, dearfach)", answer: "an bhfaighidh"},
  {question: "____ ___________ lá saor Dé Máirt an gceapann tú? (sinn, dearfach).", answer: "an bhfaighidh"},
  {question: "____ ___________ tú rud éigin deas duit féin leis an airgead sin? (diúltach).", answer: "nach bhfaighidh"},
];

var faighAFSpleach = [
  {question: "Tá a fhios agam ____ ___________ sé an ceann sin ar ais.", answer: "", hint1: "(diúltach)"},
  {question: "An fíor ____ ___________ breis airgid ar an obair seo?", answer: "", hint1: "(sinn, dearfach)"},
  {question: "Tá mé cinnte ____ ___________ sí ceann eile go brách? ", answer: "", hint1: "(diultach)"},
  {question: "Is dócha ____ ___________ tú an rud céanna is a fuair tú anuradh.", answer: "", hint1: "dearfach"},
  {question: "Is dóigh liom ____ ___________ radharc maith air ón áit seo.", answer: "", hint1: "(sinn, dearfach)"},
  {question: "Tá gach seans ann  ____ ___________ siad amach mar gheall air.", answer: "", hint1: "(dearfach)"},
  {question: "Tá mé cinnte éinne  ____ ___________  amach mar gheall ar an gceann sin.", answer: "", hint1: "(diúltach)"},
  {question: "An dóigh leat ____ ___________ an grúpa sin an chéad duais?", answer: "", hint1: "(dearfach)"},
  {question: "Caithfidh ____ ___________ciontach iad. Féachann sé an-dubh is bán domsa.", answer: "", hint1: "(briathar saor, dearfach)"},
  {question: "An dóigh leat ____ ___________sé a mhisneach ar ais go brách?", answer: "", hint1: "(dearfach)"},
];

var faighAFCoibhneasta = [

];

var faighAFExtraQuestions = [
  {question: "Ná bí buartha, ___________ mé ceann eile duit. (dearfach)", answer: "gheobhaidh"},
  {question: "___________ tacsaí go dtí an aerfort seachas bus. (sinn, dearfach)", answer: "gheobhaimid"},
  {question: "____ ___________ tú aon fhreagra uaidh sin go brách. (diúltach)", answer: "ní bhfaighidh"},
  {question: "B’fhéidir ____ ___________ tú an seans arís muna dtógann tú anois é? (diúltach)", answer: "nach bhfaighidh"},
  {question: "___________ adhmaid luachmhar ón bhforaois sin amach anseo. (briathar saor, dearfach) ", answer: "fuarthas"},
  {question: "______ ___________ tú caifé le tógaint linn le do thoil? ", answer: "an bhfaighidh"},
  {question: "______ ___________ bronntanas Nollaig di i mbliana. (sinn, dearfach)", answer: "an bhfaighimid"},
  {question: "____ ___________ tusa pé rud atá uait ar aon nós? (diúltach)", answer: "nach bhfaighidh"},
  {question: "Táimid beagnach ann. ___________ boladh úr na farraige go luath anois. (sinn, dearfach)", answer: "gheobhaimid"},
  {question: "____ ___________ tú sos go brách muna gcríochnaíonn tú é sin go tapaidh? (diúltach)", answer: "ní bhfaighidh"},
];

var faighMCQuestions = [
  {question: "___________ carr nua dá mbeadh an t-airgead agam. (mé)", answer: "gheobhainn"},
  {question: "___________ sé duais dó sin dá gcuirfeadh sé snas air.", answer: "gheobhadh"},
  {question: "___________ airgead maith air sin dá ndíolfaidís é. (siad)", answer: "gheobhaidís"},
  {question: "___________ sí an traein go Béal Feirste ach amhain go raibh an bus níos tapúla. ", answer: "gheobhadh"},
  {question: "Tá sé daor. ___________ dhá cheann sa siopa eile ar an bpraghas sin. (tú)", answer: "gheofá"},
  {question: " ___________ duine margadh ceart go leor dá mbeadh sé istigh in am.", answer: "gheobhadh"},
  {question: "___________ sé bronntanas dó dá mbeadh aon mheas aici air. ", answer: "gheobhadh"},
  {question: "___________ ceann nua duit dá mbeadh an ceann sin briste. (mé)", answer: "gheobhainn"},
  {question: "___________ síob ar ais dá mbeadh ceann ag teastáil uainn. (sinn)", answer: "gheobhaimis", answer2: "gheobhadh muid"},
  {question: "___________ tuilleadh oibrithe don tionscnamh seo dá mbeinn féin i gceannas. (mé)", answer: "gheobhainn"},
];

var faighMCNi = [
  {question: "____ ___________ sé é sin dá gcaithfeadh sé fiche bliain á lorg.", answer: "ní bhfaigheadh"},
  {question: "____ ___________ deoch dó ach amháin go raibh a fhios agam go raibh sé briste. (mé)", answer: "ní bhfaighinn"},
  {question: "____ ___________ an diabhal an ceann is fearr uirthi sin. ", answer: "ní bhfaigheadh"},
  {question: "____ ___________ an freagra go brách murach go raibh míniú air ar an idirlíon. (siad)", answer: "ní bhfaighidís", answer2: "Ní bhfaigheadh siad"},
  {question: "Ní leabhar luachmhar é. ____ ___________ mórán air sa siopa athláimhe. (tú) ", answer: "ní bhfaighfeá"},
  {question: "____ ___________ Seán ceann nua go brách dá mbeadh aon dul as aige.", answer: "ní bhfaigheadh"},
  {question: "____ ___________ sin aon toradh dá mbeidís ag gabháil dó go lá Philib an Chleite. (siad)", answer: "ní bhfaighidís", answer2: "Ní bhfaigheadh siad"},
  {question: "____ ___________ post mar sin gan céim mháistreachta a bheith agat. (tú)", answer: "ní bhfaighfeá"},
  {question: "____ ___________ an diabhal an ceann is fearr ar asal.", answer: "ní bhfaigheadh"},
  {question: "____ ___________ sí an chéad áit murach gur tharraing an bheirt eile siar.", answer: "ní bhfaigheadh"},
];

var faighMCBriatharSaor = [
  {question: "___________ é dá mbeadh sé ann.", answer: "gheofaí"},
  {question: "____ ___________ ceann chomh maith sin arís ach amháin trí sheans.", answer: "ní bhfaighfí"},
  {question: "___________ rudaí suimiúla sa sean-siopa sin dá mbeadh an t-am ag duine dul tríd.", answer: "gheofaí"},
  {question: "____ ___________ an seodra sa teach riamh murach gur inis an seanbhean dom faoi sula bhfuair sí bás.", answer: "ní bhfaighfí"},
  {question: "____ ___________ na drugaí sa teach murach gur chuir fear an tí ann iad. ", answer: "ní bhfaighfí"},
  {question: "____ ___________ ciontach é murach go raibh an giúiré lán-chinnte go ndearna sé é.", answer: "ní bhfaighfí"},
  {question: "___________ amach é dá mbeadh aon duine sách cliste ann chun dul ag obair ar an gcás.", answer: "gheofaí"},
  {question: "___________ é gan dabht dá mbeadh sé ann.", answer: "gheofaí"},
  {question: "____ ___________ aon locht ar Eithne mar cheannaire dá gceapfaí don bpost í.", answer: "ní bhfaighfí"},
  {question: "___________ lochtanna air fiú dá mbeadh sé foirfe.", answer: "gheofaí"},
];

var faighMCCeisteach = [
  {question: "___ ___________ lá saor dá ndéanfá obair bhreise san oíche? (tú, diúltach)", answer: "nach bhfaighfeá"},
  {question: "____ ___________ Seán scoláireacht dá mbeadh a chuid torthaí beagáinín ní ba fhearr? (dearfach)", answer: "an bhfaigheadh"},
  {question: "____ ___________ éinne acu an freagra sin ceart, dar leat? (dearfach)", answer: "an bhfaigheadh"},
  {question: "____ ___________ aon duine an réiteach ar an bhfadhb sin dá gcuirfidís chuige? (diúltach).", answer: "nach bhfaigheadh"},
  {question: "____ ___________  margadh maith dá mbeifeá istigh in am? (dearfach, tú).", answer: "an bhfaighfeá"},
  {question: "____ ___________  sí é dá gcuirfeadh sí chuige i gceart?", answer: "an bhfaigheadh"},
  {question: "____ ___________ plumaí ag fás go fiáin sna díoga dá ndéanfaí cuardach ceart? (diúltach, briathar saor).", answer: "an bhfaighfí"},
  {question: "____ ___________ an láimh in uachtar orthu dá leanfaí tamall eile leis an iarracht mhór sin? (diúltach, briathar saor)", answer: "nach bhfaighfí"},
  {question: "____ ___________ an litir dá mbeadh an seoladh ceart uirthi? (diúltach, tú).", answer: "nach bhfaighfeá"},
  {question: "____ ___________ Nóirín pas sa scrúdú dá mbeadh aiste istigh in am aici? (diúltach).", answer: "nach bhfaigheadh"},
];

var faighMCSpleach = [
  {question: "Bhí mé cinnte ____ ___________ sí an chéad duas ach ní bhfuair.", answer: "go bhfaigheadh"},
  {question: "Cheap mé  ____ ___________ éinne an freagra ceart ar an gceist sin. (diúltach)", answer: "nach bhfaigheadh"},
  {question: "An dóigh leat ____ ___________ sé é dá rachadh sé á lorg?  ", answer: "go bhfaigheadh"},
  {question: "Bhí a fhios agam go maith ____ ___________ an freagra ceart. (tú, diúltach) ", answer: "nach bhfaighfeá"},
  {question: "Bhí a fhios acu ____ ___________an chéad áit ba chuma cad a dhéanfaidís. (siad, diúltach)", answer: "nach bhfaighidís", answer2: "nach bhfaigheadh siad"},
  {question: "Bhí mé cinnte ____ ___________ sí an ríomhaire a chaill sí ar ais. (dearfach)", answer: "go bhfaigheadh"},
  {question: "Níor cheap mé  ____ ___________ sé an ceann is fearr uirthi. (dearfach)", answer: "go bhfaigheadh"},
  {question: "Dúirt sé ____ ___________ sé é ach ní bhfuair. (dearfach)", answer: "go bhfaigheadh"},
  {question: "Cheap siad ___ ___________ freagra sásúil ach ní bhfuair. (siad, dearfach)", answer: "go bhfaighidís", answer2: "go bhfaigheadh siad"},
  {question: "Bhí a fhios agam ___ ___________é luath nó mall. (briathar saor, dearfach)", answer: "go bhfaighfí"},
];

var tarACQuestions = [
  {question: "___________ sé isteach. Dúirt sé a chuid agus d’imigh sé.", answer: "tháinig"},
  {question: "___________ an bháisteach roimh dheireadh an chluiche.", answer: "tháinig"},
  {question: "___________ biseach uirthi laistigh de sheachtain san ospidéal.", answer: "tháinig"},
  {question: "D’imigh sin is___________ seo. ", answer: "tháinig"},
  {question: "___________ olc orthu nuair a dúradh é sin.", answer: "tháinig"},
  {question: "___________ tuirse ar na bpáiste agus thit sí ina codladh.", answer: "tháinig"},
  {question: "___________ abhaile go luath an tráthnóna áirithe sin. (sinn)", answer: "thángamar", answer2: "tháinig muid"},
  {question: "___________ siad chomh fada leis an líne agus stop siad.", answer: "tháinig"},
  {question: "___________ an dubh ar na prátaí in Éirinn in 1845.", answer: "tháinig"},
  {question: "___________ feabhas mór uirthi le bliain anuas.", answer: "tháinig"},
];

var tarACNi = [
  {question: "____ ___________ éinne amach roimh dheireadh an chluiche.", answer: "níor tháinig"},
  {question: "____ ___________ aon athrú ar an scéal ó shin i leith.", answer: "níor tháinig"},
  {question: "____ ___________ ar fheagra na ceist sin fós. (sinn)", answer: "níor thángamar"},
  {question: "____ ___________ aon cheathanna inniu sa taobh seo tíre.", answer: "níor tháinig"},
  {question: "____ ___________ mé abhaile an oíche sin.", answer: "níor tháinig"},
  {question: "____ ___________ na Gardaí ar an té a bhí freagrach as fós.", answer: "níor tháinig"},
  {question: "____ ___________ deireadh leis an aighneas a bhí eatarthu fós.", answer: "níor tháinig"},
  {question: "____ ___________ éinne amach inár gcoinne.", answer: "níor tháinig"},
  {question: "____ ___________ duine ná deoraí amach le fáiltiú rompu abhaile.", answer: "níor tháinig"},
  {question: "____  ___________ abhaile go dtí go rabih sé anon go maith san oíche. (sinn)", answer: "níor thángamar"},
];

var tarACBriathorSaor = [
  {question: "___________ ar chorp fhir i dteach tréigthe aréir. (dearfach)", answer: "thángthas"},
  {question: "Lorgaíodh é an lá ar fad agus ___________ air déanach tráthnóna. (dearfach)", answer: "thángthas"},
  {question: "___________ ar an airgead a goideadh i gcúinne na páirce. (dearfach)", answer: "thángthas"},
  {question: "___________ ar dhéagóir a bhí ar iarraidh le seachtain inniu. (dearfach)", answer: "thángthas"},
  {question: "Cuardaíodh an áit ar fad ach ____ ___________ ar aon rud. (diúltach)", answer: "níor thángthas"},
  {question: "___________ ar an mbád a chuaigh go tóin poill aréir. (dearfach)", answer: "thángthas"},
  {question: "Tá an thaighneas ag dul ar aghaidh agus ____ ___________ ar aon réiteach. (diúltach)", answer: "níor thángthas"},
  {question: "Chuaigh na cainteanna ar aghaidh ar feadh seachtaine ach ___________ ar chomhaontú ar deireadh. (dearfach)", answer: "thángthas"},
  {question: "___________ ar chnámha i bpoll portaigh gar don teach. (dearfach)", answer: "thángthas"},
  {question: "____ ___________ ar réiteach na faidhbe sin go fóill.", answer: "níor thángthas"},
];

var tarACCeisteach = [
  {question: "____ ___________ na cailíní abhaile fós? (dearfach)", answer: "ar tháinig"},
  {question: "____ ___________ tú ar an bpeann a chaill tú fós? (dearfach)", answer: "ar tháinig"},
  {question: "____ ___________ an t-otharcharr go han-tapaidh? (diúltach)", answer: "nár tháinig"},
  {question: "____ ___________ an bháisteach san áit ina raibh sibhse? (dearfach)", answer: "ar tháinig"},
  {question: "____ ___________ athrú ar bith ar an áit ón uair a d’imigh mise. (dearfach)", answer: "ar tháinig"},
  {question: "____ ___________ Liam abhaile fós? (diúltach)", answer: "ar tháinig"},
  {question: "____ ___________ siad ar ais óna laethanta saoire go fóill? (dearfach)", answer: "ar tháinig"},
  {question: "____ ___________ ar na coirp a bádh sa bhfarraige fós? (briathar saor, dearfach)", answer: "ar thángthas"},
  {question: "____ ___________ sí abhaile riamh ón am a d’fhág sí? (dearfach)", answer: "ar tháinig"},
  {question: "Is cuma ____ ___________ amach as slán ag deireadh an lae? (sinn, diúltach)", answer: "ar thángamar"},
];

var tarACSpleach = [
  {question: "Dúirt do dheartháir liom ____ ___________ tú abhaile don deireadh seachtaine. (dearfach)", answer: "gur tháinig"},
  {question: "Ní dóigh liom ____ ___________ feabhas ar bith ar an scéal ó shin. (dearfach)", answer: "gur tháinig"},
  {question: "Táim beagnach cinnte ____ ___________ aon duine slán ón timpiste? (diúltach)", answer: "nár tháinig"},
  {question: "Ar chuala tú ____ ___________ siad ar ais arís tar éis seachtaine? (dearfach)", answer: "gur tháinig"},
  {question: "____ ___________ éinne in éineacht leat? (diúltach)", answer: "nár tháinig"},
  {question: "Chuala mé ____ ___________ar an leabhar sin a bhí ar iarraidh ón leabharlann fós. (briathar saor, diúltach)", answer: "nár thángthas"},
  {question: "Chuala mé ____ ___________ slua mór cairde isteach sa chúirt leo. (dearfach)", answer: "gur tháinig"},
  {question: "Dúirt sí ____ ___________ ach slua an-bheag go dtí an ceolchoirm? (diúltach)", answer: "nár tháinig"},
  {question: "Ba léir ____ ___________an ghomh air nuair a chonaic sé iad ag déanamh air? (dearfach)", answer: "gur tháinig"},
  {question: "An bhfuil tú cinnte ____ ___________aon duine isteach tríd an doras sin? (diúltach)", answer: "nár tháinig"},
];

var tarACCoibhneasta = [

];

var tarACExtraQuestions = [
  {question: "___________ sí isteach déanach agus chuaigh sí suas go barr an ranga.", answer: "tháinig"},
  {question: "____ ___________ aon athrú air le dhá lá anois. (diúltach)", answer: "níor tháinig"},
  {question: "____ ___________ aon bhriseadh ar an aimsir an tseachtain ar fad. (diúltach) ", answer: "níor tháinig"},
  {question: "____ ___________ aon duien slán as an timpiste traenach. (diúltach) ", answer: "níor tháinig"},
  {question: "____ ___________ ar eochracha a cailleadh ar an trá inniu? (briathar saor, dearfach)", answer: "ar thángthas"},
  {question: "____ ___________ do dheirfiúr abhaile i mbliana fós? (dearfach)", answer: "ar tháinig"},
  {question: "____ ___________ ar an madra a d’imigh ar strae fós? (briathar saor, diúltach) ", answer: "ar thángthas"},
  {question: "____ ___________ ach slua beag go dtí an cluiche sin. (diúltach)", answer: "níor tháinig"},
  {question: "___________ sé slán ar éigean. (dearfach)", answer: "tháinig"},
  {question: "___________ dath an bháis uirthi nuair a chuala sí an scéal. (dearfach)", answer: "tháinig"},
];

var tarALQuestions = [
  {question: "___________ Séamas ar scoil ar a rothar.", answer: "tagann"},
  {question: "___________ na páistí ar scoil gach maidin sa bhus scoile. ", answer: "tagann"},
  {question: "___________ na fáinleoga ar ais go dtí an áit chéanna gach bliain.", answer: "tagann"},
  {question: "___________ isteach luath gach maidin chun an obair a chríochnú. (sinn)", answer: "tagaimid"},
  {question: "___________ go maith os cionn milliún cuairteoirí go dtí an tír seo gach bliain.", answer: "tagann"},
  {question: "___________ siad isteach de réir a chéile.", answer: "tagann"},
  {question: "___________ an aois ar gach duine ar deireadh thiar thall.", answer: "tagann"},
  {question: "___________ na fianna anuas ó na sléibhte sa gheimhreadh.", answer: "tagann"},
  {question: "___________ athrú ar an aimsir sa bhfómhar de ghnáth. ", answer: "tagann"},
  {question: "___________ na mílte daoine go Fleadh Ceoil na hÉireann gach bliain.", answer: "tagann"},
  {question: "Dá fhad é an lá ___________ an oíche.", answer: "tagann"},
];

var tarALNi = [
  {question: "____ ___________ Deirdre isteach chugainn ach anois is arís.", answer: "ní thagann"},
  {question: "____ ___________ sí isteach in am riamh.", answer: "ní thagann"},
  {question: "____ ___________ na héin bheaga isteach sa ghairdín níos mó. ", answer: "ní thagann"},
  {question: "____ ___________ an bus anuas an bother seo níos mó.", answer: "ní thagann"},
  {question: "____ ___________ aon athrú ar an scéal ó bhliain go bliain. ", answer: "ní thagann"},
  {question: "____ ___________ isteach ach daoine a bhfuil fíor-spéis acu san ealaín.", answer: "ní thagann"},
  {question: "____ ___________ siad isteach anseo rómhinic.", answer: "ní thagann"},
  {question: "____ ___________ an traein sin go dtí cearthrú chun a seacht.", answer: "ní thagann"},
  {question: "____ ___________ aon sneachta go dtí tar éis na Nollag de ghnáth.", answer: "ní thagann"},
  {question: "____ ___________ ráflaí amach ón Rialtas ach anois is arís.", answer: "ní thagann"},
];

var tarALCeisteach = [
  {question: "___________ an fharraige isteach chomh fada seo? (dearfach).", answer: "an dtagann"},
  {question: "____ ___________ tusa isteach ar do rothar go rialta? (diúltach)", answer: "nach dtagann"},
  {question: "_____ ___________ do dheartháir abhaile ó na Stáit Aontaithe go rialta? (diúltach)", answer: "nach dtagann"},
  {question: "_____ ___________dath dearg ar na duilleoga sin sa bhfómhar? (diúltach)", answer: "nach dtagann"},
  {question: "_____ ___________ tú go ceolchoirmeacha anseo sa cheoláras go rialta? (dearfach).", answer: "an dtagann"},
  {question: "_____ ___________ mórán cuairteoirí go dtí an taobh seo tíre? (dearfach).", answer: "an dtagann"},
  {question: "____ ___________ sí sa tríú háit go rialta? (diúltach).", answer: "nach dtagann"},
  {question: "Ceist mhór! ____ ___________ ciall le haois? (dearfach)", answer: "an dtagann"},
  {question: "____ ___________ mórán cuairteoirí isteach go Coláiste na Tríonóide gach bliain? (dearfach).", answer: "an dtagann"},
  {question: "____ ___________ go leor daoine ón gCraobh sin de Chomhaltas go Fleadh Ceoil na hÉireann gach bliain? (diúltach).", answer: "nach dtagann"},
];

var tarALSpleach = [
  {question: "Ní dóigh liom ____ ___________ siad go Páirc an Chrócaigh go rómhinic. (dearfach)", answer: "go dtagann"},
  {question: "Ní dóigh liom ____ ___________ náire orthu sin riamh.", answer: "go dtagann"},
  {question: "Tá a fhios agam ____ ___________ an bus sin timpeall anseo ach dhá lá sa tseachtain. (diúltach)", answer: "nach dtagann"},
  {question: "An bhfuil a fhios agat ____ ___________ laigeacht orm aon uair a chloisim faoi rudaí mar sin? (dearfach)", answer: "go dtagann"},
  {question: "Tá a fhios agam ____ ___________ an traein sin isteach déanach go minic. (dearfach)", answer: "go dtagann"},
  {question: "Chuala mé ____ ___________ aon bhus aníos an bother sin níos mó. (diúltach)", answer: "nach dtagann"},
  {question: "Deirtear ____ ___________ ciall roimh aois ach níl a fhios agam faoi sin. (dearfach)", answer: "go dtagann"},
  {question: "Chuala mé ____ ___________ sí ar ais go hÉirinn níos mó. (diúltach)", answer: "nach dtagann"},
  {question: "An bhfuil sé fíor ____ ___________an bhean sídhe nuair atá duine ag fáil bháis? (dearfach)", answer: "go dtagann"},
  {question: "Tá a fhios go maith agam ____ ___________seisean isteach in am riamh? (diúltach)", answer: "nach dtagann"},
];

var tarALCoibhneasta = [

];

var tarALExtraQuestions = [
  {question: "___________fás ar gach neach beo de réir a nádúir féin. (dearfach) ", answer: "tagann"},
  {question: "Dá fhad é an lá ___________ an oíche. (dearfach).", answer: "tagann"},
  {question: "___ ___________ tú go Baile Átha Cliath go minic? (dearfach) ", answer: "an dtagann"},
  {question: "____ ___________ aimsir mar seo gach bliain? (dearfach)", answer: "an dtagann"},
  {question: "An é ____ ___________ sioc trom sa Gheimhreadh níos mó. (diúltach) ", answer: "nach dtagann"},
  {question: "_____ ___________ sí isteach anseo go rómhinic. (diúltach)", answer: "ní thagann"},
  {question: "Tá mé beagnach cinnte _____ ___________ an bus sin isteach ar a ceathrú taréis a hocht. (dearfach) ", answer: "go dtagann"},
  {question: "___________ easpa misnigh orm nuair a chloisim drochscéalta mar sin. (dearfach)", answer: "tagann"},
  {question: "___________ fadhbanna chun cinn ar bhonn laethúil ach bímid ábalta deileáil leo. (diúltach)", answer: "tagann"},
  {question: "___________ sé ar bhoinn airgid anois is arís agus é ar an trá. (dearfach) ", answer: "tagann"},
];

var tarAFQuestions = [
  {question: "___________ sí isteach nuair a bheidh sí críochnaithe.", answer: "tiocfaidh"},
  {question: "___________ siad abhaile arís ag deireadh na míosa.", answer: "tiocfaidh"},
  {question: "___________ feabhas ort le cleachtadh.", answer: "tiocfaidh"},
  {question: "___________ an samhradh is fásfaidh an féar. ", answer: "tiocfaidh"},
  {question: "___________ abhaile go luath arís anocht. (sinn)", answer: "tiocfaimid"},
  {question: "___________ athrú ar an aimsir ag deiredh na seachtaine seo.", answer: "tiocfaidh"},
  {question: "___________ lá na cinniúna luath nó mall.", answer: "tiocfaidh"},
  {question: "___________ do lá. Bí foighneach.", answer: "tiocfaidh"},
  {question: "___________ mé in éineacht leat má fhanann tú cúpla nóiméad. ", answer: "tiocfaidh"},
  {question: "___________ go dtí an cheist sin ar ball beag. (sinn)", answer: "tiocfaimid"},
];

var tarAFNi = [
  {question: "____ ___________ aon athrú ar an aimsir go ceann cúpla lá eile.", answer: "ní thiocfaidh"},
  {question: "____ ___________ sí ar ais go dtí an tseachtain seo chugainn.", answer: "ní thiocfaidh"},
  {question: "____ ___________ ciall chuige sin go brách. ", answer: "ní thiocfaidh"},
  {question: "____ ___________ aon bháisteach inniu. ", answer: "ní thiocfaidh"},
  {question: "____ ___________ aon athrú ar an bplean atá leagtha amach don turas. ", answer: "ní thiocfaidh"},
  {question: "____ ___________ ar ais anseo go brách na breithe. (sinn)", answer: "ní thiocfaimid"},
  {question: "____ ___________ an madra isteach má bhíonn eagla air.", answer: "ní thiocfaidh"},
  {question: "____ ___________ feabhas ort muna gcloíonn tú leis an mbia ceart. ", answer: "ní thiocfaidh"},
  {question: "____ ___________ air gan an áit a chuardach go mion. (sinn)", answer: "ní thiocfaimid"},
  {question: "____ ___________ aon toradh ar na hiarrachtaí sin atá ar bun acu.", answer: "ní thiocfaidh"},
];

var tarAFBriathorSaor = [

];

var tarAFCeisteach = [
  {question: "___ ___________ tú amach le haghaidh lóin níos déanaí? (dearfach)", answer: "an dtiocfaidh"},
  {question: "____ ___________ do chara in éineacht linn? (dearfach)", answer: "an dtiocfaidh"},
  {question: "____ ___________ abhaile díreach tar éis an cluiche? (sinn)", answer: "an dtiocfaimid", answer2: "nach dtiocfaimid"},
  {question: "____ ___________ siad ar ais go brách arís, dar leat? (dearfach)", answer: "an dtiocfaidh"},
  {question: "____ ___________ tú go dtí an ceolchoirm linn? (diúltach).", answer: "nach dtiocfaidh"},
  {question: "____ ___________ sibh linn go dtí an chóisir níos déanaí? (diúltach).", answer: "nach dtiocfaidh"},
  {question: "____ ___________ an freagra céanna suas arís má leanaimid mar seo? (diúltach).", answer: "nach dtiocfaidh"},
  {question: "____ ___________ sé sin ar réiteach na faidhbe go brách? (dearfach)", answer: "an dtiocfaidh"},
  {question: "Nach cuma? ____ ___________ duine éigin eile isteach ina áit siúd? (diúltach).", answer: "nach dtiocfaidh"},
  {question: "____ ___________ aon rud ón bhfiosrúchán atá ar siúl faoi láthair, dar leat? (dearfach).", answer: "an dtiocfaidh"},
];

var tarAFSpleach = [
  {question: "Níl an chuma air ____ ___________ sé ar ais anocht. (dearfach)", answer: "go dtiocfaidh"},
  {question: "An dóigh leat ____ ___________ siad ar ais go brách? (dearfach)", answer: "go dtiocfaidh"},
  {question: "Tá mé nach mór cinnte ____ ___________ siad ar ais níos déanaí. (dearfach) ", answer: "go dtiocfaidh"},
  {question: "Deirtear ar réamhfháisnéis na haimsire ____ ___________ báisteach throm anocht. (dearfach)", answer: "go dtiocfaidh"},
  {question: "Is cosúil ____ ___________ aon athrú ar an scéal go ceann tamaill eile. (diúltach)", answer: "nach dtiocfaidh"},
  {question: "Deir sí  ____ ___________ sí abhaile arís go dtí go mbeidh a cúrsa críochnaithe aici. (diúltach) ", answer: "nach dtiocfaidh"},
  {question: "Is cosúil  ____ ___________  na torthaí amach go dtí deireach na míosa seo. (diúltach)", answer: "nach dtiocfaidh"},
  {question: "Tá mé cinnte ____ ___________ sí ar ais sar i bhfad? (dearfach)", answer: "go dtiocfaidh"},
  {question: "Ní dóigh liom ____ ___________siad air. Tá sé rófhada caillte. (dearfach)", answer: "go dtiocfaidh"},
  {question: "Níl sé soiléir ____ ___________aon rud fiúntach as an taighde sin. (dearfach)", answer: "go dtiocfaidh"},
];

var tarAFCoibhneasta = [

];

var tarAFExtraQuestions = [
  {question: "", answer: "tiocfaidh", hint1: ""},
  {question: "", answer: "ní thiocfaidh", hint1: ""},
  {question: "", answer: "go thiocfaidh", hint1: ""},
  {question: "", answer: "an dtiocfaidh", hint1: ""},
  {question: "", answer: "an dtiocfaidh", hint1: ""},
  {question: "", answer: "tiocfaimid", answer2: "tiocfaidh muid", hint1: ""},
  {question: "", answer: "an dtiocfaidh", hint1: ""},
  {question: "", answer: "nach dtiocfaidh", hint1: ""},
  {question: "", answer: "ní thiocfaimid", answer2: "ní thiocfaidh muid", hint1: ""},
];

var biACQuestions = [
  {question: "___________ an scéal ag éirí níos measa in aghaidh an lae.", answer: "bhí", hint1: ""},
  {question: "___________ ina suí cois trá, bolg le grian, gan chíos, cás ná cathú.", answer: "bhíodar", answer2: "bhí said", hint1: ""},
  {question: "___________ préachta leis an bhfuacht an mhaidin áirithe sin. (sinn)", answer: "bhíomar", answer2: "bhí muid", hint1: ""},
  {question: "___________ an diabhal thíos ina bholg. ", answer: "bhí", hint1: ""},
  {question: "___________ an saol is a mháthair ag faire amach dóibh.", answer: "bhí", hint1: ""},
  {question: "___________ rud éigin ag dó na geirbe aige ó mhaidin.", answer: "bhí", hint1: ""},
  {question: "___________ loinnir ina shúile an mhaidin sin. ", answer: "bhí", hint1: ""},
  {question: "___________ bréan bailithe den scéal ar fad.", answer: "bhíos", answer2: "bhí mé", hint1: ""},
  {question: "___________ an an t-ádh dearg orm.", answer: "bhí", hint1: ""},
  {question: "Ní mó ná sásta a ___________ sé.", answer: "bhí", hint1: ""},
];

var biACNi = [
  {question: "____ ___________ faic na ngrás le feiceáil san áit.", answer: "ní raibh", hint1: ""},
  {question: "____ ___________ aon locht agam air.", answer: "ní raibh", hint1: ""},
  {question: "____ ___________ ar ár gcompord ó thosaigh sé ag caint. (sinn)", answer: "ní rabhamar", answer2: "ní raibh muid", hint1: ""},
  {question: "____ ___________ in ann an fód a sheasamh rófhada. (siad)", answer: "ní rabhadar", answer2: "ní raibh siad", hint1: ""},
  {question: "____ ___________ i mo chónaí san áit ach ar feadh seachtaine.", answer: "ní rabhas", answer2: "ní raibh mé", hint1: ""},
  {question: "____ ___________ aon ní ag cur isteach orainn an lá sin.", answer: "ní raibh", hint1: ""},
  {question: "____ ___________ sí ar a suaimhneas riamh a fhad a bhí sí ann.", answer: "ní raibh", hint1: ""},
  {question: "____ ___________ sé ach leathchéad bliain nuair a cailleadh é.", answer: "ní raibh", hint1: ""},
  {question: "____ ___________ le déanamh ach ár dtoil a chur le toil Dé.", answer: "ní raibh", hint1: ""},
  {question: "____  ___________ in ann faic a dhéanamh faoin uafás a bhí ag stánadh idir an dá shúil orthu. (siad)", answer: "ní rabhadar", answer2: "ní raibh siad", hint1: ""},
];

var biACBriathorSaor = [
  {question: "___________ ag tuar go dtitfeadh praghas na mairteola le fada. (dearfach)", answer: "bhíothas", hint1: ""},
  {question: "____ ___________ ag súil le toradh maith ar an taighde a bhí ar siúl san áit. (diúltach)", answer: "ní rabhathas", hint1: ""},
  {question: "___________ den tuairim nach n-éireodh leo an bheart a thabhairt chun críche. (dearfach)", answer: "bhíothas", hint1: ""},
  {question: "___________ den tuairim gur as a meabhair a bhí sí ag dul. (dearfach)", answer: "bhíothas", hint1: ""},
  {question: "____ ___________ róchinnte go dtiocfadh sé slán as an timpiste. (diúltach)", answer: "ní rabhathas", hint1: ""},
  {question: "____ ___________ ar aon tuairim faoi cad ba cheart a dhéanamh. (diúltach)", answer: "ní rabhathas", hint1: ""},
  {question: "____ ___________ róshásta leis an Rialtas ina dhiaidh sin. (diúltach)", answer: "bhíothas", hint1: ""},
  {question: "___________ lánsásta go raibh toradh dearfach ar na trialacha. (dearfach)", answer: "bhíothas", hint1: ""},
  {question: "___________ dóchasach go dtiocfadh deascéal roimh dheireadh an lae. (dearfach)", answer: "bhíothas", hint1: ""},
  {question: "____ ___________ ag súil le haon rud ní b’fhearr. (diúltach)", answer: "ní rabhathas", hint1: ""},
];

var biACCeisteach = [
  {question: "____ ___________ tú ar an gCarraig nó an bhfaca tú féin mo ghrá? (dearfach)", answer: "an raibh", hint1: ""},
  {question: "____ ___________ faic eile le déanamh agat ach a bheith ag seasamh timpeall? (diúltach)", answer: "nach raibh", hint1: ""},
  {question: "____ ___________ mórán le rá aici? (dearfach)", answer: "an raibh", hint1: ""},
  {question: "____ ___________ sásta? Bí cinnte go raibh! (sinn, dearfach)", answer: "an rabhamar", answer2: "an raibh muid", hint1: ""},
  {question: "____ ___________ aon ní eile ag cur isteach orthu? (dearfach)", answer: "an raibh", hint1: ""},
  {question: "____ ___________ an-oíche againn! (diúltach)", answer: "nach raibh", hint1: ""},
  {question: "____ ___________ an t-ádh dearg leo gur tháinig siad slán. (diúltach)", answer: "nach raibh", hint1: ""},
  {question: "____ ___________ siad thar a bheith buíoch díot? (siad, diúltach)", answer: "nach rabhamar", answer2: "nach raibh muid", hint1: ""},
  {question: "____ ___________ ag súil le torthaí ní b’fhearr? (briathar saor, dearfach)", answer: "an rabhathas", hint1: ""},
  {question: "____ ___________ fírinne an scéil ar eolas go maith acu. (diúltach)", answer: "nach raibh", hint1: ""},
];

var biACSpleach = [
  {question: "Bhí mé cinnte ____ ___________ sé imithe a chodladh ag an am sin. (dearfach)", answer: "go raibh", hint1: ""},
  {question: "Dúirt sí liom ____ ___________ sí chun dul ar ais níos mó. (diúltach)", answer: "nach raibh", hint1: ""},
  {question: "Bí cinnte de ____ ___________ mórán le rá acu ina dhiaidh sin. (diúltach)", answer: "nach raibh", hint1: ""},
  {question: "Chuala mé ____ ___________ sé ar fónamh le tamall anuas. (dearfach)", answer: "nach raibh", hint1: ""},
  {question: "Bhí eagla an domhain orainn____ ___________ i mbaol ár mbáite an lá sin. (dearfach)", answer: "go rabhadar", answer2: "go raibh muid", hint1: ""},
  {question: "Bhí a fhios againn ____ ___________ sásta ach ní raibh aon teacht timpeall air. (siad, diúltach)", answer: "go raibh", hint1: ""},
  {question: "Dúirt siad ____ ___________ siad chun teacht chugainn ach níor thángadar. (dearfach)", answer: "go raibh", hint1: ""},
  {question: "Bhí má bhí, ach níor chuala mise ____ ___________. (dearfach)", answer: "go raibh", hint1: ""},
  {question: "Dúirt sé ____ ___________ar an ngrúpa ab fhearr a bhí aige riamh? (sinn, dearfach)", answer: "go rabhadar", answer2: "go raibh muid", hint1: ""},
  {question: "Chuala mé ____ ___________siad ann ach ar feadh cúpla lá. (diúltach)", answer: "nach raibh", hint1: ""},
];

var biACCoibhneasta = [
  {question: "Chuala mé ____ ___________ le rá aici ag an gcruinniú. ", answer: "a raibh", hint1: ""},
  {question: "B’shin ____ ___________ le déanamh ach ní dhearna sibh é. ", answer: "a raibh", hint1: ""},
  {question: "Bhí gach ____ ___________ i láthair sna trithí gáire. ", answer: "a raibh", hint1: ""},
  {question: "Chonaiceamar ____ ___________ ann agus bhailíomar linn. ", answer: "a raibh", hint1: ""},
  {question: "B’shin ____ ___________ acu le hithe ar feadh trí lá. ", answer: "a raibh", hint1: ""},
  {question: "Chuir sé iontas ar gach ____ ___________ i láthair an oíche úd.", answer: "a raibh", hint1: ""},
  {question: "Bhí gach ____ ___________ múinte ar an gcúrsa ar bharr a teanga aici. ", answer: "a raibh", hint1: ""},
  {question: "Ghoid siad ____ ___________ d’airgead sa teach ag an sean-bhean. ", answer: "a raibh", hint1: ""},
  {question: "B’shin  ____ ___________ fágtha sa chuisneoir an mhaidin dar gcionn. ", answer: "a raibh", hint1: ""},
  {question: "B’shin ____ ___________ le rá aige is gan aon mhíniú eile aige ar an scéal. ", answer: "a raibh", hint1: ""},
];

var biACExtraQuestions = [
  {question: "___________ an ghomh uirthi an lá sin gan aon bhréag ná magadh. ", answer: "bhí", hint1: ""},
  {question: "____ ___________ aon dul as againn ach é a íoc. ", answer: "ní raibh", hint1: ""},
  {question: "____ ___________aon scéal ná duan uaithi ar feadh an achair. (diúltach) ", answer: "ní raibh", hint1: ""},
  {question: "____ ___________ in ainm is a bheith ag dul ansin ag tús na bliana? (sinn, diúltach) ", answer: "ní rabhamar", answer2: "ní raibh muid", hint1: ""},
  {question: "____ ___________ aon rud ag cur isteach ná amach orainn an lá sin. (diúltach)", answer: "ní raibh", hint1: ""},
  {question: "Bhí ____ ___________ le rá aici suimiúil. ", answer: "a raibh", hint1: ""},
  {question: "___________ ag súil le rud éigin ní b’fhearr ná sin. (briathar saor, dearfach) ", answer: "bhíothas", hint1: ""},
  {question: "____ ___________ sibh ábalta é a chríochnú in am? (diúltach)", answer: "an raibh", hint1: ""},
  {question: "___________ aon chuma ar an rud a rinne siad? (dearfach)", answer: "an raibh", hint1: ""},
  {question: "Dúirt sí ____ ___________ in áit an-chontúirteach agus go mba cheart dúinn bogadh láithreach. (sinn, dearfach)", answer: "go rabhamar", answer2: "go raibh muid", hint1: ""},
];
