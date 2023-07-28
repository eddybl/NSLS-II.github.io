Search.setIndex({"docnames": ["examples", "index", "installation", "notebooks/madx", "notebooks/shadow", "notebooks/srw", "release-history", "simulations"], "filenames": ["examples.rst", "index.rst", "installation.rst", "notebooks/madx.ipynb", "notebooks/shadow.ipynb", "notebooks/srw.ipynb", "release-history.rst", "simulations.rst"], "titles": ["Examples", "sirepo-bluesky Documentation", "Installation instructions", "MAD-X Simulations", "Shadow Simulations", "SRW Simulations", "Release History", "List of predefined simulations in Sirepo"], "terms": {"srw": [0, 1, 6], "simul": [0, 1, 2, 6], "run": [0, 3, 6], "beamlin": [0, 3, 6, 7], "propag": [0, 7], "ophyd": [0, 4, 6], "object": [0, 3, 4, 6], "us": [0, 2, 4, 6], "engin": 0, "gener": [0, 4, 6], "spectrum": 0, "report": [0, 3, 4, 6], "shadow": [0, 1, 6], "shadow3": [0, 1, 2, 6], "beam": [0, 6, 7], "statist": [0, 6], "sirepo": [0, 5, 6], "app": [0, 5, 6], "mad": [0, 1, 6], "x": [0, 1, 2, 4, 5, 6], "setup": 0, "scan": [0, 4, 5, 6], "model": [0, 4, 5], "befor": [0, 4, 6], "chang": [0, 4, 6], "paramet": [0, 5, 6], "again": 0, "after": [0, 4, 6], "get": [0, 5], "data": [0, 2, 4, 5, 6], "via": [0, 2, 6], "databrok": [0, 1, 6], "api": 0, "plot": [0, 4, 5, 6], "from": [0, 2, 4, 5, 6, 7], "raw": 0, "tf": 0, "file": [0, 2, 6], "origin": 0, "instal": [1, 6], "instruct": [1, 6, 7], "prepar": [1, 6], "start": [1, 3, 4, 5, 6, 7], "mongo": [1, 6], "configur": [1, 6], "exampl": [1, 2, 3, 4, 5, 7], "list": [1, 3, 4, 5, 6], "predefin": [1, 3, 4, 5, 6], "releas": [1, 2], "histori": 1, "v0": 1, "6": [1, 3, 4, 5], "2": [1, 2, 3, 4, 5], "2023": [1, 3, 4, 5], "06": [1, 5], "09": 1, "1": [1, 2, 3, 4, 5, 7], "05": [1, 5], "26": [1, 4, 5], "0": [1, 3, 4, 5], "02": [1, 5], "23": [1, 4], "5": [1, 3, 4, 5], "2022": 1, "11": [1, 4, 5], "04": [1, 3, 4, 5], "4": [1, 3, 4, 5, 7], "3": [1, 2, 3, 4, 5, 7], "2021": 1, "12": [1, 4, 5], "17": [1, 3, 4, 5], "13": [1, 4, 5], "10": [1, 2, 3, 4, 5], "22": [1, 5], "08": [1, 4, 5], "2020": 1, "03": [1, 4, 5], "initi": 1, "clone": 2, "repositori": [2, 6], "prerequisit": 2, "git": 2, "http": [2, 3, 4, 5, 6], "github": [2, 6], "com": 2, "nsl": [2, 6, 7], "ii": [2, 6, 7], "blueski": [2, 3, 6], "cd": 2, "To": [2, 4], "make": [2, 6], "packag": [2, 3], "we": [2, 4, 5, 6], "need": [2, 6], "servic": 2, "docker": [2, 6], "imag": [2, 5, 6, 7], "podman": [2, 6], "can": 2, "well": 2, "dockerhub": 2, "local": 2, "conveni": 2, "script": 2, "bash": 2, "start_sirepo": 2, "sh": 2, "which": [2, 6], "contain": [2, 6, 7], "bin": 2, "set": 2, "vxeuo": 2, "pipefail": 2, "e": 2, "error_msg": 2, "specifi": 2, "d": [2, 4], "command": [2, 3, 6], "line": 2, "first": [2, 4], "argument": 2, "arg": 2, "z": 2, "echo": 2, "exit": 2, "elif": 2, "fi": 2, "remove_contain": 2, "rm": [2, 4], "els": 2, "sirepo_srdb_host": 2, "sirepo_srdb_host_ro": 2, "sirepo_srdb_guest": 2, "sirepo_srdb_root": 2, "unset": 2, "cmd": 2, "_cmd": 2, "docker_imag": 2, "sirepo_docker_container_id": 2, "year": 2, "date": 2, "y": 2, "month": 2, "m": [2, 3, 4], "dai": 2, "todai": 2, "home": 2, "tmp": [2, 3, 4, 6], "directori": [2, 6], "exist": [2, 6], "creat": [2, 4], "mkdir": 2, "p": 2, "docker_image_tag": 2, "beta": [2, 6], "20220806": [2, 6], "215448": [2, 6], "older": 2, "tag": 2, "radiasoft": [2, 6], "docker_binari": 2, "pull": 2, "in_docker_cmd": 2, "cat": 2, "eof": 2, "v": [2, 5, 6], "f": [2, 4, 5], "auth": [2, 3, 4, 5, 6], "db": [2, 3, 4, 5, 6], "cp": 2, "rv": 2, "The": [2, 3, 6], "noth": 2, "do": [2, 6], "sed": 2, "i": [2, 3, 4, 5, 6, 7], "": [2, 3, 4, 6, 7], "export": 2, "g": 2, "radia": 2, "pwd": 2, "sirepo_blueski": [2, 3, 4, 5], "cannot": [2, 6], "determin": 2, "locat": [2, 6], "host": 2, "dir": 2, "cmd_start": 2, "init": 2, "name": [2, 3, 4], "sirepo_auth_method": 2, "guest": 2, "sirepo_auth_bluesky_secret": 2, "sirepo_cookie_is_secur": 2, "fals": [2, 4, 5], "sirepo_feature_config_react_sim_typ": 2, "8000": [2, 3, 4, 5], "ro": 2, "cmd_extra": 2, "rw": 2, "cmd_end": 2, "l": 2, "c": [2, 5], "n": [2, 4, 6], "eval": 2, "id": [2, 3, 4, 5, 7], "log": 2, "One": 2, "option": 2, "instead": [2, 4, 5], "daemon": 2, "mode": 2, "access": [2, 6], "simualt": 2, "requir": [2, 6], "u": 2, "have": [2, 4, 6], "similarli": 2, "start_mongo": 2, "more": [2, 4, 6], "explicitli": [2, 4, 6], "27017": 2, "likewis": 2, "collect": [2, 4, 5], "librari": [2, 6], "For": 2, "pleas": 2, "copi": 2, "yml": 2, "config": [2, 6], "maco": 2, "linux": 2, "window": [2, 6], "system": 2, "appdata": 2, "descript": [2, 7], "store": 2, "metadatastor": 2, "modul": 2, "headersourc": 2, "class": [2, 3, 4, 5, 6], "md": 2, "localhost": [2, 3, 4, 5], "port": 2, "databas": [2, 6], "some_example_databas": 2, "timezon": 2, "eastern": 2, "asset": 2, "registri": 2, "srwpy": [2, 6], "all": [2, 6], "featur": 2, "those": 2, "ar": [2, 4, 5, 6, 7], "primarili": [2, 6], "correspond": [2, 5, 6], "handler": [2, 6], "abl": [2, 6], "load": [2, 4], "specif": 2, "format": [2, 6], "automat": [2, 6], "when": [2, 6, 7], "pip": 2, "pypi": [2, 6], "org": [2, 6], "project": 2, "also": [2, 6], "conda": [2, 6], "forg": [2, 6], "channel": 2, "anaconda": 2, "environ": [2, 6], "If": 2, "you": 2, "one": [2, 7], "miniforg": 2, "quickli": 2, "appropri": 2, "infrastructur": 2, "At": [2, 4], "python": [2, 6], "activ": 2, "Then": 2, "version": [2, 6], "follow": [2, 4, 5, 6, 7], "python3": [2, 3], "OR": 2, "would": 2, "like": [2, 6], "recommend": 2, "develop": 2, "ve": 2, "wish": 2, "pytest": [2, 6], "r": 2, "dev": 2, "txt": 2, "mai": [2, 4], "pandoc": 2, "html": 2, "vv": 2, "pdb": 2, "doc": [2, 3, 6], "thi": [3, 4, 5, 6], "section": [3, 4, 5], "base": [3, 4, 5, 6], "bl2_triplet_tdc_ful": [3, 7], "transvers": 3, "deflector": 3, "caviti": 3, "oper": 3, "atf": [3, 6], "hint": [3, 4, 5], "see": [3, 4, 5], "identifi": [3, 4, 5], "differ": [3, 4, 5, 6], "prepare_flyer_env": 3, "py": [3, 4, 5], "import": [3, 4, 5, 6], "matplotlib": [3, 4, 5], "pyplot": [3, 4], "plt": [3, 4, 5], "sirepoblueski": [3, 4, 5], "madx_flyer": 3, "madxflyer": 3, "sirepo_ophyd": [3, 4, 5], "create_class": [3, 4, 5], "connect": [3, 4, 5], "schema": [3, 4, 5], "madx": 3, "00000002": [3, 4, 5, 6, 7], "extra_model_field": [3, 5], "rpnvariabl": 3, "global": [3, 4, 5], "updat": [3, 4, 5, 6], "root_dir": 3, "elementanimation250": 3, "20": [3, 4, 5], "uid1": 3, "re": [3, 4, 5], "bp": [3, 4, 5], "fly": 3, "hdr1": 3, "tbl1": 3, "tabl": [3, 4, 5, 6], "stream_nam": 3, "fill": [3, 4, 5], "true": [3, 4, 5], "print": [3, 4, 5, 6], "transient": [3, 4, 5], "time": [3, 4, 5, 6], "07": [3, 4, 5], "28": [3, 4, 5], "56": [3, 5], "46": 3, "persist": [3, 4, 5, 6], "uniqu": [3, 4, 5], "39": [3, 4, 5], "1c89f739": 3, "e30f": 3, "416f": 3, "b7de": 3, "e6d62ac8551f": 3, "new": [3, 4, 5, 6], "stream": [3, 4, 5], "madx_flyer_nam": 3, "madx_flyer_": 3, "seq_num": [3, 4, 5], "53": 3, "337581158": 3, "beamline_ful": 3, "337626219": 3, "ho00": 3, "337646961": 3, "hpop1": 3, "337665796": 3, "ht1hv": 3, "337685108": 3, "ho01": 3, "37": 3, "147": 3, "340463161": 3, "io20": 3, "28665": 3, "148": 3, "340478182": 3, "iq9": 3, "36265": 3, "149": 3, "340493202": 3, "io21": 3, "86265": 3, "150": 3, "340506554": 3, "ip85": 3, "151": 3, "340521574": 3, "end": [3, 4], "madx_flyer_betx": 3, "madx_flyer_alfx": 3, "madx_flyer_beti": 3, "madx_flyer_alfi": 3, "408": 3, "76738": 3, "074": 3, "7": [3, 4, 5, 6], "511737399": 3, "29": 3, "28116647": 3, "50": [3, 5], "70010595": 3, "49": 3, "81206671": 3, "955889215": 3, "950629231": 3, "35487045": 3, "102": 3, "4208395": 3, "4927675011": 3, "975614196": 3, "5139990441": 3, "73909671": 3, "madx_flyer_dx": 3, "madx_flyer_di": 3, "2928633271": 3, "2901702805": 3, "4938460783": 3, "row": [3, 5], "9": [3, 4, 5], "column": [3, 5], "usr": 3, "share": 3, "miniconda3": 3, "env": 3, "py3": 3, "lib": 3, "site": 3, "event_model": 3, "__init__": 3, "275": 3, "userwarn": 3, "document": 3, "type": [3, 6], "bulk_ev": 3, "ha": 3, "been": [3, 4], "deprec": [3, 6], "favor": 3, "event_pag": 3, "whose": 3, "structur": 3, "transpos": 3, "warn": [3, 4], "def": 3, "madx_plan": 3, "element": [3, 4, 5, 6], "match8": 3, "ihq1": 3, "valu": [3, 6], "yield": 3, "mv": 3, "deltap": 3, "return": 3, "uid2": 3, "hdr2": 3, "tbl2": 3, "700259a2": 3, "5918": 3, "4115": 3, "bb93": 3, "50815c569400": 3, "58": [3, 4], "515124798": 3, "515170335": 3, "515191792": 3, "515211820": 3, "515230179": 3, "517785072": 3, "517798901": 3, "517815351": 3, "517829418": 3, "517842531": 3, "1900": 3, "02317": 3, "512": 3, "983326": 3, "939": 3, "0523192": 3, "1904": 3, "117613": 3, "1994": 3, "298015": 3, "730": 3, "7480304": 3, "1241": 3, "777577": 3, "2068": 3, "588869": 3, "2791": 3, "986102": 3, "864": 3, "6281425": 3, "4171": 3, "845384": 3, "3791": 3, "546745": 3, "04657493": 3, "073606624": 3, "279162206": 3, "s1": 3, "betx1": 3, "bety1": 3, "figur": [3, 4, 5], "label": [3, 4, 5, 6], "betx": [3, 6], "beti": [3, 6], "xlabel": [3, 4], "ylabel": 3, "titl": [3, 4], "grid": [3, 4, 5], "legend": [3, 4], "lt": [3, 5], "0x7eff58188cd0": 3, "gt": [3, 5], "s2": 3, "betx2": 3, "bety2": 3, "0x7eff580250d0": 3, "o": 3, "resourc": 3, "resource_doc": 3, "filenam": 3, "path": 3, "join": [3, 4], "root": 3, "resource_path": 3, "df": 3, "read": [3, 6], "path_semant": 3, "posix": 3, "resource_kwarg": 3, "4d8e50b3": 3, "bd8c": 3, "4c72": 3, "a98b": 3, "cf22de8c274d": 3, "run_start": 3, "spec": 3, "uid": [3, 4, 5], "d08f0290": 3, "4519": 3, "4ee8": 3, "b6b9": 3, "0d6bd3a418e7": 3, "alfx": 3, "alfi": 3, "dx": 3, "dy": 3, "00000": 3, "000000": [3, 4], "20000": [3, 4], "408000": 3, "040000": 3, "37000": 3, "767380": 3, "074000": 3, "146": 3, "023170": 3, "052319": 3, "046575": 3, "748030": 3, "073607": 3, "628142": 3, "279162": 3, "8": [3, 4, 5], "0x7eff51f127c0": 3, "te": [4, 5, 6, 7], "repeat": [4, 5], "optic": [4, 5, 6], "ipython": [4, 5], "where": [4, 5], "sim_id": [4, 5, 6], "work": [4, 5, 6], "prepare_det_env": [4, 5], "beamstatisticsreport": [4, 6], "number": 4, "point": 4, "npoint": 4, "1000000": 4, "apertur": [4, 5, 7], "horizontals": [4, 5], "kind": [4, 5], "w9": [4, 5], "durat": [4, 5, 6], "hdr": [4, 5], "tbl": [4, 5], "w9_imag": [4, 5], "np": [4, 5], "arrai": [4, 5], "100000": 4, "57": [4, 5], "e2acd7e6": 4, "e22d": 4, "4a64": 4, "8af2": 4, "e7fe43a04c32": 4, "primari": [4, 5], "aperture_horizontals": [4, 5], "w9_durat": [4, 5], "w9_flux": [4, 5], "25": [4, 5], "000": [4, 5], "19": [4, 5], "320": 4, "43": [4, 5], "400": [4, 5], "16": [4, 5], "229": 4, "5138": 4, "520": 4, "01": [4, 5], "800": [4, 5], "233": 4, "10251": 4, "164": 4, "200": [4, 5], "242": 4, "15406": 4, "536": 4, "38": [4, 5], "600": [4, 5], "241": 4, "20619": 4, "667": 4, "239": 4, "25819": 4, "524": 4, "num": [4, 5], "200968742": 4, "493799448": 4, "803473949": 4, "130050659": 4, "745324373": 4, "084580898": 4, "w9_sirepo_data_json": [4, 5], "34": [4, 5], "driftdiv": 4, "w9_sirepo_data_hash": [4, 5], "43b1fde45c06d13e7282a8d3a81a55b69fb8d806b152d2": 4, "319801": 4, "2b8cff9a8e9ea52c2918d42404d0bbdb4f62e5b13a2d32": 4, "229212": 4, "991e0ea7173deecaf2e9c149fa06142d3d78f3ca70f3bc": 4, "233300": 4, "f283172c59a664f3d41aa97ae7b303272687671cd7014a": 4, "241823": 4, "94424792433bcff2553bc7720e5e26f029a46a937b2926": 4, "240800": 4, "a56219f3974111d2a02177da9cbf12effeda23cd416f13": 4, "238899": 4, "w9_shape": [4, 5], "100": [4, 5], "w9_mean": [4, 5], "w9_x": [4, 5], "w9_y": [4, 5], "w9_fwhm_x": [4, 5], "w9_fwhm_y": [4, 5], "nan": [4, 5], "520058": 4, "513852": 4, "197259": 4, "152572": 4, "108809": 4, "701000": 4, "164164": 4, "025116": 4, "196433": 4, "145201": 4, "141733": 4, "681383": 4, "536271": 4, "540654": 4, "201374": 4, "137640": 4, "186571": 4, "659964": 4, "667190": 4, "061967": 4, "232234": 4, "137607": 4, "242215": 4, "634798": 4, "524119": 4, "581952": 4, "264168": 4, "132240": 4, "296800": 4, "613439": 4, "w9_photon_energi": [4, 5], "w9_horizontal_ext": [4, 5], "2500": [4, 5], "00041": 4, "1000": 4, "2336298496814044": 4, "405929122101391": 4, "3001551718158006": 4, "4759384530988693": 4, "3684114360191872": 4, "5466178480457953": 4, "4309472940233552": 4, "6109566331651013": 4, "5036858677506284": 4, "695592271987839": 4, "w9_vertical_ext": [4, 5], "w9_id": [4, 5], "w9_titl": [4, 5], "w9_type": [4, 5], "watch": [4, 5], "7103102913794072": 4, "4591117629407924": 4, "7162298148739806": 4, "47877690974846177": 4, "49331718361385357": 4, "5058855096921268": 4, "w9_element_posit": [4, 5], "142": [4, 5], "mpl_toolkit": [4, 5], "axes_grid1": [4, 5], "imagegrid": [4, 5], "shape": [4, 5], "num_fram": [4, 5], "ncol": [4, 5], "nrow": [4, 5], "int": [4, 5], "ceil": [4, 5], "fig": [4, 5], "nrows_ncol": [4, 5], "axes_pad": [4, 5], "aspect": [4, 5], "ax": [4, 5, 6], "im": [4, 5], "zip": [4, 5], "imshow": [4, 5], "auto": [4, 5], "In": [4, 5, 6], "toroid": 4, "mirror": [4, 7], "radiu": 4, "result": [4, 5, 6], "page": [4, 5, 6], "execut": [4, 6], "provid": 4, "bsr": 4, "r_maj": 4, "scan_rang": 4, "10_000": 4, "50_000": 4, "21": [4, 5], "59": 4, "fd4e8ad5": 4, "94ba": 4, "4142": 4, "b71e": 4, "50a6f4ea20db": 4, "toroid_r_maj": 4, "bsr_durat": 4, "10000": 4, "060": 4, "14": [4, 5], "12000": 4, "059": 4, "14000": 4, "061": 4, "16000": 4, "18000": 4, "30": 4, "22000": 4, "33": 4, "24000": 4, "36": 4, "26000": 4, "28000": 4, "42": [4, 5], "30000": 4, "45": 4, "32000": 4, "48": [4, 5], "34000": 4, "51": 4, "36000": 4, "063": 4, "15": [4, 5], "55": 4, "38000": 4, "062": 4, "40000": 4, "18": [4, 5], "00": [4, 5], "42000": 4, "064": 4, "44000": 4, "46000": 4, "48000": 4, "50000": 4, "236491919": 4, "369420290": 4, "500099659": 4, "627287865": 4, "760361433": 4, "887618780": 4, "015768528": 4, "145273447": 4, "277974367": 4, "406346083": 4, "535494566": 4, "661194801": 4, "787432432": 4, "919110060": 4, "051545143": 4, "181778669": 4, "315117121": 4, "449194670": 4, "582443953": 4, "715363503": 4, "848479986": 4, "bsr_sirepo_data_json": 4, "bsr_sirepo_data_hash": 4, "6df45f534c429d3ce2ac6035a27c1826cb5d61059b64bd": 4, "059708": 4, "dcb6016afc14cf5dee9a960b4edc0277ebb41e5c1cb11": 4, "058761": 4, "866db9fe8db0ebcd0222f0dfd7d44808aec9ee501c1bfc": 4, "060861": 4, "bc01f578aa9e4e8cde985d0a5c593ae626b7f578016e94": 4, "058749": 4, "0a9a346c7ce36b1b97b8080206c7ffbb46120d10a833ea": 4, "060685": 4, "c001bc76a847ffe934b903630fb9c2b3f5dfc66be2f1c4": 4, "059997": 4, "5f709df69d2f9012d9cf5696d7a5f82e86c354cd29835a": 4, "060333": 4, "a4c6369d49a6acb440e4937056be87d63e5cc7a55e940a": 4, "059451": 4, "1f31ed1a49ee74685ecec70a681d3a3b9a89791efb35e8": 4, "059817": 4, "5fb03fc9bba636eb6c5ea73644af36b5604f1781452f88": 4, "059096": 4, "b7cd8ebe31961998d1c8168c6e4b57abde49fe966bd080": 4, "059265": 4, "8b3cc90c822df467d90c4b581f65900ed533e94b0ac126": 4, "059388": 4, "b679397686003e328e120f2c4f735d0eb07e435dfd79a6": 4, "059907": 4, "83b1b646368adde8fe45644b47926c9cc206b75521360b": 4, "063354": 4, "c1d9a24d901c37f546b7313cfe052093d407da29bda465": 4, "062083": 4, "148602ecc2607655d7173ec41f082c12aff52a715afe41": 4, "059729": 4, "8a6ca0d8cec6f35241be684b7ec1be887eb20acff96cb0": 4, "063667": 4, "ea830827174885c70f84fa5ae58cb028c760bd537118ff": 4, "061803": 4, "2490c0be74947bc4f20fab5bffbaed55b9b61c268100c8": 4, "060542": 4, "97df283d0447881063dbaf43facfcf83932e06462b0cc7": 4, "061531": 4, "6d6e2951c2171de7328e2a1d7df11a51e2af6ebe03282d": 4, "063372": 4, "bsr_report": 4, "angxpzp": 4, "7793448589854113e": 4, "json": [4, 6], "idx": 4, "rang": [4, 5], "size": [4, 5], "figsiz": 4, "sigmax": 4, "horizon": 4, "sigmaz": 4, "vertic": [4, 5], "distanc": 4, "along": [4, 6], "0f": 4, "ipykernel_7827": 4, "2351232241": 4, "runtimewarn": 4, "than": 4, "open": 4, "through": [4, 7], "interfac": [4, 6], "retain": 4, "until": 4, "close": 4, "consum": 4, "too": [4, 6], "much": 4, "memori": 4, "control": 4, "rcparam": 4, "max_open_warn": 4, "consid": 4, "diff": 4, "dtype": 4, "float": 4, "1e9": 4, "add_subplot": 4, "linspac": 4, "set_ylabel": 4, "set_xlabel": 4, "toru": 4, "major": [4, 6], "axhlin": 4, "mean": 4, "color": 4, "k": 4, "averag": [4, 5], "str": 4, "set_titl": [4, 5], "show": 4, "ari": [5, 7], "horizont": 5, "intens": 5, "2d": 5, "distribut": [5, 6], "watchpoint": 5, "24": 5, "d6280d7e": 5, "da58": 5, "4ded": 5, "a926": 5, "e5aae21a29b3": 5, "255": 5, "298": 5, "18526387871043232": 5, "41": 5, "297": 5, "875181953563727616": 5, "304": 5, "2835218466968361984": 5, "31": 5, "288": 5, "6790626356543558656": 5, "299": 5, "13986029273592827904": 5, "807867050": 5, "297991514": 5, "780310869": 5, "258997917": 5, "737359047": 5, "223885775": 5, "arbitrarymagfield": 5, "interpolati": 5, "ee5c2f45f82ba4e350a3ddf189925440ec0ff7fe773a6f": 5, "255292": 5, "e5ed642016253938983a459b082c5489612696bc05e96b": 5, "297872": 5, "7d53f66f70a6438f729457c7d644371a4a3ade219652b9": 5, "297063": 5, "fd4f8906a5d926d07d528068a9254a6840c3077b3220c3": 5, "303777": 5, "8fb9d1100dd453089f1bc719232d66061d5925b9c2cb23": 5, "288452": 5, "5244afa1dce5a215956fedf3b79529dd794acac9dac326": 5, "299468": 5, "960": 5, "89": 5, "48760223388672": 5, "90": 5, "53831481933594": 5, "827": 5, "259485": 5, "828125": 5, "261822": 5, "359375": 5, "264502": 5, "4375": 5, "9231006": 5, "9837807": 5, "9560670": 5, "9298954": 5, "68404136": 5, "69001112": 5, "69616448": 5, "70282936": 5, "980582272": 5, "1007160704": 5, "1032941312": 5, "103": 5, "000000e": 5, "852639e": 5, "594838e": 5, "046413e": 5, "967015e": 5, "000001": 5, "751820e": 5, "170590e": 5, "024554e": 5, "583469e": 5, "835218e": 5, "031792e": 5, "189527e": 5, "134383e": 5, "000002": 5, "790626e": 5, "684183e": 5, "282297e": 5, "655072e": 5, "398603e": 5, "468757e": 5, "569340e": 5, "041245e": 5, "000010": 5, "000009": 5, "000008": 5, "1254114436366436e": 5, "098470371627117e": 5, "0003455044889645429": 5, "00034048111155643006": 5, "497909541585611e": 5, "223270411427916e": 5, "719082396347529e": 5, "42548462284932e": 5, "8159877207427783e": 5, "5145910127955907e": 5, "880166551489609e": 5, "5761422719808468e": 5, "735306985152392e": 5, "90416995865796e": 5, "789826993692091e": 5, "7460512016671038e": 5, "7882633350325042e": 5, "7445257871487232e": 5, "7370988769071537e": 5, "694612715155033e": 5, "6659549338292866e": 5, "625208818722446e": 5, "556056188360331e": 5, "5179979892601324e": 5, "abov": [5, 6], "resolut": 5, "modif": 5, "factor": 5, "final": 5, "post": 5, "wiki": 5, "avail": [5, 7], "post_propag": 5, "hres_mod": 5, "vres_mod": 5, "list_scan": 5, "append": 5, "a12553e5": 5, "a506": 5, "4087": 5, "a458": 5, "9a15b74f4499": 5, "post_propagation_hres_mod": 5, "post_propagation_vres_mod": 5, "286": 5, "1073588027764959232": 5, "250": 5, "284": 5, "9175285143383783424": 5, "500": 5, "34882217519084883968": 5, "352": 5, "135695678192118038528": 5, "539": 5, "548122645927189348352": 5, "634": 5, "3411483271823718088704": 5, "491739035": 5, "921835184": 5, "391771078": 5, "939577579": 5, "818264008": 5, "834204674": 5, "a59720c5bba367c2e9d568f2222e0f8b445e207174bb7b": 5, "285528": 5, "8e3774028384389bf2ff67e37cbc93342ee590a53194f1": 5, "284330": 5, "587c24218ec86df49677e6112b17c3ab64ce4a07c13864": 5, "297861": 5, "10d1137cd9b31f6348e42e4b6c0e1d41d8158d21aa7149": 5, "352146": 5, "c1771871f2b79554d2c17c79e7d7ec2c82f0e114f1f698": 5, "538574": 5, "cf113e30368cb8754e574bf36717952138841ce01b315f": 5, "633565": 5, "1721587456": 5, "2557412352": 5, "4199480576": 5, "76": 5, "96": 5, "2017206400": 5, "2350037760": 5, "240": 5, "1859788160": 5, "2016864896": 5, "480": 5, "1730436608": 5, "1829556096": 5, "1847066240": 5, "1753671936": 5, "1798936704": 5, "84": 5, "1920": 5, "1733777920": 5, "1746994560": 5, "210": 5, "4752": 5, "073588e": 5, "795802e": 5, "000968e": 5, "216330e": 5, "175285e": 5, "185863e": 5, "416625e": 5, "122926e": 5, "488222e": 5, "303240e": 5, "608676e": 5, "955651e": 5, "356957e": 5, "365468e": 5, "642248e": 5, "798183e": 5, "481226e": 5, "398578e": 5, "638441e": 5, "797064e": 5, "411483e": 5, "418594e": 5, "638518e": 5, "763119e": 5, "000003": 5, "5397359802536857e": 5, "2266423755240344e": 5, "2266423755240347e": 5, "5526929149797263e": 5, "239599310250075e": 5, "123338687538863e": 5, "200689751316548e": 5, "200689751316547e": 5, "085242130678288e": 5, "1625931944559723e": 5, "len": [5, 7], "h_dim": 5, "1e6": 5, "horizontal_ext": 5, "v_dim": 5, "vertical_ext": 5, "interpol": 5, "nearest": 5, "extent": 5, "amplitud": 5, "undul": [5, 7], "singl": 5, "electron": [5, 7], "afterward": 5, "peak": 5, "spectra": 5, "00000003": [5, 7], "intensityreport": 5, "verticalamplitud": 5, "single_electron_spectrum": 5, "flux": 5, "initialenergi": 5, "put": 5, "finalenergi": 5, "1100": 5, "num_step": 5, "ses_data": 5, "single_electron_spectrum_imag": 5, "ampl_data": 5, "undulator_verticalamplitud": 5, "23d53ed4": 5, "64b5": 5, "45a0": 5, "aea4": 5, "13f5079ee851": 5, "single_electron_spectrum_dur": 5, "single_electron_spectrum_flux": 5, "069": 5, "11582410813310422": 5, "47": 5, "068": 5, "7511914020931007": 5, "52": 5, "070": 5, "6133644985399308": 5, "073": 5, "5528586337089524": 5, "067": 5, "4389188523218694": 5, "3839228997372156": 5, "769651175": 5, "979930878": 5, "203298807": 5, "427370548": 5, "647011518": 5, "867648840": 5, "single_electron_spectrum_sirepo_data_json": 5, "single_electron_spectrum_sirepo_data_hash": 5, "069007": 5, "068076": 5, "069942": 5, "073139": 5, "066596": 5, "067782": 5, "328bd7d5": 5, "84e2": 5, "4c28": 5, "9e66": 5, "8f003376cb18": 5, "d3d8a559": 5, "25ce": 5, "4e72": 5, "bed1": 5, "16e9d73edd31": 5, "2b079432": 5, "59f9": 5, "466c": 5, "b20b": 5, "345684acb01": 5, "d1878fb4": 5, "b694": 5, "48d0": 5, "b3b3": 5, "06b741cf63fb": 5, "0a597eb0": 5, "40e0": 5, "485b": 5, "a829": 5, "fbe9aa1af178": 5, "d4197644": 5, "fde7": 5, "40ce": 5, "9447": 5, "0e9af5a7f864": 5, "single_electron_spectrum_shap": 5, "2000": 5, "158241e": 5, "511914e": 5, "133645e": 5, "528586e": 5, "389189e": 5, "839229e": 5, "single_electron_spectrum_mean": 5, "single_electron_spectrum_x": 5, "791205e": 5, "755957e": 5, "066822e": 5, "764293e": 5, "194594e": 5, "919614e": 5, "single_electron_spectrum_i": 5, "single_electron_spectrum_method": 5, "single_electron_spectrum_not": 5, "single_electron_spectrum_photonenergypointcount": 5, "single_electron_spectrum_plotscal": 5, "linear": 5, "single_electron_spectrum_polar": 5, "single_electron_spectrum_precis": 5, "single_electron_spectrum_verticalposit": 5, "single_electron_spectrum_titl": 5, "single_electron_spectrum_typ": 5, "singleelectronspectrum": 5, "peakutil": 5, "vert": 5, "magn": 5, "fld": 5, "3f": 5, "t": 5, "index": 5, "thre": 5, "scatter": 5, "orang": 5, "magnet": [5, 7], "field": 5, "axesimag": 5, "0x7fb2fdde0bb0": 5, "mainten": 6, "small": 6, "fix": 6, "default": 6, "dictionari": 6, "discov": 6, "v1": 6, "ad": 6, "xraylib": 6, "doe": 6, "inform": 6, "about": 6, "miss": 6, "even": 6, "irrelev": 6, "code": 6, "depend": 6, "silenc": 6, "messag": 6, "remov": 6, "pin": 6, "urllib3": 6, "issu": 6, "resolv": 6, "vcrpy": 6, "side": 6, "old": 6, "address": 6, "continu": 6, "integr": 6, "matter": 6, "call": 6, "login": 6, "authent": 6, "_bluesky_": 6, "method": 6, "recreat": 6, "cassett": 6, "futur": 6, "appli": 6, "action": 6, "workflow": 6, "other": 6, "startup": [6, 7], "workflow_dispatch": 6, "trigger": 6, "them": 6, "manual": 6, "includ": 6, "now": 6, "same": 6, "sourc": 6, "either": 6, "therefor": 6, "user": 6, "preinstal": 6, "temporari": 6, "incompat": 6, "between": 6, "request": 6, "v2": 6, "sphinx": 6, "theme": 6, "furo": 6, "drop": 6, "support": 6, "intak": 6, "extend": 6, "sireposignalro": 6, "better": 6, "reflect": 6, "minor": 6, "spell": 6, "error": 6, "demonstr": 6, "compar": 6, "browser": 6, "enforc": 6, "black": 6, "flake8": 6, "isort": 6, "pre": 6, "commit": 6, "hook": 6, "linter": 6, "check": 6, "detector": 6, "flyer": 6, "were": 6, "00000001": [6, 7], "madxfilehandl": 6, "wa": 6, "implement": 6, "produc": 6, "singleelectronspectrumreport": 6, "compon": 6, "stateless": 6, "comput": 6, "graze": [6, 7], "angl": 6, "orient": 6, "That": 6, "necessari": 6, "recalcul": 6, "some": 6, "properti": 6, "normal": 6, "javascript": 6, "client": 6, "convert": 6, "assert": 6, "except": 6, "throughout": 6, "extens": 6, "framework": 6, "consist": 6, "save": 6, "made": 6, "notebook": 6, "an": [6, 7], "cloud": 6, "width": 6, "string": 6, "publish": 6, "io": 6, "newer": 6, "systemd": 6, "unit": 6, "whether": 6, "mamba": 6, "faster": 6, "upload": 6, "artifact": 6, "each": 6, "allow": 6, "inspect": 6, "draft": 6, "rework": 6, "few": 6, "render": 6, "jupyt": 6, "build": 6, "badg": 6, "readm": 6, "rst": 6, "gha": 6, "statu": 6, "custom": [6, 7], "valid": 6, "cpython": 6, "28292": 6, "bug": 6, "issue45173": 6, "shortcom": 6, "granular": 6, "both": 6, "instanti": 6, "add": 6, "thorough": 6, "last": 6, "being": 6, "step": 6, "clean": 6, "up": 6, "unus": 6, "comment": 6, "coverag": 6, "handl": 6, "upper": 6, "pyqt5": 6, "refactor": 6, "per": 6, "addit": 6, "server": 6, "enabl": 6, "variou": 6, "testus": 6, "travisci": 6, "latest": 6, "compat": 6, "multipl": 6, "A": 6, "below": 7, "current": 7, "demo": 7, "00000000": 7, "young": 7, "doubl": 7, "slit": 7, "experi": 7, "basic": 7, "pd": 7, "rix": 7, "250ev_julyreviewvers": 7, "oc": 7, "00000004": 7, "400ev": 7, "tune": 7, "00000005": 7, "arp": 7, "150ev": 7, "julyreviewvers": 7, "00000006": 7, "250ev": 7, "00000007": 7, "sxn_pd_lowe_250ev": 7, "00000008": 7, "sxn_pd_mede_1000ev": 7, "00000009": 7, "sxn_pd_highe_2000ev": 7, "4xrca1p": 7, "csx": 7, "5eignbog": 7, "radiat": 7, "5gfhggo": 7, "lcl": 7, "sxr": 7, "6goesdto": 7, "chx": 7, "tabul": 7, "7bmrabs4": 7, "gaussian": 7, "rai": 7, "imperfect": 7, "8j4f6o4": 7, "focus": 7, "bend": 7, "8kmmmmnu": 7, "green": 7, "laser": 7, "8toxr9xu": 7, "9tnml2bz": 7, "esm": 7, "deuv1ycb": 7, "ellipsoid": 7, "dc8nx4ap": 7, "fmx": 7, "ft9aafdc": 7, "sampl": 7, "gvk38bnr": 7, "soft": 7, "vl": 7, "grate": 7, "hxv1jq5c": 7, "i7gnudxh": 7, "boron": 7, "fiber": 7, "crl": 7, "lens": 7, "lqhssthd": 7, "ot6r81fz": 7, "hxn": 7, "vfbo5lin": 7, "mask": 7, "vis1qhv6": 7, "diffract": 7, "w3hzwvcu": 7, "srx": 7, "wntvduoh": 7, "compound": 7, "refract": 7, "ynze8as0": 7, "cespxpm5": 7, "smi": 7, "cphfvj7y": 7, "crystal": 7, "monochrom": 7, "truncat": 7, "dydww09g": 7, "perfect": 7, "ebnoofxi": 7, "3pw": 7, "qa": 7, "emptysim": 7, "empti": 7, "jmoim0w": 7, "kjdokwmz": 7, "polar": 7, "rtgorgdi": 7, "szdcdqzm": 7, "select": 7, "w7iegqva": 7, "simplifi": 7, "yrqlafmp": 7, "ideal": 7, "free": 7, "puls": 7, "ywrfalht": 7, "z84zbzrk": 7, "ssa": 7, "closer": 7, "2oc4qggg": 7, "laue": 7, "geometri": 7, "3gugjsu6": 7, "complet": 7, "98kb3sxy": 7, "incid": 7, "buxkfltm": 7, "dbqiltwl": 7, "profil": 7, "dybdduxc": 7, "wiggler": 7, "jbqgpdn3": 7, "virtual": 7, "uo8rxqla": 7, "vpwff2la": 7, "curv": 7, "resr": 7, "storag": 7, "ring": 7, "bl1_compton_wtrim": 7, "xpjdzpxp": 7, "fodo": 7, "ptc": 7, "a2kwncgx": 7, "match": 7, "sextupol": 7, "strength": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"exampl": [0, 6], "sirepo": [1, 2, 3, 4, 7], "blueski": 1, "document": [1, 2, 6], "instal": 2, "instruct": 2, "prepar": 2, "start": 2, "mongo": 2, "configur": 2, "databrok": [2, 3], "run": [2, 4, 5], "test": [2, 6, 7], "build": 2, "mad": [3, 7], "x": [3, 7], "simul": [3, 4, 5, 7], "setup": 3, "scan": 3, "model": 3, "befor": 3, "chang": 3, "paramet": 3, "again": 3, "after": 3, "get": 3, "data": 3, "via": 3, "api": [3, 6], "plot": 3, "from": 3, "raw": 3, "tf": 3, "file": 3, "screenshot": 3, "websit": 3, "origin": 3, "shadow": 4, "beamlin": [4, 5], "shadow3": [4, 7], "beam": 4, "statist": 4, "app": 4, "srw": [5, 7], "propag": 5, "ophyd": 5, "object": 5, "us": [5, 7], "engin": 5, "gener": 5, "spectrum": 5, "report": 5, "releas": 6, "histori": 6, "v0": 6, "6": 6, "2": 6, "2023": 6, "06": 6, "09": 6, "packag": 6, "1": 6, "05": 6, "26": 6, "ci": 6, "improv": 6, "0": 6, "02": 6, "23": 6, "applic": 6, "lint": 6, "style": 6, "5": 6, "2022": 6, "11": 6, "04": 6, "script": 6, "servic": 6, "4": 6, "3": 6, "2021": 6, "12": 6, "17": 6, "13": 6, "10": 6, "22": 6, "08": 6, "2020": 6, "03": 6, "initi": 6, "list": 7, "predefin": 7, "other": 7}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "nbsphinx": 4, "sphinx": 58}, "alltitles": {"Examples": [[0, "examples"], [6, "examples"], [6, "id11"]], "sirepo-bluesky Documentation": [[1, "sirepo-bluesky-documentation"]], "Installation instructions": [[2, "installation-instructions"]], "Preparation": [[2, "preparation"]], "Starting Sirepo": [[2, "starting-sirepo"]], "Starting Mongo": [[2, "starting-mongo"]], "Configuration of databroker": [[2, "configuration-of-databroker"]], "Installation": [[2, "installation"]], "Run tests": [[2, "run-tests"]], "Build documentation": [[2, "build-documentation"]], "MAD-X Simulations": [[3, "MAD-X-Simulations"]], "Setup and scan model before changing parameters": [[3, "Setup-and-scan-model-before-changing-parameters"]], "Scan again after changing parameters": [[3, "Scan-again-after-changing-parameters"]], "Get the data via databroker API and plot": [[3, "Get-the-data-via-databroker-API-and-plot"]], "Get the data from the raw TFS file and plot": [[3, "Get-the-data-from-the-raw-TFS-file-and-plot"]], "Screenshots from Sirepo Website": [[3, "Screenshots-from-Sirepo-Website"]], "Original model, before changing parameters": [[3, "Original-model,-before-changing-parameters"]], "After changing parameters": [[3, "After-changing-parameters"]], "Shadow Simulations": [[4, "Shadow-Simulations"]], "Run \u201cBeamline\u201d Shadow3 simulations": [[4, "Run-%22Beamline%22-Shadow3-simulations"]], "Run \u201cBeam Statistics\u201d Sirepo/Shadow app simulations": [[4, "Run-%22Beam-Statistics%22-Sirepo/Shadow-app-simulations"]], "SRW Simulations": [[5, "SRW-Simulations"]], "Run \u201cBeamline\u201d SRW simulations": [[5, "Run-%22Beamline%22-SRW-simulations"]], "SRW Propagation as Ophyd Objects": [[5, "SRW-Propagation-as-Ophyd-Objects"]], "Using Run Engine to Generate Spectrum Reports": [[5, "Using-Run-Engine-to-Generate-Spectrum-Reports"]], "Release History": [[6, "release-history"]], "v0.6.2 (2023-06-09)": [[6, "v0-6-2-2023-06-09"]], "API": [[6, "api"], [6, "id1"], [6, "id5"]], "Packaging": [[6, "packaging"], [6, "id3"]], "Documentation": [[6, "documentation"], [6, "id4"], [6, "id7"], [6, "id12"]], "Tests": [[6, "tests"], [6, "id2"], [6, "id10"]], "v0.6.1 (2023-05-26)": [[6, "v0-6-1-2023-05-26"]], "CI improvements": [[6, "ci-improvements"], [6, "id8"], [6, "id13"]], "v0.6.0 (2023-02-23)": [[6, "v0-6-0-2023-02-23"]], "Applications": [[6, "applications"], [6, "id9"]], "Linting/styling": [[6, "linting-styling"]], "v0.5.0 (2022-11-04)": [[6, "v0-5-0-2022-11-04"]], "Scripts/services": [[6, "scripts-services"]], "v0.4.3 (2021-12-17)": [[6, "v0-4-3-2021-12-17"]], "v0.4.2 (2021-12-13)": [[6, "v0-4-2-2021-12-13"]], "v0.4.1 (2021-11-10)": [[6, "v0-4-1-2021-11-10"]], "Packaging/CI": [[6, "packaging-ci"]], "v0.4.0 (2021-10-11)": [[6, "v0-4-0-2021-10-11"]], "v0.3.1 (2021-09-22)": [[6, "v0-3-1-2021-09-22"]], "v0.3.0 (2021-08-17)": [[6, "v0-3-0-2021-08-17"]], "v0.2.0 (2021-04-22)": [[6, "v0-2-0-2021-04-22"]], "v0.1.0 (2020-09-02)": [[6, "v0-1-0-2020-09-02"]], "v0.0.2 (2020-03-02)": [[6, "v0-0-2-2020-03-02"]], "v0.0.1 - Initial Release (2020-03-02)": [[6, "v0-0-1-initial-release-2020-03-02"]], "List of predefined simulations in Sirepo": [[7, "list-of-predefined-simulations-in-sirepo"]], "SRW": [[7, "srw"]], "SRW simulations used for testing": [[7, "srw-simulations-used-for-testing"]], "Other SRW simulations": [[7, "other-srw-simulations"]], "Shadow3": [[7, "shadow3"]], "Shadow3 simulations used for testing": [[7, "shadow3-simulations-used-for-testing"]], "Other Shadow3 simulations": [[7, "other-shadow3-simulations"]], "MAD-X": [[7, "mad-x"]], "MAD-X simulations used for testing": [[7, "mad-x-simulations-used-for-testing"]], "Other MAD-X simulations": [[7, "other-mad-x-simulations"]]}, "indexentries": {}})