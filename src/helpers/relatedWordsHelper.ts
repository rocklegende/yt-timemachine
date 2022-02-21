import {getNRandomElements} from "./helper";

const filmWords = [
    {
        "word": "photographic film",
        "score": 18.660989987789986,
        "from": "ol,wiki,swiki,wn"
    },
    {
        "word": "picture",
        "score": 17.82018429655498,
        "from": "ol,w2v,swiki,wn,wn"
    },
    {
        "word": "movie",
        "score": 16.437878621344257,
        "from": "ol,w2v,wn,wn,reddit-slashes"
    },
    {
        "word": "shoot",
        "score": 15.77753846153846,
        "from": "ol,wn,wn,wn,reddit-slashes"
    },
    {
        "word": "television",
        "score": 13.228693095407992,
        "from": "ol,w2v,wiki,swiki,reddit-slashes"
    },
    {
        "word": "documentary",
        "score": 11.659303975339274,
        "from": "ol,w2v,swiki,wn,reddit-slashes"
    },
    {
        "word": "theatre",
        "score": 11.234442568376615,
        "from": "ol,w2v,wiki,reddit-slashes"
    },
    {
        "word": "photography",
        "score": 10.453707692307692,
        "from": "ol,wiki,reddit-slashes"
    },
    {
        "word": "cinema",
        "score": 9.71743412337073,
        "from": "ol,w2v,wn,reddit-slashes"
    },
    {
        "word": "take",
        "score": 9.611230769230769,
        "from": "ol,wn,wn,reddit-slashes"
    },
    {
        "word": "celluloid",
        "score": 9.44526816362828,
        "from": "ol,wiki,wn"
    },
    {
        "word": "movie projector",
        "from": "wiki,swiki",
        "score": 8.644761904761904
    },
    {
        "word": "episode",
        "score": 8.570046384358031,
        "from": "w2v,wn,wn,reddit-slashes"
    },
    {
        "word": "art",
        "from": "wiki,wn,reddit-slashes",
        "score": 8.376763005780347
    },
    {
        "word": "animation",
        "score": 8.147948609223526,
        "from": "ol,w2v,wiki,reddit-slashes"
    },
    {
        "word": "show",
        "score": 7.621040957022896,
        "from": "ol,w2v,wn,reddit-slashes"
    },
    {
        "word": "movie theater",
        "from": "wiki,swiki",
        "score": 7.414285714285714
    },
    {
        "word": "soundtrack",
        "score": 7.146151168187534,
        "from": "w2v,wiki,swiki,reddit-slashes"
    },
    {
        "word": "screenplay",
        "score": 7.0357994271574125,
        "from": "ol,w2v,swiki,reddit-slashes"
    },
    {
        "word": "dvd",
        "from": "wiki,swiki",
        "score": 7.017590604642628
    },
    {
        "word": "flick",
        "score": 6.999438461538461,
        "from": "ol,wn,wn"
    },
    {
        "word": "screenwriter",
        "score": 6.712599590595638,
        "from": "ol,w2v,wiki,swiki"
    },
    {
        "word": "feature film",
        "from": "wiki,wn",
        "score": 6.7
    },
    {
        "word": "picture show",
        "score": 6.5363999999999995,
        "from": "ol,wn,wn"
    },
    {
        "word": "moving picture",
        "score": 6.516161538461539,
        "from": "ol,wn,wn"
    },
    {
        "word": "motion picture",
        "score": 6.4877076923076915,
        "from": "ol,wn,wn"
    },
    {
        "word": "videotape",
        "score": 6.362191196087149,
        "from": "ol,wiki,wn,reddit-slashes"
    },
    {
        "word": "actor",
        "score": 6.0740846172404055,
        "from": "ol,w2v,wiki,swiki"
    },
    {
        "word": "video",
        "score": 5.577407887817687,
        "from": "ol,w2v,wiki,reddit-slashes"
    },
    {
        "word": "filmmaking",
        "score": 5.568587849847048,
        "from": "ol,w2v,wiki"
    },
    {
        "word": "microfilm",
        "score": 5.467523076923077,
        "from": "ol,wn,wn"
    },
    {
        "word": "sequel",
        "score": 5.39902811908982,
        "from": "ol,w2v,wiki,swiki"
    },
    {
        "word": "reel",
        "score": 5.363849533125833,
        "from": "ol,wiki,wn"
    },
    {
        "word": "feature",
        "score": 5.045738760155025,
        "from": "ol,w2v,wn"
    },
    {
        "word": "record",
        "score": 4.8,
        "from": "wn,wn,reddit-slashes"
    },
    {
        "word": "cinematography",
        "score": 4.584283325922632,
        "from": "ol,wiki,reddit-slashes"
    },
    {
        "word": "story",
        "score": 4.384423387033538,
        "from": "w2v,swiki,reddit-slashes"
    },
    {
        "word": "opera",
        "score": 4.16609078755661,
        "from": "ol,w2v,wiki"
    },
    {
        "word": "tape",
        "score": 4.048984615384615,
        "from": "ol,wn,reddit-slashes"
    },
    {
        "word": "photograph",
        "score": 4.0380692307692305,
        "from": "ol,wn,reddit-slashes"
    },
    {
        "word": "drama",
        "score": 3.994878634142153,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "computer animation",
        "from": "wiki,swiki",
        "score": 3.81514450867052
    },
    {
        "word": "filmmakers",
        "score": 3.7933787038678926,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "theater",
        "score": 3.644971639771728,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "studio",
        "score": 3.3053564225746745,
        "from": "w2v,swiki,reddit-slashes"
    },
    {
        "word": "pic",
        "score": 3.16,
        "from": "wn,wn"
    },
    {
        "word": "fiction",
        "score": 3.085049300993072,
        "from": "w2v,swiki,reddit-slashes"
    },
    {
        "word": "sound",
        "from": "wiki,swiki",
        "score": 3.0007156619873383
    },
    {
        "word": "film stock",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "motion-picture show",
        "score": 2.8600000000000003,
        "from": "wn,wn"
    },
    {
        "word": "moving-picture show",
        "score": 2.8600000000000003,
        "from": "wn,wn"
    },
    {
        "word": "dialogue",
        "from": "wiki,swiki",
        "score": 2.8189705477566744
    },
    {
        "word": "sequence",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "enter",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "reshoot",
        "score": 2.6999999999999997,
        "from": "wn,wn"
    },
    {
        "word": "plastic film",
        "score": 2.6789076923076927,
        "from": "ol,wn"
    },
    {
        "word": "comedy",
        "score": 2.673331841292537,
        "from": "w2v,swiki"
    },
    {
        "word": "camera",
        "score": 2.6118,
        "from": "ol,wiki,reddit-slashes"
    },
    {
        "word": "documentary film",
        "from": "wiki,wn",
        "score": 2.578612716763006
    },
    {
        "word": "shot",
        "from": "wiki,wn",
        "score": 2.5722543352601157
    },
    {
        "word": "musical",
        "score": 2.558816465053125,
        "from": "w2v,wn"
    },
    {
        "word": "scene",
        "from": "wiki,wn",
        "score": 2.5549132947976876
    },
    {
        "word": "movie camera",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "united states",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "sound film",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "sergei eisenstein",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "put down",
        "score": 2.5,
        "from": "wn,wn"
    },
    {
        "word": "telefilm",
        "score": 2.4684923076923075,
        "from": "ol,wn"
    },
    {
        "word": "studio system",
        "from": "wiki",
        "score": 2.3996531791907514
    },
    {
        "word": "footage",
        "score": 2.3756615384615385,
        "from": "ol,wn"
    },
    {
        "word": "movies",
        "score": 2.357335350295491,
        "from": "ol,w2v"
    },
    {
        "word": "production",
        "score": 2.3156923076923075,
        "from": "ol,wn"
    },
    {
        "word": "filmmaker",
        "score": 2.2760846165813993,
        "from": "ol,w2v"
    },
    {
        "word": "theatrical",
        "score": 2.2379222563366907,
        "from": "ol,w2v"
    },
    {
        "word": "wrapping",
        "score": 2.205630769230769,
        "from": "ol,wn"
    },
    {
        "word": "wrap",
        "score": 2.2030923076923075,
        "from": "ol,wn"
    },
    {
        "word": "roll",
        "score": 2.200646153846154,
        "from": "ol,wn"
    },
    {
        "word": "productions",
        "score": 2.145462721765127,
        "from": "ol,w2v"
    },
    {
        "word": "blockbuster",
        "from": "wiki,swiki",
        "score": 2.0480924855491325
    },
    {
        "word": "film director",
        "from": "wiki",
        "score": 1.9788439306358379
    },
    {
        "word": "dramas",
        "score": 1.9785572459138165,
        "from": "ol,w2v"
    },
    {
        "word": "screen",
        "score": 1.9459406281944067,
        "from": "ol,w2v"
    },
    {
        "word": "entertainment",
        "from": "wiki,swiki",
        "score": 1.919882558032847
    },
    {
        "word": "pictures",
        "score": 1.8994691834489328,
        "from": "ol,w2v"
    },
    {
        "word": "culture",
        "from": "wiki,reddit-slashes",
        "score": 1.8843930635838149
    },
    {
        "word": "scum",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "create",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "literature",
        "from": "wiki,reddit-slashes",
        "score": 1.797687861271676
    },
    {
        "word": "films",
        "score": 1.7485690885424794,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "exposure",
        "from": "wiki,reddit-slashes",
        "score": 1.7341040462427744
    },
    {
        "word": "bollywood",
        "score": 1.682726895606339,
        "from": "w2v,wiki"
    },
    {
        "word": "computer-generated imagery",
        "from": "wiki,swiki",
        "score": 1.653757225433526
    },
    {
        "word": "genre",
        "score": 1.6433527247837292,
        "from": "w2v,swiki"
    },
    {
        "word": "visual art",
        "from": "wiki",
        "score": 1.6199999999999999
    },
    {
        "word": "comic",
        "score": 1.5768567632733115,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "novel",
        "score": 1.5434858081721945,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "zoetrope",
        "from": "wiki",
        "score": 1.5425433526011556
    },
    {
        "word": "filmed",
        "score": 1.5259238636180652,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "hollywood",
        "score": 1.5242654916317506,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "projection screen",
        "from": "wiki",
        "score": 1.5228901734104043
    },
    {
        "word": "silver screen",
        "from": "wiki,wn",
        "score": 1.5208092485549132
    },
    {
        "word": "shows",
        "score": 1.5060750958481965,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "sound recording and reproduction",
        "from": "wiki",
        "score": 1.502080924855491
    },
    {
        "word": "short subject",
        "from": "wiki,wn",
        "score": 1.4861271676300578
    },
    {
        "word": "music",
        "score": 1.4751721455106814,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "artist",
        "score": 1.4705974789294185,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "propaganda film",
        "from": "wiki",
        "score": 1.4673988439306356
    },
    {
        "word": "broadway",
        "score": 1.4540443270259202,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "film frame",
        "from": "wiki",
        "score": 1.4396531791907514
    },
    {
        "word": "cartoon",
        "score": 1.4267180007304217,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "phi phenomenon",
        "from": "wiki",
        "score": 1.425780346820809
    },
    {
        "word": "book",
        "score": 1.4218354494802554,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "cine",
        "score": 1.4195384615384614,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "cast",
        "score": 1.4158181511950536,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "song",
        "score": 1.4134742537968075,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "writing",
        "score": 1.3906827348190962,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "series",
        "score": 1.3813447058011161,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "arts",
        "score": 1.2870461538461537,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "photo",
        "score": 1.2683230769230769,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "plastic",
        "score": 1.236246153846154,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "technicolor",
        "from": "wiki",
        "score": 1.2263583815028902
    },
    {
        "word": "radio",
        "score": 1.2202615384615385,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "widescreen",
        "from": "wiki",
        "score": 1.1916763005780346
    },
    {
        "word": "cinematographer",
        "score": 1.1817846153846154,
        "from": "ol,wiki"
    },
    {
        "word": "producer",
        "from": "swiki,reddit-slashes",
        "score": 1.1746031746031746
    },
    {
        "word": "auguste and louis lumière",
        "from": "wiki",
        "score": 1.1136416184971099
    },
    {
        "word": "advertising",
        "from": "wiki,swiki",
        "score": 0.9132947976878613
    },
    {
        "word": "box office",
        "from": "wiki",
        "score": 0.8986127167630058
    },
    {
        "word": "martin scorsese",
        "from": "wiki",
        "score": 0.8639306358381502
    },
    {
        "word": "communication",
        "from": "swiki",
        "score": 0.8
    },
    {
        "word": "movement",
        "from": "swiki",
        "score": 0.784126984126984
    },
    {
        "word": "celebrity",
        "from": "wiki",
        "score": 0.7824277456647398
    },
    {
        "word": "dubbing",
        "from": "wiki",
        "score": 0.7335260115606936
    },
    {
        "word": "subtitles",
        "from": "wiki",
        "score": 0.7306358381502891
    },
    {
        "word": "translation",
        "from": "wiki",
        "score": 0.7277456647398843
    },
    {
        "word": "europe",
        "from": "wiki",
        "score": 0.7046242774566474
    },
    {
        "word": "storytelling",
        "from": "wiki",
        "score": 0.7017341040462428
    },
    {
        "word": "object",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "slick",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "negative",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "positive",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "polaroid",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "sheet",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wrapper",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "insert",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "business",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "medium",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "product",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "credit",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "caption",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "subtitle",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "credits",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "docudrama",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "infotainment",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "talkie",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "3d",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "dub",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "synchronize",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "snap",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "make",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "tragedy",
        "from": "swiki",
        "score": 0.6888888888888889
    },
    {
        "word": "andrei tarkovsky",
        "from": "wiki",
        "score": 0.6835838150289018
    },
    {
        "word": "sound-on-film",
        "from": "wiki",
        "score": 0.6537572254335261
    },
    {
        "word": "marketing",
        "from": "swiki",
        "score": 0.6412698412698412
    },
    {
        "word": "directed",
        "score": 0.6157057493702379,
        "from": "w2v"
    },
    {
        "word": "acclaimed",
        "score": 0.6108362034621124,
        "from": "w2v"
    },
    {
        "word": "cine-film",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "shrink-wrap",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "cut-in",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "macguffin",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "mcguffin",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "shoot-'em-up",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "silents",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "3-d",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "three-d",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "synchronise",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "cinematise",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "cinematize",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "adaptation",
        "score": 0.595237417141727,
        "from": "w2v"
    },
    {
        "word": "phenakistiscope",
        "from": "wiki",
        "score": 0.5872832369942197
    },
    {
        "word": "remake",
        "score": 0.5848906821674562,
        "from": "w2v"
    },
    {
        "word": "animated",
        "score": 0.5847726305569798,
        "from": "w2v"
    },
    {
        "word": "starred",
        "score": 0.579318620166504,
        "from": "w2v"
    },
    {
        "word": "praxinoscope",
        "from": "wiki",
        "score": 0.5786127167630059
    },
    {
        "word": "videocassette",
        "from": "swiki",
        "score": 0.5777777777777777
    },
    {
        "word": "horror",
        "score": 0.5760220951118759,
        "from": "w2v"
    },
    {
        "word": "starring",
        "score": 0.5724873879999333,
        "from": "w2v"
    },
    {
        "word": "piano",
        "from": "wiki",
        "score": 0.5658959537572255
    },
    {
        "word": "organ",
        "from": "wiki",
        "score": 0.5630057803468207
    },
    {
        "word": "broadcasting",
        "from": "swiki",
        "score": 0.5619047619047619
    },
    {
        "word": "orchestra",
        "from": "wiki",
        "score": 0.5601156069364162
    },
    {
        "word": "thriller",
        "score": 0.5530078270071507,
        "from": "w2v"
    },
    {
        "word": "parody",
        "score": 0.5514519289407093,
        "from": "w2v"
    },
    {
        "word": "featured",
        "score": 0.5467012066958381,
        "from": "w2v"
    },
    {
        "word": "chronophotography",
        "from": "wiki",
        "score": 0.5439306358381503
    },
    {
        "word": "intolerance",
        "from": "wiki",
        "score": 0.5427745664739885
    },
    {
        "word": "titled",
        "score": 0.5423249282768733,
        "from": "w2v"
    },
    {
        "word": "cinematic",
        "score": 0.5421384615384616,
        "from": "ol"
    },
    {
        "word": "zoopraxiscope",
        "from": "wiki",
        "score": 0.5410404624277457
    },
    {
        "word": "electrotachyscope",
        "from": "wiki",
        "score": 0.538150289017341
    },
    {
        "word": "directing",
        "score": 0.5331330044630557,
        "from": "w2v"
    },
    {
        "word": "premiered",
        "score": 0.5319776054194969,
        "from": "w2v"
    },
    {
        "word": "premiere",
        "score": 0.5306288243154157,
        "from": "w2v"
    },
    {
        "word": "character",
        "score": 0.529463762568,
        "from": "w2v"
    },
    {
        "word": "best",
        "score": 0.5279563749437052,
        "from": "w2v"
    },
    {
        "word": "produced",
        "score": 0.5262653386470678,
        "from": "w2v"
    },
    {
        "word": "tv",
        "score": 0.524111573079018,
        "from": "w2v"
    },
    {
        "word": "filming",
        "score": 0.521761471201164,
        "from": "w2v"
    },
    {
        "word": "spoof",
        "score": 0.5214982089530448,
        "from": "w2v"
    },
    {
        "word": "actress",
        "score": 0.5198167284770804,
        "from": "w2v"
    },
    {
        "word": "documentaries",
        "score": 0.5190452166431977,
        "from": "w2v"
    },
    {
        "word": "cinematographic",
        "score": 0.5188769230769231,
        "from": "ol"
    },
    {
        "word": "adapted",
        "score": 0.5188296439685478,
        "from": "w2v"
    },
    {
        "word": "miniseries",
        "score": 0.518142210716348,
        "from": "w2v"
    },
    {
        "word": "film theory",
        "from": "wiki",
        "score": 0.5171098265895955
    },
    {
        "word": "kinetoscope",
        "from": "wiki",
        "score": 0.515028901734104
    },
    {
        "word": "actors",
        "score": 0.5147271083118701,
        "from": "w2v"
    },
    {
        "word": "presents",
        "score": 0.5128399270198186,
        "from": "w2v"
    },
    {
        "word": "mutoscope",
        "from": "wiki",
        "score": 0.5121387283236994
    },
    {
        "word": "scenes",
        "score": 0.511277393954381,
        "from": "w2v"
    },
    {
        "word": "featuring",
        "score": 0.5110457996473142,
        "from": "w2v"
    },
    {
        "word": "stars",
        "score": 0.5101784903452401,
        "from": "w2v"
    },
    {
        "word": "portrayal",
        "score": 0.5088370568226971,
        "from": "w2v"
    },
    {
        "word": "fantasy",
        "score": 0.5059080144668363,
        "from": "w2v"
    },
    {
        "word": "inspired",
        "score": 0.5035706221919244,
        "from": "w2v"
    },
    {
        "word": "plays",
        "score": 0.5030962427993114,
        "from": "w2v"
    },
    {
        "word": "reality",
        "score": 0.502074309882628,
        "from": "w2v"
    },
    {
        "word": "anthology",
        "score": 0.5008211931893312,
        "from": "w2v"
    },
    {
        "word": "novels",
        "score": 0.5000239573422137,
        "from": "w2v"
    },
    {
        "word": "role",
        "score": 0.49807690417715667,
        "from": "w2v"
    },
    {
        "word": "awards",
        "score": 0.4980114595624413,
        "from": "w2v"
    },
    {
        "word": "dubbed",
        "score": 0.49544948076788525,
        "from": "w2v"
    },
    {
        "word": "tarantino",
        "score": 0.4945162608671281,
        "from": "w2v"
    },
    {
        "word": "version",
        "score": 0.49356695691803837,
        "from": "w2v"
    },
    {
        "word": "appeared",
        "score": 0.4933825028457478,
        "from": "w2v"
    },
    {
        "word": "written",
        "score": 0.49331783376061006,
        "from": "w2v"
    },
    {
        "word": "award",
        "score": 0.49309010403920367,
        "from": "w2v"
    },
    {
        "word": "shakespeare",
        "score": 0.4924975923137058,
        "from": "w2v"
    },
    {
        "word": "eidoloscope",
        "from": "wiki",
        "score": 0.491907514450867
    },
    {
        "word": "film industry",
        "from": "wiki",
        "score": 0.4913294797687862
    },
    {
        "word": "hbo",
        "score": 0.49004413048378603,
        "from": "w2v"
    },
    {
        "word": "screening",
        "score": 0.4823230769230769,
        "from": "ol"
    },
    {
        "word": "audiovisual",
        "score": 0.4786384615384615,
        "from": "ol"
    },
    {
        "word": "epic",
        "score": 0.4773076923076923,
        "from": "ol"
    },
    {
        "word": "clip",
        "score": 0.47541538461538463,
        "from": "ol"
    },
    {
        "word": "cannes",
        "score": 0.4743307692307692,
        "from": "ol"
    },
    {
        "word": "visual effects",
        "from": "wiki",
        "score": 0.47109826589595377
    },
    {
        "word": "digital recording",
        "from": "wiki",
        "score": 0.45664739884393063
    },
    {
        "word": "guild",
        "score": 0.4486846153846154,
        "from": "ol"
    },
    {
        "word": "cultural artifact",
        "from": "wiki",
        "score": 0.44508670520231225
    },
    {
        "word": "projection",
        "score": 0.4438076923076923,
        "from": "ol"
    },
    {
        "word": "shooting",
        "score": 0.4410846153846154,
        "from": "ol"
    },
    {
        "word": "motion",
        "score": 0.43904615384615386,
        "from": "ol"
    },
    {
        "word": "semiotics",
        "from": "wiki",
        "score": 0.438728323699422
    },
    {
        "word": "kino",
        "score": 0.43756153846153845,
        "from": "ol"
    },
    {
        "word": "piece",
        "score": 0.42967692307692307,
        "from": "ol"
    },
    {
        "word": "laminate",
        "score": 0.42599230769230767,
        "from": "ol"
    },
    {
        "word": "pellicle",
        "score": 0.4245076923076923,
        "from": "ol"
    },
    {
        "word": "wittgenstein",
        "from": "wiki",
        "score": 0.42427745664739885
    },
    {
        "word": "coating",
        "score": 0.4223,
        "from": "ol"
    },
    {
        "word": "persistence of vision",
        "from": "wiki",
        "score": 0.42196531791907504
    },
    {
        "word": "language",
        "from": "wiki",
        "score": 0.41849710982658955
    },
    {
        "word": "membrane",
        "score": 0.41765384615384615,
        "from": "ol"
    },
    {
        "word": "award-winning",
        "score": 0.41676226524566495,
        "from": "w2v"
    },
    {
        "word": "skin",
        "score": 0.4164076923076923,
        "from": "ol"
    },
    {
        "word": "spool",
        "score": 0.41454615384615384,
        "from": "ol"
    },
    {
        "word": "recording medium",
        "from": "wiki",
        "score": 0.41040462427745666
    },
    {
        "word": "api",
        "score": 0.4093846153846154,
        "from": "ol"
    },
    {
        "word": "layer",
        "score": 0.40754615384615384,
        "from": "ol"
    },
    {
        "word": "vault",
        "score": 0.4063230769230769,
        "from": "ol"
    },
    {
        "word": "feature-length",
        "score": 0.405753778106525,
        "from": "w2v"
    },
    {
        "word": "sheathing",
        "score": 0.40573076923076923,
        "from": "ol"
    },
    {
        "word": "granville",
        "score": 0.40284615384615385,
        "from": "ol"
    },
    {
        "word": "instantaneous",
        "score": 0.4024923076923077,
        "from": "ol"
    },
    {
        "word": "ying",
        "score": 0.4014076923076923,
        "from": "ol"
    },
    {
        "word": "capa",
        "score": 0.4004615384615385,
        "from": "ol"
    },
    {
        "word": "youtube",
        "from": "wiki,reddit-slashes",
        "score": 0.4
    },
    {
        "word": "amateur",
        "from": "wiki,reddit-slashes",
        "score": 0.4
    },
    {
        "word": "vhs",
        "from": "wiki,reddit-slashes",
        "score": 0.4
    },
    {
        "word": "internet",
        "from": "wiki,swiki",
        "score": 0.4
    },
    {
        "word": "physical object",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "soap film",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "motion-picture film",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "movie film",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "orthochromatic film",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "panchromatic film",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "photographic material",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "photographic paper",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "roll film",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "x-ray film",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "film clip",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "flat solid",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "artistic creation",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "artistic production",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "business enterprise",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "commercial enterprise",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "final cut",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "home movie",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "collage film",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "coming attraction",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "cinema verite",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "film noir",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "skin flick",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "rough cut",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "silent movie",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "silent picture",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "slow motion",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "talking picture",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "musical comedy",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "musical theater",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "rolling",
        "score": 0.39871538461538464,
        "from": "ol"
    },
    {
        "word": "coat",
        "score": 0.39663076923076923,
        "from": "ol"
    },
    {
        "word": "surveying",
        "score": 0.3964,
        "from": "ol"
    },
    {
        "word": "counterpoint",
        "from": "wiki",
        "score": 0.3924855491329479
    },
    {
        "word": "shank",
        "score": 0.39226153846153844,
        "from": "ol"
    },
    {
        "word": "live-action",
        "score": 0.39146279772830306,
        "from": "w2v"
    },
    {
        "word": "cinéma",
        "score": 0.39096153846153847,
        "from": "ol"
    },
    {
        "word": "fca",
        "score": 0.39096153846153847,
        "from": "ol"
    },
    {
        "word": "nfb",
        "score": 0.39096153846153847,
        "from": "ol"
    },
    {
        "word": "vilma",
        "score": 0.39096153846153847,
        "from": "ol"
    },
    {
        "word": "filmography",
        "score": 0.39087692307692307,
        "from": "ol"
    },
    {
        "word": "auteur",
        "score": 0.39085384615384616,
        "from": "ol"
    },
    {
        "word": "biopic",
        "score": 0.39084615384615384,
        "from": "ol"
    },
    {
        "word": "directorial",
        "score": 0.3908307692307692,
        "from": "ol"
    },
    {
        "word": "cinematograph",
        "score": 0.3908076923076923,
        "from": "ol"
    },
    {
        "word": "stroboscopic effect",
        "from": "wiki",
        "score": 0.3901734104046242
    },
    {
        "word": "editing",
        "from": "wiki",
        "score": 0.38670520231213873
    },
    {
        "word": "flip book",
        "from": "wiki",
        "score": 0.3815028901734104
    },
    {
        "word": "ballet",
        "from": "wiki",
        "score": 0.38092485549132943
    },
    {
        "word": "jules duboscq",
        "from": "wiki",
        "score": 0.3757225433526011
    },
    {
        "word": "newspaper",
        "from": "wiki",
        "score": 0.37514450867052024
    },
    {
        "word": "horror movie",
        "from": "swiki",
        "score": 0.3730158730158731
    },
    {
        "word": "magazine",
        "from": "wiki",
        "score": 0.3722543352601156
    },
    {
        "word": "photographic emulsion",
        "from": "wiki",
        "score": 0.369942196531792
    },
    {
        "word": "joseph plateau",
        "from": "wiki",
        "score": 0.3641618497109827
    },
    {
        "word": "charles wheatstone",
        "from": "wiki",
        "score": 0.36127167630057794
    },
    {
        "word": "instantaneous photography",
        "from": "wiki",
        "score": 0.3583815028901734
    },
    {
        "word": "eadweard muybridge",
        "from": "wiki",
        "score": 0.35549132947976886
    },
    {
        "word": "the horse in motion",
        "from": "wiki",
        "score": 0.3526011560693641
    },
    {
        "word": "étienne-jules marey",
        "from": "wiki",
        "score": 0.34971098265895956
    },
    {
        "word": "ottomar anschütz",
        "from": "wiki",
        "score": 0.346820809248555
    },
    {
        "word": "émile reynaud",
        "from": "wiki",
        "score": 0.3352601156069364
    },
    {
        "word": "société française de photographie",
        "from": "wiki",
        "score": 0.3323699421965319
    },
    {
        "word": "théâtre optique",
        "from": "wiki",
        "score": 0.3294797687861271
    },
    {
        "word": "pay television",
        "from": "swiki",
        "score": 0.3253968253968254
    },
    {
        "word": "cameraman",
        "from": "swiki",
        "score": 0.3238095238095238
    },
    {
        "word": "mumbai",
        "from": "wiki",
        "score": 0.3115606936416185
    },
    {
        "word": "cable television",
        "from": "swiki",
        "score": 0.3095238095238096
    },
    {
        "word": "blacksmith scene",
        "from": "wiki",
        "score": 0.30635838150289013
    },
    {
        "word": "edison manufacturing company",
        "from": "wiki",
        "score": 0.3034682080924856
    },
    {
        "word": "hindi",
        "from": "wiki",
        "score": 0.30289017341040464
    },
    {
        "word": "movie theatre",
        "from": "wiki",
        "score": 0.30208092485549126
    },
    {
        "word": "edison studios",
        "from": "wiki",
        "score": 0.30057803468208083
    },
    {
        "word": "the kiss",
        "from": "wiki",
        "score": 0.2976878612716763
    },
    {
        "word": "woodville latham",
        "from": "wiki",
        "score": 0.29479768786127175
    },
    {
        "word": "audio-visual",
        "score": 0.2909615384615385,
        "from": "ol"
    },
    {
        "word": "drive-in",
        "score": 0.2909615384615385,
        "from": "ol"
    },
    {
        "word": "film-maker",
        "score": 0.2909615384615385,
        "from": "ol"
    },
    {
        "word": "film-making",
        "score": 0.2909615384615385,
        "from": "ol"
    },
    {
        "word": "documentarian",
        "score": 0.2908384615384615,
        "from": "ol"
    },
    {
        "word": "film editing",
        "from": "wiki",
        "score": 0.28323699421965315
    },
    {
        "word": "cinematic technique",
        "from": "wiki",
        "score": 0.2803468208092486
    },
    {
        "word": "visual arts",
        "from": "wiki",
        "score": 0.27167630057803477
    },
    {
        "word": "silent film",
        "from": "wiki",
        "score": 0.26878612716763
    },
    {
        "word": "film score",
        "from": "wiki",
        "score": 0.2572254335260116
    },
    {
        "word": "world war i",
        "from": "wiki",
        "score": 0.25433526011560686
    },
    {
        "word": "cinema of the united states",
        "from": "wiki",
        "score": 0.2514450867052023
    },
    {
        "word": "d. w. griffith",
        "from": "wiki",
        "score": 0.24855491329479779
    },
    {
        "word": "artistic",
        "from": "wiki",
        "score": 0.24797687861271678
    },
    {
        "word": "video camera",
        "from": "swiki",
        "score": 0.2460317460317461
    },
    {
        "word": "the birth of a nation",
        "from": "wiki",
        "score": 0.24566473988439302
    },
    {
        "word": "theoretical",
        "from": "wiki",
        "score": 0.24508670520231213
    },
    {
        "word": "technology",
        "from": "wiki",
        "score": 0.24219653179190748
    },
    {
        "word": "friedrich wilhelm murnau",
        "from": "wiki",
        "score": 0.23699421965317918
    },
    {
        "word": "commerce",
        "from": "wiki",
        "score": 0.23641618497109823
    },
    {
        "word": "fritz lang",
        "from": "wiki",
        "score": 0.23410404624277464
    },
    {
        "word": "charles chaplin",
        "from": "wiki",
        "score": 0.23121387283236988
    },
    {
        "word": "batman",
        "from": "wiki",
        "score": 0.23063583815028899
    },
    {
        "word": "plot",
        "from": "swiki",
        "score": 0.22857142857142854
    },
    {
        "word": "buster keaton",
        "from": "wiki",
        "score": 0.22832369942196534
    },
    {
        "word": "sound effects",
        "from": "wiki",
        "score": 0.2196531791907515
    },
    {
        "word": "talkies",
        "from": "wiki",
        "score": 0.2190751445086705
    },
    {
        "word": "hearing",
        "from": "wiki",
        "score": 0.2161849710982659
    },
    {
        "word": "color motion picture film",
        "from": "wiki",
        "score": 0.2138728323699422
    },
    {
        "word": "india",
        "from": "swiki",
        "score": 0.21269841269841266
    },
    {
        "word": "short film",
        "from": "wiki",
        "score": 0.2080924855491329
    },
    {
        "word": "becky sharp",
        "from": "wiki",
        "score": 0.2023121387283236
    },
    {
        "word": "polarized 3d system",
        "from": "wiki",
        "score": 0.1936416184971098
    },
    {
        "word": "waterworld",
        "from": "wiki",
        "score": 0.1913294797687861
    },
    {
        "word": "stereophonic sound",
        "from": "wiki",
        "score": 0.19075144508670516
    },
    {
        "word": "peter bogdanovich",
        "from": "wiki",
        "score": 0.18786127167630062
    },
    {
        "word": "french new wave",
        "from": "wiki",
        "score": 0.17919075144508667
    },
    {
        "word": "parallel cinema",
        "from": "wiki",
        "score": 0.17630057803468213
    },
    {
        "word": "japanese new wave",
        "from": "wiki",
        "score": 0.17341040462427748
    },
    {
        "word": "new hollywood",
        "from": "wiki",
        "score": 0.17052023121387283
    },
    {
        "word": "sales",
        "from": "wiki",
        "score": 0.16705202312138728
    },
    {
        "word": "sound effect",
        "from": "swiki",
        "score": 0.16666666666666663
    },
    {
        "word": "ricciotto canudo",
        "from": "wiki",
        "score": 0.16473988439306353
    },
    {
        "word": "formalist film theory",
        "from": "wiki",
        "score": 0.161849710982659
    },
    {
        "word": "preview",
        "from": "wiki",
        "score": 0.16127167630057804
    },
    {
        "word": "rudolf arnheim",
        "from": "wiki",
        "score": 0.15895953757225434
    },
    {
        "word": "béla balázs",
        "from": "wiki",
        "score": 0.1560693641618497
    },
    {
        "word": "siegfried kracauer",
        "from": "wiki",
        "score": 0.15317919075144504
    },
    {
        "word": "fine art",
        "from": "wiki",
        "score": 0.1502890173410405
    },
    {
        "word": "prequel",
        "from": "wiki",
        "score": 0.14971098265895955
    },
    {
        "word": "andré bazin",
        "from": "wiki",
        "score": 0.14739884393063585
    },
    {
        "word": "jacques lacan",
        "from": "wiki",
        "score": 0.1445086705202312
    },
    {
        "word": "ferdinand de saussure",
        "from": "wiki",
        "score": 0.14161849710982655
    },
    {
        "word": "psychoanalytic film theory",
        "from": "wiki",
        "score": 0.13583815028901736
    },
    {
        "word": "structuralist film theory",
        "from": "wiki",
        "score": 0.1329479768786127
    },
    {
        "word": "feminist film theory",
        "from": "wiki",
        "score": 0.13005780346820806
    },
    {
        "word": "analytical philosophy",
        "from": "wiki",
        "score": 0.12716763005780352
    },
    {
        "word": "form of life",
        "from": "wiki",
        "score": 0.12138728323699421
    },
    {
        "word": "james monaco",
        "from": "wiki",
        "score": 0.11560693641618502
    },
    {
        "word": "digital cinema",
        "from": "wiki",
        "score": 0.11479768786127165
    },
    {
        "word": "ingmar bergman",
        "from": "wiki",
        "score": 0.11271676300578037
    },
    {
        "word": "double feature",
        "from": "wiki",
        "score": 0.1078612716763005
    },
    {
        "word": "metonym",
        "from": "wiki",
        "score": 0.107514450867052
    },
    {
        "word": "180-degree rule",
        "from": "wiki",
        "score": 0.10404624277456642
    },
    {
        "word": "classical hollywood cinema",
        "from": "wiki",
        "score": 0.10115606936416188
    },
    {
        "word": "warner bros.",
        "from": "wiki,swiki",
        "score": 0.10000000000000003
    },
    {
        "word": "battleship potemkin",
        "from": "wiki",
        "score": 0.09537572254335258
    },
    {
        "word": "film release",
        "from": "wiki",
        "score": 0.0939884393063583
    },
    {
        "word": "mise en scene",
        "from": "wiki",
        "score": 0.08959537572254339
    },
    {
        "word": "metro-goldwyn-mayer",
        "from": "swiki",
        "score": 0.08095238095238091
    },
    {
        "word": "roger ebert",
        "from": "wiki",
        "score": 0.0780346820809249
    },
    {
        "word": "broadcast media",
        "from": "wiki",
        "score": 0.06936416184971095
    },
    {
        "word": "film genre",
        "from": "wiki",
        "score": 0.06647398843930641
    },
    {
        "word": "action film",
        "from": "wiki",
        "score": 0.06358381502890176
    },
    {
        "word": "horror film",
        "from": "wiki",
        "score": 0.06069364161849711
    },
    {
        "word": "comedy film",
        "from": "wiki",
        "score": 0.05780346820809246
    },
    {
        "word": "drama film",
        "from": "wiki",
        "score": 0.054913294797687806
    },
    {
        "word": "art film",
        "from": "wiki",
        "score": 0.052023121387283267
    },
    {
        "word": "game",
        "score": 0.048,
        "from": "reddit-slashes"
    },
    {
        "word": "movie marketing",
        "from": "wiki",
        "score": 0.046242774566473965
    },
    {
        "word": "movie director",
        "from": "swiki",
        "score": 0.03968253968253965
    },
    {
        "word": "film studies",
        "from": "wiki",
        "score": 0.037572254335260125
    },
    {
        "word": "caterer",
        "from": "wiki",
        "score": 0.03410404624277455
    },
    {
        "word": "oberammergau passion play",
        "from": "wiki",
        "score": 0.03179190751445082
    },
    {
        "word": "cinephilia",
        "from": "wiki",
        "score": 0.026589595375722502
    },
    {
        "word": "acetate",
        "from": "wiki",
        "score": 0.02543352601156068
    },
    {
        "word": "charlie chaplin",
        "from": "wiki",
        "score": 0.023121387283236983
    },
    {
        "word": "budget",
        "from": "swiki",
        "score": 0.0222222222222222
    },
    {
        "word": "television programming",
        "from": "wiki",
        "score": 0.020231213872832332
    },
    {
        "word": "media",
        "score": 0.018,
        "from": "reddit-slashes"
    },
    {
        "word": "serie",
        "score": 0.018,
        "from": "reddit-slashes"
    },
    {
        "word": "videotape recorder",
        "from": "wiki",
        "score": 0.017341040462427793
    },
    {
        "word": "hollywood, california",
        "from": "wiki",
        "score": 0.014450867052023142
    },
    {
        "word": "residue",
        "score": 0.012,
        "from": "reddit-slashes"
    },
    {
        "word": "saran",
        "score": 0.01,
        "from": "reddit-slashes"
    },
    {
        "word": "sensor",
        "score": 0.01,
        "from": "reddit-slashes"
    },
    {
        "word": "audio engineer",
        "from": "swiki",
        "score": 0.007936507936507908
    },
    {
        "word": "edit",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "games",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "cinema of india",
        "from": "wiki",
        "score": 0.005780346820809301
    },
    {
        "word": "slide",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "photos",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "playbook",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "literary",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "porn",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "books",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "anime",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "lube",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "gaming",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "commercial",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "journalism",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "learn",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "animate",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "the",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "beckett",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "play",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "vfx",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "visual",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "concert",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "telling",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "pics",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "digital",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "prod",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "blur",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "watch",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "practices",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sports",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "author",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "train",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cells",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "highlights",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "seri",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "friend",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "card",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "grain",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "english",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "does",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "development",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "technique",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "daughter",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "bag",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "snobs",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "businesses",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sheen",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hero",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "older",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "shame",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "back",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "smoker",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tiny",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "know",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "chemicals",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "addict",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "rots",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "powder",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fake",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "glad",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "have",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sticker",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "beta",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "models",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "out",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "ink",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "print",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "commit",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "concept",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "inside",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "perform",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cop",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "field",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "air",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "compete",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fans",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "bubble",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "properly",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "for",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "history",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tlc",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "audio",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "produce",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "oily",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "expensive",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "developing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "broadcast",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "material",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "gummy",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "primetime",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "recording",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mip",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "daylight",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "museum",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "them",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "knowing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "season",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "theory",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "find",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "trying",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "telly",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "superhero",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mucus",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "dev",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "iso",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "confront",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "frame",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "animations",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "parchment",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "viscous",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "apc",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "playing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "san",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "smear",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "settings",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "after",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "introduction",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "image",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "videogame",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "draw",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "boek",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "rehab",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "foil",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "what",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "animating",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "images",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "special",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "stream",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "send",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "movie studio",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "lens",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "multimedia",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "analog",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "camcorder",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "firewire",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "dv",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "license",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "fan",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "audience",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "download",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "japan",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "billboard",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "cult",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "mainstream",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "contract",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "cost overruns",
        "from": "wiki",
        "score": -0.0028901734104046506
    },
    {
        "word": "kevin costner",
        "from": "wiki",
        "score": -0.005780346820809246
    },
    {
        "word": "academy awards",
        "from": "wiki",
        "score": -0.011560693641618491
    },
    {
        "word": "blockbuster film",
        "from": "wiki",
        "score": -0.017341040462427737
    },
    {
        "word": "mothlight",
        "from": "wiki",
        "score": -0.019653179190751463
    },
    {
        "word": "film criticism",
        "from": "wiki",
        "score": -0.026011560693641633
    },
    {
        "word": "pre-production",
        "from": "wiki",
        "score": -0.02832369942196536
    },
    {
        "word": "film history",
        "from": "wiki",
        "score": -0.02890173410404623
    },
    {
        "word": "film propaganda",
        "from": "wiki",
        "score": -0.03179190751445088
    },
    {
        "word": "post-production",
        "from": "wiki",
        "score": -0.034104046242774605
    },
    {
        "word": "movie review",
        "from": "wiki",
        "score": -0.034682080924855474
    },
    {
        "word": "star wars action figures",
        "from": "wiki",
        "score": -0.037572254335260125
    },
    {
        "word": "product placement",
        "from": "wiki",
        "score": -0.04046242774566472
    },
    {
        "word": "blu-ray disc",
        "from": "wiki",
        "score": -0.04473988439306359
    },
    {
        "word": "british and american english",
        "from": "wiki",
        "score": -0.046242774566473965
    },
    {
        "word": "special effects",
        "from": "swiki",
        "score": -0.05619047619047626
    },
    {
        "word": "polyester",
        "from": "wiki",
        "score": -0.07745664739884395
    },
    {
        "word": "silent films",
        "from": "wiki",
        "score": -0.07803468208092484
    },
    {
        "word": "dizi",
        "score": -0.096,
        "from": "reddit-slashes"
    },
    {
        "word": "screenwriting",
        "score": -0.096,
        "from": "reddit-slashes"
    },
    {
        "word": "nonchan",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "tvshow",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "dizileri",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "webseries",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "serranwrap",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "instax",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "neca",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "feetie",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "buttercream",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "serija",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "theroy",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "farcry",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "matpat",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "ceran",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "fernseh",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "trasmissione",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "veoh",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "dvd-video",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "claymation",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "hanna-barbera",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "stan brakhage",
        "from": "wiki",
        "score": -0.10023121387283232
    },
    {
        "word": "aspect ratio",
        "from": "wiki",
        "score": -0.10115606936416183
    },
    {
        "word": "major movie studios",
        "from": "swiki",
        "score": -0.1031746031746032
    },
    {
        "word": "independent film",
        "from": "wiki",
        "score": -0.10982658959537572
    },
    {
        "word": "film screening",
        "from": "wiki",
        "score": -0.11271676300578037
    },
    {
        "word": "united artists",
        "from": "swiki",
        "score": -0.13492063492063494
    },
    {
        "word": "bride of frankenstein",
        "from": "wiki",
        "score": -0.1445086705202312
    },
    {
        "word": "james bond",
        "from": "wiki",
        "score": -0.14739884393063585
    },
    {
        "word": "film distributor",
        "from": "wiki",
        "score": -0.14878612716763007
    },
    {
        "word": "butch and sundance: the early days",
        "from": "wiki",
        "score": -0.1531791907514451
    },
    {
        "word": "post-credits scene",
        "from": "wiki",
        "score": -0.1560693641618497
    },
    {
        "word": "ferris bueller's day off",
        "from": "wiki",
        "score": -0.15895953757225434
    },
    {
        "word": "columbia pictures",
        "from": "swiki",
        "score": -0.16666666666666669
    },
    {
        "word": "woody allen",
        "from": "wiki",
        "score": -0.16763005780346824
    },
    {
        "word": "take the money and run",
        "from": "wiki",
        "score": -0.17052023121387283
    },
    {
        "word": "audience response",
        "from": "wiki",
        "score": -0.17630057803468208
    },
    {
        "word": "first blood",
        "from": "wiki",
        "score": -0.17919075144508673
    },
    {
        "word": "john rambo",
        "from": "wiki",
        "score": -0.18208092485549132
    },
    {
        "word": "paramount pictures",
        "from": "swiki",
        "score": -0.18253968253968256
    },
    {
        "word": "vietnam veteran",
        "from": "wiki",
        "score": -0.18497109826589597
    },
    {
        "word": "educational film",
        "from": "wiki",
        "score": -0.19653179190751446
    },
    {
        "word": "leni riefenstahl",
        "from": "wiki",
        "score": -0.2023121387283237
    },
    {
        "word": "andrzej wajda",
        "from": "wiki",
        "score": -0.20809248554913296
    },
    {
        "word": "set construction",
        "from": "swiki",
        "score": -0.2142857142857143
    },
    {
        "word": "production cycle",
        "from": "wiki",
        "score": -0.2225433526011561
    },
    {
        "word": "script development",
        "from": "wiki",
        "score": -0.2254335260115607
    },
    {
        "word": "trade union",
        "from": "swiki",
        "score": -0.23015873015873017
    },
    {
        "word": "film production",
        "from": "wiki",
        "score": -0.23121387283236994
    },
    {
        "word": "film budgeting",
        "from": "wiki",
        "score": -0.23988439306358383
    },
    {
        "word": "movie star",
        "from": "swiki",
        "score": -0.2619047619047619
    },
    {
        "word": "film editor",
        "from": "wiki",
        "score": -0.2630057803468208
    },
    {
        "word": "film base",
        "from": "wiki",
        "score": -0.28034682080924855
    },
    {
        "word": "film format",
        "from": "wiki",
        "score": -0.2832369942196532
    },
    {
        "word": "35mm movie film",
        "from": "wiki",
        "score": -0.2861271676300578
    },
    {
        "word": "separation masters",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "film preservation",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "television production",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "digital video",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "digital projector",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "non-linear editing system",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "digital cinematography",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "personal computer",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "video editing software",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "film festival",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "fan fiction",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "television program",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "comic book",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "home video",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "video on demand",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "broadcast syndication",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "streaming media",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "stop motion",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "animation camera",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "independent animation",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "limited animation",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "united productions of america",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "osamu tezuka",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "norman mclaren",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "len lye",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "the blair witch project",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "word of mouth",
        "from": "swiki",
        "score": -0.3
    }
]
const autoWords = [
    {
        "word": "automobile",
        "score": 13.14688005794315,
        "from": "cn5,ol,w2v,wn"
    },
    {
        "word": "car",
        "score": 12.539427585220043,
        "from": "cn5,ol,w2v,wn"
    },
    {
        "word": "suv",
        "score": 8.224612375453173,
        "from": "cn5,ol,w2v,wn"
    },
    {
        "word": "motorcar",
        "score": 5.665837369653534,
        "from": "cn5,ol,wn"
    },
    {
        "word": "subcompact",
        "score": 5.082764326090102,
        "from": "cn5,ol,wn"
    },
    {
        "word": "minicar",
        "score": 4.9744224857919175,
        "from": "cn5,ol,wn"
    },
    {
        "word": "hot rod",
        "score": 4.7770586204373,
        "from": "cn5,ol,wn"
    },
    {
        "word": "motor vehicle",
        "score": 4.7436270653454615,
        "from": "cn5,ol,wn"
    },
    {
        "word": "motor",
        "score": 4.421822842555625,
        "from": "cn5,ol,w2v"
    },
    {
        "word": "automotive",
        "score": 4.402353105868132,
        "from": "cn5,ol,w2v"
    },
    {
        "word": "honda",
        "score": 4.377817016165089,
        "from": "cn5,ol,w2v"
    },
    {
        "word": "hyundai",
        "score": 4.116827639680505,
        "from": "cn5,ol,w2v"
    },
    {
        "word": "carmaker",
        "score": 4.031150053320878,
        "from": "cn5,ol,w2v"
    },
    {
        "word": "minivan",
        "score": 2.9528505102597884,
        "from": "cn5,wn"
    },
    {
        "word": "hardtop",
        "score": 2.9504675229466413,
        "from": "cn5,wn"
    },
    {
        "word": "limousine",
        "score": 2.918389407668701,
        "from": "cn5,wn"
    },
    {
        "word": "alternator",
        "score": 2.915540150720258,
        "from": "cn5,wn"
    },
    {
        "word": "coupe",
        "score": 2.8601334628806656,
        "from": "cn5,wn"
    },
    {
        "word": "loaner",
        "score": 2.8363115434013535,
        "from": "cn5,wn"
    },
    {
        "word": "bumper",
        "score": 2.810065815509784,
        "from": "cn5,wn"
    },
    {
        "word": "fender",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "sedan",
        "score": 2.756992487000086,
        "from": "cn5,wn"
    },
    {
        "word": "hatchback",
        "score": 2.6873160643937983,
        "from": "cn5,wn"
    },
    {
        "word": "gasoline engine",
        "score": 2.6461931154166454,
        "from": "cn5,wn"
    },
    {
        "word": "high gear",
        "score": 2.6398069815998877,
        "from": "cn5,wn"
    },
    {
        "word": "model t",
        "score": 2.6394530312685167,
        "from": "cn5,wn"
    },
    {
        "word": "pace car",
        "score": 2.621586603810341,
        "from": "cn5,wn"
    },
    {
        "word": "glove compartment",
        "score": 2.6209015748789275,
        "from": "cn5,wn"
    },
    {
        "word": "car horn",
        "score": 2.619319743956625,
        "from": "cn5,wn"
    },
    {
        "word": "rear window",
        "score": 2.6174003568723894,
        "from": "cn5,wn"
    },
    {
        "word": "third gear",
        "score": 2.616342209762213,
        "from": "cn5,wn"
    },
    {
        "word": "stock car",
        "score": 2.6037664420827986,
        "from": "cn5,wn"
    },
    {
        "word": "wagon",
        "score": 2.5786467465080296,
        "from": "cn5,wn"
    },
    {
        "word": "beach wagon",
        "score": 2.570277718767579,
        "from": "cn5,wn"
    },
    {
        "word": "backseat",
        "score": 2.5653893939711843,
        "from": "cn5,wn"
    },
    {
        "word": "volkswagen",
        "score": 2.564026227266906,
        "from": "cn5,w2v"
    },
    {
        "word": "automobile engine",
        "score": 2.5628363455593046,
        "from": "cn5,wn"
    },
    {
        "word": "first gear",
        "score": 2.5542541522731295,
        "from": "cn5,wn"
    },
    {
        "word": "car mirror",
        "score": 2.5382649050927655,
        "from": "cn5,wn"
    },
    {
        "word": "jeep",
        "score": 2.537360807450075,
        "from": "cn5,wn"
    },
    {
        "word": "cab",
        "score": 2.5180061068190125,
        "from": "cn5,wn"
    },
    {
        "word": "station wagon",
        "score": 2.5177475887408653,
        "from": "cn5,wn"
    },
    {
        "word": "convertible",
        "score": 2.4921674856427516,
        "from": "cn5,wn"
    },
    {
        "word": "bmw",
        "score": 2.490268610607301,
        "from": "cn5,w2v"
    },
    {
        "word": "mercedes",
        "score": 2.4667603199873716,
        "from": "cn5,w2v"
    },
    {
        "word": "sunroof",
        "score": 2.458570701136586,
        "from": "cn5,wn"
    },
    {
        "word": "automobile horn",
        "score": 2.4489699657880477,
        "from": "cn5,wn"
    },
    {
        "word": "sport car",
        "score": 2.443849380511571,
        "from": "cn5,wn"
    },
    {
        "word": "luggage compartment",
        "score": 2.421306058288206,
        "from": "cn5,wn"
    },
    {
        "word": "grille",
        "score": 2.4154438918741685,
        "from": "cn5,wn"
    },
    {
        "word": "stabilizer bar",
        "score": 2.389155293094646,
        "from": "cn5,wn"
    },
    {
        "word": "sport utility vehicle",
        "score": 2.3831055164723662,
        "from": "cn5,wn"
    },
    {
        "word": "car window",
        "score": 2.381575931096687,
        "from": "cn5,wn"
    },
    {
        "word": "police car",
        "score": 2.3758890374797765,
        "from": "cn5,wn"
    },
    {
        "word": "gas guzzler",
        "score": 2.367843637404059,
        "from": "cn5,wn"
    },
    {
        "word": "electric",
        "score": 2.2914151790220116,
        "from": "w2v,wn"
    },
    {
        "word": "machine",
        "score": 2.2022615384615385,
        "from": "ol,wn"
    },
    {
        "word": "truck",
        "score": 2.1160962821545675,
        "from": "cn5,w2v"
    },
    {
        "word": "oldsmobile",
        "score": 1.9657696483433513,
        "from": "cn5,ol"
    },
    {
        "word": "wheeler",
        "score": 1.7281303593075896,
        "from": "cn5,ol"
    },
    {
        "word": "automaker",
        "score": 1.6864394215365608,
        "from": "ol,w2v"
    },
    {
        "word": "toyota",
        "score": 1.6259892957356035,
        "from": "ol,w2v"
    },
    {
        "word": "passenger car",
        "score": 1.6137875414353702,
        "from": "cn5,ol"
    },
    {
        "word": "sport utility",
        "score": 1.540907692307692,
        "from": "ol,wn"
    },
    {
        "word": "motorcycle",
        "score": 1.527391521943065,
        "from": "cn5,ol"
    },
    {
        "word": "chrysler",
        "score": 1.5153951711091076,
        "from": "ol,w2v"
    },
    {
        "word": "industry",
        "score": 1.5147864689389443,
        "from": "ol,w2v"
    },
    {
        "word": "manufacturing",
        "score": 1.4846784122327512,
        "from": "ol,w2v"
    },
    {
        "word": "dealership",
        "score": 1.46979898251943,
        "from": "ol,w2v"
    },
    {
        "word": "electronics",
        "score": 1.4576387492451195,
        "from": "ol,w2v"
    },
    {
        "word": "consumer",
        "score": 1.428762462636483,
        "from": "ol,w2v"
    },
    {
        "word": "tire",
        "score": 1.3886282050177772,
        "from": "ol,w2v"
    },
    {
        "word": "industrial",
        "score": 1.3805234976354261,
        "from": "ol,w2v"
    },
    {
        "word": "dealers",
        "score": 1.3784116282041314,
        "from": "ol,w2v"
    },
    {
        "word": "insurance",
        "score": 1.367918493915873,
        "from": "ol,w2v"
    },
    {
        "word": "aerospace",
        "score": 1.3521360976327061,
        "from": "ol,w2v"
    },
    {
        "word": "bankruptcies",
        "score": 1.322039332967118,
        "from": "ol,w2v"
    },
    {
        "word": "volvo",
        "score": 0.7779148706708718,
        "from": "cn5"
    },
    {
        "word": "carman",
        "score": 0.7758502722006217,
        "from": "cn5"
    },
    {
        "word": "atv",
        "score": 0.7738519743836847,
        "from": "cn5"
    },
    {
        "word": "carburettor",
        "score": 0.7723451038556868,
        "from": "cn5"
    },
    {
        "word": "carless",
        "score": 0.7712095855918977,
        "from": "cn5"
    },
    {
        "word": "cabriolet",
        "score": 0.7651481100529438,
        "from": "cn5"
    },
    {
        "word": "lada",
        "score": 0.7649626457339429,
        "from": "cn5"
    },
    {
        "word": "railcar",
        "score": 0.7470647153884664,
        "from": "cn5"
    },
    {
        "word": "chevrolet",
        "score": 0.7453810550470836,
        "from": "cn5"
    },
    {
        "word": "racecar",
        "score": 0.7420562999585636,
        "from": "cn5"
    },
    {
        "word": "tramcar",
        "score": 0.7277872550559301,
        "from": "cn5"
    },
    {
        "word": "van",
        "score": 0.7219994301276074,
        "from": "cn5"
    },
    {
        "word": "radiator",
        "score": 0.7035532378862335,
        "from": "cn5"
    },
    {
        "word": "cruiser",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "tunnel",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "low",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "first",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wing",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "tourer",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "compact",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "taxicab",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "taxi",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "hack",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "runabout",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "heap",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "movable",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "passenger",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "roadster",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bus",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "reverse",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "rider",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "fin",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "buffer",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "waggon",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "horn",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "trunk",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ambulance",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "throttle",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "window",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "gun",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "gas",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "boot",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "accelerator",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "renting",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "limo",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "rental",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "grip",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "hood",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "cowling",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "third",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "saloon",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "cowl",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "traction",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "prang",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "phaeton",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "showroom",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bonnet",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "high",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "roof",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "racer",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "audi",
        "score": 0.6963867920032345,
        "from": "cn5"
    },
    {
        "word": "engine",
        "score": 0.6852038599402237,
        "from": "cn5"
    },
    {
        "word": "caddr",
        "score": 0.6775027968826924,
        "from": "cn5"
    },
    {
        "word": "cadr",
        "score": 0.6775027968826924,
        "from": "cn5"
    },
    {
        "word": "microcar",
        "score": 0.6754107709444218,
        "from": "cn5"
    },
    {
        "word": "vehicular",
        "score": 0.6731618903454533,
        "from": "cn5"
    },
    {
        "word": "handcar",
        "score": 0.6720930385997993,
        "from": "cn5"
    },
    {
        "word": "seatbelt",
        "score": 0.6717872639647964,
        "from": "cn5"
    },
    {
        "word": "robocar",
        "score": 0.6315666162323393,
        "from": "cn5"
    },
    {
        "word": "wheel",
        "score": 0.6202371735362062,
        "from": "cn5"
    },
    {
        "word": "carplane",
        "score": 0.6119669792116652,
        "from": "cn5"
    },
    {
        "word": "jetcar",
        "score": 0.6075520222735139,
        "from": "cn5"
    },
    {
        "word": "hopped-up",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "two-seater",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "sunshine-roof",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "landrover",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "jalopy",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "hooter",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "hot-rod",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "s.u.v.",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "used-car",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "floorboard",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "tailfin",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "chattel",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "salesroom",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "saleroom",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "carload",
        "score": 0.5964838017175718,
        "from": "cn5"
    },
    {
        "word": "cadillac",
        "score": 0.5961230184038522,
        "from": "cn5"
    },
    {
        "word": "automakers",
        "score": 0.5948566312251524,
        "from": "w2v"
    },
    {
        "word": "vehicle",
        "score": 0.5945144351320018,
        "from": "cn5"
    },
    {
        "word": "flatcar",
        "score": 0.5881180112502554,
        "from": "cn5"
    },
    {
        "word": "carwasher",
        "score": 0.5811954684512582,
        "from": "cn5"
    },
    {
        "word": "gearbox",
        "score": 0.5811551881152344,
        "from": "cn5"
    },
    {
        "word": "voiturette",
        "score": 0.5771507030717306,
        "from": "cn5"
    },
    {
        "word": "motorist",
        "score": 0.5764773711691722,
        "from": "cn5"
    },
    {
        "word": "boxcar",
        "score": 0.5754785705226675,
        "from": "cn5"
    },
    {
        "word": "coachbuilder",
        "score": 0.5649569287111705,
        "from": "cn5"
    },
    {
        "word": "motors",
        "score": 0.5626787963928732,
        "from": "w2v"
    },
    {
        "word": "manufacturers",
        "score": 0.559346637785746,
        "from": "w2v"
    },
    {
        "word": "aircar",
        "score": 0.5486760684665001,
        "from": "cn5"
    },
    {
        "word": "mitsubishi",
        "score": 0.5413127205654396,
        "from": "w2v"
    },
    {
        "word": "carcoat",
        "score": 0.5409437357406172,
        "from": "cn5"
    },
    {
        "word": "lorry",
        "score": 0.5402444336270633,
        "from": "cn5"
    },
    {
        "word": "guidewheel",
        "score": 0.5391193301872398,
        "from": "cn5"
    },
    {
        "word": "headlight",
        "score": 0.5387028649039869,
        "from": "cn5"
    },
    {
        "word": "motorman",
        "score": 0.5382192441446834,
        "from": "cn5"
    },
    {
        "word": "stereo",
        "score": 0.5364714733518308,
        "from": "cn5"
    },
    {
        "word": "sales",
        "score": 0.5336288873133798,
        "from": "w2v"
    },
    {
        "word": "freeway",
        "score": 0.5297232551195028,
        "from": "cn5"
    },
    {
        "word": "redline",
        "score": 0.5281694377412152,
        "from": "cn5"
    },
    {
        "word": "daimlerchrysler",
        "score": 0.5278026140830496,
        "from": "w2v"
    },
    {
        "word": "dealerships",
        "score": 0.5246559803135069,
        "from": "w2v"
    },
    {
        "word": "motorize",
        "score": 0.524117018227188,
        "from": "cn5"
    },
    {
        "word": "carjack",
        "score": 0.5240091595595503,
        "from": "cn5"
    },
    {
        "word": "utility",
        "score": 0.5233849826539649,
        "from": "w2v"
    },
    {
        "word": "fanbelt",
        "score": 0.522949188186609,
        "from": "cn5"
    },
    {
        "word": "garage",
        "score": 0.5229240699639444,
        "from": "cn5"
    },
    {
        "word": "makers",
        "score": 0.5228502306168629,
        "from": "w2v"
    },
    {
        "word": "manufacturer",
        "score": 0.5213747714408515,
        "from": "w2v"
    },
    {
        "word": "dashboard",
        "score": 0.5210089980037831,
        "from": "cn5"
    },
    {
        "word": "gm",
        "score": 0.5207105316062735,
        "from": "w2v"
    },
    {
        "word": "truckle",
        "score": 0.5202023733083134,
        "from": "cn5"
    },
    {
        "word": "hubcap",
        "score": 0.5190785862167427,
        "from": "cn5"
    },
    {
        "word": "subframe",
        "score": 0.5157848771118271,
        "from": "cn5"
    },
    {
        "word": "suppliers",
        "score": 0.5140397800746935,
        "from": "w2v"
    },
    {
        "word": "company",
        "score": 0.5131504027353428,
        "from": "w2v"
    },
    {
        "word": "piston",
        "score": 0.5123064487317275,
        "from": "cn5"
    },
    {
        "word": "ford",
        "score": 0.5072927920430187,
        "from": "w2v"
    },
    {
        "word": "driveway",
        "score": 0.5072580549433117,
        "from": "cn5"
    },
    {
        "word": "companies",
        "score": 0.505892849514434,
        "from": "w2v"
    },
    {
        "word": "supplier",
        "score": 0.505588904897816,
        "from": "w2v"
    },
    {
        "word": "biggest",
        "score": 0.5051146457498127,
        "from": "w2v"
    },
    {
        "word": "wheelie",
        "score": 0.5047153174201078,
        "from": "cn5"
    },
    {
        "word": "autos",
        "score": 0.5029068817789366,
        "from": "w2v"
    },
    {
        "word": "benz",
        "score": 0.5024571096427202,
        "from": "w2v"
    },
    {
        "word": "business",
        "score": 0.5009065635432993,
        "from": "w2v"
    },
    {
        "word": "maker",
        "score": 0.4986864876168291,
        "from": "w2v"
    },
    {
        "word": "market",
        "score": 0.498637680219292,
        "from": "w2v"
    },
    {
        "word": "waterwheel",
        "score": 0.4984228978257556,
        "from": "cn5"
    },
    {
        "word": "nissan",
        "score": 0.49606877990283843,
        "from": "w2v"
    },
    {
        "word": "automobiles",
        "score": 0.4923726495887461,
        "from": "w2v"
    },
    {
        "word": "retail",
        "score": 0.4915834479579689,
        "from": "w2v"
    },
    {
        "word": "factory",
        "score": 0.4860227050300982,
        "from": "w2v"
    },
    {
        "word": "industries",
        "score": 0.4838895415444775,
        "from": "w2v"
    },
    {
        "word": "daimler",
        "score": 0.4832394822003807,
        "from": "w2v"
    },
    {
        "word": "cars",
        "score": 0.4827125111980217,
        "from": "w2v"
    },
    {
        "word": "factories",
        "score": 0.4783914503776102,
        "from": "w2v"
    },
    {
        "word": "fuel pump",
        "score": 0.47741724214856657,
        "from": "cn5"
    },
    {
        "word": "firms",
        "score": 0.4759824739921938,
        "from": "w2v"
    },
    {
        "word": "car lot",
        "score": 0.47504442566636823,
        "from": "cn5"
    },
    {
        "word": "at car show",
        "score": 0.4742444219370601,
        "from": "cn5"
    },
    {
        "word": "baggage car",
        "score": 0.4733498342821499,
        "from": "cn5"
    },
    {
        "word": "drive on highway",
        "score": 0.47322137085752597,
        "from": "cn5"
    },
    {
        "word": "midsize",
        "score": 0.473089444344498,
        "from": "w2v"
    },
    {
        "word": "engine oil",
        "score": 0.4727884779083336,
        "from": "cn5"
    },
    {
        "word": "move person",
        "score": 0.472498896096413,
        "from": "cn5"
    },
    {
        "word": "carwashing",
        "score": 0.4714091623613791,
        "from": "cn5"
    },
    {
        "word": "businesses",
        "score": 0.47019676293765533,
        "from": "w2v"
    },
    {
        "word": "siemens",
        "score": 0.4698094148113597,
        "from": "w2v"
    },
    {
        "word": "carport",
        "score": 0.4693681067561296,
        "from": "cn5"
    },
    {
        "word": "airline",
        "score": 0.46798477922316734,
        "from": "w2v"
    },
    {
        "word": "four wheel",
        "score": 0.46796750749935084,
        "from": "cn5"
    },
    {
        "word": "prius",
        "score": 0.4677133143793609,
        "from": "w2v"
    },
    {
        "word": "use car",
        "score": 0.4655019218871084,
        "from": "cn5"
    },
    {
        "word": "carmaking",
        "score": 0.46332635065416417,
        "from": "cn5"
    },
    {
        "word": "utilities",
        "score": 0.4630280622515618,
        "from": "w2v"
    },
    {
        "word": "clown car",
        "score": 0.4630239371630543,
        "from": "cn5"
    },
    {
        "word": "expects",
        "score": 0.4629264026939598,
        "from": "w2v"
    },
    {
        "word": "builders",
        "score": 0.46248633689074536,
        "from": "w2v"
    },
    {
        "word": "restructuring",
        "score": 0.46234691900459424,
        "from": "w2v"
    },
    {
        "word": "layoffs",
        "score": 0.4618340986026916,
        "from": "w2v"
    },
    {
        "word": "quarterlight",
        "score": 0.46175062338793393,
        "from": "cn5"
    },
    {
        "word": "jobs",
        "score": 0.461421751478196,
        "from": "w2v"
    },
    {
        "word": "ford mustang",
        "score": 0.4612520339681497,
        "from": "cn5"
    },
    {
        "word": "cartop",
        "score": 0.46116852344814696,
        "from": "cn5"
    },
    {
        "word": "sector",
        "score": 0.4601760587926331,
        "from": "w2v"
    },
    {
        "word": "competitors",
        "score": 0.4601268837132655,
        "from": "w2v"
    },
    {
        "word": "carmakers",
        "score": 0.45998131789013985,
        "from": "w2v"
    },
    {
        "word": "costs",
        "score": 0.4596750640715424,
        "from": "w2v"
    },
    {
        "word": "mart",
        "score": 0.459436582637936,
        "from": "w2v"
    },
    {
        "word": "skibob",
        "score": 0.45904848271954013,
        "from": "cn5"
    },
    {
        "word": "move quickly",
        "score": 0.4584870795155989,
        "from": "cn5"
    },
    {
        "word": "retailer",
        "score": 0.4582717748117212,
        "from": "w2v"
    },
    {
        "word": "venture",
        "score": 0.4580432174519102,
        "from": "w2v"
    },
    {
        "word": "ups",
        "score": 0.45778234434208387,
        "from": "w2v"
    },
    {
        "word": "plans",
        "score": 0.4565836260172542,
        "from": "w2v"
    },
    {
        "word": "selling",
        "score": 0.45613599216384215,
        "from": "w2v"
    },
    {
        "word": "appliance",
        "score": 0.45583311963825307,
        "from": "w2v"
    },
    {
        "word": "buyers",
        "score": 0.45504710040374863,
        "from": "w2v"
    },
    {
        "word": "construction",
        "score": 0.45503923987641876,
        "from": "w2v"
    },
    {
        "word": "dealer",
        "score": 0.4538910029773043,
        "from": "w2v"
    },
    {
        "word": "wholesale",
        "score": 0.4524775562179164,
        "from": "w2v"
    },
    {
        "word": "domestic",
        "score": 0.45232486633114216,
        "from": "w2v"
    },
    {
        "word": "buying",
        "score": 0.44860996002550013,
        "from": "w2v"
    },
    {
        "word": "renault",
        "score": 0.44753817937305823,
        "from": "w2v"
    },
    {
        "word": "telecommunications",
        "score": 0.4468613117007685,
        "from": "w2v"
    },
    {
        "word": "travel on road",
        "score": 0.44663292205291355,
        "from": "cn5"
    },
    {
        "word": "product",
        "score": 0.44650032118562694,
        "from": "w2v"
    },
    {
        "word": "luxury",
        "score": 0.4462727216382877,
        "from": "w2v"
    },
    {
        "word": "get into accident",
        "score": 0.44547835135661057,
        "from": "cn5"
    },
    {
        "word": "banking",
        "score": 0.4413459222570511,
        "from": "w2v"
    },
    {
        "word": "machinery",
        "score": 0.44127583023388506,
        "from": "w2v"
    },
    {
        "word": "credit",
        "score": 0.44101640811261916,
        "from": "w2v"
    },
    {
        "word": "corporate",
        "score": 0.44044707149939966,
        "from": "w2v"
    },
    {
        "word": "apparel",
        "score": 0.43971386856294686,
        "from": "w2v"
    },
    {
        "word": "delphi",
        "score": 0.43952197356836076,
        "from": "w2v"
    },
    {
        "word": "daewoo",
        "score": 0.43947628858537124,
        "from": "w2v"
    },
    {
        "word": "steer arm",
        "score": 0.4346512306795321,
        "from": "cn5"
    },
    {
        "word": "block heater",
        "score": 0.43167550682935346,
        "from": "cn5"
    },
    {
        "word": "railroad car",
        "score": 0.4224811154522217,
        "from": "cn5"
    },
    {
        "word": "gas drive automobile",
        "score": 0.4181044975637281,
        "from": "cn5"
    },
    {
        "word": "tour car",
        "score": 0.4155981990544551,
        "from": "cn5"
    },
    {
        "word": "steer wheel",
        "score": 0.4147664889564118,
        "from": "cn5"
    },
    {
        "word": "wheely",
        "score": 0.4083060470540375,
        "from": "cn5"
    },
    {
        "word": "all car",
        "score": 0.40381316221729696,
        "from": "cn5"
    },
    {
        "word": "adhesive friction",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "horseless carriage",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "spark lever",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "radiator grille",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "running board",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "petrol engine",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "low gear",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "electric car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "electric automobile",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "squad car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "prowl car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "police cruiser",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "patrol car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "compact car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "car seat",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "car door",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "automobile trunk",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "station waggon",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "road map",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "reverse gear",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "estate car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "beach waggon",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "motor horn",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "auto accessory",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "air bag",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "gas pedal",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "accelerator pedal",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "racing car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "race car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "personal chattel",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "sports car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "secondhand car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "automotive vehicle",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "touring car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "tail fin",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "subcompact car",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "stanley steamer",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "anti-sway bar",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "cable car",
        "score": 0.39950609226873485,
        "from": "cn5"
    },
    {
        "word": "chrome horn",
        "score": 0.3961832346674486,
        "from": "cn5"
    },
    {
        "word": "fuel economy",
        "score": 0.39459201156784746,
        "from": "cn5"
    },
    {
        "word": "multiple unit",
        "score": 0.3933159063158425,
        "from": "cn5"
    },
    {
        "word": "transportation device",
        "score": 0.3911525127679088,
        "from": "cn5"
    },
    {
        "word": "car wheel",
        "score": 0.38701470798699594,
        "from": "cn5"
    },
    {
        "word": "wheel vehicle",
        "score": 0.38456602939863777,
        "from": "cn5"
    },
    {
        "word": "transport person",
        "score": 0.38060804568495904,
        "from": "cn5"
    },
    {
        "word": "car show",
        "score": 0.37969882839526653,
        "from": "cn5"
    },
    {
        "word": "co.",
        "score": 0.37864478734119233,
        "from": "w2v"
    },
    {
        "word": "auto insurance",
        "score": 0.3755637358736708,
        "from": "cn5"
    },
    {
        "word": "junk yard",
        "score": 0.3730243801147833,
        "from": "cn5"
    },
    {
        "word": "muscle car",
        "score": 0.3710298213679853,
        "from": "cn5"
    },
    {
        "word": "corp.",
        "score": 0.37071557666700317,
        "from": "w2v"
    },
    {
        "word": "roll stock",
        "score": 0.35592328178225224,
        "from": "cn5"
    },
    {
        "word": "in garage",
        "score": 0.35535321411199333,
        "from": "cn5"
    },
    {
        "word": "in street",
        "score": 0.35247602884537527,
        "from": "cn5"
    },
    {
        "word": "front wheel drive",
        "score": 0.3519473124626527,
        "from": "cn5"
    },
    {
        "word": "car dealership",
        "score": 0.3511100524669724,
        "from": "cn5"
    },
    {
        "word": "roll downhill",
        "score": 0.35103549075004553,
        "from": "cn5"
    },
    {
        "word": "freight car",
        "score": 0.34658322753296483,
        "from": "cn5"
    },
    {
        "word": "demolition derby",
        "score": 0.3463074885237563,
        "from": "cn5"
    },
    {
        "word": "concept car",
        "score": 0.3454367968434678,
        "from": "cn5"
    },
    {
        "word": "air freshener",
        "score": 0.34380855667898996,
        "from": "cn5"
    },
    {
        "word": "u.k.",
        "score": 0.3427840844616824,
        "from": "w2v"
    },
    {
        "word": "spare tire",
        "score": 0.33588651816387555,
        "from": "cn5"
    },
    {
        "word": "brake drum",
        "score": 0.3353846993632679,
        "from": "cn5"
    },
    {
        "word": "four wheel drive",
        "score": 0.33434711511391085,
        "from": "cn5"
    },
    {
        "word": "vehicle bomb",
        "score": 0.31923427734036786,
        "from": "cn5"
    },
    {
        "word": "vehicularly house",
        "score": 0.3113179503295154,
        "from": "cn5"
    },
    {
        "word": "run board",
        "score": 0.30498436480516006,
        "from": "cn5"
    },
    {
        "word": "driver's seat",
        "score": 0.30303743090805507,
        "from": "cn5"
    },
    {
        "word": "glove box",
        "score": 0.2996922793263546,
        "from": "cn5"
    },
    {
        "word": "seat belt",
        "score": 0.29131545309351276,
        "from": "cn5"
    },
    {
        "word": "transportation vehicle",
        "score": 0.28165628420863903,
        "from": "cn5"
    },
    {
        "word": "create pollution",
        "score": 0.280098579496273,
        "from": "cn5"
    },
    {
        "word": "go fast",
        "score": 0.2781748484044558,
        "from": "cn5"
    },
    {
        "word": "repair shop",
        "score": 0.27532180251916644,
        "from": "cn5"
    },
    {
        "word": "motor race",
        "score": 0.2710368040381968,
        "from": "cn5"
    },
    {
        "word": "two wheel",
        "score": 0.26965863093250425,
        "from": "cn5"
    },
    {
        "word": "bicycle tire",
        "score": 0.2615621483625719,
        "from": "cn5"
    },
    {
        "word": "drive wheel",
        "score": 0.2597180439114986,
        "from": "cn5"
    },
    {
        "word": "aircraft engine",
        "score": 0.25939049099400086,
        "from": "cn5"
    },
    {
        "word": "good van",
        "score": 0.24097942669260136,
        "from": "cn5"
    },
    {
        "word": "potter's wheel",
        "score": 0.24069597544372795,
        "from": "cn5"
    },
    {
        "word": "opera window",
        "score": 0.23957108873358185,
        "from": "cn5"
    },
    {
        "word": "fan belt",
        "score": 0.23443811129294906,
        "from": "cn5"
    },
    {
        "word": "go for spin",
        "score": 0.22229913373854476,
        "from": "cn5"
    },
    {
        "word": "tow truck",
        "score": 0.22114098686362654,
        "from": "cn5"
    },
    {
        "word": "powertrain",
        "score": 0.2210076923076923,
        "from": "ol"
    },
    {
        "word": "vehicles",
        "score": 0.221,
        "from": "ol"
    },
    {
        "word": "corvair",
        "score": 0.22097692307692307,
        "from": "ol"
    },
    {
        "word": "aftermarket",
        "score": 0.22096923076923078,
        "from": "ol"
    },
    {
        "word": "motorsports",
        "score": 0.22094615384615385,
        "from": "ol"
    },
    {
        "word": "carfax",
        "score": 0.22093076923076924,
        "from": "ol"
    },
    {
        "word": "telematics",
        "score": 0.22092307692307692,
        "from": "ol"
    },
    {
        "word": "steel",
        "score": 0.2208923076923077,
        "from": "ol"
    },
    {
        "word": "textile",
        "score": 0.22085384615384615,
        "from": "ol"
    },
    {
        "word": "economy",
        "score": 0.22084615384615386,
        "from": "ol"
    },
    {
        "word": "uaw",
        "score": 0.22083846153846154,
        "from": "ol"
    },
    {
        "word": "trw",
        "score": 0.22083076923076922,
        "from": "ol"
    },
    {
        "word": "marques",
        "score": 0.22076923076923077,
        "from": "ol"
    },
    {
        "word": "bailout",
        "score": 0.22073846153846155,
        "from": "ol"
    },
    {
        "word": "parts",
        "score": 0.2206846153846154,
        "from": "ol"
    },
    {
        "word": "drivetrain",
        "score": 0.22066923076923076,
        "from": "ol"
    },
    {
        "word": "baggage trunk",
        "score": 0.22059775895082728,
        "from": "cn5"
    },
    {
        "word": "tooling",
        "score": 0.2205923076923077,
        "from": "ol"
    },
    {
        "word": "junkers",
        "score": 0.22058461538461538,
        "from": "ol"
    },
    {
        "word": "robinet",
        "score": 0.2205769230769231,
        "from": "ol"
    },
    {
        "word": "insurer",
        "score": 0.22056153846153845,
        "from": "ol"
    },
    {
        "word": "aviation",
        "score": 0.22054615384615384,
        "from": "ol"
    },
    {
        "word": "trucking",
        "score": 0.22050769230769232,
        "from": "ol"
    },
    {
        "word": "upholstery",
        "score": 0.2204846153846154,
        "from": "ol"
    },
    {
        "word": "durables",
        "score": 0.22047692307692307,
        "from": "ol"
    },
    {
        "word": "maserati",
        "score": 0.22046923076923078,
        "from": "ol"
    },
    {
        "word": "sportscar",
        "score": 0.22046153846153846,
        "from": "ol"
    },
    {
        "word": "mortgage",
        "score": 0.22043076923076924,
        "from": "ol"
    },
    {
        "word": "snowmobile",
        "score": 0.22042307692307692,
        "from": "ol"
    },
    {
        "word": "gasoline",
        "score": 0.22036153846153847,
        "from": "ol"
    },
    {
        "word": "shipbuilding",
        "score": 0.22035384615384615,
        "from": "ol"
    },
    {
        "word": "park lot",
        "score": 0.2188410001426227,
        "from": "cn5"
    },
    {
        "word": "fast lane",
        "score": 0.21641429119641603,
        "from": "cn5"
    },
    {
        "word": "behind wheel",
        "score": 0.21444269314962777,
        "from": "cn5"
    },
    {
        "word": "cb radio",
        "score": 0.21397103281402502,
        "from": "cn5"
    },
    {
        "word": "motor oil",
        "score": 0.202966629356034,
        "from": "cn5"
    },
    {
        "word": "electronic car key",
        "score": 0.20156152489190565,
        "from": "cn5"
    },
    {
        "word": "pickup truck",
        "score": 0.19956878954640012,
        "from": "cn5"
    },
    {
        "word": "autoworkers",
        "score": 0.12102307692307693,
        "from": "ol"
    },
    {
        "word": "changan",
        "score": 0.12093846153846152,
        "from": "ol"
    },
    {
        "word": "undercoating",
        "score": 0.12087692307692308,
        "from": "ol"
    },
    {
        "word": "clunkers",
        "score": 0.12080769230769231,
        "from": "ol"
    },
    {
        "word": "pipas",
        "score": 0.12078461538461538,
        "from": "ol"
    },
    {
        "word": "naias",
        "score": 0.12074615384615384,
        "from": "ol"
    },
    {
        "word": "autoworker",
        "score": 0.12071538461538461,
        "from": "ol"
    },
    {
        "word": "rustproofing",
        "score": 0.1207076923076923,
        "from": "ol"
    },
    {
        "word": "hotrod",
        "score": 0.12067692307692307,
        "from": "ol"
    },
    {
        "word": "aaia",
        "score": 0.12064615384615385,
        "from": "ol"
    },
    {
        "word": "clunker",
        "score": 0.12063846153846153,
        "from": "ol"
    },
    {
        "word": "motorisation",
        "score": 0.12059999999999998,
        "from": "ol"
    },
    {
        "word": "lowrider",
        "score": 0.12053846153846154,
        "from": "ol"
    },
    {
        "word": "antitheft",
        "score": 0.12051538461538461,
        "from": "ol"
    },
    {
        "word": "nomy",
        "score": 0.1205,
        "from": "ol"
    },
    {
        "word": "aptera",
        "score": 0.12049230769230768,
        "from": "ol"
    },
    {
        "word": "gearhead",
        "score": 0.12043846153846152,
        "from": "ol"
    },
    {
        "word": "repairers",
        "score": 0.12041538461538462,
        "from": "ol"
    },
    {
        "word": "motorhead",
        "score": 0.12040000000000001,
        "from": "ol"
    },
    {
        "word": "econobox",
        "score": 0.12039230769230769,
        "from": "ol"
    },
    {
        "word": "lumma",
        "score": 0.12038461538461537,
        "from": "ol"
    },
    {
        "word": "maquiladora",
        "score": 0.12037692307692308,
        "from": "ol"
    },
    {
        "word": "fitment",
        "score": 0.12036923076923076,
        "from": "ol"
    },
    {
        "word": "duesenberg",
        "score": 0.12034615384615385,
        "from": "ol"
    },
    {
        "word": "copart",
        "score": 0.12033846153846153,
        "from": "ol"
    },
    {
        "word": "underbody",
        "score": 0.12033076923076921,
        "from": "ol"
    },
    {
        "word": "notchback",
        "score": 0.12032307692307692,
        "from": "ol"
    },
    {
        "word": "carwash",
        "score": 0.1203153846153846,
        "from": "ol"
    },
    {
        "word": "commercial vehicle",
        "score": -0.07904615384615382,
        "from": "ol"
    },
    {
        "word": "sheet metal",
        "score": -0.07911538461538462,
        "from": "ol"
    },
    {
        "word": "wiper motor",
        "score": -0.07920769230769228,
        "from": "ol"
    },
    {
        "word": "ignition coil",
        "score": -0.07923846153846154,
        "from": "ol"
    },
    {
        "word": "die casting",
        "score": -0.0793076923076923,
        "from": "ol"
    },
    {
        "word": "machine tool",
        "score": -0.07934615384615384,
        "from": "ol"
    },
    {
        "word": "wiper blade",
        "score": -0.07937692307692307,
        "from": "ol"
    },
    {
        "word": "recreational vehicle",
        "score": -0.07938461538461539,
        "from": "ol"
    },
    {
        "word": "rust belt",
        "score": -0.07939230769230768,
        "from": "ol"
    }
]
const musicWords = [
    {
        "word": "piano",
        "score": 43.32913438754176,
        "from": "ol,w2v,wiki,swiki,wn"
    },
    {
        "word": "jazz",
        "score": 37.64253132401164,
        "from": "cn5,ol,w2v,wiki,swiki,wn"
    },
    {
        "word": "melody",
        "score": 30.49882860147474,
        "from": "cn5,ol,w2v,wiki,swiki"
    },
    {
        "word": "sound",
        "score": 29.88459350760492,
        "from": "ol,w2v,wiki,swiki,wn,wn"
    },
    {
        "word": "song",
        "score": 28.22177533038733,
        "from": "cn5,ol,w2v,wiki,swiki"
    },
    {
        "word": "guitar",
        "score": 21.906502171905068,
        "from": "ol,w2v,wiki,swiki"
    },
    {
        "word": "sheet music",
        "score": 21.677667190911894,
        "from": "cn5,ol,wiki,wn"
    },
    {
        "word": "classical music",
        "score": 19.539508904986832,
        "from": "cn5,ol,wiki,swiki"
    },
    {
        "word": "rhythm",
        "score": 18.34323824573101,
        "from": "w2v,wiki,swiki"
    },
    {
        "word": "composer",
        "score": 18.2953228954408,
        "from": "cn5,ol,w2v,wiki"
    },
    {
        "word": "harmony",
        "from": "wiki,swiki,wn",
        "score": 18.051044776119404
    },
    {
        "word": "chord",
        "score": 16.434039000932014,
        "from": "cn5,wiki,swiki,wn"
    },
    {
        "word": "singing",
        "score": 16.08382746480101,
        "from": "ol,w2v,wiki,swiki,wn"
    },
    {
        "word": "folk music",
        "score": 15.15462990299904,
        "from": "cn5,wiki,swiki"
    },
    {
        "word": "orchestra",
        "score": 14.58700831092623,
        "from": "ol,w2v,wiki"
    },
    {
        "word": "musical notation",
        "from": "wiki,swiki,wn",
        "score": 14.399999999999999
    },
    {
        "word": "choir",
        "from": "wiki,swiki,wn",
        "score": 14.120895522388059
    },
    {
        "word": "musician",
        "score": 13.908230987456982,
        "from": "cn5,ol,w2v,wiki,swiki"
    },
    {
        "word": "symphony",
        "score": 12.809781056257176,
        "from": "ol,wiki,swiki"
    },
    {
        "word": "lyrics",
        "score": 11.980237712503616,
        "from": "w2v,wiki,swiki"
    },
    {
        "word": "songwriter",
        "score": 11.317440102273554,
        "from": "cn5,w2v,wiki"
    },
    {
        "word": "harmonize",
        "score": 11.2,
        "from": "wn,wn,wn,wn"
    },
    {
        "word": "harmonise",
        "score": 11.2,
        "from": "wn,wn,wn,wn"
    },
    {
        "word": "funk",
        "score": 9.926400000000001,
        "from": "ol,wiki,swiki"
    },
    {
        "word": "art",
        "score": 9.330428181609026,
        "from": "w2v,wiki,swiki"
    },
    {
        "word": "opera",
        "score": 9.094172755542164,
        "from": "w2v,wiki"
    },
    {
        "word": "entertainment",
        "score": 8.885840384615385,
        "from": "ol,wiki,swiki"
    },
    {
        "word": "tonality",
        "from": "wiki,swiki",
        "score": 8.795223880597014
    },
    {
        "word": "popular music",
        "score": 8.674975563122342,
        "from": "cn5,wiki"
    },
    {
        "word": "singer",
        "score": 7.704331221300864,
        "from": "ol,w2v,wiki"
    },
    {
        "word": "art music",
        "score": 7.665998387805082,
        "from": "cn5,wiki"
    },
    {
        "word": "blues",
        "from": "wiki,swiki",
        "score": 7.6
    },
    {
        "word": "violin",
        "from": "wiki,swiki",
        "score": 7.147462686567163
    },
    {
        "word": "string quartet",
        "from": "wiki,swiki",
        "score": 6.754726368159203
    },
    {
        "word": "musical scale",
        "from": "wiki,wn",
        "score": 6.7
    },
    {
        "word": "recapitulation",
        "score": 6.579339520268576,
        "from": "cn5,wiki,wn"
    },
    {
        "word": "electric guitar",
        "from": "wiki,swiki",
        "score": 6.5
    },
    {
        "word": "music genre",
        "score": 6.230639690090255,
        "from": "cn5,wiki"
    },
    {
        "word": "pop music",
        "score": 6.193631418570994,
        "from": "cn5,wiki,swiki"
    },
    {
        "word": "tune",
        "score": 6.189484488202333,
        "from": "cn5,ol,w2v,swiki"
    },
    {
        "word": "lead sheet",
        "score": 6.176080395455612,
        "from": "cn5,wiki"
    },
    {
        "word": "fugue",
        "score": 6.162368459614173,
        "from": "cn5,wiki"
    },
    {
        "word": "accompaniment",
        "from": "wiki,swiki",
        "score": 6.10547263681592
    },
    {
        "word": "radio",
        "from": "wiki,swiki",
        "score": 6
    },
    {
        "word": "ludwig van beethoven",
        "from": "wiki,swiki",
        "score": 5.994527363184079
    },
    {
        "word": "poetry",
        "score": 5.965306395172613,
        "from": "w2v,wiki,swiki"
    },
    {
        "word": "monophony",
        "score": 5.841557833023042,
        "from": "cn5,wiki,wn"
    },
    {
        "word": "sonata form",
        "from": "wiki,swiki",
        "score": 5.708009950248757
    },
    {
        "word": "rhapsody",
        "from": "wiki,wn,wn",
        "score": 5.596875
    },
    {
        "word": "sing",
        "score": 5.4369450190337645,
        "from": "cn5,wn,wn"
    },
    {
        "word": "concert",
        "score": 5.3294740957540885,
        "from": "ol,w2v,wiki,swiki"
    },
    {
        "word": "tweedle",
        "score": 5.306969101655779,
        "from": "cn5,wn,wn"
    },
    {
        "word": "instrumental music",
        "score": 5.243194064051287,
        "from": "cn5,wiki,wn"
    },
    {
        "word": "ancient greece",
        "from": "wiki,swiki",
        "score": 5.233731343283582
    },
    {
        "word": "flute",
        "from": "wiki,swiki",
        "score": 5.213731343283582
    },
    {
        "word": "timbre",
        "from": "wiki,wn",
        "score": 5.1850000000000005
    },
    {
        "word": "dance",
        "score": 5.123725931546341,
        "from": "ol,w2v,swiki"
    },
    {
        "word": "sound off",
        "score": 5.122077798277705,
        "from": "cn5,wn,wn"
    },
    {
        "word": "polyphony",
        "score": 5.079947510395382,
        "from": "cn5,wiki,wn"
    },
    {
        "word": "musical instrument",
        "from": "wiki,swiki",
        "score": 5.040149253731343
    },
    {
        "word": "double tongue",
        "score": 4.994361897751244,
        "from": "cn5,wn,wn"
    },
    {
        "word": "greek language",
        "from": "wiki,swiki",
        "score": 4.9653482587064675
    },
    {
        "word": "musical",
        "score": 4.67660252694407,
        "from": "cn5,ol,w2v"
    },
    {
        "word": "chorus",
        "score": 4.637892291456657,
        "from": "cn5,wiki,wn"
    },
    {
        "word": "musicology",
        "score": 4.448389413495531,
        "from": "cn5,wiki"
    },
    {
        "word": "karaoke",
        "score": 4.316827618634139,
        "from": "cn5,wiki"
    },
    {
        "word": "keyboard instrument",
        "from": "wiki,swiki",
        "score": 4.032388059701492
    },
    {
        "word": "language",
        "from": "wiki,swiki",
        "score": 3.848283582089552
    },
    {
        "word": "lyric",
        "score": 3.777372473168156,
        "from": "cn5,ol,w2v"
    },
    {
        "word": "lute",
        "from": "wiki,swiki",
        "score": 3.7291791044776117
    },
    {
        "word": "country music",
        "from": "wiki",
        "score": 3.6999999999999997
    },
    {
        "word": "archaeology",
        "from": "wiki,swiki",
        "score": 3.4273756218905467
    },
    {
        "word": "musical theatre",
        "from": "wiki",
        "score": 3.3
    },
    {
        "word": "bebop",
        "from": "wiki",
        "score": 3.1999999999999997
    },
    {
        "word": "theme",
        "score": 3.135187713733077,
        "from": "w2v,wiki"
    },
    {
        "word": "drum",
        "from": "swiki,wn",
        "score": 2.9402985074626864
    },
    {
        "word": "muse",
        "from": "wiki,swiki",
        "score": 2.912531094527363
    },
    {
        "word": "concert band",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "musical improvisation",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "mp3 player",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "rock music",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "chord progression",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "music theory",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "counterpoint",
        "score": 2.8495610519166705,
        "from": "cn5,wiki"
    },
    {
        "word": "organ",
        "from": "wiki,wn",
        "score": 2.8449999999999998
    },
    {
        "word": "concerto",
        "from": "wiki",
        "score": 2.8
    },
    {
        "word": "conduct",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "interlude",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "part",
        "from": "wiki",
        "score": 2.8
    },
    {
        "word": "tongue",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "register",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "harpsichord",
        "from": "wiki",
        "score": 2.8
    },
    {
        "word": "subdivision",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "slur",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "section",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "conducting",
        "from": "wiki",
        "score": 2.8
    },
    {
        "word": "clarion",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "double bass",
        "from": "wiki,swiki",
        "score": 2.7950000000000004
    },
    {
        "word": "euphony",
        "score": 2.7487846153846154,
        "from": "ol,wn"
    },
    {
        "word": "triple-tongue",
        "score": 2.6999999999999997,
        "from": "wn,wn"
    },
    {
        "word": "medicine",
        "score": 2.6380615384615385,
        "from": "ol,wn"
    },
    {
        "word": "key",
        "from": "wiki,wn",
        "score": 2.5354166666666664
    },
    {
        "word": "tonic",
        "from": "wiki,wn",
        "score": 2.50625
    },
    {
        "word": "music producer",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "sound engineer",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "traditional music",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "strike up",
        "score": 2.5,
        "from": "wn,wn"
    },
    {
        "word": "rhythm section",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "music criticism",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "big band",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "electric bass",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "heavy metal music",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "jazz fusion",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "music lesson",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "theatre music",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "indian classical music",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "auditory sensation",
        "score": 2.5,
        "from": "wn,wn"
    },
    {
        "word": "music technology",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "john cage",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "string instrument",
        "from": "wiki,swiki",
        "score": 2.4890796019900496
    },
    {
        "word": "rap",
        "score": 2.4312872498667915,
        "from": "w2v,wn"
    },
    {
        "word": "prelude",
        "from": "wiki,wn",
        "score": 2.333333333333333
    },
    {
        "word": "reharmonize",
        "score": 2.3223364235625428,
        "from": "cn5,wn"
    },
    {
        "word": "intonation",
        "score": 2.313609635459824,
        "from": "cn5,wn"
    },
    {
        "word": "minstrel",
        "score": 2.31353010108344,
        "from": "cn5,wn"
    },
    {
        "word": "sound recording",
        "from": "wiki",
        "score": 2.3133333333333335
    },
    {
        "word": "fermata",
        "from": "wiki,wn",
        "score": 2.2937499999999997
    },
    {
        "word": "madrigal",
        "score": 2.284902360637697,
        "from": "cn5,wn"
    },
    {
        "word": "voice",
        "score": 2.2748593402608974,
        "from": "w2v,swiki"
    },
    {
        "word": "exposition",
        "from": "wiki,wn",
        "score": 2.25625
    },
    {
        "word": "carol",
        "score": 2.2361003489033346,
        "from": "cn5,wn"
    },
    {
        "word": "pizzicato",
        "score": 2.208435114516765,
        "from": "cn5,wn"
    },
    {
        "word": "franz schubert",
        "from": "wiki,swiki",
        "score": 2.204776119402985
    },
    {
        "word": "harp",
        "from": "wiki,wn",
        "score": 2.2041666666666666
    },
    {
        "word": "sforzando",
        "score": 2.1849805379689706,
        "from": "cn5,wn"
    },
    {
        "word": "gregorian chant",
        "from": "wiki,swiki",
        "score": 2.1786815920398013
    },
    {
        "word": "bow",
        "from": "swiki,wn",
        "score": 2.174129353233831
    },
    {
        "word": "solmizate",
        "score": 2.1738450303692556,
        "from": "cn5,wn"
    },
    {
        "word": "subtonic",
        "score": 2.144221861022809,
        "from": "cn5,wn"
    },
    {
        "word": "hammond organ",
        "from": "wiki,wn",
        "score": 2.1104166666666666
    },
    {
        "word": "entr'acte",
        "score": 2.0665389419338767,
        "from": "cn5,wn"
    },
    {
        "word": "roulade",
        "score": 2.0548326810889677,
        "from": "cn5,wn"
    },
    {
        "word": "concertize",
        "score": 2.049379668004136,
        "from": "cn5,wn"
    },
    {
        "word": "recorder",
        "score": 2.030907692307692,
        "from": "ol,wiki,swiki"
    },
    {
        "word": "vocal music",
        "score": 2.0090918168693683,
        "from": "cn5,wn"
    },
    {
        "word": "songs",
        "score": 1.9985885137903803,
        "from": "ol,w2v"
    },
    {
        "word": "paleolithic",
        "from": "wiki,swiki",
        "score": 1.9902052238805967
    },
    {
        "word": "classical",
        "score": 1.980715859215266,
        "from": "cn5,w2v"
    },
    {
        "word": "femur",
        "from": "wiki,swiki",
        "score": 1.9399875621890548
    },
    {
        "word": "play",
        "score": 1.9389384615384615,
        "from": "ol,wn"
    },
    {
        "word": "musicians",
        "score": 1.938227162221489,
        "from": "ol,w2v"
    },
    {
        "word": "pop",
        "score": 1.933414507948131,
        "from": "ol,w2v"
    },
    {
        "word": "culture",
        "from": "wiki",
        "score": 1.9174999999999995
    },
    {
        "word": "pitch",
        "from": "wiki",
        "score": 1.9124999999999999
    },
    {
        "word": "chamber music",
        "score": 1.9085292630816235,
        "from": "cn5,wiki"
    },
    {
        "word": "audio cd",
        "score": 1.8912745178717787,
        "from": "cn5,wn"
    },
    {
        "word": "texture",
        "from": "wiki",
        "score": 1.8900000000000001
    },
    {
        "word": "recording",
        "score": 1.8852300070602606,
        "from": "ol,w2v"
    },
    {
        "word": "artists",
        "score": 1.8835829850503194,
        "from": "ol,w2v"
    },
    {
        "word": "saxophone",
        "score": 1.8653769230769233,
        "from": "ol,wiki,swiki"
    },
    {
        "word": "muses",
        "from": "wiki",
        "score": 1.865
    },
    {
        "word": "band",
        "score": 1.8395858787289816,
        "from": "ol,w2v"
    },
    {
        "word": "soundtrack",
        "score": 1.7884287111420947,
        "from": "ol,w2v"
    },
    {
        "word": "album",
        "score": 1.7799233909657683,
        "from": "ol,w2v"
    },
    {
        "word": "artist",
        "score": 1.777605676802543,
        "from": "ol,w2v"
    },
    {
        "word": "rock",
        "score": 1.763953421179996,
        "from": "ol,w2v"
    },
    {
        "word": "bands",
        "score": 1.7523092956978803,
        "from": "ol,w2v"
    },
    {
        "word": "concerts",
        "score": 1.745166977082464,
        "from": "ol,w2v"
    },
    {
        "word": "cello",
        "from": "wiki",
        "score": 1.7225000000000001
    },
    {
        "word": "arts",
        "score": 1.682680471243732,
        "from": "ol,w2v"
    },
    {
        "word": "literature",
        "from": "wiki",
        "score": 1.68
    },
    {
        "word": "phenomenon",
        "from": "swiki",
        "score": 1.6692537313432834
    },
    {
        "word": "repertoire",
        "score": 1.664789085908428,
        "from": "ol,w2v"
    },
    {
        "word": "composers",
        "score": 1.6583679487179486,
        "from": "ol,wiki"
    },
    {
        "word": "folk",
        "score": 1.6579082394862372,
        "from": "ol,w2v"
    },
    {
        "word": "chaconne",
        "score": 1.6215626523597284,
        "from": "cn5,wiki"
    },
    {
        "word": "oboe",
        "from": "wiki,swiki",
        "score": 1.6209577114427862
    },
    {
        "word": "instrumental",
        "score": 1.6104921186835284,
        "from": "w2v,wiki"
    },
    {
        "word": "singers",
        "score": 1.592558287979475,
        "from": "ol,w2v"
    },
    {
        "word": "tunes",
        "score": 1.58150987110644,
        "from": "ol,w2v"
    },
    {
        "word": "trio",
        "score": 1.5641500868911082,
        "from": "w2v,wiki"
    },
    {
        "word": "behavior",
        "from": "wiki,swiki",
        "score": 1.5405783582089554
    },
    {
        "word": "definition of music",
        "from": "wiki",
        "score": 1.5399999999999998
    },
    {
        "word": "bluegrass",
        "score": 1.5084448717948717,
        "from": "ol,wiki"
    },
    {
        "word": "trumpet",
        "from": "swiki,wn",
        "score": 1.4975124378109452
    },
    {
        "word": "contemporary music",
        "from": "wiki",
        "score": 1.4975
    },
    {
        "word": "the arts",
        "from": "wiki",
        "score": 1.4775
    },
    {
        "word": "ballet",
        "from": "wiki",
        "score": 1.4758333333333333
    },
    {
        "word": "percussion",
        "from": "swiki,wn",
        "score": 1.4676616915422884
    },
    {
        "word": "cd player",
        "from": "wiki",
        "score": 1.4525
    },
    {
        "word": "songwriting",
        "score": 1.4522338947876814,
        "from": "ol,w2v"
    },
    {
        "word": "psychology",
        "from": "wiki",
        "score": 1.4225
    },
    {
        "word": "soul",
        "score": 1.4203025518914965,
        "from": "w2v,wiki"
    },
    {
        "word": "wagner",
        "score": 1.4043206964033175,
        "from": "cn5,wiki"
    },
    {
        "word": "hymn",
        "from": "wiki,wn",
        "score": 1.4
    },
    {
        "word": "staff",
        "from": "swiki,wn",
        "score": 1.4
    },
    {
        "word": "scale",
        "from": "swiki,wn",
        "score": 1.4
    },
    {
        "word": "bassline",
        "from": "wiki",
        "score": 1.385
    },
    {
        "word": "marching band",
        "from": "wiki",
        "score": 1.3499999999999999
    },
    {
        "word": "psychoacoustics",
        "from": "wiki",
        "score": 1.315
    },
    {
        "word": "oratorio",
        "score": 1.3133295239096077,
        "from": "cn5,wiki"
    },
    {
        "word": "backbeat",
        "from": "wiki",
        "score": 1.305
    },
    {
        "word": "music notation",
        "from": "wiki",
        "score": 1.3049999999999997
    },
    {
        "word": "musical phrasing",
        "from": "wiki",
        "score": 1.2774999999999999
    },
    {
        "word": "middle ages",
        "from": "wiki,swiki",
        "score": 1.2706156716417911
    },
    {
        "word": "reggae",
        "score": 1.2703795107857294,
        "from": "cn5,ol"
    },
    {
        "word": "pianist",
        "score": 1.2582563750771172,
        "from": "cn5,wiki"
    },
    {
        "word": "syncopation",
        "score": 1.2428845721845558,
        "from": "cn5,wiki"
    },
    {
        "word": "bass guitar",
        "from": "wiki",
        "score": 1.1875
    },
    {
        "word": "basso continuo",
        "from": "wiki",
        "score": 1.17
    },
    {
        "word": "ska",
        "score": 1.1699224385132339,
        "from": "cn5,wiki"
    },
    {
        "word": "invention",
        "from": "wiki",
        "score": 1.1475
    },
    {
        "word": "atonal",
        "score": 1.1363339370102272,
        "from": "cn5,swiki"
    },
    {
        "word": "musical form",
        "from": "wiki",
        "score": 1.1325
    },
    {
        "word": "musical mode",
        "from": "wiki",
        "score": 1.0650000000000002
    },
    {
        "word": "atonality",
        "score": 1.0387176908393017,
        "from": "cn5,wiki"
    },
    {
        "word": "motif",
        "from": "wiki",
        "score": 1.035
    },
    {
        "word": "rondo",
        "from": "wiki",
        "score": 1.035
    },
    {
        "word": "tribute band",
        "score": 1.0298019775301739,
        "from": "cn5,wiki"
    },
    {
        "word": "percussion instrument",
        "from": "wiki",
        "score": 0.9974999999999996
    },
    {
        "word": "drum kit",
        "from": "wiki",
        "score": 0.9725000000000001
    },
    {
        "word": "nationalism",
        "from": "wiki,swiki",
        "score": 0.9594216417910447
    },
    {
        "word": "lyre",
        "from": "wiki",
        "score": 0.9549999999999998
    },
    {
        "word": "joseph haydn",
        "from": "wiki,swiki",
        "score": 0.9290111940298507
    },
    {
        "word": "wolfgang amadeus mozart",
        "from": "wiki,swiki",
        "score": 0.9169776119402984
    },
    {
        "word": "world music",
        "score": 0.8932346037102794,
        "from": "cn5,wiki"
    },
    {
        "word": "electronica",
        "score": 0.843723076923077,
        "from": "ol,wiki"
    },
    {
        "word": "ragtime",
        "score": 0.8437076923076923,
        "from": "ol,swiki"
    },
    {
        "word": "ethnomusicology",
        "score": 0.8436615384615385,
        "from": "ol,wiki"
    },
    {
        "word": "theme and variations",
        "from": "wiki",
        "score": 0.8374999999999999
    },
    {
        "word": "tempo",
        "from": "wiki",
        "score": 0.7927083333333333
    },
    {
        "word": "meter",
        "from": "wiki",
        "score": 0.7916666666666667
    },
    {
        "word": "articulation",
        "from": "wiki",
        "score": 0.7906249999999999
    },
    {
        "word": "dynamics",
        "from": "wiki",
        "score": 0.7895833333333333
    },
    {
        "word": "rapping",
        "from": "wiki",
        "score": 0.7833333333333332
    },
    {
        "word": "romantic music",
        "from": "wiki,swiki",
        "score": 0.7714241293532338
    },
    {
        "word": "noise",
        "from": "wiki",
        "score": 0.76875
    },
    {
        "word": "performance",
        "from": "wiki",
        "score": 0.7677083333333332
    },
    {
        "word": "europe",
        "from": "wiki,swiki",
        "score": 0.7520833333333333
    },
    {
        "word": "god",
        "from": "swiki",
        "score": 0.7502487562189055
    },
    {
        "word": "violoncello",
        "from": "swiki",
        "score": 0.7498507462686567
    },
    {
        "word": "subgenre",
        "from": "wiki",
        "score": 0.7458333333333333
    },
    {
        "word": "improvisation",
        "from": "wiki,swiki",
        "score": 0.7458333333333333
    },
    {
        "word": "smartphone",
        "from": "wiki",
        "score": 0.7291666666666667
    },
    {
        "word": "rockabilly",
        "from": "wiki,swiki",
        "score": 0.725
    },
    {
        "word": "graduation",
        "from": "wiki",
        "score": 0.7239583333333333
    },
    {
        "word": "marriage",
        "from": "wiki",
        "score": 0.7229166666666667
    },
    {
        "word": "musical development",
        "from": "wiki",
        "score": 0.72
    },
    {
        "word": "cooking",
        "from": "swiki",
        "score": 0.7104477611940299
    },
    {
        "word": "sonata",
        "from": "wiki",
        "score": 0.71
    },
    {
        "word": "opinion",
        "from": "swiki",
        "score": 0.7054726368159203
    },
    {
        "word": "clarinet",
        "from": "swiki",
        "score": 0.7020895522388059
    },
    {
        "word": "quality",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "lead",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "modulate",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "segno",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "timber",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "intermezzo",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bugle",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "rag",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "c",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "follow",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "tuning",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "scamp",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "accompany",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "pedal",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "soundboard",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "tone",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "troll",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "chirp",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "psalm",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "stop",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "dedication",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "monody",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bpm",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "whistling",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "inscription",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "penalty",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "carillon",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "pipe",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "activity",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "synthesiser",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "crescendo",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "synthesizer",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "reprise",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "transcribe",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "fanfare",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "pianissimo",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "transposition",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "pyrotechnics",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "unison",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "flourish",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "orchestrate",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "tie",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "slide",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "stave",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "repeat",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "swoop",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "dominant",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "punishment",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "gamut",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "direct",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "preparation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "instrument",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "release",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "recapitulate",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "registration",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "fiddle",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "keynote",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "resolution",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "science",
        "from": "wiki",
        "score": 0.6989583333333333
    },
    {
        "word": "indus valley civilization",
        "from": "wiki",
        "score": 0.6974999999999998
    },
    {
        "word": "latin",
        "from": "wiki",
        "score": 0.6958333333333333
    },
    {
        "word": "phenomenology",
        "from": "swiki",
        "score": 0.6905472636815921
    },
    {
        "word": "broadcasting",
        "from": "wiki",
        "score": 0.684375
    },
    {
        "word": "filmmaking",
        "from": "wiki",
        "score": 0.6833333333333333
    },
    {
        "word": "freelance",
        "from": "wiki",
        "score": 0.6812499999999999
    },
    {
        "word": "pattern",
        "from": "swiki",
        "score": 0.6756218905472637
    },
    {
        "word": "repetition",
        "from": "swiki",
        "score": 0.6706467661691542
    },
    {
        "word": "orchestration",
        "from": "wiki",
        "score": 0.6614583333333333
    },
    {
        "word": "shamanism",
        "from": "swiki",
        "score": 0.6606965174129353
    },
    {
        "word": "arranger",
        "from": "wiki",
        "score": 0.6583333333333332
    },
    {
        "word": "nature",
        "from": "swiki",
        "score": 0.6557213930348258
    },
    {
        "word": "chantey",
        "from": "wiki",
        "score": 0.6552083333333333
    },
    {
        "word": "avant-garde",
        "from": "wiki",
        "score": 0.6510416666666666
    },
    {
        "word": "aleatory",
        "from": "wiki",
        "score": 0.65
    },
    {
        "word": "lure",
        "from": "swiki",
        "score": 0.6457711442786069
    },
    {
        "word": "hunting",
        "from": "swiki",
        "score": 0.6407960199004974
    },
    {
        "word": "songbird",
        "from": "swiki",
        "score": 0.6358208955223881
    },
    {
        "word": "territory",
        "from": "swiki",
        "score": 0.6258706467661692
    },
    {
        "word": "musicality",
        "score": 0.6215321190132532,
        "from": "cn5"
    },
    {
        "word": "mate",
        "from": "swiki",
        "score": 0.6208955223880597
    },
    {
        "word": "rock and roll",
        "from": "wiki,swiki",
        "score": 0.6193221393034827
    },
    {
        "word": "tablature",
        "from": "wiki",
        "score": 0.6187499999999999
    },
    {
        "word": "monkey",
        "from": "swiki",
        "score": 0.6159203980099501
    },
    {
        "word": "musically",
        "score": 0.6107210674309833,
        "from": "cn5"
    },
    {
        "word": "cadenza",
        "from": "wiki",
        "score": 0.609375
    },
    {
        "word": "studio",
        "score": 0.6062148191388016,
        "from": "w2v"
    },
    {
        "word": "larynx",
        "from": "swiki",
        "score": 0.6059701492537313
    },
    {
        "word": "contemporary",
        "score": 0.6033918360970743,
        "from": "w2v"
    },
    {
        "word": "parameter",
        "from": "wiki",
        "score": 0.6031249999999999
    },
    {
        "word": "decrescendo",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "syncopate",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "instrumentate",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "reharmonise",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "penalization",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "penalisation",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "tucket",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "vocalizing",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "mediant",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "subdominant",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "symphonize",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "symphonise",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "diminuendo",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "skirl",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "reprize",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "concertise",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "sightread",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "sight-read",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "m.m.",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "supertonic",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "popularism",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "polytonalism",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "polytonality",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "submediant",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "structure",
        "from": "wiki",
        "score": 0.5979166666666667
    },
    {
        "word": "neanderthal",
        "from": "swiki",
        "score": 0.5960199004975124
    },
    {
        "word": "acoustics",
        "from": "wiki",
        "score": 0.5947916666666666
    },
    {
        "word": "perceive",
        "from": "wiki",
        "score": 0.5916666666666666
    },
    {
        "word": "hyoid",
        "from": "swiki",
        "score": 0.5910447761194029
    },
    {
        "word": "groove",
        "from": "wiki",
        "score": 0.5833333333333333
    },
    {
        "word": "melodious",
        "score": 0.5765591147073221,
        "from": "cn5"
    },
    {
        "word": "clapping",
        "from": "swiki",
        "score": 0.5761194029850747
    },
    {
        "word": "piccolo",
        "from": "wiki",
        "score": 0.575
    },
    {
        "word": "accompanist",
        "score": 0.5684396528966569,
        "from": "cn5"
    },
    {
        "word": "hop",
        "score": 0.566944434460378,
        "from": "w2v"
    },
    {
        "word": "tool",
        "from": "swiki",
        "score": 0.5661691542288556
    },
    {
        "word": "tuba",
        "from": "wiki",
        "score": 0.559375
    },
    {
        "word": "slovenia",
        "from": "swiki",
        "score": 0.5562189054726367
    },
    {
        "word": "recordings",
        "score": 0.5534059335418327,
        "from": "w2v"
    },
    {
        "word": "performed",
        "score": 0.5530250758932462,
        "from": "w2v"
    },
    {
        "word": "performing",
        "score": 0.5514750843086409,
        "from": "w2v"
    },
    {
        "word": "works",
        "score": 0.5500416238493298,
        "from": "w2v"
    },
    {
        "word": "albums",
        "score": 0.5480158379685464,
        "from": "w2v"
    },
    {
        "word": "time",
        "from": "wiki",
        "score": 0.5479166666666666
    },
    {
        "word": "classics",
        "score": 0.5475720849375241,
        "from": "w2v"
    },
    {
        "word": "featured",
        "score": 0.5470654294284726,
        "from": "w2v"
    },
    {
        "word": "metre",
        "from": "wiki",
        "score": 0.546875
    },
    {
        "word": "bear",
        "from": "swiki",
        "score": 0.5462686567164179
    },
    {
        "word": "productions",
        "score": 0.5461752299115669,
        "from": "w2v"
    },
    {
        "word": "bar",
        "from": "wiki",
        "score": 0.5458333333333334
    },
    {
        "word": "genre",
        "score": 0.545448527483569,
        "from": "w2v"
    },
    {
        "word": "waltz",
        "from": "wiki",
        "score": 0.5447916666666666
    },
    {
        "word": "cinema",
        "score": 0.5431978919809,
        "from": "w2v"
    },
    {
        "word": "ensemble",
        "score": 0.5426049207408299,
        "from": "w2v"
    },
    {
        "word": "tuneful",
        "score": 0.5397385617030304,
        "from": "cn5"
    },
    {
        "word": "writing",
        "score": 0.5380915818637184,
        "from": "w2v"
    },
    {
        "word": "performers",
        "score": 0.5377663107381285,
        "from": "w2v"
    },
    {
        "word": "film",
        "score": 0.5375860727553405,
        "from": "w2v"
    },
    {
        "word": "acclaimed",
        "score": 0.5374358389535674,
        "from": "w2v"
    },
    {
        "word": "compositions",
        "score": 0.5373614297889252,
        "from": "w2v"
    },
    {
        "word": "melodic",
        "score": 0.5370113531076042,
        "from": "cn5"
    },
    {
        "word": "ulm",
        "from": "swiki",
        "score": 0.536318407960199
    },
    {
        "word": "performances",
        "score": 0.5348074220112877,
        "from": "w2v"
    },
    {
        "word": "scorewriter",
        "from": "wiki",
        "score": 0.5333333333333333
    },
    {
        "word": "religious music",
        "from": "wiki",
        "score": 0.5325
    },
    {
        "word": "germany",
        "from": "swiki",
        "score": 0.5313432835820895
    },
    {
        "word": "indie",
        "score": 0.5300724671721345,
        "from": "w2v"
    },
    {
        "word": "theatrical",
        "score": 0.5294607967088204,
        "from": "w2v"
    },
    {
        "word": "inspired",
        "score": 0.5282408531291557,
        "from": "w2v"
    },
    {
        "word": "genres",
        "score": 0.5272295868317047,
        "from": "w2v"
    },
    {
        "word": "musicianship",
        "score": 0.5268187389555745,
        "from": "cn5"
    },
    {
        "word": "vulture",
        "from": "swiki",
        "score": 0.5263681592039802
    },
    {
        "word": "gospel",
        "score": 0.5249220562740439,
        "from": "w2v"
    },
    {
        "word": "acoustic",
        "score": 0.5229456873868356,
        "from": "w2v"
    },
    {
        "word": "duo",
        "score": 0.5225575363559443,
        "from": "w2v"
    },
    {
        "word": "films",
        "score": 0.5222986921369225,
        "from": "w2v"
    },
    {
        "word": "show",
        "score": 0.5215510355073251,
        "from": "w2v"
    },
    {
        "word": "featuring",
        "score": 0.5208170272144913,
        "from": "w2v"
    },
    {
        "word": "embouchure",
        "from": "wiki",
        "score": 0.51875
    },
    {
        "word": "feature",
        "score": 0.5171521229675572,
        "from": "w2v"
    },
    {
        "word": "vocal",
        "score": 0.51711649096606,
        "from": "w2v"
    },
    {
        "word": "influences",
        "score": 0.5169214237628366,
        "from": "w2v"
    },
    {
        "word": "spectrum",
        "from": "wiki",
        "score": 0.515625
    },
    {
        "word": "inspiration",
        "score": 0.5153987178413548,
        "from": "w2v"
    },
    {
        "word": "creative",
        "score": 0.5148818779034474,
        "from": "w2v"
    },
    {
        "word": "envelope",
        "from": "wiki",
        "score": 0.5145833333333334
    },
    {
        "word": "overtone",
        "from": "wiki",
        "score": 0.5135416666666666
    },
    {
        "word": "label",
        "score": 0.5131509109346243,
        "from": "w2v"
    },
    {
        "word": "performs",
        "score": 0.5129690408075496,
        "from": "w2v"
    },
    {
        "word": "vocals",
        "score": 0.5115128251168893,
        "from": "w2v"
    },
    {
        "word": "composing",
        "score": 0.5115114068962253,
        "from": "w2v"
    },
    {
        "word": "collaboration",
        "score": 0.5113985477013665,
        "from": "w2v"
    },
    {
        "word": "features",
        "score": 0.5100158618391193,
        "from": "w2v"
    },
    {
        "word": "video",
        "score": 0.5098759032717236,
        "from": "w2v"
    },
    {
        "word": "famous",
        "score": 0.5066019722685092,
        "from": "w2v"
    },
    {
        "word": "theatre",
        "score": 0.5062688659952695,
        "from": "w2v"
    },
    {
        "word": "distortion",
        "from": "wiki",
        "score": 0.5062500000000001
    },
    {
        "word": "popular",
        "score": 0.5062031918884287,
        "from": "w2v"
    },
    {
        "word": "shows",
        "score": 0.5059855684393373,
        "from": "w2v"
    },
    {
        "word": "songwriters",
        "score": 0.505845933907317,
        "from": "w2v"
    },
    {
        "word": "live",
        "score": 0.5049285121678263,
        "from": "w2v"
    },
    {
        "word": "orchestral",
        "score": 0.5042515481531328,
        "from": "w2v"
    },
    {
        "word": "recorded",
        "score": 0.5037502542949576,
        "from": "w2v"
    },
    {
        "word": "punk",
        "score": 0.5036547187863195,
        "from": "w2v"
    },
    {
        "word": "produced",
        "score": 0.5033013591292358,
        "from": "w2v"
    },
    {
        "word": "vibrato",
        "from": "wiki",
        "score": 0.5020833333333332
    },
    {
        "word": "cave",
        "from": "swiki",
        "score": 0.4965174129353234
    },
    {
        "word": "qawwali",
        "score": 0.49650288443806373,
        "from": "cn5"
    },
    {
        "word": "cadence",
        "from": "wiki",
        "score": 0.4958333333333333
    },
    {
        "word": "legato",
        "from": "wiki",
        "score": 0.4947916666666667
    },
    {
        "word": "beethoven",
        "score": 0.49206493593481454,
        "from": "cn5"
    },
    {
        "word": "architecture",
        "from": "swiki",
        "score": 0.4915422885572139
    },
    {
        "word": "choirmaster",
        "score": 0.4906695895992222,
        "from": "cn5"
    },
    {
        "word": "riddim",
        "score": 0.4887159549582692,
        "from": "cn5"
    },
    {
        "word": "painting",
        "from": "swiki",
        "score": 0.48656716417910445
    },
    {
        "word": "verse",
        "from": "wiki",
        "score": 0.48645833333333327
    },
    {
        "word": "a capella",
        "from": "wiki",
        "score": 0.48125
    },
    {
        "word": "igor stravinsky",
        "from": "wiki,swiki",
        "score": 0.48125
    },
    {
        "word": "bassist",
        "score": 0.4797323626628313,
        "from": "cn5"
    },
    {
        "word": "arnold schoenberg",
        "from": "wiki,swiki",
        "score": 0.4791666666666667
    },
    {
        "word": "filk",
        "score": 0.4780967239558927,
        "from": "cn5"
    },
    {
        "word": "canon",
        "from": "wiki",
        "score": 0.47604166666666664
    },
    {
        "word": "lyrical",
        "score": 0.47364697623008517,
        "from": "cn5"
    },
    {
        "word": "aesthetics of music",
        "from": "wiki",
        "score": 0.4729166666666667
    },
    {
        "word": "greek philosophy",
        "from": "wiki",
        "score": 0.4718750000000001
    },
    {
        "word": "harmony of the spheres",
        "from": "wiki",
        "score": 0.47083333333333327
    },
    {
        "word": "fantasia",
        "from": "wiki",
        "score": 0.46770833333333334
    },
    {
        "word": "mesopotamia",
        "from": "swiki",
        "score": 0.4666666666666666
    },
    {
        "word": "printing press",
        "from": "wiki",
        "score": 0.465
    },
    {
        "word": "grosse fuge",
        "from": "wiki",
        "score": 0.4645833333333334
    },
    {
        "word": "etude",
        "from": "wiki",
        "score": 0.4645833333333333
    },
    {
        "word": "bagatelle",
        "from": "wiki",
        "score": 0.46249999999999997
    },
    {
        "word": "round",
        "from": "swiki",
        "score": 0.4616915422885572
    },
    {
        "word": "impromptu",
        "from": "wiki",
        "score": 0.46145833333333336
    },
    {
        "word": "hardcore punk",
        "from": "wiki",
        "score": 0.46145833333333336
    },
    {
        "word": "introduction",
        "from": "wiki",
        "score": 0.46041666666666664
    },
    {
        "word": "coda",
        "from": "wiki",
        "score": 0.45937500000000003
    },
    {
        "word": "soloist",
        "score": 0.4587134607202888,
        "from": "cn5"
    },
    {
        "word": "liturgical music",
        "from": "wiki",
        "score": 0.4572916666666667
    },
    {
        "word": "refrain",
        "from": "wiki",
        "score": 0.4572916666666667
    },
    {
        "word": "work song",
        "from": "wiki",
        "score": 0.4562500000000001
    },
    {
        "word": "bridge",
        "from": "wiki",
        "score": 0.45625
    },
    {
        "word": "medley",
        "from": "wiki",
        "score": 0.45520833333333327
    },
    {
        "word": "potpourri",
        "from": "wiki",
        "score": 0.45416666666666666
    },
    {
        "word": "overture",
        "from": "wiki",
        "score": 0.45312499999999994
    },
    {
        "word": "monk",
        "from": "swiki",
        "score": 0.45174129353233833
    },
    {
        "word": "polyphonic",
        "score": 0.44923843691979753,
        "from": "cn5"
    },
    {
        "word": "aria",
        "from": "wiki",
        "score": 0.4489583333333333
    },
    {
        "word": "baroque music",
        "from": "wiki",
        "score": 0.44749999999999995
    },
    {
        "word": "country blues",
        "from": "wiki",
        "score": 0.44479166666666675
    },
    {
        "word": "pop country",
        "from": "wiki",
        "score": 0.4437499999999999
    },
    {
        "word": "hard rock",
        "from": "wiki",
        "score": 0.4427083333333333
    },
    {
        "word": "harmonization",
        "score": 0.44128396695542654,
        "from": "cn5"
    },
    {
        "word": "chant",
        "score": 0.440749018400957,
        "from": "cn5"
    },
    {
        "word": "performing arts",
        "from": "wiki",
        "score": 0.43958333333333327
    },
    {
        "word": "fine art",
        "from": "wiki",
        "score": 0.43854166666666666
    },
    {
        "word": "rock concert",
        "from": "wiki",
        "score": 0.43750000000000006
    },
    {
        "word": "ostinato",
        "from": "wiki",
        "score": 0.43749999999999994
    },
    {
        "word": "ditty",
        "score": 0.4374200784197279,
        "from": "cn5"
    },
    {
        "word": "music theater",
        "from": "wiki",
        "score": 0.434375
    },
    {
        "word": "division",
        "from": "wiki",
        "score": 0.434375
    },
    {
        "word": "haydn",
        "score": 0.43357527830344916,
        "from": "cn5"
    },
    {
        "word": "tuner",
        "score": 0.43349349097273354,
        "from": "cn5"
    },
    {
        "word": "descant",
        "from": "wiki",
        "score": 0.4333333333333333
    },
    {
        "word": "hip-hop",
        "score": 0.43030912245063646,
        "from": "w2v"
    },
    {
        "word": "film score",
        "from": "wiki",
        "score": 0.4281249999999999
    },
    {
        "word": "tv show",
        "from": "wiki",
        "score": 0.4270833333333333
    },
    {
        "word": "renaissance",
        "from": "swiki",
        "score": 0.42686567164179107
    },
    {
        "word": "cantabile",
        "score": 0.4260850972308449,
        "from": "cn5"
    },
    {
        "word": "religious ritual",
        "from": "wiki",
        "score": 0.4260416666666667
    },
    {
        "word": "rite of passage",
        "from": "wiki",
        "score": 0.4250000000000001
    },
    {
        "word": "monophonic",
        "score": 0.42361976305209187,
        "from": "cn5"
    },
    {
        "word": "dance club",
        "from": "wiki",
        "score": 0.42187500000000006
    },
    {
        "word": "shakuhachi",
        "from": "wiki",
        "score": 0.42187499999999994
    },
    {
        "word": "greystones",
        "from": "swiki",
        "score": 0.42139303482587065
    },
    {
        "word": "lullaby",
        "score": 0.4182343550898752,
        "from": "cn5"
    },
    {
        "word": "birth",
        "from": "swiki",
        "score": 0.4169154228855721
    },
    {
        "word": "youth orchestra",
        "from": "wiki",
        "score": 0.4166666666666666
    },
    {
        "word": "andante",
        "score": 0.4139109379886147,
        "from": "cn5"
    },
    {
        "word": "music industry",
        "from": "wiki",
        "score": 0.41354166666666675
    },
    {
        "word": "vedas",
        "from": "wiki",
        "score": 0.41250000000000003
    },
    {
        "word": "television",
        "from": "wiki,swiki",
        "score": 0.4125
    },
    {
        "word": "roundelay",
        "score": 0.4117457221112107,
        "from": "cn5"
    },
    {
        "word": "hindu",
        "from": "wiki",
        "score": 0.4114583333333333
    },
    {
        "word": "china",
        "from": "wiki",
        "score": 0.4104166666666667
    },
    {
        "word": "recitative",
        "score": 0.4100427837381377,
        "from": "cn5"
    },
    {
        "word": "bach",
        "score": 0.4090365650421101,
        "from": "cn5"
    },
    {
        "word": "napster",
        "score": 0.40824718421786294,
        "from": "cn5"
    },
    {
        "word": "egyptians",
        "from": "wiki",
        "score": 0.40729166666666666
    },
    {
        "word": "thoth",
        "from": "wiki",
        "score": 0.40624999999999994
    },
    {
        "word": "osiris",
        "from": "wiki",
        "score": 0.40520833333333334
    },
    {
        "word": "drawbar",
        "from": "wiki",
        "score": 0.4041666666666667
    },
    {
        "word": "nonmusical",
        "score": 0.40415864252753797,
        "from": "cn5"
    },
    {
        "word": "greek mythology",
        "from": "wiki",
        "score": 0.4020833333333334
    },
    {
        "word": "cantus",
        "score": 0.4004354907254665,
        "from": "cn5"
    },
    {
        "word": "barrel organ",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "beats per minute",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "world premiere",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "c major",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "scale of c major",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "leading tone",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "metronome marking",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "bell ringing",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "churn out",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "carillon playing",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "monophonic music",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "concerted music",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "sounding board",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "c major scale",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "bang out",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "electronic organ",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "electric organ",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "play along",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "hand organ",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "polyphonic music",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "grind organ",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "musical harmony",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "music of the spheres",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "audio compact disc",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "tone ending",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "piano music",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "ritardando",
        "from": "wiki",
        "score": 0.3989583333333333
    },
    {
        "word": "accelerando",
        "from": "wiki",
        "score": 0.3979166666666666
    },
    {
        "word": "viol",
        "from": "swiki",
        "score": 0.39701492537313426
    },
    {
        "word": "old french",
        "from": "wiki",
        "score": 0.3968749999999999
    },
    {
        "word": "percussionist",
        "score": 0.39641493242914877,
        "from": "cn5"
    },
    {
        "word": "barcarolle",
        "score": 0.3958153765445246,
        "from": "cn5"
    },
    {
        "word": "classical period",
        "from": "wiki",
        "score": 0.39499999999999996
    },
    {
        "word": "cymbal",
        "from": "wiki",
        "score": 0.3947916666666667
    },
    {
        "word": "lyric poetry",
        "from": "wiki",
        "score": 0.3937500000000001
    },
    {
        "word": "egypt",
        "from": "wiki",
        "score": 0.39375
    },
    {
        "word": "glissando",
        "score": 0.39354054732484023,
        "from": "cn5"
    },
    {
        "word": "cappella",
        "score": 0.3924226548633099,
        "from": "cn5"
    },
    {
        "word": "largo",
        "score": 0.3914823713017496,
        "from": "cn5"
    },
    {
        "word": "jongleur",
        "score": 0.3907565544899035,
        "from": "cn5"
    },
    {
        "word": "cassette player",
        "from": "wiki",
        "score": 0.39062500000000006
    },
    {
        "word": "aaba",
        "from": "wiki",
        "score": 0.3895833333333333
    },
    {
        "word": "jota",
        "score": 0.38856805110156784,
        "from": "cn5"
    },
    {
        "word": "mix tape",
        "from": "wiki",
        "score": 0.3885416666666666
    },
    {
        "word": "chopin",
        "score": 0.3885063765719065,
        "from": "cn5"
    },
    {
        "word": "boogaloo",
        "score": 0.38695745792645714,
        "from": "cn5"
    },
    {
        "word": "stone age",
        "from": "swiki",
        "score": 0.3855721393034826
    },
    {
        "word": "bachata",
        "score": 0.38467485795602,
        "from": "cn5"
    },
    {
        "word": "khon",
        "score": 0.38355640381187633,
        "from": "cn5"
    },
    {
        "word": "rigveda",
        "from": "wiki",
        "score": 0.38333333333333336
    },
    {
        "word": "music school",
        "from": "wiki",
        "score": 0.38229166666666675
    },
    {
        "word": "raga",
        "from": "wiki",
        "score": 0.38229166666666664
    },
    {
        "word": "tala",
        "from": "wiki",
        "score": 0.38125000000000003
    },
    {
        "word": "troubadour",
        "score": 0.3808547418599892,
        "from": "cn5"
    },
    {
        "word": "session musician",
        "from": "wiki",
        "score": 0.3802083333333333
    },
    {
        "word": "solmization",
        "score": 0.37823383706575586,
        "from": "cn5"
    },
    {
        "word": "punta",
        "score": 0.3776289977896446,
        "from": "cn5"
    },
    {
        "word": "hurrians",
        "from": "swiki",
        "score": 0.37661691542288556
    },
    {
        "word": "sarabande",
        "score": 0.37523363123587633,
        "from": "cn5"
    },
    {
        "word": "strophic",
        "from": "wiki",
        "score": 0.375
    },
    {
        "word": "ode",
        "score": 0.373012019506676,
        "from": "cn5"
    },
    {
        "word": "bootleg recording",
        "from": "wiki",
        "score": 0.3729166666666666
    },
    {
        "word": "euphonious",
        "score": 0.3721636595581351,
        "from": "cn5"
    },
    {
        "word": "virginal",
        "from": "swiki",
        "score": 0.372139303482587
    },
    {
        "word": "jam band",
        "from": "wiki",
        "score": 0.371875
    },
    {
        "word": "jam session",
        "from": "wiki",
        "score": 0.3708333333333334
    },
    {
        "word": "virtuoso",
        "score": 0.37072839644977146,
        "from": "cn5"
    },
    {
        "word": "iran",
        "from": "wiki",
        "score": 0.3697916666666667
    },
    {
        "word": "croon",
        "score": 0.36967467969721807,
        "from": "cn5"
    },
    {
        "word": "contralto",
        "score": 0.3696223539536952,
        "from": "cn5"
    },
    {
        "word": "strathspey",
        "score": 0.3692892356623623,
        "from": "cn5"
    },
    {
        "word": "through-composed",
        "from": "wiki",
        "score": 0.3687499999999999
    },
    {
        "word": "soprano",
        "score": 0.36776473032219764,
        "from": "cn5"
    },
    {
        "word": "hebrews",
        "from": "wiki",
        "score": 0.36666666666666664
    },
    {
        "word": "techno",
        "score": 0.3662091902764853,
        "from": "cn5"
    },
    {
        "word": "greeks",
        "from": "wiki",
        "score": 0.36562500000000003
    },
    {
        "word": "litany",
        "from": "wiki",
        "score": 0.3635416666666667
    },
    {
        "word": "invocation",
        "from": "wiki",
        "score": 0.3625
    },
    {
        "word": "supplication",
        "from": "wiki",
        "score": 0.36145833333333327
    },
    {
        "word": "diva",
        "score": 0.36116020803424814,
        "from": "cn5"
    },
    {
        "word": "calypso",
        "score": 0.36098617662584426,
        "from": "cn5"
    },
    {
        "word": "philosopher",
        "from": "wiki",
        "score": 0.35937499999999994
    },
    {
        "word": "eisteddfod",
        "score": 0.35918081052328393,
        "from": "cn5"
    },
    {
        "word": "clarinetist",
        "score": 0.35684310634209687,
        "from": "cn5"
    },
    {
        "word": "historically informed performance",
        "from": "wiki",
        "score": 0.35625
    },
    {
        "word": "philharmonic",
        "score": 0.3559124647516492,
        "from": "cn5"
    },
    {
        "word": "piper",
        "score": 0.35551949668298805,
        "from": "cn5"
    },
    {
        "word": "psalmody",
        "score": 0.35517654911401536,
        "from": "cn5"
    },
    {
        "word": "harmonizer",
        "score": 0.3551097268627569,
        "from": "cn5"
    },
    {
        "word": "frederic chopin",
        "from": "swiki",
        "score": 0.3543283582089552
    },
    {
        "word": "graphic notation",
        "from": "wiki",
        "score": 0.35208333333333336
    },
    {
        "word": "aus den sieben tagen",
        "from": "wiki",
        "score": 0.35104166666666675
    },
    {
        "word": "singable",
        "score": 0.350596188088493,
        "from": "cn5"
    },
    {
        "word": "aleatoric music",
        "from": "wiki",
        "score": 0.3499999999999999
    },
    {
        "word": "morton feldman",
        "from": "wiki",
        "score": 0.3479166666666667
    },
    {
        "word": "witold lutosławski",
        "from": "wiki",
        "score": 0.3468750000000001
    },
    {
        "word": "ritornello",
        "from": "wiki",
        "score": 0.3458333333333333
    },
    {
        "word": "wind chimes",
        "from": "wiki",
        "score": 0.34583333333333327
    },
    {
        "word": "music improvisation",
        "from": "wiki",
        "score": 0.3416666666666666
    },
    {
        "word": "free jazz",
        "from": "wiki",
        "score": 0.340625
    },
    {
        "word": "passacaglia",
        "from": "wiki",
        "score": 0.34062499999999996
    },
    {
        "word": "ewe drumming",
        "from": "wiki",
        "score": 0.3395833333333334
    },
    {
        "word": "movement",
        "from": "swiki",
        "score": 0.3373134328358209
    },
    {
        "word": "performance practice",
        "from": "wiki",
        "score": 0.33541666666666675
    },
    {
        "word": "adagio",
        "score": 0.3352369665691938,
        "from": "cn5"
    },
    {
        "word": "larghetto",
        "score": 0.3333905782256936,
        "from": "cn5"
    },
    {
        "word": "phonographic",
        "score": 0.33303846153846156,
        "from": "ol"
    },
    {
        "word": "songful",
        "score": 0.3324124792216734,
        "from": "cn5"
    },
    {
        "word": "computer screen",
        "from": "wiki",
        "score": 0.3322916666666667
    },
    {
        "word": "musica",
        "score": 0.33136923076923075,
        "from": "ol"
    },
    {
        "word": "barcarole",
        "score": 0.33065988719622263,
        "from": "cn5"
    },
    {
        "word": "liturgy",
        "from": "wiki",
        "score": 0.33020833333333327
    },
    {
        "word": "songless",
        "score": 0.32688685387518945,
        "from": "cn5"
    },
    {
        "word": "soundscore",
        "score": 0.32631655393663805,
        "from": "cn5"
    },
    {
        "word": "fake book",
        "from": "wiki",
        "score": 0.325
    },
    {
        "word": "arioso",
        "score": 0.32267829297376627,
        "from": "cn5"
    },
    {
        "word": "stereo",
        "score": 0.32258461538461536,
        "from": "ol"
    },
    {
        "word": "melodize",
        "score": 0.3206152820793895,
        "from": "cn5"
    },
    {
        "word": "amplifier",
        "from": "swiki",
        "score": 0.3199999999999999
    },
    {
        "word": "hyporchema",
        "score": 0.3190890152640672,
        "from": "cn5"
    },
    {
        "word": "audio",
        "score": 0.3175,
        "from": "ol"
    },
    {
        "word": "viola",
        "from": "swiki",
        "score": 0.31741293532338305
    },
    {
        "word": "ravanahatha",
        "from": "wiki",
        "score": 0.31666666666666665
    },
    {
        "word": "antiphony",
        "score": 0.31561194248360447,
        "from": "cn5"
    },
    {
        "word": "chord voicing",
        "from": "wiki",
        "score": 0.3114583333333332
    },
    {
        "word": "intone",
        "score": 0.31107682301136486,
        "from": "cn5"
    },
    {
        "word": "anthem",
        "score": 0.31106153846153844,
        "from": "ol"
    },
    {
        "word": "baroque",
        "from": "wiki",
        "score": 0.3104166666666666
    },
    {
        "word": "figured bass",
        "from": "wiki",
        "score": 0.3104166666666666
    },
    {
        "word": "jamming",
        "score": 0.30933846153846156,
        "from": "ol"
    },
    {
        "word": "loudspeaker",
        "from": "swiki",
        "score": 0.3080597014925373
    },
    {
        "word": "playback",
        "score": 0.30762307692307694,
        "from": "ol"
    },
    {
        "word": "orchestre",
        "score": 0.3072153846153846,
        "from": "ol"
    },
    {
        "word": "musique",
        "score": 0.3060538461538462,
        "from": "ol"
    },
    {
        "word": "songvid",
        "score": 0.3033137179891656,
        "from": "cn5"
    },
    {
        "word": "melisma",
        "score": 0.30321047343743,
        "from": "cn5"
    },
    {
        "word": "wind instruments",
        "from": "swiki",
        "score": 0.30099502487562196
    },
    {
        "word": "diatonic function",
        "from": "wiki",
        "score": 0.3000000000000001
    },
    {
        "word": "jam",
        "score": 0.2999846153846154,
        "from": "ol"
    },
    {
        "word": "clavichord",
        "from": "wiki",
        "score": 0.2989583333333333
    },
    {
        "word": "songsheet",
        "score": 0.2986056727738017,
        "from": "cn5"
    },
    {
        "word": "conservatory",
        "score": 0.2981384615384615,
        "from": "ol"
    },
    {
        "word": "franz liszt",
        "from": "swiki",
        "score": 0.2946268656716418
    },
    {
        "word": "human physiology",
        "from": "wiki",
        "score": 0.29375
    },
    {
        "word": "frevo",
        "score": 0.29244357651462227,
        "from": "cn5"
    },
    {
        "word": "disc",
        "score": 0.29235384615384613,
        "from": "ol"
    },
    {
        "word": "madrigalist",
        "score": 0.292187926141384,
        "from": "cn5"
    },
    {
        "word": "czardas",
        "score": 0.29207025623387695,
        "from": "cn5"
    },
    {
        "word": "fun",
        "score": 0.2917153846153846,
        "from": "ol"
    },
    {
        "word": "dhikr",
        "from": "wiki",
        "score": 0.29166666666666663
    },
    {
        "word": "vivaldi",
        "from": "wiki",
        "score": 0.29062499999999997
    },
    {
        "word": "songfest",
        "score": 0.2891490616069282,
        "from": "cn5"
    },
    {
        "word": "copyright",
        "score": 0.2882692307692308,
        "from": "ol"
    },
    {
        "word": "tamasha",
        "score": 0.2875441010449866,
        "from": "cn5"
    },
    {
        "word": "altered dominant",
        "from": "wiki",
        "score": 0.2864583333333333
    },
    {
        "word": "harappa",
        "from": "wiki",
        "score": 0.28645833333333326
    },
    {
        "word": "stuff",
        "score": 0.2860384615384615,
        "from": "ol"
    },
    {
        "word": "richard wagner",
        "from": "wiki,swiki",
        "score": 0.2854166666666667
    },
    {
        "word": "mohenjo-daro",
        "from": "wiki",
        "score": 0.28541666666666665
    },
    {
        "word": "cantiga",
        "score": 0.285293697695435,
        "from": "cn5"
    },
    {
        "word": "songworthy",
        "score": 0.282412145470214,
        "from": "cn5"
    },
    {
        "word": "percussion instruments",
        "from": "swiki",
        "score": 0.281094527363184
    },
    {
        "word": "silappadhikaram",
        "from": "wiki",
        "score": 0.2802083333333333
    },
    {
        "word": "playing",
        "score": 0.2797923076923077,
        "from": "ol"
    },
    {
        "word": "heptachord",
        "score": 0.2795602391955526,
        "from": "cn5"
    },
    {
        "word": "songsmith",
        "score": 0.276749228703558,
        "from": "cn5"
    },
    {
        "word": "kinda",
        "score": 0.2763076923076923,
        "from": "ol"
    },
    {
        "word": "form of music",
        "score": 0.2762091926001707,
        "from": "cn5"
    },
    {
        "word": "kwela",
        "score": 0.27432125648496075,
        "from": "cn5"
    },
    {
        "word": "prothalamion",
        "score": 0.27420599780792465,
        "from": "cn5"
    },
    {
        "word": "joy",
        "score": 0.27416153846153846,
        "from": "ol"
    },
    {
        "word": "bass drum",
        "from": "wiki",
        "score": 0.27395833333333336
    },
    {
        "word": "euphonic",
        "score": 0.2736644216239258,
        "from": "cn5"
    },
    {
        "word": "crash cymbal",
        "from": "wiki",
        "score": 0.2718749999999999
    },
    {
        "word": "rigadoon",
        "score": 0.27077754299471,
        "from": "cn5"
    },
    {
        "word": "johannes brahms",
        "from": "swiki",
        "score": 0.2707462686567164
    },
    {
        "word": "trancey",
        "score": 0.270686212557504,
        "from": "cn5"
    },
    {
        "word": "serenade",
        "from": "wiki",
        "score": 0.26979166666666665
    },
    {
        "word": "ethnomusic",
        "score": 0.2696805400072242,
        "from": "cn5"
    },
    {
        "word": "divertimento",
        "from": "wiki",
        "score": 0.26875
    },
    {
        "word": "antimusic",
        "score": 0.26793134455179357,
        "from": "cn5"
    },
    {
        "word": "soundalike",
        "score": 0.2677125322274029,
        "from": "cn5"
    },
    {
        "word": "judeo-christian",
        "from": "wiki",
        "score": 0.2677083333333333
    },
    {
        "word": "white notes",
        "from": "wiki",
        "score": 0.26666666666666666
    },
    {
        "word": "singalong",
        "score": 0.26631160554386635,
        "from": "cn5"
    },
    {
        "word": "upbeat",
        "score": 0.26503846153846156,
        "from": "ol"
    },
    {
        "word": "bourrée",
        "score": 0.2641590276645298,
        "from": "cn5"
    },
    {
        "word": "musiczine",
        "score": 0.26360651822254166,
        "from": "cn5"
    },
    {
        "word": "chromatic note",
        "from": "wiki",
        "score": 0.2635416666666666
    },
    {
        "word": "lied",
        "from": "swiki",
        "score": 0.2626865671641791
    },
    {
        "word": "whole tone scale",
        "from": "wiki",
        "score": 0.2625
    },
    {
        "word": "solfege",
        "score": 0.26151134587684743,
        "from": "cn5"
    },
    {
        "word": "musicless",
        "score": 0.2609667402127983,
        "from": "cn5"
    },
    {
        "word": "yoik",
        "score": 0.2609136883168629,
        "from": "cn5"
    },
    {
        "word": "happiness",
        "score": 0.26084615384615384,
        "from": "ol"
    },
    {
        "word": "songtext",
        "score": 0.2608362825716831,
        "from": "cn5"
    },
    {
        "word": "industry",
        "score": 0.25947692307692305,
        "from": "ol"
    },
    {
        "word": "kum",
        "score": 0.25914615384615386,
        "from": "ol"
    },
    {
        "word": "maculele",
        "score": 0.2586948844552699,
        "from": "cn5"
    },
    {
        "word": "chiptune",
        "score": 0.2578258697217154,
        "from": "cn5"
    },
    {
        "word": "record",
        "score": 0.2572846153846154,
        "from": "ol"
    },
    {
        "word": "ceili",
        "score": 0.25598538708676455,
        "from": "cn5"
    },
    {
        "word": "vocalism",
        "score": 0.25582808031363413,
        "from": "cn5"
    },
    {
        "word": "splish",
        "score": 0.25541502539328753,
        "from": "cn5"
    },
    {
        "word": "aulos",
        "from": "wiki",
        "score": 0.25416666666666665
    },
    {
        "word": "clip",
        "score": 0.2537923076923077,
        "from": "ol"
    },
    {
        "word": "romanticism",
        "from": "wiki",
        "score": 0.25104166666666666
    },
    {
        "word": "kithara",
        "from": "wiki",
        "score": 0.2510416666666666
    },
    {
        "word": "records",
        "score": 0.2505307692307692,
        "from": "ol"
    },
    {
        "word": "piece",
        "score": 0.24949230769230768,
        "from": "ol"
    },
    {
        "word": "brahms",
        "from": "wiki",
        "score": 0.24895833333333334
    },
    {
        "word": "pieces",
        "score": 0.24808461538461538,
        "from": "ol"
    },
    {
        "word": "partition",
        "score": 0.24721538461538461,
        "from": "ol"
    },
    {
        "word": "syncretism",
        "from": "wiki",
        "score": 0.24479166666666663
    },
    {
        "word": "canada",
        "score": 0.24475384615384616,
        "from": "ol"
    },
    {
        "word": "donkey",
        "score": 0.24375384615384615,
        "from": "ol"
    },
    {
        "word": "score",
        "score": 0.24357692307692308,
        "from": "ol"
    },
    {
        "word": "coral",
        "score": 0.24276923076923076,
        "from": "ol"
    },
    {
        "word": "common time",
        "from": "wiki",
        "score": 0.24270833333333336
    },
    {
        "word": "snare drum",
        "from": "wiki",
        "score": 0.24166666666666675
    },
    {
        "word": "deutscher",
        "score": 0.24166153846153846,
        "from": "ol"
    },
    {
        "word": "lok",
        "score": 0.24043846153846155,
        "from": "ol"
    },
    {
        "word": "take lesson",
        "score": 0.23932589857973602,
        "from": "cn5"
    },
    {
        "word": "yue",
        "score": 0.23766153846153845,
        "from": "ol"
    },
    {
        "word": "acoustic guitar",
        "from": "wiki",
        "score": 0.2375000000000001
    },
    {
        "word": "drill",
        "score": 0.23453846153846153,
        "from": "ol"
    },
    {
        "word": "genera",
        "score": 0.2330076923076923,
        "from": "ol"
    },
    {
        "word": "decreasing",
        "score": 0.2303769230769231,
        "from": "ol"
    },
    {
        "word": "increasing",
        "score": 0.2299846153846154,
        "from": "ol"
    },
    {
        "word": "plainsong",
        "from": "wiki",
        "score": 0.22916666666666666
    },
    {
        "word": "musical texture",
        "from": "wiki",
        "score": 0.22916666666666657
    },
    {
        "word": "lock",
        "score": 0.22677692307692307,
        "from": "ol"
    },
    {
        "word": "chromatic",
        "from": "wiki",
        "score": 0.22604166666666664
    },
    {
        "word": "léonin",
        "from": "wiki",
        "score": 0.2239583333333333
    },
    {
        "word": "pérotin",
        "from": "wiki",
        "score": 0.22291666666666668
    },
    {
        "word": "cmf",
        "score": 0.2219846153846154,
        "from": "ol"
    },
    {
        "word": "moh",
        "score": 0.2219846153846154,
        "from": "ol"
    },
    {
        "word": "musicales",
        "score": 0.2219846153846154,
        "from": "ol"
    },
    {
        "word": "polka",
        "score": 0.22192307692307692,
        "from": "ol"
    },
    {
        "word": "zydeco",
        "score": 0.2219,
        "from": "ol"
    },
    {
        "word": "choral",
        "score": 0.22188461538461537,
        "from": "ol"
    },
    {
        "word": "choro",
        "score": 0.22182307692307693,
        "from": "ol"
    },
    {
        "word": "melodies",
        "score": 0.2218,
        "from": "ol"
    },
    {
        "word": "carnatic",
        "score": 0.22177692307692307,
        "from": "ol"
    },
    {
        "word": "musical composition",
        "score": 0.21791886691394896,
        "from": "cn5"
    },
    {
        "word": "gut string",
        "from": "wiki",
        "score": 0.21770833333333323
    },
    {
        "word": "operetta",
        "from": "wiki",
        "score": 0.21666666666666667
    },
    {
        "word": "steel strings",
        "from": "wiki",
        "score": 0.21666666666666662
    },
    {
        "word": "republic of ireland",
        "from": "swiki",
        "score": 0.2164179104477611
    },
    {
        "word": "red-crowned crane",
        "from": "swiki",
        "score": 0.21144278606965178
    },
    {
        "word": "electric piano",
        "from": "wiki",
        "score": 0.20937499999999992
    },
    {
        "word": "graphic equalizer",
        "from": "wiki",
        "score": 0.20833333333333331
    },
    {
        "word": "effects unit",
        "from": "wiki",
        "score": 0.2072916666666667
    },
    {
        "word": "chinese musical system",
        "from": "swiki",
        "score": 0.20646766169154224
    },
    {
        "word": "phonograph",
        "from": "wiki",
        "score": 0.20208333333333334
    },
    {
        "word": "20th century classical music",
        "from": "swiki",
        "score": 0.20149253731343292
    },
    {
        "word": "gramophone record",
        "from": "wiki",
        "score": 0.19249999999999995
    },
    {
        "word": "tin pan alley",
        "from": "wiki",
        "score": 0.19166666666666665
    },
    {
        "word": "32 bar form",
        "from": "wiki",
        "score": 0.18854166666666672
    },
    {
        "word": "verse-chorus form",
        "from": "wiki",
        "score": 0.1875
    },
    {
        "word": "homophony",
        "from": "wiki",
        "score": 0.18437499999999998
    },
    {
        "word": "strophic form",
        "from": "wiki",
        "score": 0.18333333333333335
    },
    {
        "word": "twelve bar blues",
        "from": "wiki",
        "score": 0.18229166666666663
    },
    {
        "word": "the oxford companion to music",
        "from": "wiki",
        "score": 0.18125000000000002
    },
    {
        "word": "fortepiano",
        "from": "wiki",
        "score": 0.18125
    },
    {
        "word": "percy scholes",
        "from": "wiki",
        "score": 0.1802083333333333
    },
    {
        "word": "shape note",
        "score": 0.17435582495601787,
        "from": "cn5"
    },
    {
        "word": "alfred mann",
        "from": "wiki",
        "score": 0.17083333333333328
    },
    {
        "word": "programme music",
        "from": "wiki",
        "score": 0.16979166666666667
    },
    {
        "word": "dixieland",
        "from": "wiki",
        "score": 0.16666666666666663
    },
    {
        "word": "symphonic poem",
        "from": "wiki",
        "score": 0.1635416666666667
    },
    {
        "word": "sumer is icumen in",
        "from": "swiki",
        "score": 0.15671641791044777
    },
    {
        "word": "entertain others",
        "score": 0.15632652073396114,
        "from": "cn5"
    },
    {
        "word": "sound good",
        "score": 0.15399597467693193,
        "from": "cn5"
    },
    {
        "word": "soul music",
        "from": "wiki,swiki",
        "score": 0.15208333333333335
    },
    {
        "word": "musical key",
        "from": "wiki",
        "score": 0.15000000000000002
    },
    {
        "word": "harmonica",
        "from": "wiki",
        "score": 0.14999999999999997
    },
    {
        "word": "minimalism",
        "from": "swiki",
        "score": 0.1482587064676617
    },
    {
        "word": "da capo",
        "from": "wiki",
        "score": 0.1479166666666667
    },
    {
        "word": "thirty-two-bar form",
        "from": "wiki",
        "score": 0.14687499999999998
    },
    {
        "word": "read music",
        "score": 0.14638591593122585,
        "from": "cn5"
    },
    {
        "word": "concerto grosso",
        "from": "wiki",
        "score": 0.14479166666666665
    },
    {
        "word": "arch form",
        "from": "wiki",
        "score": 0.14375000000000004
    },
    {
        "word": "something hear",
        "score": 0.1418544198897982,
        "from": "cn5"
    },
    {
        "word": "ground bass",
        "from": "wiki",
        "score": 0.13854166666666667
    },
    {
        "word": "roman catholic",
        "from": "swiki",
        "score": 0.13681592039800994
    },
    {
        "word": "you like music",
        "score": 0.1337721150767328,
        "from": "cn5"
    },
    {
        "word": "listen to",
        "score": 0.1310970782153683,
        "from": "cn5"
    },
    {
        "word": "orchestra hit",
        "score": 0.13102011858968488,
        "from": "cn5"
    },
    {
        "word": "beethoven's fifth symphony",
        "from": "wiki",
        "score": 0.13020833333333337
    },
    {
        "word": "bandleader",
        "from": "wiki",
        "score": 0.12708333333333333
    },
    {
        "word": "riff",
        "from": "wiki",
        "score": 0.12604166666666666
    },
    {
        "word": "solo",
        "from": "wiki",
        "score": 0.125
    },
    {
        "word": "music of africa",
        "from": "wiki",
        "score": 0.12499999999999994
    },
    {
        "word": "bali",
        "from": "wiki",
        "score": 0.12395833333333334
    },
    {
        "word": "paleolithic flutes",
        "from": "wiki",
        "score": 0.12291666666666667
    },
    {
        "word": "divje babe flute",
        "from": "wiki",
        "score": 0.12083333333333335
    },
    {
        "word": "concert hall",
        "from": "wiki,swiki",
        "score": 0.12083333333333335
    },
    {
        "word": "carry tune",
        "score": 0.12044941231464878,
        "from": "cn5"
    },
    {
        "word": "cave bear",
        "from": "wiki",
        "score": 0.11979166666666663
    },
    {
        "word": "rhythm and blue",
        "score": 0.11676364939154427,
        "from": "cn5"
    },
    {
        "word": "set to music",
        "score": 0.11619632831931903,
        "from": "cn5"
    },
    {
        "word": "trill",
        "from": "wiki",
        "score": 0.11354166666666665
    },
    {
        "word": "accent",
        "from": "wiki",
        "score": 0.11249999999999999
    },
    {
        "word": "giovanni da palestrina",
        "from": "swiki",
        "score": 0.11194029850746268
    },
    {
        "word": "rest",
        "from": "wiki",
        "score": 0.11145833333333333
    },
    {
        "word": "tune it",
        "score": 0.11118197234853044,
        "from": "cn5"
    },
    {
        "word": "hurrian song",
        "from": "wiki",
        "score": 0.109375
    },
    {
        "word": "clay tablet",
        "from": "wiki",
        "score": 0.10833333333333328
    },
    {
        "word": "philosophy",
        "from": "wiki",
        "score": 0.10729166666666667
    },
    {
        "word": "lead vocal",
        "score": 0.10645999121061056,
        "from": "cn5"
    },
    {
        "word": "metaphysics",
        "from": "wiki",
        "score": 0.10625000000000001
    },
    {
        "word": "form of expression",
        "score": 0.10546700839896062,
        "from": "cn5"
    },
    {
        "word": "aesthetics",
        "from": "wiki",
        "score": 0.10520833333333335
    },
    {
        "word": "predynastic egypt",
        "from": "wiki",
        "score": 0.10416666666666663
    },
    {
        "word": "old kingdom",
        "from": "wiki",
        "score": 0.10312500000000002
    },
    {
        "word": "plaisir",
        "from": "wiki",
        "score": 0.10312499999999997
    },
    {
        "word": "jouissance",
        "from": "wiki",
        "score": 0.1020833333333333
    },
    {
        "word": "dance music",
        "from": "swiki",
        "score": 0.10199004975124382
    },
    {
        "word": "universal language",
        "score": 0.1018733094820724,
        "from": "cn5"
    },
    {
        "word": "boogie woogie",
        "score": 0.10058232042641424,
        "from": "cn5"
    },
    {
        "word": "george gershwin",
        "from": "wiki,swiki",
        "score": 0.10000000000000003
    },
    {
        "word": "double clarinet",
        "from": "wiki",
        "score": 0.09999999999999998
    },
    {
        "word": "religious song",
        "score": 0.09838152617486362,
        "from": "cn5"
    },
    {
        "word": "new wave",
        "score": 0.09737653055162665,
        "from": "cn5"
    },
    {
        "word": "middle kingdom of egypt",
        "from": "wiki",
        "score": 0.09583333333333333
    },
    {
        "word": "play guitar",
        "score": 0.09246836584299867,
        "from": "cn5"
    },
    {
        "word": "musicologist",
        "from": "wiki",
        "score": 0.09062500000000001
    },
    {
        "word": "folk song",
        "score": 0.09051663429124335,
        "from": "cn5"
    },
    {
        "word": "ancient egypt",
        "from": "wiki",
        "score": 0.08958333333333335
    },
    {
        "word": "acousmatic",
        "from": "wiki",
        "score": 0.08645833333333333
    },
    {
        "word": "karaoke machine",
        "score": 0.08529756599972316,
        "from": "cn5"
    },
    {
        "word": "pipe up",
        "score": 0.08458095237340058,
        "from": "cn5"
    },
    {
        "word": "mortimer wheeler",
        "from": "wiki",
        "score": 0.08437499999999998
    },
    {
        "word": "bel canto",
        "score": 0.08261185273563787,
        "from": "cn5"
    },
    {
        "word": "emotions",
        "from": "wiki",
        "score": 0.08229166666666665
    },
    {
        "word": "intellect",
        "from": "wiki",
        "score": 0.08124999999999999
    },
    {
        "word": "ilango adigal",
        "from": "wiki",
        "score": 0.07916666666666672
    },
    {
        "word": "plato",
        "from": "wiki",
        "score": 0.07916666666666666
    },
    {
        "word": "africa",
        "from": "swiki",
        "score": 0.07860696517412935
    },
    {
        "word": "asian music",
        "from": "wiki",
        "score": 0.078125
    },
    {
        "word": "lounge music",
        "score": 0.07787128280928879,
        "from": "cn5"
    },
    {
        "word": "arabic music",
        "from": "wiki",
        "score": 0.07708333333333328
    },
    {
        "word": "hypnotism",
        "from": "wiki",
        "score": 0.07604166666666667
    },
    {
        "word": "central asian music",
        "from": "wiki",
        "score": 0.07604166666666667
    },
    {
        "word": "emotion",
        "from": "wiki",
        "score": 0.07500000000000001
    },
    {
        "word": "east asian music",
        "from": "wiki",
        "score": 0.07499999999999996
    },
    {
        "word": "south asian music",
        "from": "wiki",
        "score": 0.07395833333333335
    },
    {
        "word": "slave",
        "from": "swiki",
        "score": 0.07363184079601987
    },
    {
        "word": "southeast asian music",
        "from": "wiki",
        "score": 0.07291666666666663
    },
    {
        "word": "resonance",
        "from": "wiki",
        "score": 0.07291666666666663
    },
    {
        "word": "chinese classical music",
        "from": "wiki",
        "score": 0.07187500000000002
    },
    {
        "word": "polyrhythm",
        "from": "wiki",
        "score": 0.071875
    },
    {
        "word": "persian traditional music",
        "from": "wiki",
        "score": 0.0708333333333333
    },
    {
        "word": "experience",
        "from": "wiki",
        "score": 0.06874999999999998
    },
    {
        "word": "semitic people",
        "from": "wiki",
        "score": 0.06874999999999998
    },
    {
        "word": "jail",
        "from": "swiki",
        "score": 0.06865671641791044
    },
    {
        "word": "express your feel",
        "score": 0.06863946709534341,
        "from": "cn5"
    },
    {
        "word": "observation",
        "from": "wiki",
        "score": 0.06666666666666665
    },
    {
        "word": "night club",
        "score": 0.06514165964665708,
        "from": "cn5"
    },
    {
        "word": "ancient rome",
        "from": "wiki",
        "score": 0.06458333333333333
    },
    {
        "word": "belt out",
        "score": 0.06219250548994837,
        "from": "cn5"
    },
    {
        "word": "classical music period",
        "from": "swiki",
        "score": 0.062189054726368154
    },
    {
        "word": "tune in",
        "score": 0.06215272750074197,
        "from": "cn5"
    },
    {
        "word": "floor filler",
        "score": 0.06196565235043727,
        "from": "cn5"
    },
    {
        "word": "western culture",
        "from": "wiki",
        "score": 0.060416666666666674
    },
    {
        "word": "backup vocal",
        "score": 0.0602696349548395,
        "from": "cn5"
    },
    {
        "word": "aptitude",
        "from": "wiki",
        "score": 0.05937500000000001
    },
    {
        "word": "rap music",
        "score": 0.05882071817466761,
        "from": "cn5"
    },
    {
        "word": "skill",
        "from": "wiki",
        "score": 0.05833333333333335
    },
    {
        "word": "intelligence",
        "from": "wiki",
        "score": 0.05729166666666663
    },
    {
        "word": "sing cowboy",
        "score": 0.05716779130631555,
        "from": "cn5"
    },
    {
        "word": "theatre of ancient greece",
        "from": "wiki",
        "score": 0.05625000000000002
    },
    {
        "word": "creativity",
        "from": "wiki",
        "score": 0.05624999999999997
    },
    {
        "word": "music of greece",
        "from": "wiki",
        "score": 0.050000000000000044
    },
    {
        "word": "punk rock",
        "from": "wiki",
        "score": 0.04999999999999993
    },
    {
        "word": "european classical music",
        "from": "wiki",
        "score": 0.04583333333333328
    },
    {
        "word": "roman empire",
        "from": "wiki",
        "score": 0.044791666666666674
    },
    {
        "word": "psychological",
        "from": "wiki",
        "score": 0.04374999999999998
    },
    {
        "word": "eastern europe",
        "from": "wiki",
        "score": 0.043749999999999956
    },
    {
        "word": "byzantine empire",
        "from": "wiki",
        "score": 0.04270833333333335
    },
    {
        "word": "physiological",
        "from": "wiki",
        "score": 0.04270833333333332
    },
    {
        "word": "speech",
        "from": "wiki",
        "score": 0.04166666666666666
    },
    {
        "word": "seikilos epitaph",
        "from": "wiki",
        "score": 0.04166666666666663
    },
    {
        "word": "elementa harmonica",
        "from": "wiki",
        "score": 0.04062500000000002
    },
    {
        "word": "medieval music",
        "from": "wiki",
        "score": 0.039583333333333304
    },
    {
        "word": "roman catholic church",
        "from": "wiki",
        "score": 0.03541666666666665
    },
    {
        "word": "ethnicity",
        "from": "wiki",
        "score": 0.03437499999999999
    },
    {
        "word": "catholic church",
        "from": "wiki",
        "score": 0.03229166666666672
    },
    {
        "word": "church music",
        "from": "wiki",
        "score": 0.02604166666666663
    },
    {
        "word": "secular music",
        "from": "wiki",
        "score": 0.025000000000000022
    },
    {
        "word": "socioeconomic",
        "from": "wiki",
        "score": 0.02395833333333333
    },
    {
        "word": "guillaume de machaut",
        "from": "wiki",
        "score": 0.021874999999999978
    },
    {
        "word": "renaissance music",
        "from": "wiki",
        "score": 0.02083333333333337
    },
    {
        "word": "courtly love",
        "from": "wiki",
        "score": 0.019791666666666652
    },
    {
        "word": "banjo",
        "from": "swiki",
        "score": 0.018905472636815912
    },
    {
        "word": "guillaume dufay",
        "from": "wiki",
        "score": 0.015625
    },
    {
        "word": "sociology",
        "from": "wiki",
        "score": 0.01458333333333331
    },
    {
        "word": "giovanni pierluigi da palestrina",
        "from": "wiki",
        "score": 0.014583333333333282
    },
    {
        "word": "thomas morley",
        "from": "wiki",
        "score": 0.013541666666666674
    },
    {
        "word": "internet",
        "from": "wiki",
        "score": 0.012499999999999956
    },
    {
        "word": "orlande de lassus",
        "from": "wiki",
        "score": 0.012499999999999956
    },
    {
        "word": "cabaret",
        "from": "wiki",
        "score": 0.009374999999999994
    },
    {
        "word": "musical ensemble",
        "from": "wiki",
        "score": 0.006249999999999978
    },
    {
        "word": "string section",
        "from": "wiki",
        "score": 0.00520833333333337
    },
    {
        "word": "brass instrument",
        "from": "wiki",
        "score": 0.004166666666666652
    },
    {
        "word": "rule",
        "from": "swiki",
        "score": 0.0039800995024875385
    },
    {
        "word": "woodwind instrument",
        "from": "wiki",
        "score": 0.0031250000000000444
    },
    {
        "word": "scratching",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "counting",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "mashup",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "facebook",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "mp3",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "cooperation",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "mentoring",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "pc",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "yogyakarta",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "itunes",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "indonesia",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "gamelan",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "dissertation",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "professor",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "memory",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "note",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "harmonic",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "ipod",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "mathematics",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "therapeutic",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "physics",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "anthropology",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "elevator",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "melancholia",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "schizophrenia",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "mall",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "shop",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "college",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "keyboard",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "teacher",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "computer",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "youtube",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "propaganda",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "university",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "remix",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "humanities",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "credit",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "globalization",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "johann sebastian bach",
        "from": "wiki",
        "score": -0.006249999999999978
    },
    {
        "word": "george frideric handel",
        "from": "wiki",
        "score": -0.007291666666666641
    },
    {
        "word": "georg philipp telemann",
        "from": "wiki",
        "score": -0.00833333333333336
    },
    {
        "word": "pipe organ",
        "from": "wiki",
        "score": -0.021874999999999978
    },
    {
        "word": "carl philipp emanuel bach",
        "from": "wiki",
        "score": -0.03958333333333336
    },
    {
        "word": "jazz band",
        "from": "wiki",
        "score": -0.03999999999999998
    },
    {
        "word": "christoph willibald gluck",
        "from": "wiki",
        "score": -0.04062500000000002
    },
    {
        "word": "johann christian bach",
        "from": "wiki",
        "score": -0.041666666666666685
    },
    {
        "word": "nineteenth century",
        "from": "wiki",
        "score": -0.04791666666666666
    },
    {
        "word": "magnetoencephalography",
        "from": "wiki",
        "score": -0.04791666666666669
    },
    {
        "word": "electroencephalography",
        "from": "wiki",
        "score": -0.048958333333333354
    },
    {
        "word": "tone poem",
        "from": "wiki",
        "score": -0.052083333333333315
    },
    {
        "word": "romantic love",
        "from": "wiki",
        "score": -0.057291666666666685
    },
    {
        "word": "psychophysics",
        "from": "wiki",
        "score": -0.05937500000000001
    },
    {
        "word": "protolanguage",
        "from": "wiki",
        "score": -0.06250000000000003
    },
    {
        "word": "symphony no. 5",
        "from": "wiki",
        "score": -0.06770833333333331
    },
    {
        "word": "pyotr ilyich tchaikovsky",
        "from": "wiki",
        "score": -0.06874999999999998
    },
    {
        "word": "antonín dvořák",
        "from": "wiki",
        "score": -0.06979166666666664
    },
    {
        "word": "gustav mahler",
        "from": "wiki",
        "score": -0.07083333333333336
    },
    {
        "word": "consonance and dissonance",
        "from": "wiki",
        "score": -0.07291666666666669
    },
    {
        "word": "extended chord",
        "from": "wiki",
        "score": -0.07604166666666667
    },
    {
        "word": "altered chord",
        "from": "wiki",
        "score": -0.07708333333333334
    },
    {
        "word": "percussive instrument",
        "score": -0.07823076923076921,
        "from": "ol"
    },
    {
        "word": "industrial revolution",
        "from": "wiki",
        "score": -0.07916666666666666
    },
    {
        "word": "urban culture",
        "from": "wiki",
        "score": -0.08124999999999999
    },
    {
        "word": "felix mendelssohn",
        "from": "swiki",
        "score": -0.08208955223880599
    },
    {
        "word": "serialism",
        "from": "wiki",
        "score": -0.08229166666666668
    },
    {
        "word": "edwardian musical comedy",
        "from": "wiki",
        "score": -0.08437499999999998
    },
    {
        "word": "sociomusicology",
        "from": "wiki",
        "score": -0.08645833333333336
    },
    {
        "word": "middle class",
        "from": "wiki",
        "score": -0.08750000000000002
    },
    {
        "word": "20th-century music",
        "from": "wiki",
        "score": -0.09062500000000001
    },
    {
        "word": "radio broadcasting",
        "from": "wiki",
        "score": -0.09270833333333334
    },
    {
        "word": "mass market",
        "from": "wiki",
        "score": -0.09375
    },
    {
        "word": "pyotr tchaikovsky",
        "from": "swiki",
        "score": -0.09701492537313433
    },
    {
        "word": "upper class",
        "from": "wiki",
        "score": -0.09895833333333331
    },
    {
        "word": "wikinomics",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "music-on-demand",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "al-farabi",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "dhrupad",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "quadrivium",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "zoomusicology",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "prosumer",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "world war i",
        "from": "wiki",
        "score": -0.10416666666666669
    },
    {
        "word": "20th century",
        "from": "swiki",
        "score": -0.10696517412935325
    },
    {
        "word": "musique concrète",
        "from": "wiki",
        "score": -0.11458333333333331
    },
    {
        "word": "multitrack recording",
        "from": "wiki",
        "score": -0.11562499999999998
    },
    {
        "word": "african american",
        "from": "wiki",
        "score": -0.12083333333333335
    },
    {
        "word": "southern united states",
        "from": "wiki",
        "score": -0.12187500000000001
    },
    {
        "word": "west africa",
        "from": "wiki",
        "score": -0.125
    },
    {
        "word": "blue note",
        "from": "wiki",
        "score": -0.12604166666666666
    },
    {
        "word": "twelve-tone system",
        "from": "swiki",
        "score": -0.12686567164179102
    },
    {
        "word": "swung note",
        "from": "wiki",
        "score": -0.13020833333333331
    },
    {
        "word": "american popular music",
        "from": "wiki",
        "score": -0.13124999999999998
    },
    {
        "word": "benjamin britten",
        "from": "swiki",
        "score": -0.1318407960199005
    },
    {
        "word": "new orleans",
        "from": "wiki",
        "score": -0.13229166666666664
    },
    {
        "word": "analog synthesizer",
        "from": "wiki",
        "score": -0.14791666666666664
    },
    {
        "word": "music education",
        "from": "wiki",
        "score": -0.15
    },
    {
        "word": "blues rock",
        "from": "wiki",
        "score": -0.15104166666666669
    },
    {
        "word": "music therapy",
        "from": "wiki",
        "score": -0.15499999999999997
    },
    {
        "word": "progressive rock",
        "from": "wiki",
        "score": -0.15520833333333334
    },
    {
        "word": "experimental rock",
        "from": "wiki",
        "score": -0.15625
    },
    {
        "word": "karlheinz stockhausen",
        "from": "swiki",
        "score": -0.15671641791044777
    },
    {
        "word": "cover song",
        "from": "wiki",
        "score": -0.16145833333333331
    },
    {
        "word": "electronic music",
        "from": "swiki",
        "score": -0.1616915422885572
    },
    {
        "word": "guitar solo",
        "from": "wiki",
        "score": -0.16249999999999998
    },
    {
        "word": "music festival",
        "from": "wiki",
        "score": -0.17708333333333331
    },
    {
        "word": "music competition",
        "from": "wiki",
        "score": -0.17812499999999998
    },
    {
        "word": "cognitive science",
        "from": "wiki",
        "score": -0.1825
    },
    {
        "word": "oral history",
        "from": "wiki",
        "score": -0.18333333333333335
    },
    {
        "word": "playing by ear",
        "from": "wiki",
        "score": -0.184375
    },
    {
        "word": "john adams",
        "from": "swiki",
        "score": -0.18656716417910446
    },
    {
        "word": "james macmillan",
        "from": "swiki",
        "score": -0.19154228855721395
    },
    {
        "word": "alexander gottlieb baumgarten",
        "from": "wiki",
        "score": -0.19895833333333335
    },
    {
        "word": "immanuel kant",
        "from": "wiki",
        "score": -0.2
    },
    {
        "word": "peter kivy",
        "from": "wiki",
        "score": -0.20104166666666667
    },
    {
        "word": "jerrold levinson",
        "from": "wiki",
        "score": -0.20208333333333334
    },
    {
        "word": "roger scruton",
        "from": "wiki",
        "score": -0.203125
    },
    {
        "word": "stephen davies",
        "from": "wiki",
        "score": -0.20416666666666666
    },
    {
        "word": "eduard hanslick",
        "from": "wiki",
        "score": -0.20625
    },
    {
        "word": "new orleans, louisiana",
        "from": "swiki",
        "score": -0.2064676616915423
    },
    {
        "word": "harry partch",
        "from": "wiki",
        "score": -0.20833333333333331
    },
    {
        "word": "kyle gann",
        "from": "wiki",
        "score": -0.21041666666666664
    },
    {
        "word": "united states",
        "from": "swiki",
        "score": -0.21144278606965172
    },
    {
        "word": "microtonal music",
        "from": "wiki",
        "score": -0.21145833333333336
    },
    {
        "word": "la monte young",
        "from": "wiki",
        "score": -0.21354166666666669
    },
    {
        "word": "rhys chatham",
        "from": "wiki",
        "score": -0.21458333333333335
    },
    {
        "word": "glenn branca",
        "from": "wiki",
        "score": -0.215625
    },
    {
        "word": "just intonation",
        "from": "wiki",
        "score": -0.21666666666666667
    },
    {
        "word": "temporal dynamics of music and language",
        "from": "wiki",
        "score": -0.22604166666666664
    },
    {
        "word": "empirical research",
        "from": "wiki",
        "score": -0.23229166666666667
    },
    {
        "word": "human subject research",
        "from": "wiki",
        "score": -0.234375
    },
    {
        "word": "musical technique",
        "from": "wiki",
        "score": -0.23541666666666666
    },
    {
        "word": "music composition",
        "from": "wiki",
        "score": -0.23645833333333333
    },
    {
        "word": "scott joplin",
        "from": "swiki",
        "score": -0.24129353233830847
    },
    {
        "word": "social behavior",
        "from": "wiki",
        "score": -0.24479166666666669
    },
    {
        "word": "functional magnetic resonance imaging",
        "from": "wiki",
        "score": -0.24583333333333335
    },
    {
        "word": "transcranial magnetic stimulation",
        "from": "wiki",
        "score": -0.246875
    },
    {
        "word": "positron emission tomography",
        "from": "wiki",
        "score": -0.25
    },
    {
        "word": "computer model",
        "from": "wiki",
        "score": -0.2520833333333333
    },
    {
        "word": "artificial intelligence",
        "from": "wiki",
        "score": -0.253125
    },
    {
        "word": "evolutionary theory",
        "from": "wiki",
        "score": -0.26041666666666663
    },
    {
        "word": "charles darwin",
        "from": "wiki",
        "score": -0.26145833333333335
    },
    {
        "word": "linguistic evolution",
        "from": "wiki",
        "score": -0.2635416666666667
    },
    {
        "word": "music cognition",
        "from": "wiki",
        "score": -0.26666666666666666
    },
    {
        "word": "psychology of music preference",
        "from": "wiki",
        "score": -0.2677083333333333
    },
    {
        "word": "music and emotion",
        "from": "wiki",
        "score": -0.26875
    },
    {
        "word": "music-related memory",
        "from": "wiki",
        "score": -0.26979166666666665
    },
    {
        "word": "music community",
        "from": "wiki",
        "score": -0.27083333333333337
    },
    {
        "word": "high culture",
        "from": "wiki",
        "score": -0.271875
    },
    {
        "word": "low culture",
        "from": "wiki",
        "score": -0.2729166666666667
    },
    {
        "word": "social class",
        "from": "wiki",
        "score": -0.27708333333333335
    },
    {
        "word": "mass media",
        "from": "wiki",
        "score": -0.2885416666666667
    },
    {
        "word": "business administration",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "cell phone",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "major scale",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "the beatles",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "buddy holly",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "elvis presley",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "little richard",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "bo diddley",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "chuck berry",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "louis armstrong",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "ottoman empire",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "mental disorder",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "the anatomy of melancholy",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "robert burton",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "exercise and music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "south india",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "carnatic music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "hindustani classical music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music of india",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "broadway musical",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "west side story",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "leonard bernstein",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "porgy and bess",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "rhapsody in blue",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "melting pot",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music of germany",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music of scotland",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music of ireland",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "folk music of england",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "bluegrass music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "contemporary commercial music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "cultural revolution",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "chinese opera",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "bird vocalization",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "paradigmatic analysis",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "nicolas ruwet",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "françois-bernard mâche",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "musical tuning",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "set theory",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "common practice period",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "systematic musicology",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "liberal arts",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "doctor of musical arts",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "doctor of philosophy",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "master of arts",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "master of music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "medical school",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "law school",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "teachers college",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "library science",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "compact disc",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "public administration",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "professional school",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "bachelor of arts",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "bachelor of music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "academic degree",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "undergraduate education",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "singing teacher",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "vocal coach",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "cover band",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "humber college",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "mcgill university",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "berklee college of music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "manhattan school of music",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music conservatory",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music history",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music teacher",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "indonesian institute of the arts, yogyakarta",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music appreciation",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "elementary school",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "higher education",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "preschool education",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "online music store",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "cd store",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "file sharing",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "media conglomerate",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "independent record label",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music publisher",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "record label",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "anthony d. williams",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "don tapscott",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "social networking service",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "social media",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "virtual community",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "niche market",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "data storage device",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "supply and demand",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "the long tail: why the future of business is selling less of more",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "streaming video",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "musical instrument digital interface",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "disc jockey",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "music video",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "sound recording and reproduction",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "berne convention for the protection of literary and artistic works",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "audio home recording act",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "pittsburgh press",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "american federation of musicians",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "theater organ",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "sound film",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "chris anderson",
        "from": "wiki",
        "score": -0.3
    }
]
const petWords = [
    {
        "word": "animal",
        "score": 21.39745562477481,
        "from": "ol,w2v,wiki,swiki,wn,reddit-slashes"
    },
    {
        "word": "dog",
        "score": 13.868008255770015,
        "from": "ol,w2v,wiki,swiki,reddit-slashes"
    },
    {
        "word": "cat",
        "score": 13.661037475098784,
        "from": "ol,w2v,wiki,swiki,reddit-slashes"
    },
    {
        "word": "bird",
        "score": 8.488420043300811,
        "from": "ol,w2v,wiki,swiki"
    },
    {
        "word": "caress",
        "score": 8.074646153846153,
        "from": "ol,wn,wn,reddit-slashes"
    },
    {
        "word": "livestock",
        "score": 7.749304466501241,
        "from": "ol,wiki,reddit-slashes"
    },
    {
        "word": "rodent",
        "score": 7.654349451869922,
        "from": "w2v,wiki,swiki,reddit-slashes"
    },
    {
        "word": "fondle",
        "score": 5.432792307692307,
        "from": "ol,wn,wn"
    },
    {
        "word": "loved",
        "score": 4.618476923076923,
        "from": "ol,wn,reddit-slashes"
    },
    {
        "word": "turtle",
        "score": 4.604535716282127,
        "from": "ol,w2v,wiki"
    },
    {
        "word": "fish",
        "from": "wiki,swiki,reddit-slashes",
        "score": 4.237500000000001
    },
    {
        "word": "baby",
        "score": 3.6967966135246977,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "animals",
        "score": 3.6644157909321287,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "toy",
        "score": 3.5665173465711897,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "ducky",
        "score": 3.077969230769231,
        "from": "ol,wn"
    },
    {
        "word": "deary",
        "score": 3.043276923076923,
        "from": "ol,wn"
    },
    {
        "word": "favorite",
        "score": 3.0348615384615387,
        "from": "ol,wn"
    },
    {
        "word": "dearie",
        "score": 3.004138461538462,
        "from": "ol,wn"
    },
    {
        "word": "preferred",
        "score": 2.990153846153846,
        "from": "ol,wn"
    },
    {
        "word": "favourite",
        "score": 2.9738923076923074,
        "from": "ol,wn"
    },
    {
        "word": "favored",
        "score": 2.965753846153846,
        "from": "ol,wn"
    },
    {
        "word": "darling",
        "score": 2.9656307692307693,
        "from": "ol,wn"
    },
    {
        "word": "positron emission tomography",
        "score": 2.701246153846154,
        "from": "ol,wn"
    },
    {
        "word": "rabbit",
        "score": 2.6030999151074634,
        "from": "w2v,swiki,reddit-slashes"
    },
    {
        "word": "ferret",
        "from": "wiki,swiki",
        "score": 2.4955645161290323
    },
    {
        "word": "eat",
        "score": 2.320335785652393,
        "from": "w2v,swiki"
    },
    {
        "word": "rats",
        "score": 2.289195633436376,
        "from": "w2v,wiki"
    },
    {
        "word": "beast",
        "score": 2.2704153846153847,
        "from": "ol,wn"
    },
    {
        "word": "reptile",
        "from": "wiki,swiki",
        "score": 2.2028225806451616
    },
    {
        "word": "mice",
        "score": 2.201631158629247,
        "from": "w2v,wiki"
    },
    {
        "word": "hamster",
        "score": 2.1890669975186103,
        "from": "ol,wiki"
    },
    {
        "word": "tomography",
        "score": 2.1828769230769227,
        "from": "ol,wn"
    },
    {
        "word": "puppy",
        "score": 2.134450324647487,
        "from": "ol,w2v"
    },
    {
        "word": "domestication",
        "from": "wiki,swiki",
        "score": 2.00258064516129
    },
    {
        "word": "arthropod",
        "from": "wiki,swiki",
        "score": 1.9100806451612904
    },
    {
        "word": "kitten",
        "score": 1.8985598067832656,
        "from": "ol,w2v"
    },
    {
        "word": "bug",
        "score": 1.843992642058497,
        "from": "ol,w2v"
    },
    {
        "word": "tarantula",
        "from": "wiki,swiki",
        "score": 1.834677419354839
    },
    {
        "word": "creature",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "cute",
        "score": 1.7721558708126977,
        "from": "ol,w2v"
    },
    {
        "word": "peeve",
        "score": 1.7635603721342386,
        "from": "ol,w2v"
    },
    {
        "word": "peeves",
        "score": 1.739145770214924,
        "from": "ol,w2v"
    },
    {
        "word": "pets",
        "score": 1.569378665883184,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "hermit crab",
        "from": "wiki,swiki",
        "score": 1.459274193548387
    },
    {
        "word": "guinea pig",
        "from": "wiki,swiki",
        "score": 1.4548387096774194
    },
    {
        "word": "dogs",
        "score": 1.4300298543825072,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "cats",
        "score": 1.3910278092309512,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "companion",
        "score": 1.3705846153846153,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "elephant",
        "score": 1.3667340587648833,
        "from": "w2v,swiki"
    },
    {
        "word": "children",
        "from": "wiki,reddit-slashes",
        "score": 1.3290322580645162
    },
    {
        "word": "rat",
        "score": 1.324012967779549,
        "from": "w2v,swiki"
    },
    {
        "word": "food",
        "score": 1.3237416749654969,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "monkey",
        "score": 1.316798192614106,
        "from": "w2v,wiki"
    },
    {
        "word": "feed",
        "score": 1.3021211034541822,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "mouse",
        "score": 1.2967218483637821,
        "from": "w2v,swiki"
    },
    {
        "word": "domestic",
        "score": 1.2922923076923079,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "friend",
        "score": 1.2727384615384616,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "veterinarian",
        "score": 1.2600501240694788,
        "from": "ol,wiki"
    },
    {
        "word": "meat",
        "score": 1.2586427728067313,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "sheep",
        "score": 1.2499092801823184,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "kids",
        "score": 1.23011363964011,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "familiar",
        "score": 1.2129384615384615,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "human",
        "from": "wiki,swiki,reddit-slashes",
        "score": 1.2000000000000002
    },
    {
        "word": "kennel",
        "score": 1.182753846153846,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "pug",
        "score": 1.1826923076923077,
        "from": "ol,wiki"
    },
    {
        "word": "groomer",
        "score": 1.1230015025522881,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "breeder",
        "from": "wiki,reddit-slashes",
        "score": 0.864516129032258
    },
    {
        "word": "best-loved",
        "score": 0.78,
        "from": "wn"
    },
    {
        "word": "preferent",
        "score": 0.78,
        "from": "wn"
    },
    {
        "word": "altruistic",
        "from": "wiki",
        "score": 0.767741935483871
    },
    {
        "word": "labour",
        "from": "swiki",
        "score": 0.7375
    },
    {
        "word": "gerbil",
        "from": "wiki",
        "score": 0.7096774193548387
    },
    {
        "word": "imaging",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "brute",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "fauna",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "choler",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "fretfulness",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "irritability",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "peevishness",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "petulance",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "lover",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "chosen",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "gentle",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "neck",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "chinchilla",
        "from": "wiki",
        "score": 0.6967741935483871
    },
    {
        "word": "parrot",
        "from": "wiki",
        "score": 0.6645161290322581
    },
    {
        "word": "passerine",
        "from": "wiki",
        "score": 0.6580645161290322
    },
    {
        "word": "fowl",
        "from": "wiki",
        "score": 0.6516129032258065
    },
    {
        "word": "ailurophile",
        "from": "wiki",
        "score": 0.6483870967741935
    },
    {
        "word": "cynophilia",
        "from": "wiki",
        "score": 0.6419354838709678
    },
    {
        "word": "alligator",
        "from": "wiki",
        "score": 0.6322580645161291
    },
    {
        "word": "crocodile",
        "from": "wiki",
        "score": 0.6258064516129032
    },
    {
        "word": "lizard",
        "from": "wiki",
        "score": 0.6193548387096774
    },
    {
        "word": "snake",
        "from": "wiki",
        "score": 0.6129032258064515
    },
    {
        "word": "aquarium",
        "from": "wiki",
        "score": 0.6064516129032258
    },
    {
        "word": "crossness",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "fussiness",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "macushla",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "mollycoddle",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "canoodle",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "amphibians",
        "from": "wiki",
        "score": 0.5806451612903225
    },
    {
        "word": "frog",
        "from": "wiki",
        "score": 0.5741935483870968
    },
    {
        "word": "salamanders",
        "from": "wiki",
        "score": 0.5677419354838709
    },
    {
        "word": "pooch",
        "score": 0.5582692307692307,
        "from": "ol"
    },
    {
        "word": "doggie",
        "score": 0.5474538461538462,
        "from": "ol"
    },
    {
        "word": "pup",
        "score": 0.5429461538461539,
        "from": "ol"
    },
    {
        "word": "doggy",
        "score": 0.5407076923076923,
        "from": "ol"
    },
    {
        "word": "equine",
        "from": "wiki",
        "score": 0.5354838709677419
    },
    {
        "word": "bovine",
        "from": "wiki",
        "score": 0.5290322580645161
    },
    {
        "word": "pig",
        "score": 0.5072378101136653,
        "from": "w2v"
    },
    {
        "word": "kitty",
        "score": 0.5061538461538462,
        "from": "ol"
    },
    {
        "word": "toys",
        "score": 0.5007399441795302,
        "from": "w2v"
    },
    {
        "word": "cow",
        "score": 0.49713444103065024,
        "from": "w2v"
    },
    {
        "word": "scholars",
        "from": "wiki",
        "score": 0.4967741935483871
    },
    {
        "word": "working animal",
        "from": "wiki",
        "score": 0.4935483870967741
    },
    {
        "word": "eating",
        "score": 0.49235406944477617,
        "from": "w2v"
    },
    {
        "word": "babies",
        "score": 0.4847149941947394,
        "from": "w2v"
    },
    {
        "word": "companionship",
        "score": 0.4821615384615385,
        "from": "ol"
    },
    {
        "word": "laboratory animal",
        "from": "wiki",
        "score": 0.4806451612903225
    },
    {
        "word": "candy",
        "score": 0.4748115082279738,
        "from": "w2v"
    },
    {
        "word": "pigs",
        "score": 0.4747487884216848,
        "from": "w2v"
    },
    {
        "word": "animal cognition",
        "from": "wiki",
        "score": 0.47419354838709676
    },
    {
        "word": "treats",
        "score": 0.4696423922864059,
        "from": "w2v"
    },
    {
        "word": "mascot",
        "score": 0.4659615384615385,
        "from": "ol"
    },
    {
        "word": "chocolate",
        "from": "wiki",
        "score": 0.45806451612903226
    },
    {
        "word": "cloned",
        "score": 0.45529582102412963,
        "from": "w2v"
    },
    {
        "word": "household",
        "score": 0.4532076923076923,
        "from": "ol"
    },
    {
        "word": "droppings",
        "score": 0.4515574279894782,
        "from": "w2v"
    },
    {
        "word": "cows",
        "score": 0.4506879211561696,
        "from": "w2v"
    },
    {
        "word": "lagomorph",
        "from": "swiki",
        "score": 0.45000000000000007
    },
    {
        "word": "whale",
        "score": 0.4499369263811538,
        "from": "w2v"
    },
    {
        "word": "newborn",
        "score": 0.44825182886599324,
        "from": "w2v"
    },
    {
        "word": "stuffed",
        "score": 0.44746604179095206,
        "from": "w2v"
    },
    {
        "word": "civet",
        "score": 0.44703511267232793,
        "from": "w2v"
    },
    {
        "word": "puppies",
        "score": 0.446369443366655,
        "from": "w2v"
    },
    {
        "word": "feeding",
        "score": 0.44604503602609386,
        "from": "w2v"
    },
    {
        "word": "honey",
        "score": 0.4457153846153846,
        "from": "ol"
    },
    {
        "word": "dander",
        "score": 0.4432394849523127,
        "from": "w2v"
    },
    {
        "word": "pill",
        "score": 0.4431432279668564,
        "from": "w2v"
    },
    {
        "word": "bait",
        "score": 0.44255027207041164,
        "from": "w2v"
    },
    {
        "word": "goat",
        "score": 0.44153234744346037,
        "from": "w2v"
    },
    {
        "word": "mad",
        "score": 0.4410567254180814,
        "from": "w2v"
    },
    {
        "word": "poison",
        "score": 0.44033817557317867,
        "from": "w2v"
    },
    {
        "word": "panda",
        "score": 0.43950860385563345,
        "from": "w2v"
    },
    {
        "word": "shark",
        "score": 0.43815118933772296,
        "from": "w2v"
    },
    {
        "word": "kit",
        "score": 0.43798338471302317,
        "from": "w2v"
    },
    {
        "word": "bites",
        "score": 0.4363163094117515,
        "from": "w2v"
    },
    {
        "word": "boy",
        "score": 0.43556153846153844,
        "from": "ol"
    },
    {
        "word": "house rabbit",
        "from": "wiki",
        "score": 0.4354838709677418
    },
    {
        "word": "dear",
        "score": 0.4347076923076923,
        "from": "ol"
    },
    {
        "word": "infected",
        "score": 0.43437718455688223,
        "from": "w2v"
    },
    {
        "word": "packs",
        "score": 0.4337957499133985,
        "from": "w2v"
    },
    {
        "word": "sweetheart",
        "score": 0.4330769230769231,
        "from": "ol"
    },
    {
        "word": "small",
        "score": 0.43151538461538463,
        "from": "ol"
    },
    {
        "word": "bugs",
        "score": 0.4306848637898489,
        "from": "w2v"
    },
    {
        "word": "ornamental",
        "score": 0.4297846153846154,
        "from": "ol"
    },
    {
        "word": "pills",
        "score": 0.4295015872500004,
        "from": "w2v"
    },
    {
        "word": "octopus",
        "score": 0.42920397411438344,
        "from": "w2v"
    },
    {
        "word": "spoon",
        "score": 0.4286384615384615,
        "from": "ol"
    },
    {
        "word": "fake",
        "score": 0.4275803718236891,
        "from": "w2v"
    },
    {
        "word": "hat",
        "score": 0.4265538461538462,
        "from": "ol"
    },
    {
        "word": "silly",
        "score": 0.42654615384615385,
        "from": "ol"
    },
    {
        "word": "tame",
        "score": 0.4264769230769231,
        "from": "ol"
    },
    {
        "word": "bite",
        "score": 0.42641138694967956,
        "from": "w2v"
    },
    {
        "word": "habits",
        "score": 0.4259875333152603,
        "from": "w2v"
    },
    {
        "word": "begonia",
        "from": "wiki",
        "score": 0.42580645161290326
    },
    {
        "word": "little",
        "score": 0.42567692307692306,
        "from": "ol"
    },
    {
        "word": "fart",
        "score": 0.42553846153846153,
        "from": "ol"
    },
    {
        "word": "registry",
        "score": 0.42545374348357534,
        "from": "w2v"
    },
    {
        "word": "goldfish",
        "score": 0.4251882105561449,
        "from": "w2v"
    },
    {
        "word": "amphibian",
        "from": "swiki",
        "score": 0.425
    },
    {
        "word": "enchanting",
        "score": 0.42424615384615383,
        "from": "ol"
    },
    {
        "word": "cure",
        "score": 0.42410464594273917,
        "from": "w2v"
    },
    {
        "word": "pocket",
        "score": 0.42335384615384614,
        "from": "ol"
    },
    {
        "word": "chickens",
        "score": 0.42334547555873314,
        "from": "w2v"
    },
    {
        "word": "drink",
        "score": 0.4226180897555818,
        "from": "w2v"
    },
    {
        "word": "domestic pig",
        "from": "wiki",
        "score": 0.4225806451612904
    },
    {
        "word": "smoking",
        "score": 0.42245063779714914,
        "from": "w2v"
    },
    {
        "word": "clone",
        "score": 0.42222698738555675,
        "from": "w2v"
    },
    {
        "word": "popular",
        "score": 0.4221076923076923,
        "from": "ol"
    },
    {
        "word": "repellent",
        "score": 0.42157546211426505,
        "from": "w2v"
    },
    {
        "word": "poof",
        "score": 0.42035384615384613,
        "from": "ol"
    },
    {
        "word": "vendor",
        "score": 0.4195001982091679,
        "from": "w2v"
    },
    {
        "word": "dolphin",
        "score": 0.4193666255358125,
        "from": "w2v"
    },
    {
        "word": "like",
        "score": 0.41923444445263586,
        "from": "w2v"
    },
    {
        "word": "dumb",
        "score": 0.41896923076923076,
        "from": "ol"
    },
    {
        "word": "plaything",
        "score": 0.41891538461538463,
        "from": "ol"
    },
    {
        "word": "condoms",
        "score": 0.41867359683032007,
        "from": "w2v"
    },
    {
        "word": "stupid",
        "score": 0.41843846153846154,
        "from": "ol"
    },
    {
        "word": "diet",
        "score": 0.4178129639861245,
        "from": "w2v"
    },
    {
        "word": "fanciers",
        "score": 0.41734393264468195,
        "from": "w2v"
    },
    {
        "word": "eats",
        "score": 0.41658405445737046,
        "from": "w2v"
    },
    {
        "word": "products",
        "score": 0.4165839673225588,
        "from": "w2v"
    },
    {
        "word": "diaper",
        "score": 0.4163018743633654,
        "from": "w2v"
    },
    {
        "word": "beautiful",
        "score": 0.4156846153846154,
        "from": "ol"
    },
    {
        "word": "duck",
        "score": 0.4151231473314306,
        "from": "w2v"
    },
    {
        "word": "dairy",
        "score": 0.41497969098899457,
        "from": "w2v"
    },
    {
        "word": "prescription",
        "score": 0.41383139978355105,
        "from": "w2v"
    },
    {
        "word": "industrialisation",
        "from": "wiki",
        "score": 0.4129032258064516
    },
    {
        "word": "packages",
        "score": 0.4128263567594524,
        "from": "w2v"
    },
    {
        "word": "doll",
        "score": 0.4125574604685089,
        "from": "w2v"
    },
    {
        "word": "ate",
        "score": 0.41245811755092116,
        "from": "w2v"
    },
    {
        "word": "medicines",
        "score": 0.41241172956946764,
        "from": "w2v"
    },
    {
        "word": "cabbage",
        "score": 0.41234615384615386,
        "from": "ol"
    },
    {
        "word": "milk",
        "score": 0.4120946370883052,
        "from": "w2v"
    },
    {
        "word": "favoured",
        "score": 0.41195384615384617,
        "from": "ol"
    },
    {
        "word": "kits",
        "score": 0.4118946752796531,
        "from": "w2v"
    },
    {
        "word": "company",
        "score": 0.41134615384615386,
        "from": "ol"
    },
    {
        "word": "insect",
        "score": 0.4113388470195406,
        "from": "w2v"
    },
    {
        "word": "mosquito",
        "score": 0.41092193802625415,
        "from": "w2v"
    },
    {
        "word": "snack",
        "score": 0.4108878466320822,
        "from": "w2v"
    },
    {
        "word": "toothpaste",
        "score": 0.4107902006241874,
        "from": "w2v"
    },
    {
        "word": "pretty",
        "score": 0.4104076923076923,
        "from": "ol"
    },
    {
        "word": "cattle",
        "score": 0.41009715648747297,
        "from": "w2v"
    },
    {
        "word": "spectator",
        "score": 0.40996923076923075,
        "from": "ol"
    },
    {
        "word": "stroke",
        "score": 0.4064846153846154,
        "from": "ol"
    },
    {
        "word": "obesity",
        "from": "wiki",
        "score": 0.4064516129032258
    },
    {
        "word": "chip",
        "score": 0.4059615384615385,
        "from": "ol"
    },
    {
        "word": "spit",
        "score": 0.40573076923076923,
        "from": "ol"
    },
    {
        "word": "polyethylene",
        "score": 0.4028538461538462,
        "from": "ol"
    },
    {
        "word": "toe",
        "score": 0.4023076923076923,
        "from": "ol"
    },
    {
        "word": "rand",
        "from": "wiki",
        "score": 0.39999999999999997
    },
    {
        "word": "animate being",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "teacher's pet",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "make out",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "cer",
        "score": 0.3989,
        "from": "ol"
    },
    {
        "word": "tec",
        "score": 0.3941230769230769,
        "from": "ol"
    },
    {
        "word": "trp",
        "score": 0.3924384615384615,
        "from": "ol"
    },
    {
        "word": "puff",
        "score": 0.3918,
        "from": "ol"
    },
    {
        "word": "compagnie",
        "score": 0.39144615384615383,
        "from": "ol"
    },
    {
        "word": "bang",
        "score": 0.3914384615384615,
        "from": "ol"
    },
    {
        "word": "journeyman",
        "score": 0.3914384615384615,
        "from": "ol"
    },
    {
        "word": "positron",
        "score": 0.3914384615384615,
        "from": "ol"
    },
    {
        "word": "societal",
        "score": 0.3914384615384615,
        "from": "ol"
    },
    {
        "word": "beagle",
        "score": 0.39136923076923075,
        "from": "ol"
    },
    {
        "word": "chihuahua",
        "score": 0.3913615384615385,
        "from": "ol"
    },
    {
        "word": "dachshund",
        "score": 0.3913384615384615,
        "from": "ol"
    },
    {
        "word": "poodle",
        "score": 0.3912846153846154,
        "from": "ol"
    },
    {
        "word": "ethicist",
        "from": "wiki",
        "score": 0.39032258064516123
    },
    {
        "word": "animal welfare",
        "from": "wiki",
        "score": 0.38129032258064516
    },
    {
        "word": "non-human",
        "from": "wiki",
        "score": 0.3774193548387096
    },
    {
        "word": "lapdog",
        "score": 0.36693846153846155,
        "from": "ol"
    },
    {
        "word": "sematary",
        "score": 0.3544838533119957,
        "from": "w2v"
    },
    {
        "word": "houseplant",
        "from": "wiki",
        "score": 0.3516129032258064
    },
    {
        "word": "philodendron",
        "from": "wiki",
        "score": 0.3451612903225806
    },
    {
        "word": "cosset",
        "score": 0.3395846153846154,
        "from": "ol"
    },
    {
        "word": "poinsettias",
        "from": "wiki",
        "score": 0.33225806451612894
    },
    {
        "word": "cuddly",
        "score": 0.3201089824311074,
        "from": "w2v"
    },
    {
        "word": "animalistic",
        "score": 0.3189153846153846,
        "from": "ol"
    },
    {
        "word": "wildlife",
        "from": "wiki",
        "score": 0.3161290322580645
    },
    {
        "word": "tep",
        "score": 0.30526923076923074,
        "from": "ol"
    },
    {
        "word": "condominium",
        "from": "wiki",
        "score": 0.2967741935483871
    },
    {
        "word": "freshwater snail",
        "from": "wiki",
        "score": 0.29354838709677417
    },
    {
        "word": "fdg",
        "score": 0.2914461538461538,
        "from": "ol"
    },
    {
        "word": "schnauzer",
        "score": 0.2912769230769231,
        "from": "ol"
    },
    {
        "word": "lease",
        "from": "wiki",
        "score": 0.29032258064516125
    },
    {
        "word": "sea snail",
        "from": "wiki",
        "score": 0.28709677419354845
    },
    {
        "word": "property",
        "from": "wiki",
        "score": 0.27741935483870966
    },
    {
        "word": "ownership",
        "from": "wiki",
        "score": 0.27096774193548384
    },
    {
        "word": "horse",
        "from": "swiki",
        "score": 0.26875
    },
    {
        "word": "personhood",
        "from": "wiki",
        "score": 0.2645161290322581
    },
    {
        "word": "pocket pet",
        "from": "wiki",
        "score": 0.2419354838709678
    },
    {
        "word": "rottweiler",
        "from": "wiki",
        "score": 0.23548387096774195
    },
    {
        "word": "social interaction",
        "from": "wiki",
        "score": 0.22258064516129022
    },
    {
        "word": "therapy animals",
        "from": "wiki",
        "score": 0.2161290322580645
    },
    {
        "word": "divorce",
        "from": "wiki",
        "score": 0.2129032258064516
    },
    {
        "word": "children's hospital",
        "from": "wiki",
        "score": 0.2096774193548388
    },
    {
        "word": "estate",
        "from": "wiki",
        "score": 0.20645161290322578
    },
    {
        "word": "ox",
        "from": "swiki",
        "score": 0.20625
    },
    {
        "word": "nursing homes",
        "from": "wiki",
        "score": 0.20322580645161287
    },
    {
        "word": "inheritance",
        "from": "wiki",
        "score": 0.2
    },
    {
        "word": "animal rights organizations",
        "from": "wiki",
        "score": 0.18387096774193545
    },
    {
        "word": "belgium",
        "from": "wiki",
        "score": 0.18064516129032254
    },
    {
        "word": "donkey",
        "from": "swiki",
        "score": 0.175
    },
    {
        "word": "netherlands",
        "from": "wiki",
        "score": 0.17419354838709677
    },
    {
        "word": "university of bristol",
        "from": "wiki",
        "score": 0.17096774193548392
    },
    {
        "word": "blacklisting",
        "from": "wiki",
        "score": 0.16129032258064513
    },
    {
        "word": "falcon",
        "from": "swiki",
        "score": 0.14375
    },
    {
        "word": "domesticated",
        "from": "wiki",
        "score": 0.13935483870967738
    },
    {
        "word": "lilium longiflorum",
        "from": "wiki",
        "score": 0.1387096774193548
    },
    {
        "word": "kangaroo",
        "from": "wiki",
        "score": 0.12903225806451613
    },
    {
        "word": "armadillo",
        "from": "wiki",
        "score": 0.1225806451612903
    },
    {
        "word": "aloe vera",
        "from": "wiki",
        "score": 0.11935483870967745
    },
    {
        "word": "sloth",
        "from": "wiki",
        "score": 0.11612903225806448
    },
    {
        "word": "pigeon",
        "from": "swiki",
        "score": 0.11249999999999999
    },
    {
        "word": "guide dog",
        "from": "wiki",
        "score": 0.09354838709677415
    },
    {
        "word": "golden retriever",
        "score": 0.09135384615384617,
        "from": "ol"
    },
    {
        "word": "basset hound",
        "score": 0.09133076923076922,
        "from": "ol"
    },
    {
        "word": "shetland sheepdog",
        "score": 0.09132307692307695,
        "from": "ol"
    },
    {
        "word": "french bulldog",
        "score": 0.09129999999999999,
        "from": "ol"
    },
    {
        "word": "great dane",
        "score": 0.09129230769230773,
        "from": "ol"
    },
    {
        "word": "lhasa apso",
        "score": 0.09126923076923077,
        "from": "ol"
    },
    {
        "word": "animal-assisted therapy",
        "from": "wiki",
        "score": 0.08709677419354833
    },
    {
        "word": "therapy dog",
        "from": "wiki",
        "score": 0.08064516129032262
    },
    {
        "word": "pet ownership among the homeless",
        "from": "wiki",
        "score": 0.0741935483870968
    },
    {
        "word": "european convention for the protection of pet animals",
        "from": "wiki",
        "score": 0.06774193548387097
    },
    {
        "word": "whitelisting",
        "from": "wiki",
        "score": 0.06774193548387095
    },
    {
        "word": "council of europe",
        "from": "wiki",
        "score": 0.06129032258064515
    },
    {
        "word": "western world",
        "from": "wiki",
        "score": 0.05483870967741933
    },
    {
        "word": "rodents",
        "from": "swiki",
        "score": 0.04999999999999999
    },
    {
        "word": "breed-specific legislation",
        "from": "wiki",
        "score": 0.048387096774193505
    },
    {
        "word": "house",
        "score": 0.042,
        "from": "reddit-slashes"
    },
    {
        "word": "pit bull",
        "from": "wiki",
        "score": 0.041935483870967794
    },
    {
        "word": "exotic pet",
        "from": "wiki",
        "score": 0.022580645161290325
    },
    {
        "word": "owner",
        "score": 0.02,
        "from": "reddit-slashes"
    },
    {
        "word": "master",
        "score": 0.018,
        "from": "reddit-slashes"
    },
    {
        "word": "mount",
        "score": 0.016,
        "from": "reddit-slashes"
    },
    {
        "word": "play",
        "score": 0.014,
        "from": "reddit-slashes"
    },
    {
        "word": "person",
        "score": 0.012,
        "from": "reddit-slashes"
    },
    {
        "word": "kid",
        "score": 0.01,
        "from": "reddit-slashes"
    },
    {
        "word": "slave",
        "score": 0.01,
        "from": "reddit-slashes"
    },
    {
        "word": "child",
        "score": 0.01,
        "from": "reddit-slashes"
    },
    {
        "word": "egg",
        "score": 0.01,
        "from": "reddit-slashes"
    },
    {
        "word": "canid hybrid",
        "from": "wiki",
        "score": 0.009677419354838679
    },
    {
        "word": "lint",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "walking",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "minion",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "massage",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "color",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "home",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "vet",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "photograph",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "hold",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "family",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "him",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "titles",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "adoption",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "name",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "nickname",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "show",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "sit",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "interact",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "guest",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "partner",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "apprentice",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "service",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "sub",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "picked",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "mri",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "deposit",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "hug",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "store",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "feeder",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "scratch",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "cuddle",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "felid hybrid",
        "from": "wiki",
        "score": 0.003225806451612856
    },
    {
        "word": "seasonal",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "someone",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "vitality",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "warlock",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "deposits",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "persons",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "bowl",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "member",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "profit",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "friendly",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "poultry",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "enhancement",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "need",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "security",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "gardening",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "order",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "blade",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "squeeze",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "long",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "effect",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "litter",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "attention",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "utilities",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "skilling",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "new",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "vehicle",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "touch",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "talk",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tss",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "snuggle",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "immunity",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "touched",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "call",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "free",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fund",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "captive",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "people",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "chores",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "groceries",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hotels",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "comics",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "guardian",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "purple",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "predatory",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "med",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tummy",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "acid",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "trailed",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "smoke",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "attack",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "shelter",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "preferences",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "target",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "whatever",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "side",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "distract",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "girly",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "landlord",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "auto",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "street",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "living",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "section",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "object",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tome",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "taste",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "produce",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "log",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "status",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "token",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "bow",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "scenery",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "salon",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "monster",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "performance",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fun",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "orphan",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "with",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "entertainment",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "clothes",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "lab",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "naturalist",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cigarette",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "stroller",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "expenses",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "idiot",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "son",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "boarding",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "parent",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hobby",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hunter",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "barn",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "guests",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mend",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "rare",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "aquatic",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "amulet",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "plant",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tenants",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "approach",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "brush",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "meet",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "control",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "kiss",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "boarded",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "held",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "companions",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "pony",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "trinket",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hasta",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "found",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hardware",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hair",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "dust",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "other",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "castle",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "performing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "items",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "scratched",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "rub",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "spect",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "district",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "walker",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "reassure",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "physical",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "zoo",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "achievements",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cuddled",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "follower",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "health",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "costume",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "bourgeoisie",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "pedigree",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "marmoset",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "chimpanzees",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "anthropomorphism",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "adaptation",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "captivity",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "north america",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "hamsters",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "animal protectionism",
        "from": "wiki",
        "score": -0.04193548387096774
    },
    {
        "word": "political correctness",
        "from": "wiki",
        "score": -0.04838709677419356
    },
    {
        "word": "non-human animals",
        "from": "wiki",
        "score": -0.05483870967741933
    },
    {
        "word": "pet adoption",
        "from": "wiki",
        "score": -0.0741935483870968
    },
    {
        "word": "legal custody",
        "from": "wiki",
        "score": -0.08064516129032256
    },
    {
        "word": "petco",
        "score": -0.092,
        "from": "reddit-slashes"
    },
    {
        "word": "petpet",
        "score": -0.094,
        "from": "reddit-slashes"
    },
    {
        "word": "petcos",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "tuzzy",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "petg",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "aww",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "geeky",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "housesit",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "plushie",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "cutesy",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "gitm",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "kedvenc",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "hyraxes",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "maladaptive",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "tonda",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "personal injury",
        "from": "wiki",
        "score": -0.1064516129032258
    },
    {
        "word": "property damage",
        "from": "wiki",
        "score": -0.11290322580645162
    },
    {
        "word": "ministry of economic affairs and climate policy",
        "from": "wiki",
        "score": -0.14516129032258063
    },
    {
        "word": "animal husbandry",
        "from": "wiki",
        "score": -0.15161290322580645
    },
    {
        "word": "wageningen university",
        "from": "wiki",
        "score": -0.15806451612903227
    },
    {
        "word": "brown bear",
        "from": "wiki",
        "score": -0.16451612903225804
    },
    {
        "word": "european hare",
        "from": "wiki",
        "score": -0.19032258064516128
    },
    {
        "word": "wild boar",
        "from": "wiki",
        "score": -0.1967741935483871
    },
    {
        "word": "environmental impact of meat production",
        "from": "wiki",
        "score": -0.20322580645161292
    },
    {
        "word": "greenhouse gas",
        "from": "wiki",
        "score": -0.2096774193548387
    },
    {
        "word": "pet rock",
        "from": "wiki",
        "score": -0.2290322580645161
    },
    {
        "word": "chia pet",
        "from": "wiki",
        "score": -0.23548387096774193
    },
    {
        "word": "selective breeding",
        "from": "wiki",
        "score": -0.24838709677419357
    },
    {
        "word": "tame animal",
        "from": "wiki",
        "score": -0.2548387096774194
    },
    {
        "word": "animal cruelty",
        "from": "wiki",
        "score": -0.26774193548387093
    },
    {
        "word": "ancient greeks",
        "from": "wiki",
        "score": -0.27419354838709675
    },
    {
        "word": "ancient rome",
        "from": "wiki",
        "score": -0.2806451612903226
    },
    {
        "word": "ancient egypt",
        "from": "wiki",
        "score": -0.2870967741935484
    },
    {
        "word": "kingdom of great britain",
        "from": "wiki",
        "score": -0.2935483870967742
    },
    {
        "word": "victorian era",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "animal fancy",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "conformation show",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "kennel club",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "stud book",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "capuchin monkeys",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "new world monkey",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "years before present",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "directional selection",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "biological pest control",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "theory of mind",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "koko the gorilla",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "jean-honoré fragonard",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "édouard manet",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "sir henry raeburn",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "james tissot",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "william f. cody",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "syrian hamster",
        "from": "swiki",
        "score": -0.3
    },
    {
        "word": "dwarf hamster",
        "from": "swiki",
        "score": -0.3
    }
]
const sportsWords = [
    {
        "word": "racing",
        "score": 19.66404296877454,
        "from": "ol,w2v,wiki,swiki,wn,reddit-slashes"
    },
    {
        "word": "competition",
        "score": 13.86042895044941,
        "from": "w2v,wiki,swiki,reddit-slashes"
    },
    {
        "word": "athletics",
        "score": 13.774887275968789,
        "from": "ol,w2v,wiki,wn"
    },
    {
        "word": "spectator sport",
        "score": 11.37890769230769,
        "from": "ol,wiki,wn"
    },
    {
        "word": "game",
        "score": 8.128060200668896,
        "from": "ol,wiki,swiki,reddit-slashes"
    },
    {
        "word": "gymnastics",
        "score": 8.08030304773985,
        "from": "ol,w2v,wiki,wn"
    },
    {
        "word": "basketball",
        "score": 6.923185617599258,
        "from": "ol,w2v,swiki,reddit-slashes"
    },
    {
        "word": "team",
        "score": 6.91899115266114,
        "from": "w2v,wiki,swiki,reddit-slashes"
    },
    {
        "word": "sportsman",
        "score": 6.036268752858079,
        "from": "ol,w2v,wn"
    },
    {
        "word": "cycling",
        "score": 5.532263906680807,
        "from": "w2v,wiki,wn"
    },
    {
        "word": "fun",
        "score": 5.1342,
        "from": "ol,wn,reddit-slashes"
    },
    {
        "word": "skating",
        "score": 4.948079321953215,
        "from": "ol,w2v,wn"
    },
    {
        "word": "tennis",
        "score": 4.286410403703442,
        "from": "ol,w2v,wiki"
    },
    {
        "word": "soccer",
        "score": 3.820232356686682,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "leisure",
        "score": 3.817747826086957,
        "from": "ol,wiki,reddit-slashes"
    },
    {
        "word": "football",
        "score": 3.6659150618137986,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "athletic",
        "score": 3.4838849259728217,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "games",
        "score": 3.3345487772920324,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "baseball",
        "score": 3.092509971598632,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "sportswoman",
        "score": 3.088123076923077,
        "from": "ol,wn"
    },
    {
        "word": "position",
        "from": "swiki,wn,reddit-slashes",
        "score": 3.023076923076923
    },
    {
        "word": "play",
        "score": 3.002076923076923,
        "from": "ol,wn"
    },
    {
        "word": "disport",
        "score": 2.9659384615384616,
        "from": "ol,wn"
    },
    {
        "word": "lark",
        "score": 2.9628,
        "from": "ol,wn"
    },
    {
        "word": "boast",
        "score": 2.9414153846153845,
        "from": "ol,wn"
    },
    {
        "word": "mutation",
        "score": 2.932892307692308,
        "from": "ol,wn"
    },
    {
        "word": "frolic",
        "score": 2.928876923076923,
        "from": "ol,wn"
    },
    {
        "word": "skylark",
        "score": 2.9267538461538463,
        "from": "ol,wn"
    },
    {
        "word": "romp",
        "score": 2.9216307692307693,
        "from": "ol,wn"
    },
    {
        "word": "gambol",
        "score": 2.9204923076923075,
        "from": "ol,wn"
    },
    {
        "word": "mutant",
        "score": 2.9170615384615384,
        "from": "ol,wn"
    },
    {
        "word": "feature",
        "score": 2.9100153846153844,
        "from": "ol,wn"
    },
    {
        "word": "association football",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "rugby union",
        "from": "wiki",
        "score": 2.9
    },
    {
        "word": "frisk",
        "score": 2.8893692307692307,
        "from": "ol,wn"
    },
    {
        "word": "cavort",
        "score": 2.835353846153846,
        "from": "ol,wn"
    },
    {
        "word": "rollick",
        "score": 2.833707692307692,
        "from": "ol,wn"
    },
    {
        "word": "offside",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "call",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "referee",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "kill",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "spar",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "run",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "downfield",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "lark about",
        "score": 2.5893846153846156,
        "from": "ol,wn"
    },
    {
        "word": "run around",
        "score": 2.5893846153846156,
        "from": "ol,wn"
    },
    {
        "word": "olympic games",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "council of europe",
        "from": "wiki",
        "score": 2.5
    },
    {
        "word": "champion",
        "score": 2.4515819397993313,
        "from": "ol,wiki"
    },
    {
        "word": "skiing",
        "score": 2.37185554998345,
        "from": "w2v,wn"
    },
    {
        "word": "riding",
        "score": 2.351812887652766,
        "from": "w2v,wn"
    },
    {
        "word": "ski",
        "score": 2.3053698883837743,
        "from": "w2v,wn"
    },
    {
        "word": "rowing",
        "score": 2.2587633341708857,
        "from": "w2v,wn"
    },
    {
        "word": "netball",
        "score": 2.231892307692308,
        "from": "ol,swiki"
    },
    {
        "word": "diversion",
        "score": 2.212076923076923,
        "from": "ol,wn"
    },
    {
        "word": "coach",
        "from": "swiki,wn",
        "score": 2.0769230769230766
    },
    {
        "word": "athlete",
        "score": 2.039883246786517,
        "from": "ol,w2v"
    },
    {
        "word": "hockey",
        "score": 1.9981457952652413,
        "from": "ol,w2v"
    },
    {
        "word": "athletes",
        "score": 1.9885977975177391,
        "from": "ol,w2v"
    },
    {
        "word": "entertainment",
        "from": "wiki,reddit-slashes",
        "score": 1.9673913043478262
    },
    {
        "word": "olympic",
        "score": 1.939573693883594,
        "from": "ol,w2v"
    },
    {
        "word": "coaches",
        "score": 1.9391153252921645,
        "from": "ol,w2v"
    },
    {
        "word": "polo",
        "score": 1.8865742797549678,
        "from": "w2v,wiki"
    },
    {
        "word": "outdoor sport",
        "score": 1.885723076923077,
        "from": "ol,wn"
    },
    {
        "word": "team sport",
        "score": 1.8857076923076923,
        "from": "ol,wn"
    },
    {
        "word": "professional football",
        "score": 1.8856923076923076,
        "from": "ol,wn"
    },
    {
        "word": "business",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "job",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "lead",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "playing",
        "score": 1.7915199727048803,
        "from": "ol,w2v"
    },
    {
        "word": "golf",
        "score": 1.7542244358761092,
        "from": "ol,w2v"
    },
    {
        "word": "television",
        "from": "wiki,swiki",
        "score": 1.7356521739130435
    },
    {
        "word": "rugby",
        "score": 1.6992189719680186,
        "from": "ol,w2v"
    },
    {
        "word": "chess",
        "from": "wiki",
        "score": 1.685217391304348
    },
    {
        "word": "running",
        "from": "wiki,reddit-slashes",
        "score": 1.652173913043478
    },
    {
        "word": "go",
        "from": "wiki",
        "score": 1.6330434782608694
    },
    {
        "word": "sportsperson",
        "score": 1.6166923076923077,
        "from": "ol,swiki"
    },
    {
        "word": "sports",
        "score": 1.5904779633387145,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "sportaccord",
        "from": "wiki",
        "score": 1.5591304347826085
    },
    {
        "word": "competitive",
        "score": 1.4245513688727423,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "club",
        "score": 1.4088320478718397,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "race",
        "score": 1.355458088907628,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "gym",
        "score": 1.3428923076923076,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "youth",
        "score": 1.3253189110192989,
        "from": "w2v,wiki"
    },
    {
        "word": "challenge",
        "score": 1.3157805854193902,
        "from": "w2v,wiki"
    },
    {
        "word": "teams",
        "score": 1.3144260799405227,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "track",
        "score": 1.3131197336641542,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "super",
        "score": 1.2982337419415457,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "pleasure",
        "score": 1.2936307692307691,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "class",
        "score": 1.2845521212323363,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "event",
        "score": 1.280215940243529,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "exercise",
        "score": 1.2682153846153845,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "venue",
        "score": 1.264870709701093,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "activity",
        "score": 1.2596769230769231,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "standards",
        "score": 1.2588381911703308,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "fitness",
        "score": 1.2529436153997078,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "son",
        "score": 1.2360923076923078,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "variation",
        "score": 0.88,
        "from": "wn"
    },
    {
        "word": "summercater",
        "score": 0.78,
        "from": "wn"
    },
    {
        "word": "tournament",
        "from": "wiki",
        "score": 0.7619565217391304
    },
    {
        "word": "playoffs",
        "from": "wiki",
        "score": 0.7402173913043477
    },
    {
        "word": "athleticism",
        "from": "wiki",
        "score": 0.7347826086956522
    },
    {
        "word": "dexterity",
        "from": "wiki",
        "score": 0.7293478260869566
    },
    {
        "word": "sumo",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "line",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "occupation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wipeout",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "flip",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "pass",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "toss",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "recreation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "aquatics",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "row",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "archery",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "sledding",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "equitation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "shot",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "stroke",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "foul",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "possession",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "judo",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "save",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "tuck",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "english",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "side",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "series",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "trial",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "defence",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "defense",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "handler",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "manager",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ironman",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ref",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "scout",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "shooter",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "timekeeper",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "timer",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "deficit",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "average",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bout",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "round",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "turn",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "surge",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "seed",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "curl",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "start",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "field",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "shoot",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "umpire",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "drop",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "down",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bandy",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "submarine",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "kick",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "punt",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "drive",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "racket",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "carry",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "dribble",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "cut",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "box",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "hike",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "mountaineer",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "rappel",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "backpack",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "pack",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "jog",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "skate",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "skateboard",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "sled",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "sleigh",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bob",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bobsled",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "luge",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "toboggan",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "scull",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "canoe",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "kayak",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "paddle",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "surf",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "surfboard",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "jackknife",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "snorkel",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "hurdle",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "loose",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "legal",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "disqualified",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "home",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "away",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ineligible",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "defending",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "onside",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "underarm",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "underhand",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "underhanded",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "overhand",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "upfield",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "humor",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "humour",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wit",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "witticism",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "jocularity",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "clowning",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "comedy",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "draughts",
        "from": "wiki",
        "score": 0.6858695652173914
    },
    {
        "word": "tradition",
        "from": "wiki",
        "score": 0.6641304347826087
    },
    {
        "word": "goal",
        "from": "wiki",
        "score": 0.6586956521739131
    },
    {
        "word": "funambulism",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "birling",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "logrolling",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "outclass",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "double-team",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "prizefight",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "shadowbox",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "abseil",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "spread-eagle",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "rollerblade",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "schuss",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "windsurf",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "skin-dive",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "man-to-man",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "one-on-one",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "most-valuable",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "offsides",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "overarm",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "overhanded",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "wittiness",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "jocosity",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "waggery",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "waggishness",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "xiangqi",
        "from": "wiki",
        "score": 0.5750000000000001
    },
    {
        "word": "physical fitness",
        "from": "wiki",
        "score": 0.537391304347826
    },
    {
        "word": "sporting",
        "score": 0.5328979914924518,
        "from": "w2v"
    },
    {
        "word": "professional",
        "score": 0.5232640172517986,
        "from": "w2v"
    },
    {
        "word": "sportsmen",
        "score": 0.5150230769230769,
        "from": "ol"
    },
    {
        "word": "sportsmanship",
        "score": 0.5091230769230769,
        "from": "ol"
    },
    {
        "word": "badminton",
        "score": 0.5034307692307692,
        "from": "ol"
    },
    {
        "word": "competing",
        "score": 0.5018006993950097,
        "from": "w2v"
    },
    {
        "word": "olympics",
        "score": 0.500941651421435,
        "from": "w2v"
    },
    {
        "word": "world",
        "score": 0.5004446503757282,
        "from": "w2v"
    },
    {
        "word": "recreational",
        "score": 0.4965769230769231,
        "from": "ol"
    },
    {
        "word": "volleyball",
        "score": 0.49637119926523104,
        "from": "w2v"
    },
    {
        "word": "physical activity",
        "from": "wiki",
        "score": 0.49456521739130427
    },
    {
        "word": "compete",
        "score": 0.49254229286020074,
        "from": "w2v"
    },
    {
        "word": "competes",
        "score": 0.4907353340830495,
        "from": "w2v"
    },
    {
        "word": "competitions",
        "score": 0.4903444018031923,
        "from": "w2v"
    },
    {
        "word": "nonresident",
        "score": 0.4883153846153846,
        "from": "ol"
    },
    {
        "word": "taekwondo",
        "score": 0.4881615384615385,
        "from": "ol"
    },
    {
        "word": "doping",
        "score": 0.48746923076923077,
        "from": "ol"
    },
    {
        "word": "clubs",
        "score": 0.4850664690383161,
        "from": "w2v"
    },
    {
        "word": "bobsleigh",
        "score": 0.48478461538461537,
        "from": "ol"
    },
    {
        "word": "diving",
        "from": "wiki",
        "score": 0.4847826086956522
    },
    {
        "word": "formula",
        "score": 0.48434399118607047,
        "from": "w2v"
    },
    {
        "word": "racer",
        "score": 0.4820909831598544,
        "from": "w2v"
    },
    {
        "word": "player",
        "score": 0.47781538461538464,
        "from": "ol"
    },
    {
        "word": "sportive",
        "score": 0.47736153846153845,
        "from": "ol"
    },
    {
        "word": "equestrianism",
        "from": "wiki",
        "score": 0.47717391304347834
    },
    {
        "word": "curling",
        "score": 0.4747153846153846,
        "from": "ol"
    },
    {
        "word": "pharaoh",
        "from": "wiki",
        "score": 0.47391304347826085
    },
    {
        "word": "bike",
        "score": 0.47241285132980576,
        "from": "w2v"
    },
    {
        "word": "discipline",
        "score": 0.4724,
        "from": "ol"
    },
    {
        "word": "sportswear",
        "score": 0.47205384615384616,
        "from": "ol"
    },
    {
        "word": "sporty",
        "score": 0.4719615384615385,
        "from": "ol"
    },
    {
        "word": "swimming",
        "score": 0.47121773413176293,
        "from": "w2v"
    },
    {
        "word": "jock",
        "score": 0.46815384615384614,
        "from": "ol"
    },
    {
        "word": "tie-breaking methods",
        "from": "wiki",
        "score": 0.467391304347826
    },
    {
        "word": "bicycle",
        "score": 0.4662019808578751,
        "from": "w2v"
    },
    {
        "word": "championship",
        "score": 0.46608839578415245,
        "from": "w2v"
    },
    {
        "word": "enthusiast",
        "score": 0.4660153846153846,
        "from": "ol"
    },
    {
        "word": "motorcycle",
        "score": 0.46530310778885825,
        "from": "w2v"
    },
    {
        "word": "brand",
        "score": 0.46429912394040407,
        "from": "w2v"
    },
    {
        "word": "adventure",
        "score": 0.4634153846153846,
        "from": "ol"
    },
    {
        "word": "nascar",
        "score": 0.4611746829840255,
        "from": "w2v"
    },
    {
        "word": "federation",
        "score": 0.46086498207215665,
        "from": "w2v"
    },
    {
        "word": "model",
        "score": 0.4597766518692922,
        "from": "w2v"
    },
    {
        "word": "champ",
        "score": 0.45926923076923076,
        "from": "ol"
    },
    {
        "word": "ever",
        "score": 0.4587031356724077,
        "from": "w2v"
    },
    {
        "word": "f1",
        "score": 0.4578368068216135,
        "from": "w2v"
    },
    {
        "word": "uci",
        "score": 0.45773327712543654,
        "from": "w2v"
    },
    {
        "word": "wrestling",
        "score": 0.45501758413125115,
        "from": "w2v"
    },
    {
        "word": "competitor",
        "score": 0.4524860097979197,
        "from": "w2v"
    },
    {
        "word": "riders",
        "score": 0.45238888394728294,
        "from": "w2v"
    },
    {
        "word": "sports league",
        "from": "wiki",
        "score": 0.4510869565217391
    },
    {
        "word": "enthusiasts",
        "score": 0.45046998683210276,
        "from": "w2v"
    },
    {
        "word": "popular",
        "score": 0.44917175238479656,
        "from": "w2v"
    },
    {
        "word": "championships",
        "score": 0.44772124523990053,
        "from": "w2v"
    },
    {
        "word": "jousting",
        "from": "wiki",
        "score": 0.4467391304347826
    },
    {
        "word": "sports season",
        "from": "wiki",
        "score": 0.4456521739130435
    },
    {
        "word": "gambler",
        "score": 0.44545384615384614,
        "from": "ol"
    },
    {
        "word": "physical",
        "score": 0.4451769230769231,
        "from": "ol"
    },
    {
        "word": "powerboating",
        "from": "wiki",
        "score": 0.4445652173913043
    },
    {
        "word": "racers",
        "score": 0.44267484667023765,
        "from": "w2v"
    },
    {
        "word": "wear",
        "score": 0.4412153846153846,
        "from": "ol"
    },
    {
        "word": "sponsorship",
        "score": 0.4408803586297479,
        "from": "w2v"
    },
    {
        "word": "ballgame",
        "score": 0.43984615384615383,
        "from": "ol"
    },
    {
        "word": "friendly",
        "score": 0.43950896915744386,
        "from": "w2v"
    },
    {
        "word": "softball",
        "score": 0.4393288305212636,
        "from": "w2v"
    },
    {
        "word": "models",
        "score": 0.4384142868410295,
        "from": "w2v"
    },
    {
        "word": "driving",
        "score": 0.4365516570251411,
        "from": "w2v"
    },
    {
        "word": "best",
        "score": 0.436214044891015,
        "from": "w2v"
    },
    {
        "word": "movement",
        "score": 0.4360538461538462,
        "from": "ol"
    },
    {
        "word": "treadmill",
        "score": 0.43583076923076924,
        "from": "ol"
    },
    {
        "word": "women",
        "score": 0.4343001764180498,
        "from": "w2v"
    },
    {
        "word": "amateur",
        "score": 0.43422374725920126,
        "from": "w2v"
    },
    {
        "word": "good",
        "score": 0.43332172139100283,
        "from": "w2v"
    },
    {
        "word": "association",
        "score": 0.43329869940434484,
        "from": "w2v"
    },
    {
        "word": "experience",
        "score": 0.4328174875217168,
        "from": "w2v"
    },
    {
        "word": "car",
        "score": 0.4325472770884039,
        "from": "w2v"
    },
    {
        "word": "players",
        "score": 0.43177588524719435,
        "from": "w2v"
    },
    {
        "word": "well",
        "score": 0.4316525801478206,
        "from": "w2v"
    },
    {
        "word": "roller",
        "score": 0.43133770996744364,
        "from": "w2v"
    },
    {
        "word": "for",
        "score": 0.4307260722698338,
        "from": "w2v"
    },
    {
        "word": "fia",
        "score": 0.4305798851203123,
        "from": "w2v"
    },
    {
        "word": "peloponnese",
        "from": "wiki",
        "score": 0.43043478260869567
    },
    {
        "word": "mockery",
        "score": 0.4302615384615385,
        "from": "ol"
    },
    {
        "word": "motocross",
        "score": 0.43021785667019613,
        "from": "w2v"
    },
    {
        "word": "competed",
        "score": 0.42991728486785474,
        "from": "w2v"
    },
    {
        "word": "fit",
        "score": 0.42983378472504,
        "from": "w2v"
    },
    {
        "word": "leagues",
        "score": 0.4288159262011839,
        "from": "w2v"
    },
    {
        "word": "drivers",
        "score": 0.42790398867772356,
        "from": "w2v"
    },
    {
        "word": "european",
        "score": 0.4275871077079694,
        "from": "w2v"
    },
    {
        "word": "national",
        "score": 0.4271785347019175,
        "from": "w2v"
    },
    {
        "word": "tour",
        "score": 0.42663567991260426,
        "from": "w2v"
    },
    {
        "word": "cars",
        "score": 0.42644972894237115,
        "from": "w2v"
    },
    {
        "word": "mate",
        "score": 0.4259846153846154,
        "from": "ol"
    },
    {
        "word": "boy",
        "score": 0.42417692307692306,
        "from": "ol"
    },
    {
        "word": "esports",
        "from": "wiki",
        "score": 0.4228260869565218
    },
    {
        "word": "campaign",
        "score": 0.4222692307692308,
        "from": "ol"
    },
    {
        "word": "buddy",
        "score": 0.42093846153846154,
        "from": "ol"
    },
    {
        "word": "movements",
        "score": 0.41825384615384614,
        "from": "ol"
    },
    {
        "word": "jeux",
        "score": 0.4144076923076923,
        "from": "ol"
    },
    {
        "word": "multisport",
        "score": 0.41365384615384615,
        "from": "ol"
    },
    {
        "word": "mind sport",
        "from": "wiki",
        "score": 0.41304347826086946
    },
    {
        "word": "suv",
        "score": 0.4119923076923077,
        "from": "ol"
    },
    {
        "word": "yuk",
        "score": 0.4089153846153846,
        "from": "ol"
    },
    {
        "word": "transgender",
        "from": "wiki",
        "score": 0.40869565217391307
    },
    {
        "word": "association of ioc recognised international sports federations",
        "from": "wiki",
        "score": 0.4076086956521739
    },
    {
        "word": "hong",
        "score": 0.4054076923076923,
        "from": "ol"
    },
    {
        "word": "professional boxing",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "professional wrestling",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "professional golf",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "professional baseball",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "professional basketball",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "professional tennis",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "line of work",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "daisy cutter",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "tightrope walking",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "rock climbing",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "contact sport",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "field sport",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "gymnastic exercise",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "track and field",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "water sport",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "horseback riding",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "blood sport",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "athletic game",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "personal foul",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "press box",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "game plan",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "won-lost record",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "defending team",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "bench warmer",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "free agent",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "iron man",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "talent scout",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "free agency",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "regulation time",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "sudden death",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "follow through",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "rope down",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "ice skate",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "figure skate",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "roller skate",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "speed skate",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "water ski",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "ski jump",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "ride the bench",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "warm the bench",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "sit out",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "out of play",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "at home",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "pal",
        "score": 0.3999076923076923,
        "from": "ol"
    },
    {
        "word": "contract bridge",
        "from": "wiki",
        "score": 0.39673913043478254
    },
    {
        "word": "willy",
        "score": 0.3963615384615385,
        "from": "ol"
    },
    {
        "word": "kang",
        "score": 0.39303076923076924,
        "from": "ol"
    },
    {
        "word": "sportif",
        "score": 0.39303076923076924,
        "from": "ol"
    },
    {
        "word": "suvs",
        "score": 0.39303076923076924,
        "from": "ol"
    },
    {
        "word": "triathlon",
        "score": 0.3929076923076923,
        "from": "ol"
    },
    {
        "word": "korfball",
        "score": 0.3929,
        "from": "ol"
    },
    {
        "word": "lacrosse",
        "score": 0.39287692307692307,
        "from": "ol"
    },
    {
        "word": "sportswomen",
        "score": 0.39228461538461534,
        "from": "ol"
    },
    {
        "word": "gambling",
        "from": "wiki",
        "score": 0.3869565217391305
    },
    {
        "word": "sportfishing",
        "score": 0.376676923076923,
        "from": "ol"
    },
    {
        "word": "regulation of sport",
        "from": "wiki",
        "score": 0.36956521739130427
    },
    {
        "word": "rioting",
        "from": "wiki",
        "score": 0.36521739130434777
    },
    {
        "word": "hooliganism",
        "from": "wiki",
        "score": 0.3597826086956522
    },
    {
        "word": "zourkhaneh",
        "from": "wiki",
        "score": 0.3576086956521739
    },
    {
        "word": "sports journalism",
        "from": "wiki",
        "score": 0.35326086956521735
    },
    {
        "word": "sport venue",
        "from": "wiki",
        "score": 0.342391304347826
    },
    {
        "word": "broadcasting of sports events",
        "from": "wiki",
        "score": 0.33695652173913043
    },
    {
        "word": "cross-country",
        "score": 0.33363171990006624,
        "from": "w2v"
    },
    {
        "word": "education",
        "from": "wiki",
        "score": 0.33260869565217394
    },
    {
        "word": "sport betting",
        "from": "wiki",
        "score": 0.33152173913043487
    },
    {
        "word": "old french",
        "from": "wiki",
        "score": 0.3152173913043477
    },
    {
        "word": "concussion",
        "from": "wiki",
        "score": 0.31086956521739134
    },
    {
        "word": "disability",
        "from": "wiki",
        "score": 0.30543478260869567
    },
    {
        "word": "sportspeople",
        "score": 0.2930307692307692,
        "from": "ol"
    },
    {
        "word": "sportling",
        "score": 0.2928384615384615,
        "from": "ol"
    },
    {
        "word": "internet",
        "from": "wiki",
        "score": 0.2728260869565217
    },
    {
        "word": "formula 1",
        "from": "wiki",
        "score": 0.25000000000000006
    },
    {
        "word": "cue sports",
        "from": "wiki",
        "score": 0.2391304347826087
    },
    {
        "word": "equestrian sport",
        "from": "wiki",
        "score": 0.23369565217391314
    },
    {
        "word": "video game",
        "from": "wiki",
        "score": 0.22826086956521735
    },
    {
        "word": "wage",
        "from": "wiki",
        "score": 0.21847826086956523
    },
    {
        "word": "salary",
        "from": "wiki",
        "score": 0.21304347826086956
    },
    {
        "word": "professional sports",
        "from": "wiki",
        "score": 0.20652173913043487
    },
    {
        "word": "sports day",
        "from": "wiki",
        "score": 0.19565217391304346
    },
    {
        "word": "boxing",
        "from": "wiki",
        "score": 0.18586956521739129
    },
    {
        "word": "indoors",
        "from": "swiki",
        "score": 0.18461538461538463
    },
    {
        "word": "sport in china",
        "from": "wiki",
        "score": 0.17934782608695654
    },
    {
        "word": "ancient egypt",
        "from": "wiki",
        "score": 0.1684782608695652
    },
    {
        "word": "pay-per-view",
        "from": "wiki",
        "score": 0.1673913043478261
    },
    {
        "word": "ancient persia",
        "from": "wiki",
        "score": 0.1630434782608695
    },
    {
        "word": "fina",
        "from": "wiki",
        "score": 0.1532608695652174
    },
    {
        "word": "ancient greece",
        "from": "wiki",
        "score": 0.14130434782608692
    },
    {
        "word": "safari",
        "score": 0.126,
        "from": "reddit-slashes"
    },
    {
        "word": "olympia, greece",
        "from": "wiki",
        "score": 0.125
    },
    {
        "word": "leisure time",
        "from": "wiki",
        "score": 0.11956521739130432
    },
    {
        "word": "bundesliga",
        "from": "wiki",
        "score": 0.11521739130434783
    },
    {
        "word": "mass media",
        "from": "wiki",
        "score": 0.11413043478260865
    },
    {
        "word": "nfl",
        "from": "wiki",
        "score": 0.10434782608695653
    },
    {
        "word": "gender identity",
        "from": "wiki",
        "score": 0.1032608695652174
    },
    {
        "word": "grantland rice",
        "from": "wiki",
        "score": 0.09782608695652173
    },
    {
        "word": "pierre de coubertin",
        "from": "wiki",
        "score": 0.09239130434782605
    },
    {
        "word": "match fixing",
        "from": "wiki",
        "score": 0.08152173913043481
    },
    {
        "word": "blood doping",
        "from": "wiki",
        "score": 0.07608695652173914
    },
    {
        "word": "violence in sports",
        "from": "wiki",
        "score": 0.07065217391304346
    },
    {
        "word": "child development",
        "from": "wiki",
        "score": 0.05434782608695654
    },
    {
        "word": "hobby",
        "score": 0.048,
        "from": "reddit-slashes"
    },
    {
        "word": "skill",
        "from": "wiki",
        "score": 0.04456521739130434
    },
    {
        "word": "crime",
        "from": "wiki",
        "score": 0.03913043478260869
    },
    {
        "word": "athletic scholarship",
        "from": "wiki",
        "score": 0.03804347826086951
    },
    {
        "word": "fanatic",
        "from": "swiki",
        "score": 0.03076923076923077
    },
    {
        "word": "radicalization",
        "from": "wiki",
        "score": 0.028260869565217367
    },
    {
        "word": "war on drugs",
        "from": "wiki",
        "score": 0.02717391304347827
    },
    {
        "word": "participation inequality",
        "from": "wiki",
        "score": 0.021739130434782594
    },
    {
        "word": "illegal drug trade",
        "from": "wiki",
        "score": 0.016304347826086918
    },
    {
        "word": "league",
        "score": 0.01,
        "from": "reddit-slashes"
    },
    {
        "word": "martial",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "muscle",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "work",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "luxury",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "pro",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "touring",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "economy",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "art",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "dress",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "jack",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "party",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "company",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "naked",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "trad",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "show",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "food",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "dive",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "advanced",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "blazers",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "level",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "trophy",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "quiet",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "have",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "training",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "breed",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "marauder",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "city",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "parade",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tool",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "looking",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "suit",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cardio",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "plastic",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "contenders",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "practice",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hunting",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "concert",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "stunt",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "group",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "lesson",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "workout",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cheater",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "spring",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "health",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "air",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "motor",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "dancing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "slot",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "nice",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "reality",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "love",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mma",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "binder",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tactical",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "utility",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "exp",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mountaineering",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "flaunt",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fans",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "blazer",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hobbies",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "actor",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "dart",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "out",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "straw",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "comfort",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mansions",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "glide",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "setting",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "profession",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "social",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "royal",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "casual",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "ritual",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "inspirational",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "movie",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "join",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "natural",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "intelligent",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "exercises",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "competitors",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "music",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "surfer",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "school",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "moon",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fighting",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "gun",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sls",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "trail",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "profile",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "manual",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "eco",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "street",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "enduro",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "physical disability",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "berlin",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "apartheid",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "hurling",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "nationalism",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "zeus",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "idolatry",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "tertullian",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "fandom",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "stadium",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "intellectual disabilities",
        "from": "wiki",
        "score": -0.005434782608695676
    },
    {
        "word": "radio broadcasting",
        "from": "wiki",
        "score": -0.016304347826086973
    },
    {
        "word": "hawk-eye",
        "from": "wiki",
        "score": -0.03369565217391304
    },
    {
        "word": "fifa world cup",
        "from": "wiki",
        "score": -0.03804347826086957
    },
    {
        "word": "snickometer",
        "from": "wiki",
        "score": -0.04456521739130434
    },
    {
        "word": "2006 fifa world cup",
        "from": "wiki",
        "score": -0.048913043478260865
    },
    {
        "word": "fifa world cup finals",
        "from": "wiki",
        "score": -0.05434782608695654
    },
    {
        "word": "2011 cricket world cup final",
        "from": "wiki",
        "score": -0.05978260869565216
    },
    {
        "word": "national football league",
        "from": "wiki",
        "score": -0.06521739130434784
    },
    {
        "word": "super bowl",
        "from": "wiki",
        "score": -0.07065217391304346
    },
    {
        "word": "self-esteem",
        "from": "wiki",
        "score": -0.07717391304347829
    },
    {
        "word": "professional sport",
        "from": "wiki",
        "score": -0.09782608695652173
    },
    {
        "word": "bralette",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "iracing",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "streetwear",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "intramurals",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "esport",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "shounen",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "mathe",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "crossfit",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "reli",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "liftback",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "activ",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "smartwatch",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "tevas",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "garmisch-partenkirchen",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "untermensch",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "amateur sport",
        "from": "wiki",
        "score": -0.1032608695652174
    },
    {
        "word": "sports science",
        "from": "wiki",
        "score": -0.11956521739130432
    },
    {
        "word": "running shoe",
        "from": "wiki",
        "score": -0.125
    },
    {
        "word": "competitive swimwear",
        "from": "wiki",
        "score": -0.13043478260869568
    },
    {
        "word": "sports engineering",
        "from": "wiki",
        "score": -0.1358695652173913
    },
    {
        "word": "wearable technology",
        "from": "wiki",
        "score": -0.14130434782608697
    },
    {
        "word": "goal-line technology",
        "from": "wiki",
        "score": -0.1576086956521739
    },
    {
        "word": "2014 fifa world cup",
        "from": "wiki",
        "score": -0.16304347826086957
    },
    {
        "word": "2015 fifa women's world cup",
        "from": "wiki",
        "score": -0.16847826086956524
    },
    {
        "word": "premier league",
        "from": "wiki",
        "score": -0.17391304347826086
    },
    {
        "word": "2013–14 premier league",
        "from": "wiki",
        "score": -0.17934782608695654
    },
    {
        "word": "2015–16 bundesliga",
        "from": "wiki",
        "score": -0.19021739130434784
    },
    {
        "word": "rugby league",
        "from": "wiki",
        "score": -0.20652173913043476
    },
    {
        "word": "third umpire",
        "from": "wiki",
        "score": -0.2173913043478261
    },
    {
        "word": "umpire decision review system",
        "from": "wiki",
        "score": -0.22282608695652173
    },
    {
        "word": "international cricket council",
        "from": "wiki",
        "score": -0.2282608695652174
    },
    {
        "word": "hot spot",
        "from": "wiki",
        "score": -0.2391304347826087
    },
    {
        "word": "violent extremism",
        "from": "wiki",
        "score": -0.2663043478260869
    },
    {
        "word": "benito mussolini",
        "from": "wiki",
        "score": -0.28260869565217395
    },
    {
        "word": "1934 fifa world cup",
        "from": "wiki",
        "score": -0.28804347826086957
    },
    {
        "word": "adolf hitler",
        "from": "wiki",
        "score": -0.2934782608695652
    },
    {
        "word": "1936 summer olympics",
        "from": "wiki",
        "score": -0.29891304347826086
    },
    {
        "word": "1936 winter olympics",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "nazi ideology",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "aryan race",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "cultural nationalism",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "gaelic football",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "gaelic athletic association",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "great britain",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "croke park",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "lansdowne road",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "aviva stadium",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "royal ulster constabulary",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "good friday agreement",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "football war",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "munich massacre",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "proceedings of the national academy of sciences",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "washington redskins",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "redskins rule",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "étienne de la boétie",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "discourse on voluntary servitude",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "ancient greek religion",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "ancient olympic games",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "free content",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "free license",
        "from": "wiki",
        "score": -0.3
    }
]
const travelWords = [
    {
        "word": "move",
        "score": 30.075361071636944,
        "from": "ol,w2v,wn,wn,wn,wn,reddit-slashes"
    },
    {
        "word": "walk",
        "score": 20.670046153846155,
        "from": "ol,wn,wn,wn,wn,reddit-slashes"
    },
    {
        "word": "tourism",
        "score": 11.833224642024641,
        "from": "ol,wiki,swiki,reddit-slashes"
    },
    {
        "word": "journey",
        "score": 11.751046153846154,
        "from": "ol,wn,wn,wn"
    },
    {
        "word": "come",
        "score": 9.42930861606419,
        "from": "ol,w2v,wn,wn"
    },
    {
        "word": "trip",
        "score": 9.373425832358981,
        "from": "ol,w2v,wn,reddit-slashes"
    },
    {
        "word": "motion",
        "score": 9.2,
        "from": "wn,wn,wn,reddit-slashes"
    },
    {
        "word": "movement",
        "score": 9.2,
        "from": "wn,wn,wn,reddit-slashes"
    },
    {
        "word": "swim",
        "score": 9.2,
        "from": "wn,wn,wn,reddit-slashes"
    },
    {
        "word": "fly",
        "score": 8.415938461538461,
        "from": "ol,wn,wn,reddit-slashes"
    },
    {
        "word": "vacation",
        "score": 7.073212025758991,
        "from": "ol,w2v,wiki,reddit-slashes"
    },
    {
        "word": "step",
        "score": 6.299999999999999,
        "from": "wn,wn,wn"
    },
    {
        "word": "creep",
        "score": 6.299999999999999,
        "from": "wn,wn,wn"
    },
    {
        "word": "fall",
        "score": 6.299999999999999,
        "from": "wn,wn,wn"
    },
    {
        "word": "float",
        "score": 6.299999999999999,
        "from": "wn,wn,wn"
    },
    {
        "word": "drift",
        "score": 6.299999999999999,
        "from": "wn,wn,wn"
    },
    {
        "word": "go",
        "score": 6.081990358717944,
        "from": "ol,w2v,wn"
    },
    {
        "word": "ride",
        "score": 5.648192307692307,
        "from": "ol,wn,wn"
    },
    {
        "word": "cruise",
        "score": 5.185552344580662,
        "from": "ol,w2v,wn"
    },
    {
        "word": "automobile",
        "from": "wiki,wn",
        "score": 5.052987012987012
    },
    {
        "word": "commuting",
        "score": 4.87402987012987,
        "from": "ol,wiki,wn"
    },
    {
        "word": "run",
        "score": 4.8,
        "from": "wn,wn,reddit-slashes"
    },
    {
        "word": "walking",
        "score": 4.563900599400599,
        "from": "ol,wiki,wn"
    },
    {
        "word": "air",
        "score": 4.067976923076922,
        "from": "ol,wn,reddit-slashes"
    },
    {
        "word": "drive",
        "score": 4.0413461538461535,
        "from": "ol,wn,reddit-slashes"
    },
    {
        "word": "train",
        "from": "wiki,reddit-slashes",
        "score": 3.990649350649351
    },
    {
        "word": "trips",
        "score": 3.9875407129088085,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "bus",
        "from": "wiki,reddit-slashes",
        "score": 3.865974025974026
    },
    {
        "word": "flights",
        "score": 3.8250983108607537,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "tourist",
        "score": 3.595992583751286,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "visit",
        "score": 3.548476934534018,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "flight",
        "score": 3.536858981711812,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "leave",
        "score": 3.5338773843824938,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "transit",
        "score": 3.499184569913644,
        "from": "ol,w2v,reddit-slashes"
    },
    {
        "word": "jaunt",
        "score": 3.069630769230769,
        "from": "ol,wn"
    },
    {
        "word": "locomotion",
        "score": 2.9605384615384613,
        "from": "ol,wn"
    },
    {
        "word": "traveling",
        "score": 2.8997266696358635,
        "from": "w2v,wn"
    },
    {
        "word": "move around",
        "score": 2.8600000000000003,
        "from": "wn,wn"
    },
    {
        "word": "airplane",
        "from": "wiki",
        "score": 2.8
    },
    {
        "word": "crawl",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "circle",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "ascension",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "rise",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "spread",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "roll",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "stray",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "wander",
        "score": 2.8,
        "from": "wn,wn"
    },
    {
        "word": "locomote",
        "score": 2.783984615384615,
        "from": "ol,wn"
    },
    {
        "word": "travelling",
        "score": 2.7308379617467224,
        "from": "w2v,wn"
    },
    {
        "word": "change of location",
        "score": 2.5839846153846153,
        "from": "ol,wn"
    },
    {
        "word": "come up",
        "score": 2.5,
        "from": "wn,wn"
    },
    {
        "word": "go up",
        "score": 2.5,
        "from": "wn,wn"
    },
    {
        "word": "follow",
        "score": 2.397135170867907,
        "from": "w2v,wn"
    },
    {
        "word": "entering",
        "score": 2.3689735215993633,
        "from": "w2v,wn"
    },
    {
        "word": "traverse",
        "score": 2.3240615384615384,
        "from": "ol,wn"
    },
    {
        "word": "roam",
        "score": 2.310446153846154,
        "from": "ol,wn"
    },
    {
        "word": "human migration",
        "from": "wiki,swiki",
        "score": 2.2766233766233768
    },
    {
        "word": "circulate",
        "score": 2.2729999999999997,
        "from": "ol,wn"
    },
    {
        "word": "wend",
        "score": 2.2700923076923076,
        "from": "ol,wn"
    },
    {
        "word": "travelers",
        "score": 2.250725941362579,
        "from": "ol,w2v"
    },
    {
        "word": "destination",
        "score": 2.117024174464011,
        "from": "ol,w2v"
    },
    {
        "word": "location",
        "from": "wiki,reddit-slashes",
        "score": 2
    },
    {
        "word": "tours",
        "score": 1.9839672198384877,
        "from": "ol,w2v"
    },
    {
        "word": "traffic",
        "score": 1.9563491910544757,
        "from": "ol,w2v"
    },
    {
        "word": "tourists",
        "score": 1.9513486822756483,
        "from": "ol,w2v"
    },
    {
        "word": "travellers",
        "score": 1.9434092739587916,
        "from": "ol,w2v"
    },
    {
        "word": "enter",
        "score": 1.9197117562229384,
        "from": "ol,w2v"
    },
    {
        "word": "entry",
        "score": 1.8751490664943424,
        "from": "ol,w2v"
    },
    {
        "word": "flow",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "resort",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "ski",
        "score": 1.7999999999999998,
        "from": "wn,reddit-slashes"
    },
    {
        "word": "ship",
        "from": "wiki,reddit-slashes",
        "score": 1.7922077922077921
    },
    {
        "word": "caravan",
        "from": "wiki,wn",
        "score": 1.779220779220779
    },
    {
        "word": "service",
        "score": 1.5168877460123462,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "visits",
        "score": 1.470466648253753,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "research",
        "from": "wiki,reddit-slashes",
        "score": 1.4545454545454546
    },
    {
        "word": "contact",
        "score": 1.4370335359486597,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "airports",
        "score": 1.4259115704636676,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "plans",
        "score": 1.4235964006442527,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "meet",
        "score": 1.400950015745999,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "stay",
        "score": 1.4004895102590003,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "commute",
        "score": 1.3878923076923078,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "business",
        "score": 1.3859262959605858,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "weekend",
        "score": 1.380417416244211,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "accommodation",
        "score": 1.379476923076923,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "future",
        "score": 1.37722244840286,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "transport",
        "score": 1.3770153846153845,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "stop",
        "score": 1.3764635205689753,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "excursions",
        "score": 1.3761692307692308,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "taking",
        "score": 1.3707431747439354,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "airline",
        "score": 1.370625578513188,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "spend",
        "score": 1.3680408069629795,
        "from": "w2v,reddit-slashes"
    },
    {
        "word": "ticket",
        "score": 1.3596,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "visa",
        "score": 1.3583538461538462,
        "from": "ol,wiki"
    },
    {
        "word": "freight",
        "score": 1.3573230769230769,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "holiday",
        "score": 1.3564461538461539,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "passport",
        "score": 1.3557846153846154,
        "from": "ol,wiki"
    },
    {
        "word": "hospitality",
        "score": 1.334230769230769,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "road",
        "score": 1.3291230769230769,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "shipping",
        "score": 1.326523076923077,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "relocation",
        "score": 1.3209230769230769,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "relocate",
        "score": 1.311553846153846,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "get",
        "score": 1.2920461538461538,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "moving",
        "score": 1.2917076923076922,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "make",
        "score": 1.2758153846153846,
        "from": "ol,reddit-slashes"
    },
    {
        "word": "trade",
        "from": "wiki,reddit-slashes",
        "score": 1.2727272727272727
    },
    {
        "word": "vehicle",
        "from": "wiki,reddit-slashes",
        "score": 1.1168831168831168
    },
    {
        "word": "camping",
        "from": "swiki,reddit-slashes",
        "score": 1
    },
    {
        "word": "pedestrian",
        "from": "wiki",
        "score": 0.7870129870129869
    },
    {
        "word": "bicycle",
        "from": "wiki",
        "score": 0.7740259740259741
    },
    {
        "word": "boat",
        "from": "wiki",
        "score": 0.735064935064935
    },
    {
        "word": "gait",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "running",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "jog",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "lope",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "trot",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "crawling",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "creeping",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "circuit",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "lap",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "stroke",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "circumnavigation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "traversal",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "roving",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "vagabondage",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wandering",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wayfaring",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "crossing",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "driving",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "riding",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "aviation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "journeying",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "leg",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "stage",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "staging",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "seafaring",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "commutation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "circulation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "gravitation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "levitation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "descent",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "entrance",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "flowing",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "advance",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "progress",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "progression",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ascent",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "rising",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "spreading",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "stampede",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "translation",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "carry",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ease",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "whish",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "swap",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "seek",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "whine",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ghost",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "do",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "raft",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "repair",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "displace",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "round",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "trundle",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "push",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "swing",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "cast",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ramble",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "range",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "rove",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "swan",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "vagabond",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "meander",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "thread",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "weave",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wind",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "forge",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "spurt",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "scramble",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "slide",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "slither",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wheel",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "glide",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "bounce",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "breeze",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "blow",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "play",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "turn",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "err",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "motor",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "wing",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "steam",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "steamer",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "tram",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "taxi",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ferry",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "sit",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "prance",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "arise",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "lift",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "ascend",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "descend",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "crank",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "zigzag",
        "score": 0.7,
        "from": "wn"
    },
    {
        "word": "brachiation",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "peregrination",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "junketing",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "overfly",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "spirt",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "jounce",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "uprise",
        "score": 0.6,
        "from": "wn"
    },
    {
        "word": "recreation",
        "from": "wiki",
        "score": 0.5662337662337662
    },
    {
        "word": "destinations",
        "score": 0.5634252181853536,
        "from": "w2v"
    },
    {
        "word": "access",
        "score": 0.5527781989024392,
        "from": "w2v"
    },
    {
        "word": "visitors",
        "score": 0.5296794045942143,
        "from": "w2v"
    },
    {
        "word": "journeys",
        "score": 0.5290461538461538,
        "from": "ol"
    },
    {
        "word": "europe",
        "score": 0.5277969920867931,
        "from": "w2v"
    },
    {
        "word": "allow",
        "score": 0.5229805273813631,
        "from": "w2v"
    },
    {
        "word": "reservations",
        "score": 0.5221422865852958,
        "from": "w2v"
    },
    {
        "word": "routes",
        "score": 0.5214334235133982,
        "from": "w2v"
    },
    {
        "word": "commercial",
        "score": 0.5213857984041104,
        "from": "w2v"
    },
    {
        "word": "will",
        "score": 0.5212994193527994,
        "from": "w2v"
    },
    {
        "word": "services",
        "score": 0.5210379986805745,
        "from": "w2v"
    },
    {
        "word": "check",
        "score": 0.5203760901408745,
        "from": "w2v"
    },
    {
        "word": "continue",
        "score": 0.5201785527236101,
        "from": "w2v"
    },
    {
        "word": "regularly",
        "score": 0.5196374380499049,
        "from": "w2v"
    },
    {
        "word": "free",
        "score": 0.51933140222767,
        "from": "w2v"
    },
    {
        "word": "take",
        "score": 0.5167526449782439,
        "from": "w2v"
    },
    {
        "word": "offers",
        "score": 0.5166728813877501,
        "from": "w2v"
    },
    {
        "word": "available",
        "score": 0.5131780083202679,
        "from": "w2v"
    },
    {
        "word": "traveler",
        "score": 0.5131076923076923,
        "from": "ol"
    },
    {
        "word": "abroad",
        "score": 0.5117170889132897,
        "from": "w2v"
    },
    {
        "word": "offering",
        "score": 0.5113645805743959,
        "from": "w2v"
    },
    {
        "word": "arriving",
        "score": 0.5108526766033263,
        "from": "w2v"
    },
    {
        "word": "ports",
        "score": 0.5097849450379128,
        "from": "w2v"
    },
    {
        "word": "itinerary",
        "score": 0.5093384615384615,
        "from": "ol"
    },
    {
        "word": "for",
        "score": 0.5085078193258393,
        "from": "w2v"
    },
    {
        "word": "offer",
        "score": 0.5078477986276831,
        "from": "w2v"
    },
    {
        "word": "provide",
        "score": 0.5048890982475213,
        "from": "w2v"
    },
    {
        "word": "direct",
        "score": 0.5048740892319409,
        "from": "w2v"
    },
    {
        "word": "canceled",
        "score": 0.5043080663731405,
        "from": "w2v"
    },
    {
        "word": "new",
        "score": 0.5034367157209133,
        "from": "w2v"
    },
    {
        "word": "overseas",
        "score": 0.5022708571723382,
        "from": "w2v"
    },
    {
        "word": "link",
        "score": 0.5020344391639399,
        "from": "w2v"
    },
    {
        "word": "on",
        "score": 0.5013743640209366,
        "from": "w2v"
    },
    {
        "word": "charity",
        "from": "wiki",
        "score": 0.5012987012987014
    },
    {
        "word": "sightseeing",
        "score": 0.4994923076923077,
        "from": "ol"
    },
    {
        "word": "through",
        "score": 0.4992713853802333,
        "from": "w2v"
    },
    {
        "word": "private",
        "score": 0.4966214690024337,
        "from": "w2v"
    },
    {
        "word": "attention",
        "score": 0.4963887468887324,
        "from": "w2v"
    },
    {
        "word": "to",
        "score": 0.49553229345860783,
        "from": "w2v"
    },
    {
        "word": "international",
        "score": 0.4954658392200308,
        "from": "w2v"
    },
    {
        "word": "places",
        "score": 0.494609257942547,
        "from": "w2v"
    },
    {
        "word": "besides",
        "score": 0.4946036064790796,
        "from": "w2v"
    },
    {
        "word": "transportation",
        "score": 0.4931153846153846,
        "from": "ol"
    },
    {
        "word": "times",
        "score": 0.49296870677568255,
        "from": "w2v"
    },
    {
        "word": "begin",
        "score": 0.49271033592151076,
        "from": "w2v"
    },
    {
        "word": "calls",
        "score": 0.49253854629325555,
        "from": "w2v"
    },
    {
        "word": "arrive",
        "score": 0.4925285412147012,
        "from": "w2v"
    },
    {
        "word": "country",
        "score": 0.49225817506795594,
        "from": "w2v"
    },
    {
        "word": "customers",
        "score": 0.4921045803226425,
        "from": "w2v"
    },
    {
        "word": "watch",
        "score": 0.4913352032599271,
        "from": "w2v"
    },
    {
        "word": "sites",
        "score": 0.4912757232935856,
        "from": "w2v"
    },
    {
        "word": "coming",
        "score": 0.49110112754290475,
        "from": "w2v"
    },
    {
        "word": "depart",
        "score": 0.4908153846153846,
        "from": "ol"
    },
    {
        "word": "internet",
        "score": 0.4897256535807108,
        "from": "w2v"
    },
    {
        "word": "countries",
        "score": 0.4896834171832604,
        "from": "w2v"
    },
    {
        "word": "return",
        "score": 0.4894572537857519,
        "from": "w2v"
    },
    {
        "word": "trek",
        "score": 0.4889,
        "from": "ol"
    },
    {
        "word": "local",
        "score": 0.4880727691022623,
        "from": "w2v"
    },
    {
        "word": "call",
        "score": 0.4876413372614631,
        "from": "w2v"
    },
    {
        "word": "planned",
        "score": 0.48763694467812535,
        "from": "w2v"
    },
    {
        "word": "continues",
        "score": 0.48759482767569184,
        "from": "w2v"
    },
    {
        "word": "keep",
        "score": 0.48752876016688795,
        "from": "w2v"
    },
    {
        "word": "send",
        "score": 0.4868978357018086,
        "from": "w2v"
    },
    {
        "word": "elsewhere",
        "score": 0.48663251179351,
        "from": "w2v"
    },
    {
        "word": "operate",
        "score": 0.486583342602668,
        "from": "w2v"
    },
    {
        "word": "across",
        "score": 0.4865119981195188,
        "from": "w2v"
    },
    {
        "word": "bringing",
        "score": 0.48631341136534645,
        "from": "w2v"
    },
    {
        "word": "without",
        "score": 0.4861073949662186,
        "from": "w2v"
    },
    {
        "word": "agencies",
        "score": 0.48549346925323317,
        "from": "w2v"
    },
    {
        "word": "fare",
        "score": 0.4849230769230769,
        "from": "ol"
    },
    {
        "word": "passengers",
        "score": 0.48344615384615386,
        "from": "ol"
    },
    {
        "word": "outbound",
        "score": 0.4819307692307692,
        "from": "ol"
    },
    {
        "word": "excursion",
        "score": 0.4800307692307692,
        "from": "ol"
    },
    {
        "word": "honeymoon",
        "score": 0.47825384615384614,
        "from": "ol"
    },
    {
        "word": "rides",
        "score": 0.47767692307692305,
        "from": "ol"
    },
    {
        "word": "pilgrimage",
        "from": "wiki",
        "score": 0.4753246753246753
    },
    {
        "word": "route",
        "score": 0.4709307692307692,
        "from": "ol"
    },
    {
        "word": "voyages",
        "score": 0.4709,
        "from": "ol"
    },
    {
        "word": "voyage",
        "score": 0.47052307692307693,
        "from": "ol"
    },
    {
        "word": "passenger",
        "score": 0.46904615384615383,
        "from": "ol"
    },
    {
        "word": "transporting",
        "score": 0.46560769230769233,
        "from": "ol"
    },
    {
        "word": "sail",
        "score": 0.4641461538461538,
        "from": "ol"
    },
    {
        "word": "visitor",
        "score": 0.46092307692307694,
        "from": "ol"
    },
    {
        "word": "tour",
        "score": 0.45903076923076924,
        "from": "ol"
    },
    {
        "word": "navigate",
        "score": 0.4566846153846154,
        "from": "ol"
    },
    {
        "word": "touring",
        "score": 0.4563384615384615,
        "from": "ol"
    },
    {
        "word": "mobility",
        "score": 0.45453846153846156,
        "from": "ol"
    },
    {
        "word": "haulage",
        "score": 0.4540230769230769,
        "from": "ol"
    },
    {
        "word": "migrate",
        "score": 0.45356153846153846,
        "from": "ol"
    },
    {
        "word": "transports",
        "score": 0.4502923076923077,
        "from": "ol"
    },
    {
        "word": "voyager",
        "score": 0.4492153846153846,
        "from": "ol"
    },
    {
        "word": "reimbursement",
        "score": 0.4478923076923077,
        "from": "ol"
    },
    {
        "word": "reach",
        "score": 0.44745384615384615,
        "from": "ol"
    },
    {
        "word": "carriers",
        "score": 0.44735384615384616,
        "from": "ol"
    },
    {
        "word": "navigation",
        "score": 0.44556153846153845,
        "from": "ol"
    },
    {
        "word": "browse",
        "score": 0.4427846153846154,
        "from": "ol"
    },
    {
        "word": "departure",
        "score": 0.44133076923076925,
        "from": "ol"
    },
    {
        "word": "transfer",
        "score": 0.43956923076923077,
        "from": "ol"
    },
    {
        "word": "cross",
        "score": 0.4388923076923077,
        "from": "ol"
    },
    {
        "word": "borrow",
        "score": 0.4356307692307692,
        "from": "ol"
    },
    {
        "word": "town",
        "score": 0.4354692307692308,
        "from": "ol"
    },
    {
        "word": "proceed",
        "score": 0.4346615384615385,
        "from": "ol"
    },
    {
        "word": "racing",
        "score": 0.4342923076923077,
        "from": "ol"
    },
    {
        "word": "moves",
        "score": 0.4342153846153846,
        "from": "ol"
    },
    {
        "word": "surrender",
        "score": 0.4327153846153846,
        "from": "ol"
    },
    {
        "word": "touristic",
        "score": 0.43162307692307694,
        "from": "ol"
    },
    {
        "word": "way",
        "score": 0.43144615384615387,
        "from": "ol"
    },
    {
        "word": "refugee",
        "from": "wiki",
        "score": 0.41038961038961036
    },
    {
        "word": "dance step",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "horseback riding",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "air travel",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "on the road",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "on tour",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "water travel",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "go around",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "betake oneself",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "pass over",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "get about",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "get around",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "travel purposefully",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "take the air",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "be adrift",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "slice into",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "slice through",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "move up",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "come down",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "go down",
        "score": 0.39999999999999997,
        "from": "wn"
    },
    {
        "word": "hitchhike",
        "score": 0.3983153846153846,
        "from": "ol"
    },
    {
        "word": "cycling",
        "from": "wiki",
        "score": 0.3714285714285714
    },
    {
        "word": "old french",
        "from": "wiki",
        "score": 0.37012987012987014
    },
    {
        "word": "mount everest",
        "from": "wiki",
        "score": 0.35714285714285704
    },
    {
        "word": "amazon rainforest",
        "from": "wiki",
        "score": 0.34415584415584416
    },
    {
        "word": "extreme tourism",
        "from": "wiki",
        "score": 0.3311688311688313
    },
    {
        "word": "adventure travel",
        "from": "wiki",
        "score": 0.3181818181818182
    },
    {
        "word": "cruise ship",
        "from": "wiki",
        "score": 0.2922077922077922
    },
    {
        "word": "pompeii",
        "from": "wiki",
        "score": 0.2805194805194805
    },
    {
        "word": "bullock cart",
        "from": "wiki",
        "score": 0.2792207792207793
    },
    {
        "word": "baiae",
        "from": "wiki",
        "score": 0.2675324675324675
    },
    {
        "word": "aircraft",
        "from": "wiki",
        "score": 0.24155844155844153
    },
    {
        "word": "volunteer travel",
        "from": "wiki",
        "score": 0.21428571428571425
    },
    {
        "word": "merchants",
        "from": "wiki",
        "score": 0.2025974025974026
    },
    {
        "word": "retailing",
        "from": "wiki",
        "score": 0.17662337662337663
    },
    {
        "word": "bed and breakfast",
        "from": "swiki",
        "score": 0.16666666666666663
    },
    {
        "word": "peddler",
        "from": "wiki",
        "score": 0.16363636363636364
    },
    {
        "word": "mission trip",
        "from": "wiki",
        "score": 0.16233766233766234
    },
    {
        "word": "business travel",
        "from": "wiki",
        "score": 0.14935064935064934
    },
    {
        "word": "friar",
        "from": "wiki",
        "score": 0.13766233766233765
    },
    {
        "word": "autobiography",
        "from": "swiki",
        "score": 0.1333333333333333
    },
    {
        "word": "theology",
        "from": "wiki",
        "score": 0.12467532467532466
    },
    {
        "word": "wholesaling",
        "from": "wiki",
        "score": 0.1155844155844156
    },
    {
        "word": "human-powered transport",
        "from": "wiki",
        "score": 0.09740259740259738
    },
    {
        "word": "aristocrat",
        "from": "wiki",
        "score": 0.0727272727272727
    },
    {
        "word": "gyrovague",
        "from": "wiki",
        "score": 0.05064935064935064
    },
    {
        "word": "public transport",
        "from": "wiki",
        "score": 0.045454545454545414
    },
    {
        "word": "work",
        "score": 0.038,
        "from": "reddit-slashes"
    },
    {
        "word": "railway",
        "from": "wiki",
        "score": 0.03376623376623375
    },
    {
        "word": "live",
        "score": 0.02,
        "from": "reddit-slashes"
    },
    {
        "word": "adventure",
        "score": 0.016,
        "from": "reddit-slashes"
    },
    {
        "word": "exploration",
        "score": 0.016,
        "from": "reddit-slashes"
    },
    {
        "word": "quarantine",
        "score": 0.01,
        "from": "reddit-slashes"
    },
    {
        "word": "hiking",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "hotel",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "time",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "mini",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "dining",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "sample",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "nature",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "multiverse",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "airlines",
        "score": 0.008,
        "from": "reddit-slashes"
    },
    {
        "word": "airship",
        "from": "wiki",
        "score": 0.007792207792207795
    },
    {
        "word": "living",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "vacations",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "backup",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "event",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "the",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "lodging",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "holidays",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "around",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "food",
        "score": 0.006,
        "from": "reddit-slashes"
    },
    {
        "word": "portable",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "activity",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "survival",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "throw",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "casino",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "gatherings",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "van",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "colonization",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "cover",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "edc",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "landscape",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "alternate",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "manipulation",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "gas",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "street",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "student",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "secondary",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "health",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "buy",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "lifestyle",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "fun",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "pocket",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "games",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "long",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "shop",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "warp",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "groceries",
        "score": 0.004,
        "from": "reddit-slashes"
    },
    {
        "word": "residency",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "grocery",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "store",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "outdoors",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "small",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "demands",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "order",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fight",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "closures",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "appearances",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "wanderlust",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "lost",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "prep",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "solo",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "flying",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "merchandise",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "control",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "per",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "meeting",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "remote",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sofa",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "murder",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "security",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "passports",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "join",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "trial",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "usage",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "retail",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "locals",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "different",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "containers",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mild",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hat",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "using",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "jobs",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "passing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "testing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "bars",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "band",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "experience",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "photographer",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "rest",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "convenience",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "dive",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "life",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "strollers",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "spawn",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "map",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "enjoy",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "working",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "filming",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "casinos",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "use",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "space",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "react",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "not",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sabrina",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cheat",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "vehicular",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "leisure",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "workers",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "book",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sporty",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "another",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mountain",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "costs",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "commerce",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hand",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "knee",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "beach",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "group",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "accommodations",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "water",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "open",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "web",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "downtime",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "study",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "doing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "development",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "displacement",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "strolling",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mall",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "public",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "exclusives",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "worm",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "markers",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "mind",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "getting",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "velocity",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "densities",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "load",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "quantum",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "look",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "gifts",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "migration",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "leaving",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "culinary",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tickets",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "day",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "bag",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "quest",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "entertainment",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "perceive",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "telenor",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "chill",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "other",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "wait",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "dreams",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "factory",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "consulate",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "resistance",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "shorten",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "back",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fuel",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "thriller",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "resource",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "visas",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "off",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "smearing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "speed",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "booking",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fast",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "lockdown",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fees",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "war",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "supernatural",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "her",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "anger",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "client",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sunset",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "petrol",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "kids",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "child",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "discovery",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "donuts",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "communication",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "lan",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tensions",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "series",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "programming",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "value",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "volunteer",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "higher",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "vaccine",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hotels",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "organized",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "temporal",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "pandemic",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "interplanetary",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "minis",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "father",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cat",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "exploring",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "sleep",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "camp",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "science",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "events",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "teleport",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "negative",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cargo",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "foul",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "ncr",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "neck",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "college",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "see",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "reading",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "matches",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "out",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "action",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "system",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "immediately",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "combo",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "workouts",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cultural",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "equipment",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "cars",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "social",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "restaurants",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "outdoor",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "grabbing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "fluff",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "home",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "gift",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hardship",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "teams",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "communicate",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "footwork",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "points",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "hitch",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "battle",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "club",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "elopement",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "redo",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "gather",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "practice",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "face",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "old",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "know",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "parents",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "restrict",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "packing",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "workhorse",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "apartment",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "daily",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "age",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "disney",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "party",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "waiting",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "carrying",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "beer",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "tle",
        "score": 0.002,
        "from": "reddit-slashes"
    },
    {
        "word": "safety",
        "from": "wiki",
        "score": 0
    },
    {
        "word": "journal",
        "from": "swiki",
        "score": 0
    },
    {
        "word": "classical antiquity",
        "from": "wiki",
        "score": -0.006493506493506496
    },
    {
        "word": "christopher columbus",
        "from": "wiki",
        "score": -0.04545454545454547
    },
    {
        "word": "middle ages",
        "from": "wiki",
        "score": -0.07142857142857145
    },
    {
        "word": "covid",
        "score": -0.092,
        "from": "reddit-slashes"
    },
    {
        "word": "vlogs",
        "score": -0.096,
        "from": "reddit-slashes"
    },
    {
        "word": "moonkin",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "statis",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "qol",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "reseting",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "groundhogs",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "pathfinding",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "transprt",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "expedia",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "roadtrip",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "gadget",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "infulencer",
        "score": -0.098,
        "from": "reddit-slashes"
    },
    {
        "word": "detr",
        "from": "wiki",
        "score": -0.1
    },
    {
        "word": "pastoral care",
        "from": "wiki",
        "score": -0.18831168831168832
    },
    {
        "word": "travelling minstrel",
        "from": "wiki",
        "score": -0.2012987012987013
    },
    {
        "word": "canterbury tales",
        "from": "wiki",
        "score": -0.2142857142857143
    },
    {
        "word": "grand tour",
        "from": "wiki",
        "score": -0.24025974025974028
    },
    {
        "word": "french revolution",
        "from": "wiki",
        "score": -0.2532467532467533
    },
    {
        "word": "thomas cook",
        "from": "wiki",
        "score": -0.27922077922077926
    },
    {
        "word": "alexis alford",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "internal passport",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "travel itinerary",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "health insurance",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "diplomatic mission",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "international driving permit",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "vehicle insurance",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "seat belt",
        "from": "wiki",
        "score": -0.3
    },
    {
        "word": "seat belt legislation",
        "from": "wiki",
        "score": -0.3
    }
]


const getRandomSelection = (arr: any[], size: number, minScore: number = 5) => {
    return getNRandomElements(
        arr
        .filter(entry => entry.score > minScore)
        .map(entry => entry.word),
        size
    )
}

export const findWordsRelatedTo = (word: string, maxResults= 8) => {
    switch (word) {
        case "Film & Animation":
            return getRandomSelection(filmWords, maxResults);
        case "Autos & Vehicles":
            return getRandomSelection(autoWords, maxResults, 2);
        case "Music":
            return getRandomSelection(musicWords, maxResults);
        case "Pets & Animals":
            return getRandomSelection(petWords, maxResults);
        case "Sports":
            return getRandomSelection(sportsWords, maxResults);
        case "Travel & Events":
            return getRandomSelection(travelWords, maxResults);
        default:
            return [word]
    }
}