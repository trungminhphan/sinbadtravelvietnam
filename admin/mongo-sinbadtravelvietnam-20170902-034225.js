
/** banner indexes **/
db.getCollection("banner").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** booking indexes **/
db.getCollection("booking").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmucdiemden indexes **/
db.getCollection("danhmucdiemden").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** danhmuctour indexes **/
db.getCollection("danhmuctour").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** fs.chunks indexes **/
db.getCollection("fs.chunks").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** fs.chunks indexes **/
db.getCollection("fs.chunks").ensureIndex({
  "files_id": NumberInt(1),
  "n": NumberInt(1)
},{
  "unique": true
});

/** fs.files indexes **/
db.getCollection("fs.files").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** lichkhoihanh indexes **/
db.getCollection("lichkhoihanh").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** sessions indexes **/
db.getCollection("sessions").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** tours indexes **/
db.getCollection("tours").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** tuvanvisa indexes **/
db.getCollection("tuvanvisa").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** banner records **/
db.getCollection("banner").insert({
  "_id": ObjectId("5951214f7247aef00f00002d"),
  "banner": [
    {
      "filename": "adithya-ananth-77501.jpg",
      "aliasname": "da6601b19a6fb18c1e75692ff9d28cce_20170718010746.jpg",
      "mota": "Du lịch Bắc Âu",
      "link": "http://tourinstyle.vn/tour_detail.html?id=5950d7422b063b55108b4567",
      "orders": "0"
    },
    {
      "filename": "brady-bellini-48081.jpg",
      "aliasname": "3c2ed31f818ebc5f015398fd52044cf9_20170718010719.jpg",
      "mota": "Du lịch Hàn Quốc",
      "link": "http://tourinstyle.vn/tour_detail.html?id=59550fc82b063b742f8b4567",
      "orders": "0"
    }
  ],
  "banner_right": [
    {
      "filename": "alexey-topolyanskiy-66867.jpg",
      "aliasname": "6beb0ba8909b8b50b4344b991380c2bc_20170718020728.jpg",
      "mota": "Du lịc Bắc Âu",
      "link": "http://tourinstyle.vn/tour_detail.html?id=5950d7422b063b55108b4567",
      "orders": "0"
    }
  ]
});

/** booking records **/
db.getCollection("booking").insert({
  "_id": ObjectId("596dd03d2b063bae418b4567"),
  "hoten": "Phan Minh Trung",
  "email": "trungminhphan@gmail.com",
  "dienthoai": "0985954347",
  "sove": "1",
  "ghichu": "ABC",
  "id_tour": ObjectId("5950d7422b063b55108b4567"),
  "date_post": ISODate("2017-07-18T09:09:17.749Z")
});

/** danhmucdiemden records **/
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595088f62b063b794d8b4567"),
  "ten": "Nhật Bản",
  "id_parent": ObjectId("595504112b063b8c1f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("5950d6c12b063bc50f8b4567"),
  "ten": "Châu Âu",
  "id_parent": "",
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595345d72b063b82378b4567"),
  "ten": "Pháp",
  "id_parent": ObjectId("5950d6c12b063bc50f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595345e42b063b82378b4568"),
  "ten": "Đức",
  "id_parent": ObjectId("5950d6c12b063bc50f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595345ef2b063b82378b4569"),
  "ten": "Ý",
  "id_parent": ObjectId("5950d6c12b063bc50f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("5953480a2b063be13a8b4567"),
  "ten": "Na Uy",
  "id_parent": ObjectId("5950d6c12b063bc50f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595348152b063be13a8b4568"),
  "ten": "Thuỵ Điển",
  "id_parent": ObjectId("5950d6c12b063bc50f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595504112b063b8c1f8b4567"),
  "ten": "Châu Á",
  "id_parent": "",
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595504392b063b8c1f8b4568"),
  "ten": "Hàn Quốc",
  "id_parent": ObjectId("595504112b063b8c1f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("5956442a2b063b1c618b4567"),
  "ten": "Tây Ban Nha",
  "id_parent": ObjectId("5950d6c12b063bc50f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595737422b063b99358b4568"),
  "ten": "Thuỵ Sĩ",
  "id_parent": ObjectId("5950d6c12b063bc50f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmucdiemden").insert({
  "_id": ObjectId("595737552b063b99358b4569"),
  "ten": "Dubai",
  "id_parent": ObjectId("595504112b063b8c1f8b4567"),
  "mota": "",
  "hinhanh": [
    
  ]
});

/** danhmuctour records **/
db.getCollection("danhmuctour").insert({
  "_id": ObjectId("594f53b22b063b32148b4569"),
  "ten": "Tour trong nước",
  "id_parent": "",
  "mota": "",
  "hinhanh": [
    
  ]
});
db.getCollection("danhmuctour").insert({
  "_id": ObjectId("594f53be2b063b32148b456a"),
  "ten": "Tour ngoài nước",
  "id_parent": "",
  "mota": "",
  "hinhanh": [
    
  ]
});

/** fs.chunks records **/
db.getCollection("fs.chunks").insert({
  "_id": ObjectId("59aa25e57247ae0c0f000034"),
  "files_id": ObjectId("59aa25e57247ae0c0f000033"),
  "n": NumberInt(0),
  "data": "<Mongo Binary Data>"
});

/** fs.files records **/
db.getCollection("fs.files").insert({
  "_id": ObjectId("59aa25e57247ae0c0f000033"),
  "filename": "logo.png",
  "filetype": "image/png",
  "caption": "logo.png",
  "uploadDate": ISODate("2017-09-02T03:30:45.0Z"),
  "length": NumberInt(73869),
  "chunkSize": NumberInt(261120),
  "md5": "dcc1f3497fc26effb4bb9519fb5f7882"
});

/** lichkhoihanh records **/
db.getCollection("lichkhoihanh").insert({
  "_id": ObjectId("597863652b063b7e498b4567"),
  "ngaykhoihanh": [
    ISODate("2017-07-23T00:00:00.0Z")
  ],
  "ngayketthuc": [
    ISODate("2017-08-02T00:00:00.0Z")
  ],
  "id_tours": [
    "59564ade2b063b8e6a8b4567"
  ],
  "date_post": ISODate("2017-07-26T09:39:49.288Z")
});

/** sessions records **/
db.getCollection("sessions").insert({
  "_id": ObjectId("59aa20b64bf84a34dd23d67b"),
  "session_id": "91fehon3nd5r2v5bmr348d3ef0",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1504329551),
  "expired_at": NumberInt(1504357718)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594f532da5e83364b2491f22"),
  "session_id": "113lds4gco2o0fkbbgtk366e50",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:11;",
  "timedout_at": NumberInt(1498377006),
  "expired_at": NumberInt(1498406861)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59381591d5d64236d5604249"),
  "session_id": "b96idu3vjscrguqaei2duok8f4",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:11;",
  "timedout_at": NumberInt(1496854191),
  "expired_at": NumberInt(1496883761)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("594fcc37a5e83364b2491f26"),
  "session_id": "4aiv5m42sfpqad091jm4o2m385",
  "data": "",
  "timedout_at": NumberInt(1498407847),
  "expired_at": NumberInt(1498437847)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("595087d3a5e83364b2491f27"),
  "session_id": "h4mg7gv10vn7ki2jhnhntc9qg5",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1498632578),
  "expired_at": NumberInt(1498661091)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59512c96117925d093a28856"),
  "session_id": "2880a9e67v8ifrl6mk0hcq4kd4",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1498498431),
  "expired_at": NumberInt(1498528054)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("595202fc117925d093a28857"),
  "session_id": "qh3vv4s245h3g16u3079o8ef42",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1498553268),
  "expired_at": NumberInt(1498582940)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59532b25c9e5fd2cd3861f2d"),
  "session_id": "b5jl0fepum6725buqajc4fohr3",
  "data": "",
  "timedout_at": NumberInt(1498628757),
  "expired_at": NumberInt(1498658757)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5953594ac9e5fd2cd3861f2f"),
  "session_id": "dvkqk66r16l39s4fumufbh13l4",
  "data": "",
  "timedout_at": NumberInt(1498640583),
  "expired_at": NumberInt(1498670570)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5953c8ccc9e5fd2cd3861f31"),
  "session_id": "8uhtr9c45qlrv1sg6egdlj8ab2",
  "data": "",
  "timedout_at": NumberInt(1498669124),
  "expired_at": NumberInt(1498699116)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5955109ec9e5fd2cd3861f33"),
  "session_id": "qmfftm1hm1uuohifq850aot4v5",
  "data": "",
  "timedout_at": NumberInt(1498753038),
  "expired_at": NumberInt(1498783038)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59560cb9c9e5fd2cd3861f35"),
  "session_id": "kigoe47isrljphdv3mfn718pn3",
  "data": "",
  "timedout_at": NumberInt(1498817577),
  "expired_at": NumberInt(1498847577)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5959a799c9e5fd2cd3861f37"),
  "session_id": "2ach6teb40sbe9stb0up02g2a3",
  "data": "",
  "timedout_at": NumberInt(1499053833),
  "expired_at": NumberInt(1499083833)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5964d213c9e5fd2cd3861f38"),
  "session_id": "9kg0png6lv8dmcv2esd20ef7k6",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1499785926),
  "expired_at": NumberInt(1499815603)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("596dd06dc9e5fd2cd3861f39"),
  "session_id": "iiblo2v1cloru2d418gbbi8qk1",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1500375977),
  "expired_at": NumberInt(1500405005)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("596e1085c9e5fd2cd3861f3a"),
  "session_id": "ops678f433ecvvk0lnbdv00no5",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1500392762),
  "expired_at": NumberInt(1500421413)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597180abc9e5fd2cd3861f3b"),
  "session_id": "3t38c0e7vdqn44mearmu8j9ks0",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1500617327),
  "expired_at": NumberInt(1500646731)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59740da9c9e5fd2cd3861f3c"),
  "session_id": "i4gpga66h4m724n28ai0f3d835",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1500791001),
  "expired_at": NumberInt(1500813897)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5976f0cfc9e5fd2cd3861f3d"),
  "session_id": "1b5d14ikss3il57j6sqd4bt667",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1500973148),
  "expired_at": NumberInt(1501003119)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5977f5b0c9e5fd2cd3861f3e"),
  "session_id": "re5mkb88h42r6i5sngggt4n0q1",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1501040436),
  "expired_at": NumberInt(1501069904)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59782b8dc9e5fd2cd3861f3f"),
  "session_id": "tdm73be5oepuu86ang4ehrh1o4",
  "data": "",
  "timedout_at": NumberInt(1501053693),
  "expired_at": NumberInt(1501083693)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597843aec9e5fd2cd3861f40"),
  "session_id": "r3rlnovup0kla41hd9hfdkk9r0",
  "data": "",
  "timedout_at": NumberInt(1501059870),
  "expired_at": NumberInt(1501089870)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59786311c9e5fd2cd3861f41"),
  "session_id": "757uu859vv13emjftst763qir6",
  "data": "",
  "timedout_at": NumberInt(1501450752),
  "expired_at": NumberInt(1501480752)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5978eebac9e5fd2cd3861f42"),
  "session_id": "948uqhla5dg7v2e8f3c26eole7",
  "data": "",
  "timedout_at": NumberInt(1501103658),
  "expired_at": NumberInt(1501133658)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59792b3ec9e5fd2cd3861f43"),
  "session_id": "jh79h2fprh44ofm065vj7muae3",
  "data": "",
  "timedout_at": NumberInt(1501119150),
  "expired_at": NumberInt(1501149150)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59794135c9e5fd2cd3861f44"),
  "session_id": "3mts3qca5p64h05pbme732dvp1",
  "data": "",
  "timedout_at": NumberInt(1501124773),
  "expired_at": NumberInt(1501154773)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59795116c9e5fd2cd3861f45"),
  "session_id": "6dlnnt5d5odobr0jj92osq7g51",
  "data": "",
  "timedout_at": NumberInt(1501128838),
  "expired_at": NumberInt(1501158838)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5979779ac9e5fd2cd3861f46"),
  "session_id": "j1cm89slihe2nob4ncc37kt536",
  "data": "",
  "timedout_at": NumberInt(1501139109),
  "expired_at": NumberInt(1501168698)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597a09e4c9e5fd2cd3861f47"),
  "session_id": "kpqsl47tarbjf27tnhq8du3dl0",
  "data": "",
  "timedout_at": NumberInt(1501176148),
  "expired_at": NumberInt(1501206148)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597a0a30c9e5fd2cd3861f48"),
  "session_id": "i5k0d9p303fep35c1kip18sm80",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1501177152),
  "expired_at": NumberInt(1501206224)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597a2b39c9e5fd2cd3861f49"),
  "session_id": "uit6gor4t8ertvhipisqjfu6l6",
  "data": "",
  "timedout_at": NumberInt(1501407236),
  "expired_at": NumberInt(1501437236)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597a2bd9c9e5fd2cd3861f4a"),
  "session_id": "a1qpf15cjssvurunsm8oun6lp4",
  "data": "",
  "timedout_at": NumberInt(1501184900),
  "expired_at": NumberInt(1501214841)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597b731ec9e5fd2cd3861f4b"),
  "session_id": "a22an7fbpb0sjlqej8b8dgtg71",
  "data": "",
  "timedout_at": NumberInt(1501268622),
  "expired_at": NumberInt(1501298622)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597b78bbc9e5fd2cd3861f4c"),
  "session_id": "l17v7ql129l54dmj174g2hs9n2",
  "data": "",
  "timedout_at": NumberInt(1501270059),
  "expired_at": NumberInt(1501300059)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597b8cd1c9e5fd2cd3861f4d"),
  "session_id": "005hr3tcu1nsn5uvjomvaf3ba2",
  "data": "",
  "timedout_at": NumberInt(1501275201),
  "expired_at": NumberInt(1501305201)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597bcbe7c9e5fd2cd3861f4e"),
  "session_id": "o924gth86hrj70m392fdekve86",
  "data": "",
  "timedout_at": NumberInt(1501291351),
  "expired_at": NumberInt(1501321351)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597c10e7c9e5fd2cd3861f4f"),
  "session_id": "9874vectpe3q6biev18vfi24i0",
  "data": "",
  "timedout_at": NumberInt(1501309015),
  "expired_at": NumberInt(1501339015)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597c200ec9e5fd2cd3861f50"),
  "session_id": "6nph3h3qd69uaht63nf9fjovb7",
  "data": "",
  "timedout_at": NumberInt(1501312894),
  "expired_at": NumberInt(1501342894)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597c472ec9e5fd2cd3861f51"),
  "session_id": "hh6gnsr89b738aioffkrrtu535",
  "data": "",
  "timedout_at": NumberInt(1501322910),
  "expired_at": NumberInt(1501352910)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597c475ac9e5fd2cd3861f52"),
  "session_id": "q8jllg405fvif5qfv084f2tr24",
  "data": "",
  "timedout_at": NumberInt(1501322954),
  "expired_at": NumberInt(1501352954)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597c4788c9e5fd2cd3861f53"),
  "session_id": "6ei2vqs5uij842jkdrvjdfljg7",
  "data": "",
  "timedout_at": NumberInt(1501323000),
  "expired_at": NumberInt(1501353000)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597c8301c9e5fd2cd3861f54"),
  "session_id": "2a1lhjkd05udue0f5m4pp62ab7",
  "data": "",
  "timedout_at": NumberInt(1501338225),
  "expired_at": NumberInt(1501368225)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597d35b7c9e5fd2cd3861f55"),
  "session_id": "51ktov6im89r14rup2kh7vf4j4",
  "data": "",
  "timedout_at": NumberInt(1501383975),
  "expired_at": NumberInt(1501413975)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597f2e87c9e5fd2cd3861f56"),
  "session_id": "do1f7rq4e2ilvlen70hl16fj13",
  "data": "",
  "timedout_at": NumberInt(1501513207),
  "expired_at": NumberInt(1501543207)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("597f8b68c9e5fd2cd3861f57"),
  "session_id": "quiopunje4j50dfrghqa5q88d1",
  "data": "",
  "timedout_at": NumberInt(1501536984),
  "expired_at": NumberInt(1501566984)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59801490c9e5fd2cd3861f58"),
  "session_id": "42vr60umd1bndn3a0330jfffi3",
  "data": "",
  "timedout_at": NumberInt(1501572096),
  "expired_at": NumberInt(1501602096)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59806f43c9e5fd2cd3861f59"),
  "session_id": "gc2ftbq076ier6an87e51kgpb0",
  "data": "",
  "timedout_at": NumberInt(1501595315),
  "expired_at": NumberInt(1501625315)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59808043c9e5fd2cd3861f5a"),
  "session_id": "ou5tomsjcuomb0i28iqps0fbm1",
  "data": "",
  "timedout_at": NumberInt(1501599667),
  "expired_at": NumberInt(1501629667)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59808e97c9e5fd2cd3861f5b"),
  "session_id": "npd0m8dneumb9ek3bsiktoq3k2",
  "data": "",
  "timedout_at": NumberInt(1501603335),
  "expired_at": NumberInt(1501633335)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5981188cc9e5fd2cd3861f5c"),
  "session_id": "1gka7oq5dlr1l4kg78d8qeif51",
  "data": "",
  "timedout_at": NumberInt(1501638652),
  "expired_at": NumberInt(1501668652)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59812a37c9e5fd2cd3861f5d"),
  "session_id": "sja4ov75t3magndevshv4ho543",
  "data": "",
  "timedout_at": NumberInt(1501643175),
  "expired_at": NumberInt(1501673175)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598139c6c9e5fd2cd3861f5e"),
  "session_id": "pipbd78h8ff02ggej6dplr7hq5",
  "data": "",
  "timedout_at": NumberInt(1501647158),
  "expired_at": NumberInt(1501677158)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598159ebc9e5fd2cd3861f5f"),
  "session_id": "1cv6a5fmp1uf9rf7brug2p77l2",
  "data": "",
  "timedout_at": NumberInt(1501655387),
  "expired_at": NumberInt(1501685387)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5981682dc9e5fd2cd3861f60"),
  "session_id": "pb4ncgggd8p3dcicbb4o27hct5",
  "data": "",
  "timedout_at": NumberInt(1501659037),
  "expired_at": NumberInt(1501689037)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59817c7dc9e5fd2cd3861f61"),
  "session_id": "5cvt5vk4jjj9t65q647lmorhe4",
  "data": "",
  "timedout_at": NumberInt(1501664237),
  "expired_at": NumberInt(1501694237)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59818726c9e5fd2cd3861f62"),
  "session_id": "v2rqkpejj8n4okgl6q9l0o4mq4",
  "data": "",
  "timedout_at": NumberInt(1501666966),
  "expired_at": NumberInt(1501696966)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59819b3fc9e5fd2cd3861f63"),
  "session_id": "eo3b5767mr6d6m5mkqpc9tf2b1",
  "data": "",
  "timedout_at": NumberInt(1501672143),
  "expired_at": NumberInt(1501702111)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59819f06c9e5fd2cd3861f64"),
  "session_id": "2krj782rgbv96or6c781bgou54",
  "data": "",
  "timedout_at": NumberInt(1501673078),
  "expired_at": NumberInt(1501703078)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59826c3bc9e5fd2cd3861f65"),
  "session_id": "7s5bcg5j5d080no96tsgqvu165",
  "data": "",
  "timedout_at": NumberInt(1501725611),
  "expired_at": NumberInt(1501755611)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5982e492c9e5fd2cd3861f66"),
  "session_id": "4e67m7j089pfrmq7fs10m6m9p4",
  "data": "",
  "timedout_at": NumberInt(1501756418),
  "expired_at": NumberInt(1501786418)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5983d995c9e5fd2cd3861f67"),
  "session_id": "nnjffoqa9aha79l7bj6mpbb250",
  "data": "",
  "timedout_at": NumberInt(1501819145),
  "expired_at": NumberInt(1501849141)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5983d9eec9e5fd2cd3861f68"),
  "session_id": "t28t1cn7ljq5qnb11vfqdfrqn3",
  "data": "",
  "timedout_at": NumberInt(1501819230),
  "expired_at": NumberInt(1501849230)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5983d9f0c9e5fd2cd3861f69"),
  "session_id": "usbo4hrae561jb4en22fvaugc4",
  "data": "",
  "timedout_at": NumberInt(1501819232),
  "expired_at": NumberInt(1501849232)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5983d9f4c9e5fd2cd3861f6a"),
  "session_id": "oqvicarf0f33je2nk00ofh7ae0",
  "data": "",
  "timedout_at": NumberInt(1501823627),
  "expired_at": NumberInt(1501849236)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5983decac9e5fd2cd3861f6b"),
  "session_id": "mavk0po5umnrk4k5oitp703k23",
  "data": "",
  "timedout_at": NumberInt(1501820474),
  "expired_at": NumberInt(1501850474)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598404e3c9e5fd2cd3861f6c"),
  "session_id": "o9arp3udngsehen9j2fklfgle5",
  "data": "",
  "timedout_at": NumberInt(1501830227),
  "expired_at": NumberInt(1501860227)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59840914c9e5fd2cd3861f6d"),
  "session_id": "5kti1ku80c241jgdq6bvl4e9e6",
  "data": "",
  "timedout_at": NumberInt(1501831300),
  "expired_at": NumberInt(1501861300)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59845a98c9e5fd2cd3861f6e"),
  "session_id": "fsp0l0cfmbhcqp5rrrjra2kcq6",
  "data": "",
  "timedout_at": NumberInt(1501852168),
  "expired_at": NumberInt(1501882168)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5984c8eac9e5fd2cd3861f6f"),
  "session_id": "afdlq96dqp9nvk34c9si4lnl10",
  "data": "",
  "timedout_at": NumberInt(1501880410),
  "expired_at": NumberInt(1501910410)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5984de8dc9e5fd2cd3861f70"),
  "session_id": "6ocgq14a1lantn3nq7qnpffs61",
  "data": "",
  "timedout_at": NumberInt(1501885949),
  "expired_at": NumberInt(1501915949)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59851eb8c9e5fd2cd3861f71"),
  "session_id": "5b14qhbaor5kr0ocrj9dak0dm6",
  "data": "",
  "timedout_at": NumberInt(1501902376),
  "expired_at": NumberInt(1501932376)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59858c3ec9e5fd2cd3861f72"),
  "session_id": "ianqu2fm4jvuia0n215ei605a4",
  "data": "",
  "timedout_at": NumberInt(1501930414),
  "expired_at": NumberInt(1501960414)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598610b3c9e5fd2cd3861f73"),
  "session_id": "p80r5qhvs5qe9s0tbi0bh5pac0",
  "data": "",
  "timedout_at": NumberInt(1501964323),
  "expired_at": NumberInt(1501994323)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598648b5c9e5fd2cd3861f74"),
  "session_id": "n6bi07f3k4gonse20ta0imjh92",
  "data": "",
  "timedout_at": NumberInt(1501978661),
  "expired_at": NumberInt(1502008661)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5986ad5bc9e5fd2cd3861f75"),
  "session_id": "pgn41vkk1sugrd23c6ap3gn6g7",
  "data": "",
  "timedout_at": NumberInt(1502004427),
  "expired_at": NumberInt(1502034427)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598727d1c9e5fd2cd3861f76"),
  "session_id": "n4p9fbdcm8ccnudtvo3hj4ap13",
  "data": "",
  "timedout_at": NumberInt(1502035777),
  "expired_at": NumberInt(1502065777)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5987500dc9e5fd2cd3861f77"),
  "session_id": "cv690dp0a59j6pjvqb4a1t2pf3",
  "data": "",
  "timedout_at": NumberInt(1502046077),
  "expired_at": NumberInt(1502076077)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59875139c9e5fd2cd3861f78"),
  "session_id": "qn1j6tnclt5aju1cfaactiqhv4",
  "data": "",
  "timedout_at": NumberInt(1502046377),
  "expired_at": NumberInt(1502076377)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5987d37cc9e5fd2cd3861f79"),
  "session_id": "092f0n0qqm82jjsf79b62e91q1",
  "data": "",
  "timedout_at": NumberInt(1502079724),
  "expired_at": NumberInt(1502109724)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5987edafc9e5fd2cd3861f7a"),
  "session_id": "sq3202htsv6oemlgaoasa3g180",
  "data": "",
  "timedout_at": NumberInt(1502086431),
  "expired_at": NumberInt(1502116431)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5987f395c9e5fd2cd3861f7b"),
  "session_id": "7hpk000ah7p04gdjl60qf5o6v4",
  "data": "",
  "timedout_at": NumberInt(1502087941),
  "expired_at": NumberInt(1502117941)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5988064dc9e5fd2cd3861f7c"),
  "session_id": "e4c61du2rofi25cgmk6up71ga0",
  "data": "",
  "timedout_at": NumberInt(1502092733),
  "expired_at": NumberInt(1502122733)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598887d8c9e5fd2cd3861f7d"),
  "session_id": "p39qdt125s0hhfcsbka1rjf9k2",
  "data": "",
  "timedout_at": NumberInt(1502125896),
  "expired_at": NumberInt(1502155896)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5988b153c9e5fd2cd3861f7e"),
  "session_id": "pracr4o1d9rha3vf0mmjgmutk6",
  "data": "",
  "timedout_at": NumberInt(1502136515),
  "expired_at": NumberInt(1502166515)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5988c096c9e5fd2cd3861f7f"),
  "session_id": "lnchjlsqd668u4ukju5l5h1pf5",
  "data": "",
  "timedout_at": NumberInt(1502140422),
  "expired_at": NumberInt(1502170422)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5988e349c9e5fd2cd3861f80"),
  "session_id": "7945o5li0nht0gpnphm9l26451",
  "data": "",
  "timedout_at": NumberInt(1502149305),
  "expired_at": NumberInt(1502179305)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5988fa17c9e5fd2cd3861f81"),
  "session_id": "97g4sdh753j320f2efci7q7160",
  "data": "",
  "timedout_at": NumberInt(1502155143),
  "expired_at": NumberInt(1502185143)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598919b8c9e5fd2cd3861f82"),
  "session_id": "k35070555686nu75ttrp448gr3",
  "data": "",
  "timedout_at": NumberInt(1502163252),
  "expired_at": NumberInt(1502193240)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598b18f5c9e5fd2cd3861f83"),
  "session_id": "jkghs5hvvo4gcs4eli2pl626e2",
  "data": "",
  "timedout_at": NumberInt(1502294117),
  "expired_at": NumberInt(1502324117)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e066ac9e5fd2cd3861f84"),
  "session_id": "0aklmolita1to6pmj7jl29v275",
  "data": "",
  "timedout_at": NumberInt(1502485978),
  "expired_at": NumberInt(1502515978)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e15c4c9e5fd2cd3861f85"),
  "session_id": "o1a7fom3a3akl0fn5qbompivv4",
  "data": "",
  "timedout_at": NumberInt(1502489908),
  "expired_at": NumberInt(1502519908)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1891c9e5fd2cd3861f86"),
  "session_id": "7u38um3hm5hanp57pv79h4jt55",
  "data": "",
  "timedout_at": NumberInt(1502490625),
  "expired_at": NumberInt(1502520625)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1891c9e5fd2cd3861f87"),
  "session_id": "606o8dgrklpkhv6nc9n06g0cq7",
  "data": "",
  "timedout_at": NumberInt(1502490625),
  "expired_at": NumberInt(1502520625)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1893c9e5fd2cd3861f88"),
  "session_id": "hrfvkjab7v35p13dt2phmun4l4",
  "data": "",
  "timedout_at": NumberInt(1502490627),
  "expired_at": NumberInt(1502520627)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1893c9e5fd2cd3861f89"),
  "session_id": "qf0tdpb2dudor22f51k53qemu0",
  "data": "",
  "timedout_at": NumberInt(1502490627),
  "expired_at": NumberInt(1502520627)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1893c9e5fd2cd3861f8a"),
  "session_id": "8bb9ghjgi66htvm83cbihgj4g0",
  "data": "",
  "timedout_at": NumberInt(1502490627),
  "expired_at": NumberInt(1502520627)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1893c9e5fd2cd3861f8b"),
  "session_id": "r87glq763glmtc70k5i5k6ufc2",
  "data": "",
  "timedout_at": NumberInt(1502490627),
  "expired_at": NumberInt(1502520627)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1893c9e5fd2cd3861f8c"),
  "session_id": "lp9fr262d2f6h593hjqumrl2r1",
  "data": "",
  "timedout_at": NumberInt(1502490627),
  "expired_at": NumberInt(1502520627)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1bf5c9e5fd2cd3861f8d"),
  "session_id": "evh4pacm4okjb3muv1ik395rb6",
  "data": "",
  "timedout_at": NumberInt(1502491493),
  "expired_at": NumberInt(1502521493)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1bf5c9e5fd2cd3861f8e"),
  "session_id": "21rn5i9iurqnnh00kfu5t8k2m1",
  "data": "",
  "timedout_at": NumberInt(1502491493),
  "expired_at": NumberInt(1502521493)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1bf5c9e5fd2cd3861f8f"),
  "session_id": "it4pccnnd3klhrv7ko63n4ub50",
  "data": "",
  "timedout_at": NumberInt(1502491493),
  "expired_at": NumberInt(1502521493)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1bf6c9e5fd2cd3861f90"),
  "session_id": "0ur7ftv9g428plna44dhcvde45",
  "data": "",
  "timedout_at": NumberInt(1502491494),
  "expired_at": NumberInt(1502521494)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1bf6c9e5fd2cd3861f91"),
  "session_id": "221fp8acggtaqbpsi12g5h6nn6",
  "data": "",
  "timedout_at": NumberInt(1502491494),
  "expired_at": NumberInt(1502521494)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1bf6c9e5fd2cd3861f92"),
  "session_id": "qmubevtji4j5pqsjfb1o9cscr6",
  "data": "",
  "timedout_at": NumberInt(1502491494),
  "expired_at": NumberInt(1502521494)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1bf7c9e5fd2cd3861f93"),
  "session_id": "mhpnsou8pjs56pj068shj2rk33",
  "data": "",
  "timedout_at": NumberInt(1502491495),
  "expired_at": NumberInt(1502521495)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1bf9c9e5fd2cd3861f94"),
  "session_id": "n47o649l0og54pu07sq890g651",
  "data": "",
  "timedout_at": NumberInt(1502491497),
  "expired_at": NumberInt(1502521497)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1cebc9e5fd2cd3861f95"),
  "session_id": "32cuv8bfvstdo12sdqooo0gs06",
  "data": "",
  "timedout_at": NumberInt(1502491739),
  "expired_at": NumberInt(1502521739)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1cecc9e5fd2cd3861f96"),
  "session_id": "2vurklh818k40o7mrd8db1o465",
  "data": "",
  "timedout_at": NumberInt(1502491740),
  "expired_at": NumberInt(1502521740)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1cedc9e5fd2cd3861f97"),
  "session_id": "v6b04a0pe3i6p14ko0sh3ia2s3",
  "data": "",
  "timedout_at": NumberInt(1502491741),
  "expired_at": NumberInt(1502521741)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e1cedc9e5fd2cd3861f98"),
  "session_id": "uc8j64fn9r72452pt705sn1df5",
  "data": "",
  "timedout_at": NumberInt(1502491741),
  "expired_at": NumberInt(1502521741)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e93fdc9e5fd2cd3861f9b"),
  "session_id": "01op6eq7gkj5so3ikuo88rg5b1",
  "data": "",
  "timedout_at": NumberInt(1502522221),
  "expired_at": NumberInt(1502552221)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598e9cabc9e5fd2cd3861f9c"),
  "session_id": "s2boa1bu34dmc7074i4jrhau15",
  "data": "",
  "timedout_at": NumberInt(1502524443),
  "expired_at": NumberInt(1502554443)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598ebf52c9e5fd2cd3861f9d"),
  "session_id": "nb1674i9nrphqvkjmec4k12nk1",
  "data": "",
  "timedout_at": NumberInt(1502533314),
  "expired_at": NumberInt(1502563314)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598edf79c9e5fd2cd3861f9e"),
  "session_id": "j00shpih07jk8qgmo172j4cdt1",
  "data": "",
  "timedout_at": NumberInt(1502541545),
  "expired_at": NumberInt(1502571545)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598ef744c9e5fd2cd3861f9f"),
  "session_id": "r98lbbjpi5tdmv9efs920iaiu4",
  "data": "",
  "timedout_at": NumberInt(1502547636),
  "expired_at": NumberInt(1502577636)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598f00d6c9e5fd2cd3861fa0"),
  "session_id": "f1cuc40iau6le796rgo25r3nf2",
  "data": "",
  "timedout_at": NumberInt(1502550086),
  "expired_at": NumberInt(1502580086)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598f020fc9e5fd2cd3861fa1"),
  "session_id": "8ovten0ktfparrk9mcb1lsa4d5",
  "data": "",
  "timedout_at": NumberInt(1502550399),
  "expired_at": NumberInt(1502580399)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598f0335c9e5fd2cd3861fa2"),
  "session_id": "m9c1noo181tb04h8so5g0trep3",
  "data": "",
  "timedout_at": NumberInt(1502550693),
  "expired_at": NumberInt(1502580693)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598f1d4ec9e5fd2cd3861fa3"),
  "session_id": "ktup6i0l0dg8a4tp411dubh484",
  "data": "",
  "timedout_at": NumberInt(1502557374),
  "expired_at": NumberInt(1502587374)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598f20d1c9e5fd2cd3861fa4"),
  "session_id": "29hmd2or566825jl218bvj3dl5",
  "data": "",
  "timedout_at": NumberInt(1502558273),
  "expired_at": NumberInt(1502588273)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("598f258cc9e5fd2cd3861fa5"),
  "session_id": "v8g9e3dglvi6rhejh3u6rgt2c7",
  "data": "",
  "timedout_at": NumberInt(1502559484),
  "expired_at": NumberInt(1502589484)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59945c82c9e5fd2cd3862310"),
  "session_id": "16v3fsaef2biulh5tgu6po6j97",
  "data": "",
  "timedout_at": NumberInt(1502901234),
  "expired_at": NumberInt(1502931234)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5994a3d3c9e5fd2cd3862390"),
  "session_id": "ejggvq5ibvs3mmpda40d09rv26",
  "data": "",
  "timedout_at": NumberInt(1502919491),
  "expired_at": NumberInt(1502949491)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5994de17c9e5fd2cd386240d"),
  "session_id": "eccufoca22l460h9nr88epbg43",
  "data": "",
  "timedout_at": NumberInt(1502934407),
  "expired_at": NumberInt(1502964407)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5995c4abc9e5fd2cd386254e"),
  "session_id": "ahbhjraucqhc7dvkui2l5maq12",
  "data": "",
  "timedout_at": NumberInt(1502993435),
  "expired_at": NumberInt(1503023435)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59989f97fa529d193123a56d"),
  "session_id": "bijcelanudm3k05gse87cogml0",
  "data": "",
  "timedout_at": NumberInt(1503180551),
  "expired_at": NumberInt(1503210551)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999b2abfa529d193123a693"),
  "session_id": "9iqpnjkg4uvomcciksisfu9ap1",
  "data": "",
  "timedout_at": NumberInt(1503250971),
  "expired_at": NumberInt(1503280971)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999b2abfa529d193123a694"),
  "session_id": "le2b8hf0bqudn7k6ccbbtlm0f7",
  "data": "",
  "timedout_at": NumberInt(1503250971),
  "expired_at": NumberInt(1503280971)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999be9cfa529d193123a699"),
  "session_id": "m41mao9ovtjnehf36nsg4dht55",
  "data": "",
  "timedout_at": NumberInt(1503254028),
  "expired_at": NumberInt(1503284028)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999bfbafa529d193123a69a"),
  "session_id": "d1m4smnphdjevcr1dp6j0bjga4",
  "data": "",
  "timedout_at": NumberInt(1503254314),
  "expired_at": NumberInt(1503284314)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999c351fa529d193123a69b"),
  "session_id": "4pkd51iv3p120iul0bu3onhts3",
  "data": "",
  "timedout_at": NumberInt(1503255233),
  "expired_at": NumberInt(1503285233)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999c358fa529d193123a69c"),
  "session_id": "bse0b0635563mn0kqbgvq1t7i7",
  "data": "",
  "timedout_at": NumberInt(1503255240),
  "expired_at": NumberInt(1503285240)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999c5befa529d193123a69d"),
  "session_id": "0oglf12o22e34tbb1r8nsccd20",
  "data": "",
  "timedout_at": NumberInt(1503255854),
  "expired_at": NumberInt(1503285854)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999dfe0fa529d193123a6a5"),
  "session_id": "uhamgonsha2flpkkj6rdt8arj4",
  "data": "",
  "timedout_at": NumberInt(1503262544),
  "expired_at": NumberInt(1503292544)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999e238fa529d193123a6a6"),
  "session_id": "m1atp1f62ehv60ladkatj5rab6",
  "data": "",
  "timedout_at": NumberInt(1503263144),
  "expired_at": NumberInt(1503293144)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("5999e5c5fa529d193123a6a7"),
  "session_id": "iqs4dt6jq8a2dg06tjtmiev335",
  "data": "",
  "timedout_at": NumberInt(1503264053),
  "expired_at": NumberInt(1503294053)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599a3975fa529d193123a72d"),
  "session_id": "j456nslm223gbus2dsbivfln44",
  "data": "",
  "timedout_at": NumberInt(1503285477),
  "expired_at": NumberInt(1503315477)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599cea43fa529d193123aa8a"),
  "session_id": "mf021cq5cndspjfkcdv6f0hqa6",
  "data": "",
  "timedout_at": NumberInt(1503461811),
  "expired_at": NumberInt(1503491811)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599d4070fa529d193123aad2"),
  "session_id": "5kasnn15l2lsq94b3bjh1h2ol3",
  "data": "",
  "timedout_at": NumberInt(1503484210),
  "expired_at": NumberInt(1503513872)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599d6905fa529d193123ab0a"),
  "session_id": "ulu6bml6o2ckacf4t08dajjka2",
  "data": "",
  "timedout_at": NumberInt(1503494544),
  "expired_at": NumberInt(1503524261)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599db6e5fa529d193123ab4c"),
  "session_id": "uvgt2p9va3j84oe9aabqvknb90",
  "data": "",
  "timedout_at": NumberInt(1503514197),
  "expired_at": NumberInt(1503544197)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599db6e9fa529d193123ab4d"),
  "session_id": "gkqrakm1n4blgeag00q97d0rk0",
  "data": "",
  "timedout_at": NumberInt(1503514201),
  "expired_at": NumberInt(1503544201)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599db6ecfa529d193123ab4e"),
  "session_id": "2ceop0otif9gb2c7l45et4ama7",
  "data": "",
  "timedout_at": NumberInt(1503514204),
  "expired_at": NumberInt(1503544204)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599db6eefa529d193123ab4f"),
  "session_id": "spbi3gnhfn5l2l8dnki3infdh1",
  "data": "",
  "timedout_at": NumberInt(1503514206),
  "expired_at": NumberInt(1503544206)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599db6f0fa529d193123ab50"),
  "session_id": "788a29uv56ojbq2e96rj4ugj76",
  "data": "",
  "timedout_at": NumberInt(1503514208),
  "expired_at": NumberInt(1503544208)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599e5bf3fa529d193123abf0"),
  "session_id": "hqnhfosvistuf8jup4e8hre5l6",
  "data": "",
  "timedout_at": NumberInt(1503556451),
  "expired_at": NumberInt(1503586451)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599e5d66fa529d193123abf1"),
  "session_id": "h3nart6gm6gki0i73e3ngldjd7",
  "data": "",
  "timedout_at": NumberInt(1503557014),
  "expired_at": NumberInt(1503586822)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599e72d0fa529d193123ac02"),
  "session_id": "rv43inpjqclfu2v515cvg3faq4",
  "data": "user_id|s:24:\"593815efd893980011000029\";roles|i:3;",
  "timedout_at": NumberInt(1503564674),
  "expired_at": NumberInt(1503592304)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599e81f1fa529d193123ac07"),
  "session_id": "i6m9lev52jku14j000atn76fb6",
  "data": "",
  "timedout_at": NumberInt(1503566177),
  "expired_at": NumberInt(1503596177)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599e9923fa529d193123ac12"),
  "session_id": "a87hu12v55k1iql8u7aue0uf15",
  "data": "",
  "timedout_at": NumberInt(1503572115),
  "expired_at": NumberInt(1503602115)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599f2ddafa529d193123ac67"),
  "session_id": "rqvuv7j89kn3u12fv1r55l70k6",
  "data": "",
  "timedout_at": NumberInt(1503610186),
  "expired_at": NumberInt(1503640186)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599f9a0efa529d193123ac87"),
  "session_id": "2do10rq0050b5ji4k25poff4t1",
  "data": "",
  "timedout_at": NumberInt(1503637886),
  "expired_at": NumberInt(1503667886)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599fa79efa529d193123ac90"),
  "session_id": "sh8krmpip6n3g79mornlfa6je3",
  "data": "",
  "timedout_at": NumberInt(1503641358),
  "expired_at": NumberInt(1503671358)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("599ffdbbfa529d193123acb2"),
  "session_id": "k04k1d3apodjbcjec66c07t7r3",
  "data": "",
  "timedout_at": NumberInt(1503663403),
  "expired_at": NumberInt(1503693403)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a02027fa529d193123acc6"),
  "session_id": "1d160tp6g8h9r1akv9ljm7nk64",
  "data": "",
  "timedout_at": NumberInt(1503672215),
  "expired_at": NumberInt(1503702215)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a024f7fa529d193123acc9"),
  "session_id": "dv6r3nfsu7hmi99bu7cfojn0g0",
  "data": "",
  "timedout_at": NumberInt(1503673447),
  "expired_at": NumberInt(1503703447)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a02620fa529d193123acca"),
  "session_id": "cce0ti67e8sklfh75nd8i0fh97",
  "data": "",
  "timedout_at": NumberInt(1503673744),
  "expired_at": NumberInt(1503703744)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a042b1fa529d193123acd3"),
  "session_id": "g383aiv6n25pnp1af0vav88r30",
  "data": "",
  "timedout_at": NumberInt(1503681057),
  "expired_at": NumberInt(1503711057)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a06c8efa529d193123acf2"),
  "session_id": "fb7mj0kbfj3okh00mq7783bpd5",
  "data": "",
  "timedout_at": NumberInt(1503691774),
  "expired_at": NumberInt(1503721774)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a07988fa529d193123ad08"),
  "session_id": "5dpqa1kb1oesnfnehptbdurpg4",
  "data": "",
  "timedout_at": NumberInt(1503695096),
  "expired_at": NumberInt(1503725096)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a07cc7fa529d193123ad0a"),
  "session_id": "cllv4g9nveatnn1u3usi03drc4",
  "data": "",
  "timedout_at": NumberInt(1503695927),
  "expired_at": NumberInt(1503725927)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a0aa37fa529d193123ad16"),
  "session_id": "71esa9kg81k2np0k1kj2jatov1",
  "data": "",
  "timedout_at": NumberInt(1503707559),
  "expired_at": NumberInt(1503737559)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a0ad75fa529d193123ad17"),
  "session_id": "6vh0pcif8rp2g62k016d405sp4",
  "data": "",
  "timedout_at": NumberInt(1503708389),
  "expired_at": NumberInt(1503738389)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a10f8efa529d193123ad4e"),
  "session_id": "faq70e6eo6po9g2dhnr20m38e0",
  "data": "",
  "timedout_at": NumberInt(1503733502),
  "expired_at": NumberInt(1503763502)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14f82fa529d193123ad5e"),
  "session_id": "qkun8iamvpa0h9lclubrl78ko7",
  "data": "",
  "timedout_at": NumberInt(1503749874),
  "expired_at": NumberInt(1503779874)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14f91fa529d193123ad5f"),
  "session_id": "9tva9fjj8srvkf6obl9t28eu54",
  "data": "",
  "timedout_at": NumberInt(1503749889),
  "expired_at": NumberInt(1503779889)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14fa0fa529d193123ad60"),
  "session_id": "1jhofk0fd8dehns4clcjacsgl7",
  "data": "",
  "timedout_at": NumberInt(1503749904),
  "expired_at": NumberInt(1503779904)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14fa8fa529d193123ad61"),
  "session_id": "do98e553io4pho0d57a3vu3dg3",
  "data": "",
  "timedout_at": NumberInt(1503749912),
  "expired_at": NumberInt(1503779912)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14fb0fa529d193123ad62"),
  "session_id": "sp4fafc56io6ibqf04n4socln0",
  "data": "",
  "timedout_at": NumberInt(1503749920),
  "expired_at": NumberInt(1503779920)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14fb7fa529d193123ad63"),
  "session_id": "gjsrn54t6mjb0tft4cmf0ovkj3",
  "data": "",
  "timedout_at": NumberInt(1503749927),
  "expired_at": NumberInt(1503779927)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14fc4fa529d193123ad64"),
  "session_id": "790cu855hp8n5cprie8f1cs1o4",
  "data": "",
  "timedout_at": NumberInt(1503749940),
  "expired_at": NumberInt(1503779940)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14fccfa529d193123ad65"),
  "session_id": "peh849bgimat1sf6hk26m90q43",
  "data": "",
  "timedout_at": NumberInt(1503749948),
  "expired_at": NumberInt(1503779948)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14fe1fa529d193123ad66"),
  "session_id": "270f0of1v8410gvg1ojlo9ioo1",
  "data": "",
  "timedout_at": NumberInt(1503749969),
  "expired_at": NumberInt(1503779969)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14fe9fa529d193123ad67"),
  "session_id": "v330nsmojgdmt53fmma7ivtao3",
  "data": "",
  "timedout_at": NumberInt(1503749977),
  "expired_at": NumberInt(1503779977)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a14ff2fa529d193123ad68"),
  "session_id": "00iulvc3gbd8hp1ja4pm2stjp5",
  "data": "",
  "timedout_at": NumberInt(1503749986),
  "expired_at": NumberInt(1503779986)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a36968fa529d193123ae19"),
  "session_id": "f2ohrav227pghfus70v6344067",
  "data": "",
  "timedout_at": NumberInt(1503887576),
  "expired_at": NumberInt(1503917576)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a36d14fa529d193123ae1a"),
  "session_id": "3pnuaj242cb2ft58aaf0ptsr03",
  "data": "",
  "timedout_at": NumberInt(1503888516),
  "expired_at": NumberInt(1503918516)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c918fa529d193123ae92"),
  "session_id": "pujtkpqn9uujd4c7o2qhro4hf4",
  "data": "",
  "timedout_at": NumberInt(1503912072),
  "expired_at": NumberInt(1503942072)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c918fa529d193123ae93"),
  "session_id": "b4cm71lvcico2pc3qi4gapfaa0",
  "data": "",
  "timedout_at": NumberInt(1503912072),
  "expired_at": NumberInt(1503942072)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c919fa529d193123ae94"),
  "session_id": "umc20v3okgb006m21kut692ie6",
  "data": "",
  "timedout_at": NumberInt(1503912073),
  "expired_at": NumberInt(1503942073)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91afa529d193123ae95"),
  "session_id": "a290sbogqd0ce6fhnvcf4frjg7",
  "data": "",
  "timedout_at": NumberInt(1503912074),
  "expired_at": NumberInt(1503942074)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91bfa529d193123ae96"),
  "session_id": "j1hf48nvgdpups639fes08hid0",
  "data": "",
  "timedout_at": NumberInt(1503912075),
  "expired_at": NumberInt(1503942075)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91bfa529d193123ae97"),
  "session_id": "cotsi5t4f46psn6imuqm58uvu3",
  "data": "",
  "timedout_at": NumberInt(1503912075),
  "expired_at": NumberInt(1503942075)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91cfa529d193123ae98"),
  "session_id": "o9h4p4s0l1l6gfmh1jtiqj4sc2",
  "data": "",
  "timedout_at": NumberInt(1503912076),
  "expired_at": NumberInt(1503942076)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91cfa529d193123ae99"),
  "session_id": "i4qh3ggqp117mn8jq96nkankr3",
  "data": "",
  "timedout_at": NumberInt(1503912076),
  "expired_at": NumberInt(1503942076)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91dfa529d193123ae9a"),
  "session_id": "2gof1qu2qbhm48b9sn48lcj261",
  "data": "",
  "timedout_at": NumberInt(1503912077),
  "expired_at": NumberInt(1503942077)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91dfa529d193123ae9b"),
  "session_id": "qramsmlg5leuan6jgk2o88idr2",
  "data": "",
  "timedout_at": NumberInt(1503912077),
  "expired_at": NumberInt(1503942077)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91efa529d193123ae9c"),
  "session_id": "tb4m3u4qlkgub0isiq231sqf51",
  "data": "",
  "timedout_at": NumberInt(1503912078),
  "expired_at": NumberInt(1503942078)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91ffa529d193123ae9d"),
  "session_id": "v58n8cf6bh65m8gg60id272lk5",
  "data": "",
  "timedout_at": NumberInt(1503912079),
  "expired_at": NumberInt(1503942079)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c91ffa529d193123ae9e"),
  "session_id": "1utoeqqkstcpdk0fhjnugt5b94",
  "data": "",
  "timedout_at": NumberInt(1503912079),
  "expired_at": NumberInt(1503942079)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c920fa529d193123ae9f"),
  "session_id": "m6r9p02dlhsbs1aedhgn9ven84",
  "data": "",
  "timedout_at": NumberInt(1503912080),
  "expired_at": NumberInt(1503942080)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c920fa529d193123aea0"),
  "session_id": "qpuquv7hjtqpdttpds6m7ato97",
  "data": "",
  "timedout_at": NumberInt(1503912080),
  "expired_at": NumberInt(1503942080)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c921fa529d193123aea1"),
  "session_id": "c4ikn5qh09gnqanm4m5bkdltd7",
  "data": "",
  "timedout_at": NumberInt(1503912081),
  "expired_at": NumberInt(1503942081)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c921fa529d193123aea2"),
  "session_id": "imab0a0cmcsjhhsl4okh351241",
  "data": "",
  "timedout_at": NumberInt(1503912081),
  "expired_at": NumberInt(1503942081)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c922fa529d193123aea3"),
  "session_id": "kccjkgo2bped1vffk0u22d6f96",
  "data": "",
  "timedout_at": NumberInt(1503912082),
  "expired_at": NumberInt(1503942082)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c923fa529d193123aea4"),
  "session_id": "6m48sb095lc7chf8kgg4vf5l45",
  "data": "",
  "timedout_at": NumberInt(1503912083),
  "expired_at": NumberInt(1503942083)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c923fa529d193123aea5"),
  "session_id": "2h4o79nfreeupb3sjf7sv40uv4",
  "data": "",
  "timedout_at": NumberInt(1503912083),
  "expired_at": NumberInt(1503942083)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c924fa529d193123aea6"),
  "session_id": "dipmh96nitmdt9ir98ccjrise5",
  "data": "",
  "timedout_at": NumberInt(1503912084),
  "expired_at": NumberInt(1503942084)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c924fa529d193123aea7"),
  "session_id": "cm49p3tic2dfno6tb2fevo86o7",
  "data": "",
  "timedout_at": NumberInt(1503912084),
  "expired_at": NumberInt(1503942084)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a3c925fa529d193123aea8"),
  "session_id": "bakaasu99uc7j2uomji3a22vu1",
  "data": "",
  "timedout_at": NumberInt(1503912085),
  "expired_at": NumberInt(1503942085)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a54d02fa529d193123af4e"),
  "session_id": "fhr7klkr36lf9fkpr5d0sade43",
  "data": "",
  "timedout_at": NumberInt(1504011378),
  "expired_at": NumberInt(1504041378)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a56243fa529d193123af53"),
  "session_id": "h9l0lbdl2slmil5sf965ob3u17",
  "data": "",
  "timedout_at": NumberInt(1504016819),
  "expired_at": NumberInt(1504046819)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a5bd04fa529d193123af72"),
  "session_id": "vrodj4lov6510ujno0053dt8l3",
  "data": "",
  "timedout_at": NumberInt(1504040052),
  "expired_at": NumberInt(1504070052)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a7da2ffa529d193123b0cf"),
  "session_id": "50l9t1jt4t7ejs0fdj1cmmdhs3",
  "data": "",
  "timedout_at": NumberInt(1504178591),
  "expired_at": NumberInt(1504208591)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a803bdfa529d193123b0df"),
  "session_id": "5gm4ijsvl4r5gboqop1evqkd37",
  "data": "",
  "timedout_at": NumberInt(1504189229),
  "expired_at": NumberInt(1504219229)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a92a57fa529d193123b19a"),
  "session_id": "s0vl0a143kclf0k5d06rhibaq7",
  "data": "",
  "timedout_at": NumberInt(1504264647),
  "expired_at": NumberInt(1504294647)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a93186fa529d193123b19c"),
  "session_id": "ahbrb990mai3109gb5v9kd6hv6",
  "data": "",
  "timedout_at": NumberInt(1504266486),
  "expired_at": NumberInt(1504296486)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59a98b19fa529d193123b1d4"),
  "session_id": "gmj5jev1lj6kri116h4onfee95",
  "data": "",
  "timedout_at": NumberInt(1504289417),
  "expired_at": NumberInt(1504319417)
});
db.getCollection("sessions").insert({
  "_id": ObjectId("59aa11adfa529d193123b210"),
  "session_id": "ii9jphl8og3rt8f60984i6cjk6",
  "data": "",
  "timedout_at": NumberInt(1504323869),
  "expired_at": NumberInt(1504353869)
});

/** tours records **/
db.getCollection("tours").insert({
  "_id": ObjectId("5950d7422b063b55108b4567"),
  "tieude": "BẮC ÂU: ĐAN MẠCH – NA UY – PHẦN LAN – THỤY ĐIỂN (12 NGÀY 11 ĐÊM)",
  "mota": "“Hygge” là một nét văn hóa độc đáo của người Bắc Âu. Phong cách sống hygge có lẽ là thứ mà nhiều người đang tìm kiếm để cải thiện và nâng cao sức khỏe của mình. Phong cách sống “hygge” chính là bí quyết giúp người Bắc Âu trở thành những người sống hạnh phúc nhất thế giới.",
  "noidung": "<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 01: TP. &nbsp;HỒ CH&Iacute; MINH &ndash; BANGKOK &nbsp;</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">17:50:&nbsp;Qu&yacute; kh&aacute;ch tập trung tại s&acirc;n bay T&acirc;n Sơn Nhất.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">20:50-22:15:&nbsp;Qu&yacute; kh&aacute;ch đang tr&ecirc;n chuyến bay đi Bangkok. Qu&yacute; kh&aacute;ch ăn uống, nghỉ ngơi tr&ecirc;n m&aacute;y bay.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 02:&nbsp;BANGKOK (11h20 &ndash; m&aacute;y bay)&nbsp;&nbsp;COPENHAGEN (Ăn trưa, tối)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">01:20-07:40:&nbsp;Qu&yacute; kh&aacute;ch nối chuyến bay đến Copenhagen, Đan Mạch.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">08:00:&nbsp;L&agrave;m thủ tục nhập cảnh, đổi tiền, kiểm tra điện thoại li&ecirc;n lạc.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">09:00:&nbsp;Ăn s&aacute;ng, nhận ph&ograve;ng nghỉ ngơi sau chặng bay d&agrave;i.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">13:00:&nbsp;Ăn trưa. Qu&yacute; kh&aacute;ch tham quan:</span></p>\r\n\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>L&acirc;u đ&agrave;i&nbsp;</strong><strong>Christiansborg</strong>. Đ&acirc;y l&agrave; văn ph&ograve;ng của Quốc hội Đan Mạch, T&ograve;a &aacute;n Tối cao v&agrave; Bộ Ngoại giao đồng thời l&agrave; nơi Nữ Ho&agrave;ng tiếp đại sứ c&aacute;c nước (tham quan)<strong>.</strong></span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Đ&agrave;i phun nước&nbsp;<strong>Gefion&nbsp;</strong>(chụp ảnh).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Tượng&nbsp;<strong>N&agrave;ng ti&ecirc;n c&aacute;</strong>&nbsp;&ndash; Lấy cảm hứng từ c&acirc;u chuy&ecirc;n cổ t&iacute;ch của Hans Christian. Andersen (1805 &ndash; 1875), tuyệt phẩm đi&ecirc;u khắc về người c&aacute; Havfruen l&agrave; m&oacute;n qu&agrave; từ nh&agrave; sản xuất bia gi&agrave;u c&oacute; Carl Jacobsen cho th&agrave;nh phố (chụp ảnh).</span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn tối v&agrave; nghỉ đ&ecirc;m tại&nbsp;<strong>Copenhagen.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 03:&nbsp;COPENHAGEN&nbsp;(1083 km &ndash; 01:25 bay)&nbsp;BERGEN (NA UY) &nbsp;(Ăn 3 bữa)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">07:30:&nbsp;Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tự chọn tại kh&aacute;ch sạn.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">08:30<strong>: Qu&yacute; kh&aacute;ch tập trung l&ecirc;n xe để đi tham quan:</strong></span></p>\r\n\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Qu&yacute; kh&aacute;ch du thuyền dọc theo k&ecirc;nh đ&agrave;o trong l&ograve;ng th&agrave;nh phố Copenhagen,&nbsp;</strong>chi&ecirc;m ngưỡng c&aacute;c kiến tr&uacute;c rạng danh tr&ecirc;n to&agrave;n thế giới: nh&agrave; h&aacute;t th&agrave;nh phố (Opera House), t&ograve;a nh&agrave; mở rộng của Thư viện Ho&agrave;ng Gia (The Black Diamond), t&ograve;a nh&agrave; Quốc Hội (the Christianborg and Boersen), &hellip;.(du thuyền).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Dạo phố đi bộ&nbsp;<strong>Nyhavn&nbsp;</strong>v&agrave; tham quan, mua sắm tại c&aacute;c khu thương mại h&agrave;ng đầu Str&oslash;get shopping street, Illum, Magasin du Nord, Field&rsquo;s, Waterfront Shopping.</span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn trưa:&nbsp;<strong>Thưởng thức</strong>&nbsp;<strong>ẩm thực</strong>&nbsp;địa phương sạch &amp; xanh của Đan Mạch: ph&ocirc; mai, bia đen, x&uacute;c x&iacute;ch, s&ocirc; c&ocirc; la&hellip;c&aacute;c m&oacute;n tươi ngon tự chọn tại Chợ địa phương.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Trải nghiệm cảm gi&aacute;c đi tr&ecirc;n c&acirc;y cầu huyền thoại Oresund, &lsquo;biến mất kỳ diệu&rsquo; khi đi xuy&ecirc;n qua một đường hầm dưới biển nối liền thủ đ&ocirc; Copenhagen của Đan Mạch v&agrave; th&agrave;nh phố Malmo của Thụy Điển.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">17:00: Ăn tối.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">21:25-22:45: Qu&yacute; kh&aacute;ch l&agrave;m khởi h&agrave;nh đi Bergen (1h25 bay). Nghỉ đ&ecirc;m tại&nbsp;<strong>Bergen</strong><strong>.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 04:&nbsp;BERGEN (Ăn 3 bữa)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">09:00: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tự chọn tại kh&aacute;ch sạn.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Kh&aacute;m ph&aacute; khung cảnh thi&ecirc;n nhi&ecirc;n tươi đẹp của v&ugrave;ng vịnh, được bao bọc bởi những d&atilde;y n&uacute;i cao tr&ugrave;ng điệp.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch v&agrave;o&nbsp;<strong>khu trung t&acirc;m &ndash; nh&agrave; cổ &ndash; Chợ C&aacute; &ndash; cảng Brygge</strong>&nbsp;nổi tiếng.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Buổi chiều qu&yacute; kh&aacute;ch tự do dạo phố, mua sắm tại con phố đi bộ trung t&acirc;m.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">18:00: Ăn tối v&agrave; nghỉ đ&ecirc;m tại&nbsp;<strong>Bergen.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 05:&nbsp;BERGEN&nbsp;(147 km-&ocirc; t&ocirc;)&nbsp;GUDVANGEN&nbsp;(du thuyền)&nbsp;FLAM&nbsp;(20 km-t&agrave;u lửa)&nbsp;MYRDAL&nbsp;(328km-t&agrave;u lửa)&nbsp;OSLO (Ăn 3 bữa)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">06:00: Qu&yacute; kh&aacute;ch tập trung h&agrave;nh l&yacute; tại sảnh kh&aacute;ch sạn, d&ugrave;ng bữa s&aacute;ng.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">07:00: Đo&agrave;n khởi h&agrave;nh v&agrave;o vịnh Gudvangen.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Du thuyền&nbsp;</strong>thưởng ngoạn phong cảnh thi&ecirc;n nhi&ecirc;n hoang d&atilde; của&nbsp;<strong>vịnh hẹp Gudvangen</strong>, một trong những vịnh đẹp nhất thế giới v&agrave; đ&atilde; được tổ chức Unesco vinh danh từ năm 2005.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">L&ecirc;n chuyến t&agrave;u điện nổi tiếng Ch&acirc;u &Acirc;u theo cung đường 20km ngoạn mục v&agrave; tuyệt đẹp&nbsp;<strong>Flam &ndash; Myrdal&nbsp;</strong>qua những sườn n&uacute;i dốc, th&aacute;c nước đổ ầm ầm v&agrave; thung lũng s&acirc;u thăm thẳm.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Nối chuyến t&agrave;u lửa đến Oslo.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn tối nhẹ tr&ecirc;n t&agrave;u lửa.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n đến Oslo, nghỉ đ&ecirc;m tại&nbsp;<strong>Oslo</strong><strong>.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 06:&nbsp;OSLO (Ăn 3 bữa)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">07:30: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tự chọn tại kh&aacute;ch sạn.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">09:00: Qu&yacute; kh&aacute;ch d&agrave;nh trọn ng&agrave;y tham quan:</span></p>\r\n\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Vườn tượng&nbsp;<strong>Vigeland Sculpture</strong>&nbsp;tọa lạc trong c&ocirc;ng vi&ecirc;n Frogner, l&agrave; một dự &aacute;n trải qua 24 năm với hơn 212 t&aacute;c phẩm đi&ecirc;u khắc (tham quan).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Khu trượt tuyết&nbsp;<strong>Holmenkollbakken</strong>&nbsp;&ndash; khu dốc trượt tuyết nh&acirc;n tạo cao nhất thế giới (chụp ảnh).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Bảo t&agrave;ng t&agrave;u&nbsp;<strong>Viking</strong>&nbsp;(tham quan).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Trung T&acirc;m Nobel H&ograve;a B&igrave;nh&nbsp;</strong>(chụp ảnh).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">L&acirc;u đ&agrave;i&nbsp;<strong>Akershus</strong>&nbsp;(chụp ảnh).</span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch ăn tối, nghỉ đ&ecirc;m tại&nbsp;<strong>Oslo</strong><strong>.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 07:&nbsp;OSLO&nbsp;(989 km &ndash; 01:20 bay)&nbsp;HELSINKI (Ăn 3 bữa)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">08:00:Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tự chọn tại kh&aacute;ch sạn &ndash; L&agrave;m thủ tục trả ph&ograve;ng.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">09:00: Tham quan:</span></p>\r\n\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Nh&agrave; h&aacute;t Oslo (<strong>Oslo Opera House</strong>), c&ocirc;ng tr&igrave;nh trồi l&ecirc;n như một con s&oacute;ng, một sự chuyển m&igrave;nh, bước qua bức tường l&agrave; bước v&agrave;o thế giới nghệ thuật&hellip;(chụp ảnh).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>T&ograve;a Thị Ch&iacute;nh Oslo</strong>&nbsp;(chụp ảnh)</span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn trưa.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Dạo phố ch&iacute;nh&nbsp;<strong>Karl Johan,</strong>&nbsp;nối liền Nh&agrave; Ga Trung T&acirc;m v&agrave; Ho&agrave;ng Cung (Royal Palace). Ch&iacute;nh giữa hai kiến tr&uacute;c nổi tiếng n&agrave;y l&agrave; Quốc Hội (Parliament), Quảng Trường Eidsvolls v&agrave; Nh&agrave; H&aacute;t Lớn (National Theater) (chụp ảnh).</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">17:10-19:30: Đo&agrave;n khởi h&agrave;nh tới&nbsp;<strong>Phần Lan</strong>&nbsp;(01:20).</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn tối. Nghỉ đ&ecirc;m tại&nbsp;<strong>Helsinki</strong><strong>.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 08:&nbsp;HELSINKI&nbsp;(485 km &ndash; 16&nbsp;:00)&nbsp;DU THUYỀN VỊNH PHẦN LAN (Ăn 3 bữa)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">08:00: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tự chọn tại kh&aacute;ch sạn &ndash; L&agrave;m thủ tục trả ph&ograve;ng.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">09:00: Xe khởi h&agrave;nh đi thăm:</span></p>\r\n\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Nh&agrave; thờ đ&aacute;&nbsp;<strong>Temppeliaukio</strong>, với kết cấu độc đ&aacute;o nơi đ&acirc;y l&agrave; điểm đến ưa th&iacute;ch của du kh&aacute;ch thế giới cũng như c&aacute;c chuy&ecirc;n gia h&agrave;ng đầu về kiến tr&uacute;c (tham quan).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Đ&agrave;i tưởng niệm Tượng n&agrave;y l&agrave; 600 ống đ&agrave;n organ gắn liền với nhau, tượng trưng cho một c&aacute;nh rừng Phần Lan, gi&oacute; thổi, những ống n&agrave;y vang l&ecirc;n tiếng vọng (Echo) đặc biệt (chụp ảnh).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Tượng Mỹ Nh&acirc;n Ngư</strong>&nbsp;<strong>Amanda&nbsp;</strong>đứng tr&ecirc;n rong biển, dưới ch&acirc;n c&oacute; 4 con c&aacute; phun nước, xung quanh tượng l&agrave; 4 con sư tử biển phun nước (chụp ảnh).</span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn trưa muộn tại Quảng Trường Chợ<strong>&nbsp;(Market Square)</strong>&nbsp;nằm ngay trung t&acirc;m th&agrave;nh phố. Đ&acirc;y l&agrave; một trong những chợ nổi tiếng được du kh&aacute;ch thăm viếng nhiều nhất Helsinki (chụp ảnh v&agrave; mua đồ lưu niệm).</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">15:00: Qu&yacute; kh&aacute;ch l&agrave;m thủ tục l&ecirc;n du thuyền khởi h&agrave;nh đến Stockholm.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Du thuyền khởi h&agrave;nh đi Stockholm &ndash; thủ đ&ocirc; vương quốc Thụy Điển, th&agrave;nh phố được mệnh danh l&agrave; Venice của phương Bắc.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">19:00: Qu&yacute; kh&aacute;ch ăn tối (buffet) v&agrave; nghỉ đ&ecirc;m tr&ecirc;n&nbsp;<strong>du thuyền.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 09:&nbsp;STOCKHOLM (Ăn 3 bữa)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">08:00: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tự chọn tr&ecirc;n du thuyền &ndash; L&agrave;m thủ tục trả ph&ograve;ng.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">09:00: T&agrave;u cập cảng Stockholm.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Hướng dẫn vi&ecirc;n đưa đo&agrave;n tham quan v&agrave; ăn trưa tại khu phố&nbsp;<strong>Gamla Stan</strong>, nơi được v&iacute; như một bảo t&agrave;ng sống, l&agrave; một trong những khu phố Trung cổ lớn nhất v&agrave; được g&igrave;n giữ tốt nhất tại Ch&acirc;u &Acirc;u, đồng thời l&agrave; một trong những địa danh hấp dẫn nhất của Stockholm. Đ&acirc;y ch&iacute;nh l&agrave; nơi Stockholm được th&agrave;nh lập ch&iacute;nh thức v&agrave;o năm 1252 (chụp ảnh).</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Mua sắm tại trung t&acirc;m thương mại Stockholm.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Đường Fjallgatan</strong>&nbsp;từ đ&acirc;y to&agrave;n cảnh th&agrave;nh phố như thu v&agrave;o ống k&iacute;nh của Qu&yacute; kh&aacute;ch với khu vui chơi Gr&ouml;na Lund, bảo t&agrave;ng Vasa, khu cũ &ndash; khu mới &hellip;. (chụp ảnh).</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn tối v&agrave; nghỉ đ&ecirc;m tại&nbsp;<strong>Stockholm</strong><strong>.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 10:&nbsp;STOCKHOLM (Ăn 3 bữa)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">08:00: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tự chọn tại kh&aacute;ch sạn.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">09:00: Tham quan:</span></p>\r\n\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Bảo t&agrave;ng</strong>&nbsp;h&agrave;ng hải mang t&ecirc;n con t&agrave;u chiến vĩ đại của Thụy Điển &ndash; chiến hạm&nbsp;<strong>Vasa</strong>&nbsp;hay c&ograve;n gọi l&agrave; &ldquo;con t&agrave;u ma quỷ&rdquo; (tham quan).</span></p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Bảo t&agrave;ng Abba (nếu c&ograve;n thời gian &ndash; chi ph&iacute; tự t&uacute;c)</strong>.</span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn trưa. Khởi h&agrave;nh đến khu mới của th&agrave;nh phố Stockholm:</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>T&ograve;a nh&agrave; Quốc Hội&nbsp;</strong>(chụp ảnh).</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Cung điện Ho&agrave;ng gia Stockholm</strong>&nbsp;&ndash; l&agrave; nơi ở v&agrave; l&agrave;m việc h&agrave;ng ng&agrave;y của vua v&agrave; ho&agrave;ng hậu (chụp ảnh).</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn tối v&agrave; nghỉ đ&ecirc;m tại&nbsp;<strong>Stockholm</strong><strong>.</strong></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 11:&nbsp;STOCKHOLM &ndash; BANGKOK&nbsp;(Tổng thời gian bay 09h50 chưa kể thời gian qu&aacute; cảnh 02h00) (Ăn s&aacute;ng, ăn trưa nhẹ)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">07:30: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tự chọn tại kh&aacute;ch sạn &ndash; L&agrave;m thủ tục trả ph&ograve;ng.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">14:30-05:50: Đo&agrave;n rời Stockholm đi Bangkok. Qu&yacute; kh&aacute;ch ăn uống, nghỉ ngơi tr&ecirc;n m&aacute;y bay.</span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660066\"><strong>Ng&agrave;y 12:&nbsp;BANGKOK &ndash; TP.HỒ CH&Iacute; MINH&nbsp;</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">07:45: Qu&yacute; kh&aacute;ch rời Bangkok về lại th&agrave;nh phố Hồ Ch&iacute; Minh.</span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-family:Arial,Helvetica,sans-serif\">09:15: Đến s&acirc;n bay T&acirc;n Sơn Nhất, ch&agrave;o tạm biệt v&agrave; hẹn gặp lại.</span></p>\r\n\t</li>\r\n</ul>\r\n",
  "giave": "<p><span style=\"color:#660066\"><strong>Gi&aacute; tour bao gồ</strong><strong>m:</strong></span></p>\r\n\r\n<ul>\r\n\t<li><strong>V&eacute; m&aacute;y bay</strong>&nbsp;quốc tế HCM-Copenhagen // Stockholm-HCM&nbsp;<em>(v&eacute; một th&aacute;ng, hạng phổ th&ocirc;ng).</em></li>\r\n\t<li><strong>Chuyến bay nội địa Ch&acirc;u &Acirc;u&nbsp;</strong>Copenhagen-Bergen//Oslo-Helsinki//Stockholm-Reykjavik-Stockholm.</li>\r\n\t<li><strong>Du thuyền&nbsp;</strong>vịnh Gudvangen.</li>\r\n\t<li><strong>Du thuyền&nbsp;</strong>Helsinki-Stockholm.</li>\r\n\t<li><strong>Thuế&nbsp;</strong>phi trường v&agrave; Ph&iacute; an ninh.</li>\r\n\t<li><strong>Kh&aacute;ch sạn&nbsp;</strong>ti&ecirc;u chuẩn quốc tế 4*&nbsp;<em>(2 kh&aacute;ch/ph&ograve;ng).</em></li>\r\n\t<li><strong>C&aacute;c bữa ăn, v&eacute; tham quan, xe</strong>&nbsp;đưa đ&oacute;n theo chương tr&igrave;nh.</li>\r\n\t<li><strong>HDV</strong>&nbsp;tiếng Việt hướng dẫn suốt tuyến&nbsp;<em>(11h/ng&agrave;y).</em></li>\r\n\t<li><strong>Lệ ph&iacute;</strong>&nbsp;visa&nbsp;<em>(nộp LSQ, thư mời):</em>000.000 đ</li>\r\n\t<li><strong>Bảo hiểm du lịch to&agrave;n cầu</strong>&nbsp;Travel Guard của AIG, với mức đền b&ugrave; tối đa l&agrave; 1.000.000.000 đ/ kh&aacute;ch cho c&aacute;c chi ph&iacute; y tế về tai nạn v&agrave; ốm đau&hellip;</li>\r\n\t<li><strong>Qu&agrave; tặng:&nbsp;</strong>ba l&ocirc; du lịch, n&oacute;n, bao da hộ chiếu, DVD ghi lại h&igrave;nh ảnh của chuyến đi.</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"color:#660066\"><strong>Gi&aacute; tour kh&ocirc;ng bao gồm:</strong></span></p>\r\n\r\n<ul>\r\n\t<li><strong>Chi ph&iacute;&nbsp;</strong>trả cho hướng dẫn vi&ecirc;n&nbsp;v&agrave; t&agrave;i xế phục vụ ngo&agrave;i giờ&nbsp;<em>(nếu c&oacute; y&ecirc;u cầu)</em>.</li>\r\n\t<li><strong>Tip</strong>&nbsp;cho hướng dẫn vi&ecirc;n v&agrave; t&agrave;i xế tại địa phương.</li>\r\n\t<li><strong>Chi ph&iacute; ph&ograve;ng đơn 18 triệu đồng/ kh&aacute;ch tour Bắc &Acirc;u, 22 triệu đồng/ kh&aacute;ch tour Bắc &Acirc;u-Băng Đảo.</strong></li>\r\n</ul>\r\n\r\n<hr />\r\n<p><span style=\"color:#660066\"><strong>Gi&aacute; tour cho trẻ em:</strong></span></p>\r\n\r\n<ul>\r\n\t<li><strong>Trẻ em dưới 2 tuổi:&nbsp;</strong>30% gi&aacute; tour&nbsp;<em>(bố mẹ đi c&ugrave;ng).</em></li>\r\n\t<li><strong>Trẻ em từ 2 tuổi đến dưới 12 tuổi:</strong>\r\n\t<ul>\r\n\t\t<li>75% gi&aacute; tour (chưa gồm visa) nếu b&eacute; ngủ chung giường với bố mẹ.</li>\r\n\t\t<li>90% gi&aacute; tour (chưa gồm visa) nếu b&eacute; ngủ ri&ecirc;ng một giường.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><strong>Trẻ em từ 12 tuổi trở l&ecirc;n:&nbsp;</strong>100% gi&aacute; tour người lớn.</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><strong><span style=\"color:#660066\">Điều kiện hủy tour ng&agrave;y thường :</span>&nbsp;</strong><em>(kh&ocirc;ng t&iacute;nh Thứ Bảy v&agrave; Chủ Nhật)</em></p>\r\n\r\n<ul>\r\n\t<li>Ngay sau khi đặt cọc v&agrave; trước khi C&ocirc;ng ty nộp ph&iacute; visa: 4.000.000 VND/kh&aacute;ch (cọc v&eacute; m&aacute;y bay).</li>\r\n\t<li>Sau khi ho&agrave;n tất dịch thuật hồ sơ hoặc 24-29 ng&agrave;y trước khởi h&agrave;nh: 50% gi&aacute; trị cọc.</li>\r\n\t<li>Trong thời gian L&atilde;nh Sự x&eacute;t cấp Visa hoặc Ngay sau khi được chấp thuận visa: 100% gi&aacute; trị cọc.</li>\r\n\t<li>Trước ng&agrave;y khởi h&agrave;nh 14-19 ng&agrave;y: 50% gi&aacute; trị tour.</li>\r\n\t<li>Trước ng&agrave;y khởi h&agrave;nh 10-13 ng&agrave;y: 70% gi&aacute; trị tour.</li>\r\n\t<li>Trước ng&agrave;y khởi h&agrave;nh 02-09 ng&agrave;y l&agrave;m việc<em>:</em>&nbsp;90% gi&aacute; trị tour.</li>\r\n\t<li>Trong v&ograve;ng 24h trước khởi h&agrave;nh: 100% gi&aacute; trị tour.</li>\r\n\t<li>Trường hợp hủy tour do sự cố kh&aacute;ch quan như thi&ecirc;n tai, dịch bệnh&hellip; C&ocirc;ng ty sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm bồi thường th&ecirc;m bất kỳ chi ph&iacute; n&agrave;o ngo&agrave;i việc ho&agrave;n trả tiền tour.</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><strong><span style=\"color:#660066\">Điều kiện hủy tour ng&agrave;y l&ecirc;, tết:&nbsp;</span></strong><em>(kh&ocirc;ng t&iacute;nh Thứ Bảy v&agrave; Chủ Nhật)</em></p>\r\n\r\n<ul>\r\n\t<li>Ngay sau khi đặt cọc v&agrave; trước khi C&ocirc;ng ty nộp ph&iacute; visa: 5.000.000 VND/kh&aacute;ch (cọc v&eacute; m&aacute;y bay).</li>\r\n\t<li>Trước ng&agrave;y khởi h&agrave;nh 45 ng&agrave;y: 50% gi&aacute; trị cọc.</li>\r\n\t<li>Trong thời gian L&atilde;nh Sự x&eacute;t cấp Visa hoặc Ngay sau khi được chấp thuận visa: 100% gi&aacute; trị cọc.</li>\r\n\t<li>Trước ng&agrave;y khởi h&agrave;nh 30 &ndash; 35 ng&agrave;y: 50% gi&aacute; trị tour.</li>\r\n\t<li>Trước ng&agrave;y khởi h&agrave;nh 20 &ndash; 25 ng&agrave;y: 70% gi&aacute; trị tour.</li>\r\n\t<li>Trước ng&agrave;y khởi h&agrave;nh 11 &ndash; 15 ng&agrave;y l&agrave;m việc<em>:</em>&nbsp;90% gi&aacute; trị tour.</li>\r\n\t<li>Trong v&ograve;ng 7-10 ng&agrave;y trước khởi h&agrave;nh: 100% gi&aacute; trị tour.</li>\r\n\t<li>Trường hợp hủy tour do sự cố kh&aacute;ch quan như thi&ecirc;n tai, dịch bệnh&hellip; C&ocirc;ng ty sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm bồi thường th&ecirc;m bất kỳ chi ph&iacute; n&agrave;o ngo&agrave;i việc ho&agrave;n trả tiền tour.</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><strong><span style=\"color:#660066\">Ghi ch&uacute;:</span></strong></p>\r\n\r\n<ul>\r\n\t<li>LSQ sẽ giữ hộ chiếu gốc của Qu&yacute; kh&aacute;ch trong suốt thời gian x&eacute;t visa.</li>\r\n\t<li>Visa Ch&acirc;u &Acirc;u sẽ được cấp với thời hạn đ&uacute;ng theo lịch đi của đo&agrave;n, đề nghị Qu&yacute; kh&aacute;ch phải đi v&agrave; về theo đo&agrave;n.</li>\r\n\t<li>Sau khi kết th&uacute;c tour, HDV của C&ocirc;ng ty sẽ giữ lại to&agrave;n bộ hộ chiếu gốc k&egrave;m visa Schengen của tất cả kh&aacute;ch đi trong đo&agrave;n để tr&igrave;nh diện với LSQ, trong v&ograve;ng 03 ng&agrave;y Qu&yacute; kh&aacute;ch vui l&ograve;ng l&ecirc;n c&ocirc;ng ty lấy lại hộ chiếu.</li>\r\n\t<li>Nếu Qu&yacute; kh&aacute;ch được cấp visa nhưng v&igrave; bất kỳ l&yacute; do n&agrave;o m&agrave; kh&ocirc;ng thể tham gia đo&agrave;n được, c&ocirc;ng ty C&ocirc;ng ty sẽ th&ocirc;ng b&aacute;o với LSQ hủy visa Shengen của Qu&yacute; kh&aacute;ch.</li>\r\n\t<li><strong>Gi&aacute; tour&nbsp;</strong>tr&ecirc;n &aacute;p dụng cho kh&aacute;ch h&agrave;ng từ 12 tuổi đến 69 tuổi, c&oacute; thể thay đổi phụ thuộc v&agrave;o gi&aacute; v&eacute; m&aacute;y bay tại thời điểm khởi h&agrave;nh.</li>\r\n\t<li><strong>Qu&yacute; kh&aacute;ch từ 70 tuổi trở l&ecirc;n</strong>&nbsp;sẽ đ&oacute;ng th&ecirc;m ch&ecirc;nh lệch cho mức ph&iacute; bảo hiểm cao cấp.</li>\r\n\t<li><strong>Qu&yacute; kh&aacute;ch từ 75 tuổi trở l&ecirc;n</strong>&nbsp;y&ecirc;u cầu phải c&oacute; giấy x&aacute;c nhận đầy đủ sức khỏe để đi du lịch nước ngo&agrave;i của b&aacute;c sĩ v&agrave; phải c&oacute; người th&acirc;n khỏe mạnh dưới 60 tuổi đi c&ugrave;ng.</li>\r\n\t<li><strong>Trong trường hợp&nbsp;</strong>qu&yacute; kh&aacute;ch đăng k&yacute; gồm 01 người lớn đi với 01 b&eacute; dưới 12 tuổi, qu&yacute; kh&aacute;ch vui l&ograve;ng đ&oacute;ng 100% tiền tour cho b&eacute; ngủ giường ri&ecirc;ng.</li>\r\n\t<li>Chương tr&igrave;nh c&oacute; thể thay đổi t&ugrave;y thuộc lịch bay của h&atilde;ng h&agrave;ng kh&ocirc;ng v&agrave; t&igrave;nh h&igrave;nh kh&aacute;ch sạn. Trong những trường hợp kh&aacute;ch quan như khủng bố, bạo động, thi&ecirc;n tai&hellip;hoặc sự thay đổi lịch tr&igrave;nh của c&aacute;c phương tiện vận tải c&ocirc;ng cộng (m&aacute;y bay, t&agrave;u hỏa&hellip;) th&igrave; c&ocirc;ng ty C&ocirc;ng ty giữ quyền thay đổi lộ tr&igrave;nh hoặc hủy tour v&igrave; sự thuận tiện v&agrave; an to&agrave;n cho kh&aacute;ch h&agrave;ng v&agrave; sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm bồi thường những thiệt hại ph&aacute;t sinh.</li>\r\n\t<li>Quy tr&igrave;nh đăng k&yacute; &amp; thanh to&aacute;n:</li>\r\n\t<li>Đợt 1: Đặt cọc <strong>30</strong>.<strong>000.000 VND</strong>&nbsp;v&agrave; nộp hồ sơ trước ng&agrave;y khởi h&agrave;nh &iacute;t nhất l&agrave;&nbsp;<strong>30 ng&agrave;y.</strong></li>\r\n\t<li>Đợt 2: Thanh to&aacute;n số tiền tour c&ograve;n lại ngay sau khi được chấp thuận visa.</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><strong><span style=\"color:#660066\">HỒ SƠ CẦN CHUẨN BỊ</span></strong></p>\r\n\r\n<ul>\r\n\t<li>Hộ chiếu cũ v&agrave; mới.</li>\r\n\t<li>02 h&igrave;nh 3.5 x 4.5 cm nền trắng, thấy r&otilde; tr&aacute;n, 2 tai, chụp mới trong v&ograve;ng 03 th&aacute;ng.</li>\r\n\t<li>Sao y hộ khẩu (nguy&ecirc;n cuốn), CMND, giấy đăng k&iacute; kết h&ocirc;n (hoặc giấy x&aacute;c nhận độc th&acirc;n).</li>\r\n\t<li>Bản sao khai sinh.</li>\r\n\t<li>Giấy x&aacute;c nhận việc l&agrave;m, hợp đồng lao động, bảng lương 3 th&aacute;ng gần nhất.</li>\r\n\t<li>Giấy ph&eacute;p c&ocirc;ng ty cho nghỉ ph&eacute;p đi du lịch với thời gian cụ thể.</li>\r\n\t<li>Hồ sơ t&agrave;i ch&iacute;nh:</li>\r\n\t<li>Sở hữu nh&agrave; / đất . Hợp đồng cho thu&ecirc; nh&agrave; / g&oacute;p vốn (sao y).</li>\r\n\t<li>X&aacute;c nhận số dư ng&acirc;n h&agrave;ng (bản ch&iacute;nh) hoặc Sổ tiết kiệm (sao y).</li>\r\n\t<li>Nếu l&agrave; chủ c&ocirc;ng ty, doanh nghiệp, kinh doanh c&aacute; thể:</li>\r\n\t<li>Giấy ph&eacute;p th&agrave;nh lập doanh nghiệp / Giấy ph&eacute;p đăng k&iacute; kinh doanh.</li>\r\n\t<li>Tờ khai đ&oacute;ng thuế 3 th&aacute;ng gần nhất.</li>\r\n\t<li>Nếu l&agrave; c&aacute;n bộ hưu tr&iacute;: thẻ hưu tr&iacute;, sổ lương hưu.</li>\r\n\t<li>Nếu l&agrave; sinh vi&ecirc;n/ học sinh: x&aacute;c nhận đang l&agrave; sinh vi&ecirc;n của trường.</li>\r\n</ul>\r\n\r\n<p><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tr&ecirc;n đ&acirc;y l&agrave; những thủ tục để xin visa Ch&acirc;u &Acirc;u theo quy định của L&atilde;nh sự .</em></strong></p>\r\n\r\n<p><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; T&ugrave;y v&agrave;o mỗi trường hợp, trong qu&aacute; tr&igrave;nh x&eacute;t visa, l&atilde;nh sự c&oacute; quyền y&ecirc;u cầu bổ sung</em></strong></p>\r\n\r\n<p><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; th&ecirc;m giấy tờ của Qu&yacute; kh&aacute;ch nếu thấy cần thiết.&nbsp;</em></strong></p>\r\n",
  "hinhanh": [
    {
      "filename": "bắc âu.jpg",
      "aliasname": "c480ba1f5e18cab8be045c2829aac6f3_20170628030633.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "5950d6c12b063bc50f8b4567",
    "5953480a2b063be13a8b4567",
    "595348152b063be13a8b4568"
  ],
  "date_post": ISODate("2017-07-23T03:00:47.220Z"),
  "giatour": NumberInt(130000000),
  "ngaykhoihanh": [
    ISODate("2017-08-16T00:00:00.0Z")
  ],
  "ngayketthuc": [
    ISODate("2017-08-27T00:00:00.0Z")
  ],
  "giagiamtour": NumberInt(120000000)
});
db.getCollection("tours").insert({
  "_id": ObjectId("595358fd2b063bd4528b4567"),
  "tieude": "CHÂU ÂU: PHÁP - LUXEMBOURG -  ĐỨC - HÀ LAN - BỈ - Ý - VATICAN (12 NGÀY 11 ĐÊM) KHỞI HÀNH 25 HÀNG THÁNG",
  "giatour": NumberInt(59900000),
  "ngaykhoihanh": ISODate("2017-08-25T00:00:00.0Z"),
  "ngayketthuc": ISODate("2017-09-05T00:00:00.0Z"),
  "mota": "Du lịch Châu Âu với Pháp lãng mạn, Hà Lan yên bình và Ý cổ kính là hành trình mà du khách không thể bỏ qua. Đến với mỗi thành phố, bạn sẽ tham quan, tìm hiểu, khám phá và thưởng lãm nhiều thắng cảnh nổi tiếng, nhiều viện bảo tàng, cung điện với lối kiến trúc độc đáo từ thời Phục hưng.\r\n",
  "noidung": "<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 1: TP. HỒ CH&Iacute; MINH - PARIS&nbsp;</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hướng dẫn vi&ecirc;n c&ocirc;ng ty đ&oacute;n Qu&yacute; Kh&aacute;ch tại cột số 10 ga quốc tế s&acirc;n bay Quốc tế T&acirc;n Sơn Nhất đ&aacute;p chuyến bay <strong>Singapore Airlines SQ 185</strong>&nbsp; khởi h&agrave;nh l&uacute;c <strong>19:50 đến s&acirc;n bay Changi &ndash; Singapore l&uacute;c 22:55</strong>&nbsp; (thời gian bay 2 giờ 05 ph&uacute;t). Đo&agrave;n l&agrave;m thủ tục nối <strong>chuyến bay SQ 336 đi PARIS l&uacute;c 00:10&nbsp; (thời gian bay 14 giờ 00 ph&uacute;t).</strong></span></span></p>\r\n\t</li>\r\n\t<li>\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nghỉ đ&ecirc;m tr&ecirc;n m&aacute;y bay.</span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<div style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 2 : PARIS - REIMS - &nbsp;LUXEMBOURG&nbsp;(Ăn trưa, tối)</strong></span></span></span></div>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute;&nbsp;kh&aacute;ch sẽ đến Paris l&uacute;c <strong>07:10 s&aacute;ng,</strong> l&agrave;m thủ tục nhập cảnh. Xe đ&oacute;n đo&agrave;n tại s&acirc;n bay.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n khởi h&agrave;nh tới <strong><span style=\"background-color:white\">Th&agrave;nh phố Reims thuộc v&ugrave;ng rượu vang Champagne</span></strong> <span style=\"background-color:white\">- <strong>&quot;thủ đ&ocirc; của xứ sở Champagne&rdquo;- </strong>trung t&acirc;m sản xuất loại vang trứ danh của Ph&aacute;p từ thế kỷ 17. C&aacute;ch thủ đ&ocirc; Paris 130km về ph&iacute;a Đ&ocirc;ng Bắc, <strong>Reims</strong> l&agrave; qu&ecirc; hương của rượu vang sủi tăm nổi tiếng nhất thế giới, l&agrave; điểm đến của những ai y&ecirc;u hương vị của những giọt rượu vang l&oacute;ng l&aacute;nh.</span></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Điểm dừng ch&acirc;n cuối ng&agrave;y l&agrave;<strong> Luxembourg</strong> l&agrave; đất nước năng động, lịch l&atilde;m, b&igrave;nh y&ecirc;n v&agrave; lắm điều th&uacute; vị, với niềm tự h&agrave;o l&agrave; &ldquo;Tr&aacute;i tim xanh của Ch&acirc;u &Acirc;u&rdquo;; Luxembourg l&agrave; Di sản Văn h&oacute;a thế giới, được UNESCO c&ocirc;ng nhận danh hiệu &ldquo;Thủ đ&ocirc; văn h&oacute;a Ch&acirc;u &Acirc;u&rdquo; năm 1995 v&agrave; 2007, Luxembourg nằm gọn giữa c&aacute;c &ldquo;đại gia&rdquo; Ph&aacute;p, Đức, Bỉ; chẳng những kh&ocirc;ng bị th&ocirc;n t&iacute;nh, đồng h&oacute;a m&agrave; c&ograve;n vươn l&ecirc;n tầm v&oacute;c thế giới. Ngo&agrave;i tiếng Luxembourg, người d&acirc;n ở đ&acirc;y c&ograve;n th&ocirc;ng thạo c&aacute;c ng&ocirc;n ngữ kh&aacute;c như Ph&aacute;p, Đức, Bỉ, tiếng Anh v&agrave; tiếng mẹ đẻ. Luxembourg h&agrave;i h&ograve;a giữa cảnh quan thi&ecirc;n nhi&ecirc;n v&agrave; kiến tr&uacute;c.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>C&aacute;c kiến tr&uacute;c nối bật tại Luxembourg:</strong></span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Viện Lập Ph&aacute;p ( Place de Constitution)</strong>:&nbsp;Nơi diễn ra c&aacute;c cuộc tranh luận v&agrave; bỏ phiếu&nbsp;th&ocirc;ng qua c&aacute;c dư luật.&nbsp;</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường trung t&acirc;m thủ đ&ocirc; Luxembourg.</strong></span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Pont Adolphe</strong>: Chiếc cầu nổi tiếng đẹp nhất thủ đ&ocirc; Luxembourg, m&ocirc;t biểu tượng du lịch của th&agrave;nh phố v&agrave; khu phố cổ nơi ch&ocirc;n cất vị tướng t&agrave;i giỏi của <strong>Luxembourg Gorge Petrusse</strong> cũng c&oacute; thể xem như một nơi l&agrave;m rạng danh đất nước.</span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">1<strong>9:30:</strong>&nbsp;&nbsp;D&ugrave;ng bữa tối tại nh&agrave; h&agrave;ng/kh&aacute;ch sạn địa phương</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>20:00:&nbsp;</strong>Qu&yacute; kh&aacute;ch nhận ph&ograve;ng v&agrave; nghỉ ngơi.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nghỉ đ&ecirc;m tại Luxembourg</strong>.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>Hotel:</strong></span>&nbsp;<strong>Melia Luxembourg / Doubletree by Hilton Hotel - Luxembourg or similar.</strong></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 3: LUXEMBOURG ( Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn s&aacute;ng tại kh&aacute;ch sạn. </span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch sẽ rời th&agrave;nh phố<strong> Luxembourg</strong> v&agrave; tiến thẳng đến bi&ecirc;n giới <strong>Đức.</strong> </span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n tham quan th&agrave;nh phố lịch sử <strong>Trier</strong>, th&agrave;nh phố cổ xưa nhất của Đức v&agrave; l&agrave; nơi sinh của vị l&atilde;nh tụ <strong>Karl Marx, </strong>nh&agrave; tư tưởng, nh&agrave; kinh tế ch&iacute;nh trị, nh&agrave; l&atilde;nh đạo c&aacute;ch mạng của Hiệp hội Người lao động Quốc tế.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch sẽ tham quan:</span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tham quan b&ecirc;n ngo&agrave;i <strong>nơi sinh của vị l&atilde;nh tụ Karl Marx,</strong> nay được xem như l&agrave; bảo t&agrave;ng lưu giữ những hỉnh ảnh, kỉ vật của karl Marx.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Trier Cathedral</strong>: Th&aacute;nh đường Trier - L&agrave; th&aacute;nh đường l&acirc;u đời nhất trong th&agrave;nh phố v&agrave; cũng l&agrave; nh&agrave; thờ lớn nhất ở Trier. Từ năm 1986 n&oacute; đ&atilde; được v&agrave;o danh s&aacute;ch của UNESCO di sản thế giới<span style=\"background-color:white\">.</span></span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>Porta Nigra</strong><strong>:</strong> Cổng th&agrave;nh đen - L&agrave; một cổng th&agrave;nh lớn thời La M&atilde;. Năm 1986 được Unesco c&ocirc;ng nhận l&agrave; di sản thế giới, di t&iacute;ch La M&atilde;. Được x&acirc;y dựng trong m&agrave;u x&aacute;m đ&aacute; sa thạch giữa 186 v&agrave; 200 sau C&ocirc;ng nguy&ecirc;n. </span></span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Tiếp đến, đo&agrave;n đến </span><strong><span style=\"background-color:white\">Konlenz </span></strong><span style=\"background-color:white\">&ndash; <strong>thị trấn nẳm ở lưu vực s&ocirc;ng Rhine v&agrave; s&ocirc;ng Mosel.</strong> V&agrave;o m&ugrave;a h&egrave;, </span>du kh&aacute;ch c&oacute; thể chọn thả m&igrave;nh tr&ecirc;n <strong>Du thuyền S&ocirc;ng Rhine</strong> ngắm cảnh đẹp thanh b&igrave;nh của th&agrave;nh phố v&agrave; v&ocirc; số c&aacute;c kiến tr&uacute;c l&acirc;u đ&agrave;i cổ, ph&aacute;o đ&agrave;i cổ tr&ecirc;n cao những ngọn n&uacute;i ch&oacute;t v&oacute;t (chi ph&iacute; tự t&uacute;c).</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Đo&agrave;n dừng ch&acirc;n tham quan </span><strong><span style=\"background-color:white\">Ruedesheim </span></strong><span style=\"background-color:white\">để xem </span><strong><span style=\"background-color:white\">Đ&agrave;i tưởng niệm Niederwald</span></strong><span style=\"background-color:white\"> &ndash; một tượng đ&agrave;i được x&acirc;y dựng v&agrave;o cuối thế kỷ 19 &ndash; để kỷ niệm sự ra đời của Đế chế Đức.</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Sau đ&oacute;, đo&agrave;n đến </span><strong><span style=\"background-color:white\">Frankfurt </span></strong><strong><span style=\"background-color:white\">&ldquo;trung t&acirc;m t&agrave;i ch&iacute;nh lớn nhất Ch&acirc;u &Acirc;u&rdquo;:</span></strong><strong> </strong></span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Nh&agrave; h&aacute;t cũ (Alte Oper)</span></strong>.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Roemerberg &ndash; trung t&acirc;m lịch sử của Frankfurt</span></strong>.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Nh&agrave; thờ St.Paul &ndash;</span></strong> <span style=\"background-color:white\">nơi soạn thảo hiến ph&aacute;p thống nhất đầu ti&ecirc;n của nước Đức.</span></span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Phố Die Zeil</span></strong><strong><span style=\"background-color:white\"> &ndash;</span></strong><span style=\"background-color:white\"> phố mua sắm nhộn nhịp nhất của Đức.</span></span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong><span style=\"color:#333333\">Hotel</span></strong><strong><span style=\"color:#1f497d\">:&nbsp;</span></strong><strong>Sheraton Congress Hotel Frankfurt / Sheraton Offenbach Hotel hoặc tương đương.</strong></span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 4: FRANKFURT &ndash;COLOGNE - AMSTERDAM (Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn s&aacute;ng tại kh&aacute;ch sạn.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Xe đưa đo&agrave;n đi th&agrave;nh phố <strong>Cologne</strong>, tham quan: </span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nh&agrave; thờ Cologne</strong>, một trong những nh&agrave; thờ đẹp nhất Ch&acirc;u &Acirc;u theo kiến tr&uacute;c gothic. c&oacute; kiến tr&uacute;c cao 157m, tương đương với to&agrave; nh&agrave; 40 tầng, khi ngước nh&igrave;n bạn c&oacute; cảm gi&aacute;c dường như n&oacute; chạm đến bầu trời. Nh&agrave; thờ mang phong c&aacute;ch Gothic v&agrave; đ&atilde; được c&ocirc;ng nhận l&agrave; Di sản Thế giới v&agrave;o năm 1996.&nbsp; </span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Cung đường mua sắm Schildergasse.</strong></span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sau khi d&ugrave;ng bữa trưa, đo&agrave;n khởi h&agrave;nh đi H&agrave; Lan.&nbsp;</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>19:30:</strong> Đo&agrave;n d&ugrave;ng bữa tối tại kh&aacute;ch sạn/ nh&agrave; h&agrave;ng địa phương .</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>20:00:&nbsp;</strong>Check-in kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch nhận ph&ograve;ng v&agrave; nghỉ ngơi.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nghỉ đ&ecirc;m tại Amsterdam (hoặc th&agrave;nh phố l&acirc;n cận).</strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>Hotel:</strong><strong>Hampton by Hilton Hotel / Amsterdam Schiphol hoặc tương đương.</strong></span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 5: AMSTERDAM &ndash; ZAANSE SCHANS- AMSTERDAM (Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>07:00:&nbsp;</strong>Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>08:00:</strong>&nbsp;Khởi h&agrave;nh tham quan:&nbsp;</span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường DAM</strong>, bao gồm: <strong>Cung điện Ho&agrave;ng gia v&agrave; đ&agrave;i tưởng niệm quốc gia.</strong></span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Trung t&acirc;m sản xuất kim cương&nbsp; - Nh&agrave; m&aacute;y kim cương Coster</strong>. Q&uacute;y kh&aacute;ch c&oacute; cơ hội tận mắt quan s&aacute;t kỹ thuật chế t&aacute;c kim cương với kỹ thuật được sử dụng từ thế kỷ thứ 16.</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Đo&agrave;n d&ugrave;ng cơm trưa</strong>.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nếu c&oacute; thời gian. Q&uacute;y kh&aacute;ch c&oacute; thể lựa chọn chương tr&igrave;nh&nbsp; - Du thuyền tr&ecirc;n những con k&ecirc;nh đ&agrave;o trứ danh ở Amsterdam (chi ph&iacute; tự t&uacute;c).</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Buổi chiều,</strong> Đo&agrave;n dừng ch&acirc;n tại <strong>Zaanse Schans.</strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Bảo t&agrave;ng cối xay gi&oacute; H&agrave; Lan.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n đến tham quan <strong>Nh&agrave; m&aacute;y sản xuất guốc gỗ, nh&agrave; m&aacute;y sản xuất ph&ocirc; mai. </strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>18:30:&nbsp;</strong>D&ugrave;ng bữa tối tại nh&agrave; h&agrave;ng địa phương.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>20:00:&nbsp;</strong>Qu&yacute;&nbsp;kh&aacute;ch trở về kh&aacute;ch sạn nghỉ ngơi.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nghỉ đ&ecirc;m tại Amsterdam</strong>.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>Hotel:&nbsp;</strong><strong>Hampton by Hilton Hotel/Amsterdam Schiphol hoặc tương đương.</strong></span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 6: AMSTERDAM &ndash; BRUSSELS - PARIS (Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>07:00:&nbsp;</strong>Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>08:00</strong>&nbsp;&nbsp; Đo&agrave;n khởi h&agrave;nh đi <strong>Brussels &ndash; thủ đ&ocirc; của Bỉ v&agrave; l&agrave; trung t&acirc;m ch&iacute;nh trị của li&ecirc;n minh Ch&acirc;u &Acirc;u.</strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường Grand Place<em> &ndash; </em></strong>khu phố cổ đẹp nhất Brussels được UNESCO c&ocirc;ng nhận l&agrave; di sản văn h&oacute;a Thế giới, gồm t&ograve;a thị ch&iacute;nh, nh&agrave; Maison du Duc (Nh&agrave; của c&ocirc;ng tước),..&nbsp;&nbsp;</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Tượng ch&uacute; b&eacute; đứng t&egrave; Manneken Pis<em>,</em></strong><strong><em> </em></strong>biểu tượng nổi tiếng của nước Bỉ. <strong><em>&nbsp;</em></strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Bảo t&agrave;ng ph&acirc;n tử Atomium</strong>, một c&ocirc;ng tr&igrave;nh được x&acirc;y dựng cho hội chợ quốc tế&nbsp;tại Bruexelles c&oacute; chiều cao 103m.&nbsp;</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nghỉ đ&ecirc;m tại Ph&aacute;p.</strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>Hotel: </strong><strong>Residhome Paris Guyancourt / Balladins Hotel Villejuif hoặc tương đương.</strong></span></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 7: PARIS&nbsp; - DU NGOẠN S&Ocirc;NG SEINE THƠ MỘNG &nbsp;(Ăn 3 bữa)</strong></span>​​​​​​​</span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>07:00:&nbsp;</strong>Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:black\"><strong>07:30:&nbsp;</strong>Ch&uacute;ng ta sẽ bắt đầu cuộc phi&ecirc;u lưu Paris với chuyến đi dọc theo </span></span><strong><span style=\"background-color:white\">đại lộ Champs Elysees</span></strong><span style=\"background-color:white\"> nổi tiếng đến </span><strong><span style=\"background-color:white\">quảng trường Place de la Concorde</span></strong><span style=\"background-color:white\"> - đ&oacute;ng một vai tr&ograve; quan trọng trong một trong những chương đen tối nhất của cuộc C&aacute;ch mạng Ph&aacute;p. Đo&agrave;n tham quan:</span></span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Arc de Triomphe</span></strong><span style=\"background-color:white\">&nbsp; - </span><strong>Khải Ho&agrave;n M&ocirc;n</strong>, một trong những biểu tượng lịch sử nổi tiếng của nước Ph&aacute;p.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>L&rsquo;hotel National des Invaliden &ndash; Nh&agrave; mộ của Napoleon</strong>.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>B&agrave;o t&agrave;ng Lourve (tham quan b&ecirc;n ngo&agrave;i)</strong>.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Th&aacute;p Eiffel</strong><strong> </strong>&ndash;biểu tượng nổi tiếng nhất của Ph&aacute;p, c&ocirc;ng tr&igrave;nh được x&acirc;y dựng nh&acirc;n kỷ niệm 100 năm c&aacute;ch mạng Ph&aacute;p th&agrave;nh c&ocirc;ng.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Đại lộ Haussmann</span></strong><span style=\"background-color:white\">, thi&ecirc;n đường mua sắm ở trung t&acirc;m của Paris, nơi bạn sẽ được tự do mua sắm.</span></span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sau khi đo&agrave;n d&ugrave;ng cơm trưa, đo&agrave;n đi tham quan: </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Nh&agrave; thờ Đức B&agrave; Paris</span></strong><span style=\"background-color:white\"> (tiếng Ph&aacute;p: <em>Cath&eacute;drale Notre-Dame de Paris</em>) l&agrave; một nh&agrave; thờ C&ocirc;ng gi&aacute;o&nbsp;ti&ecirc;u biểu cho phong c&aacute;ch &nbsp;kiến tr&uacute;c gothic&nbsp;tr&ecirc;n đảo Ile dela Cite</span><span style=\"background-color:white\">&nbsp;(nằm giữa d&ograve;ng s&ocirc;ng Seine</span><span style=\"background-color:white\">) của Paris. Đ&acirc;y cũng l&agrave; nh&agrave; thờ ch&iacute;nh to&agrave;&nbsp;của Tổng gi&aacute;o ph&acirc;n Paris.</span></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Du ngoạn s&ocirc;ng Seine&nbsp;</strong>- Đo&agrave;n sẽ c&oacute; một h&agrave;nh tr&igrave;nh thưởng ngoạn kinh đ&ocirc; &aacute;nh s&aacute;ng Paris &ndash; chi&ecirc;m ngưỡng c&aacute;c c&ocirc;ng tr&igrave;nh kiến tr&uacute;c<strong><em>: <span style=\"background-color:white\">Th&aacute;p Eiffel, Bảo t&agrave;ng Louvre, Điện Les Invalides... l&agrave; những c&ocirc;ng tr&igrave;nh kiến tr&uacute;c nổi tiếng nằm b&ecirc;n bờ s&ocirc;ng Seine của Paris.</span></em></strong><strong><em>. </em></strong>D&ograve;ng s&ocirc;ng Seine d&agrave;i hơn 770 km chảy qua nhiều khu vực h&agrave;nh ch&iacute;nh của Ph&aacute;p, nổi tiếng nhất l&agrave; đoạn chảy qua th&agrave;nh phố Paris - <strong><em>Hai b&ecirc;n bờ s&ocirc;ng Seine trong th&agrave;nh phố Paris được UNESCO c&ocirc;ng nhận l&agrave; di sản văn h&oacute;a thế giới năm 1991.</em></strong> C&oacute; h&agrave;ng chục c&acirc;y cầu bắc ngang qua s&ocirc;ng Seine. Mỗi c&acirc;y cầu mang một vẻ kiến tr&uacute;c v&agrave; lịch sử ri&ecirc;ng biệt của m&igrave;nh&hellip;.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Buổi tối, đo&agrave;n d&ugrave;ng bữa tối. Sau đ&oacute; qu&yacute; kh&aacute;ch c&oacute; thể tự do tham quan Paris.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>Hotel:&nbsp;</strong><strong>Residhome Paris Guyancourt / Balladins Hotel Villejuif hoặc tương đương.&nbsp;</strong></span></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 8: PARIS - VENICE- FLORENCE (Ăn 03 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn s&aacute;ng v&agrave; trả ph&ograve;ng kh&aacute;ch sạn. Đo&agrave;n ra s&acirc;n bay khởi h&agrave;nh tới <strong>Venice</strong> - th&agrave;nh phố nổi tr&ecirc;n biển. Tham quan:</span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường v&agrave; nh&agrave; thờ th&aacute;nh Marco</strong> - Quảng trường San Marco l&agrave; quảng trường quan trọng nhất v&agrave; nổi tiếng nhất của th&agrave;nh phố Venezia. Nh&agrave; thờ th&aacute;nh Marco l&agrave; bảo vật quốc gia của Cộng h&ograve;a Venezia cho đến năm 1797 v&agrave; từ năm 1807 l&agrave; nh&agrave;&nbsp;thờ ch&iacute;nh t&ograve;a của Venezia. Nh&agrave; thờ nằm tr&ecirc;n Quảng trường San Marco trong khu phố San Marco.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Xưởng thủy tinh Murano.</strong></span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Chụp h&igrave;nh tại <strong>Dinh tổng trấn</strong> - Dinh tổng trấn trong th&agrave;nh phố Venezia từ thế kỷ thứ 9 đ&atilde; l&agrave; dinh của vị tổng trấn Venezia v&agrave; trụ sở của c&aacute;c cơ quan ch&iacute;nh phủ v&agrave; t&ograve;a &aacute;n của Cộng h&ograve;a Venice. Đ&acirc;y l&agrave; một trong c&aacute;c c&ocirc;ng tr&igrave;nh x&acirc;y dựng phi t&ocirc;n gi&aacute;o thời Gothic quan trọng nhất.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Option tour (Kh&ocirc;ng bắt buộc)</strong> <strong>Đi thuyền độc mộc</strong> - phương tiện vận chuyển đặc trưng của đảo Venice (chi ph&iacute; Qu&yacute; kh&aacute;ch tự trả, khoảng 100Euro cho 1 thuyền/4 người). </span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Buổi chiều đo&agrave;n khởi h&agrave;nh tới <strong>th&agrave;nh phố Florence</strong> nhận ph&ograve;ng kh&aacute;ch sạn nghỉ ngơi.</span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 9: FLORENCE &ndash; PISA &ndash; ROME (Ăn 03 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sau bữa s&aacute;ng, đo&agrave;n tham quan <strong>th&agrave;nh phố Florence</strong>:</span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Chụp h&igrave;nh b&ecirc;n ngo&agrave;i <strong>Nh&agrave; thờ Duomo</strong> - Tọa lạc ở trung t&acirc;m th&agrave;nh phố Florence l&agrave; nh&agrave; thờ Duomo, th&aacute;nh đường tr&aacute;ng lệ theo phong c&aacute;ch kiến tr&uacute;c Gothic. Nh&agrave; thờ bắt đầu được x&acirc;y dựng từ năm 1296 v&agrave; mất h&agrave;ng trăm năm để ho&agrave;n th&agrave;nh.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường Michelangelo</strong> - nằm tr&ecirc;n một ngọn đồi b&ecirc;n mạn tr&aacute;i của d&ograve;ng Arno xinh đẹp l&agrave; một trong những điểm tham quan được y&ecirc;u th&iacute;ch nhất &ldquo;đất nước h&igrave;nh chiếc ủng&rdquo;. Để ngắm nh&igrave;n vẻ đẹp l&atilde;ng mạn của th&agrave;nh phố khi trời chiều v&agrave; sống động khi về đ&ecirc;m, bạn c&oacute; thể tr&egrave;o l&ecirc;n quảng trường Michelangelo. Tại đ&acirc;y, bạn dễ d&agrave;ng chi&ecirc;m ngưỡng bức tượng &ldquo;Ch&agrave;ng David&rdquo; nổi tiếng của Michelangelo.</span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><img id=\"_x0000_s1026\" src=\"file:///C:\\Users\\DELL\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image001.jpg\" style=\"height:173.6pt; left:0; margin-left:269.95pt; margin-top:-258.1pt; position:absolute; text-align:left; width:233.35pt; z-index:-251651072\" /><strong>C&acirc;y cầu t&igrave;nh y&ecirc;u Ponte Veccio</strong> - L&agrave; c&acirc;y cầu cổ nhất của Florence. Ba m&aacute;i v&ograve;m rộng trải d&agrave;i con s&ocirc;ng. C&aacute;c cửa h&agrave;ng m&agrave;u v&agrave;ng tươi v&agrave; những d&atilde;y cửa sổ nhỏ, vu&ocirc;ng phản chiếu l&ecirc;n mặt nước đem đến một trong những h&igrave;nh ảnh mang t&iacute;nh biểu tượng nhất của Florence. Đ&acirc;y l&agrave; c&acirc;y cầu duy nhất kh&ocirc;ng bị người Đức ph&aacute; hủy khi họ r&uacute;t qu&acirc;n qua Florence trong Chiến tranh Thế giới Thứ hai. Truyền thuyết kể rằng đ&acirc;y l&agrave; mệnh lệnh trực tiếp của Hitler.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tiếp tục&nbsp;đến <strong>Pisa</strong> tham quan: <strong>Th&aacute;p nghi&ecirc;ng Pisa</strong> - một trong những kỳ quan của thế giới (nếu Qu&yacute; kh&aacute;ch c&oacute; nhu cầu tham quan b&ecirc;n trong th&aacute;p, v&eacute; tham quan Qu&yacute; kh&aacute;ch tự chi trả) tự do mua sắm qu&agrave; lưu niệm. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Buổi chiều, đo&agrave;n khởi h&agrave;nh tới <strong>th&agrave;nh phố Rome</strong> - thủ đ&ocirc; cổ k&iacute;nh của nước &Yacute;. Ăn tối v&agrave; nhận ph&ograve;ng nghỉ ngơi.</span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 10: ROME &nbsp;(Ăn 03 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn s&aacute;ng tại kh&aacute;ch sạn. Buổi s&aacute;ng, đo&agrave;n tham quan: </span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Bảo T&agrave;ng Vatican</strong> - Nằm tại Viale Vaticano, Rome, bảo t&agrave;ng Vatican l&agrave; một trong những bảo t&agrave;ng lớn nhất tr&ecirc;n thế giới. Tại đ&acirc;y trưng b&agrave;y nhiều t&aacute;c phẩm nghệ thuật qu&yacute; gi&aacute; từ c&aacute;c bộ sưu tập lớn được Gi&aacute;o hội C&ocirc;ng gi&aacute;o La M&atilde; tạo dựng trong suốt nhiều thế kỷ. </span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nguyện Đường Sistine</strong> &ndash; Đ&acirc;y l&agrave; nh&agrave; nguyện nổi tiếng nhất trong Điện T&ocirc;ng T&ograve;a, l&agrave; nơi d&ugrave;ng tổ chức c&aacute;c Mật nghị Hồng y để bầu chọn một gi&aacute;o ho&agrave;ng mới. Nhưng tr&ecirc;n hết l&agrave; nơi đ&acirc;y lưu giữ hai bức hoạ &ldquo;S&aacute;ng thế kỷ&rdquo; v&agrave; &ldquo;Sự ph&aacute;n x&eacute;t cuối c&ugrave;ng&rdquo; của Michelangelo được vẽ tr&ecirc;n trần v&agrave; tr&ecirc;n tường; </span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align:justify\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Vương Cung Th&aacute;nh Đường Th&aacute;nh Peter</strong> - l&agrave; một trong bốn nh&agrave; thờ lớn nhất ở Vatican. Đ&acirc;y l&agrave; nơi thường xuy&ecirc;n diễn ra những hoạt động, buổi lễ lớn của c&aacute;c gi&aacute;o d&acirc;n do gi&aacute;o ho&agrave;ng chủ tr&igrave; v&agrave; mỗi năm cứ đến dịp lễ noel, lại l&agrave; nơi được cả thế giới thi&ecirc;n ch&uacute;a gi&aacute;o hướng về với một l&ograve;ng th&agrave;nh k&iacute;nh.</span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tham quan b&ecirc;n ngo&agrave;i <strong>L&acirc;u đ&agrave;i Sant&rsquo; Angelo</strong> - L&acirc;u đ&agrave;i Sant Angelo l&agrave; một t&ograve;a l&acirc;u đ&agrave;i h&igrave;nh trụ cao ch&oacute;t v&oacute;t tại thủ đ&ocirc; Rome. Ban đầu nơi n&agrave;y được x&acirc;y dựng để l&agrave;m nơi an nghỉ cho Ho&agrave;ng đế La M&atilde; Hadrian v&agrave; d&ograve;ng tộc của &ocirc;ng. Sau n&agrave;y, t&ograve;a nh&agrave; đ&atilde; được sử dụng như một ph&aacute;o đ&agrave;i v&agrave; một l&acirc;u đ&agrave;i, hiện nay n&oacute; trở th&agrave;nh một viện bảo t&agrave;ng phục vụ du kh&aacute;ch tham quan.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sau bữa tối, đo&agrave;n về kh&aacute;ch sạn nghỉ ngơi.</span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 11: &nbsp;ROME - TP HỒ CH&Iacute; MINH (Ăn s&aacute;ng, trưa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n ăn s&aacute;ng v&agrave; trả ph&ograve;ng kh&aacute;ch sạn. Sau đ&oacute; đo&agrave;n tiếp tục tham quan th&agrave;nh phố Rome: chụp h&igrave;nh b&ecirc;n ngo&agrave;i Đấu trường La M&atilde;, di t&iacute;ch Th&agrave;nh cổ La M&atilde;, Đ&agrave;i tưởng niệm Vitto Emmanuel II. Mua sắm qu&agrave; lưu niệm cho đến giờ ra phi trường đ&oacute;n chuyến bay vể Việt Nam. (Chuyến bay qu&aacute; cảnh t&ugrave;y h&agrave;ng kh&ocirc;ng).</span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#330066\"><strong>NG&Agrave;Y 12:&nbsp; TP HỒ CH&Iacute; MINH (Ăn s&aacute;ng, trưa</strong></span><span style=\"color:#330066\"><strong>)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">15:05: Đo&agrave;n về tới Th&agrave;nh phố Hồ Ch&iacute; Minh. Trả đo&agrave;n tại s&acirc;n bay.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hẹn gặp lại qu&yacute; kh&aacute;ch v&agrave;o h&agrave;nh tr&igrave;nh tới.</span></span></li>\r\n</ul>\r\n",
  "giave": "<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#330066\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>GI&Aacute; TOUR BAO GỒM:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">V&eacute; m&aacute;y bay chặng quốc tế: Tp.HCM &ndash; Paris // Rome &ndash; Tp.HCM</span></span>.</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Thu&ecirc;́, phụ phí xăng d&acirc;̀u, phí an ninh, phí s&acirc;n bay phi trường 2 nước. </span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Kh&aacute;ch sạn từ 3 </strong>&ndash; <strong>&nbsp;4 sao</strong> đ&acirc;̀y đủ ti&ecirc;̣n nghi, ti&ecirc;u chuẩn ph&ograve;ng đ&ocirc;i. Trong trường hợp cần thiết vì lý do giới tính, ph&ograve;ng ba sẽ được bố tr&iacute;. </span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Thư mời Schengen.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hướng d&acirc;̃n vi&ecirc;n từ Việt Nam theo đoàn su&ocirc;́t tuy&ecirc;́n.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn u&ocirc;́ng, xe đưa đ&oacute;n, v&agrave; ph&iacute; tham quan theo chương trình</span></span>.</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&agrave; tặng lưu niệm: n&oacute;n,&nbsp; bao hộ chiếu</span></span>.</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Bảo hi&ecirc;̉m du lịch qu&ocirc;́c t&ecirc;́ với mức đ&ecirc;̀n bù 1.000.000.000 VND/ trường hợp.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#330066\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>GI&Aacute; TOUR KH&Ocirc;NG BAO GỒM:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hộ chiếu còn hạn tr&ecirc;n sáu tháng.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Phí visa 3.000.000 vnđ</strong> (Trong đ&oacute;: lệ ph&iacute; đ&oacute;ng LSQ l&agrave; 2.100.000 vnđ, phí dịch thu&acirc;̣t h&ocirc;̀ sơ 900.000 vnđ).</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ch&iacute; ph&iacute; c&aacute; nh&acirc;n, h&agrave;nh l&yacute; qu&aacute; cước v&agrave; c&aacute;c chi ph&iacute; ph&aacute;t sinh ngo&agrave;i chương tr&igrave;nh.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tiền tips cho hướng dẫn vi&ecirc;n v&agrave; t&agrave;i xế địa phương:<strong> 100 Euro/người/ tour</strong></span></span>.</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Chi ph&iacute; dời ng&agrave;y, đổi h&agrave;nh tr&igrave;nh (đổi chặng), n&acirc;ng hạng v&eacute; m&aacute;y bay.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Phụ ph&iacute; ph&ograve;ng đơn (trường hợp kh&aacute;ch đăng k&yacute; đi lẻ 1 m&igrave;nh, nếu đo&agrave;n khởi h&agrave;nh c&oacute; 2 kh&aacute;ch lẻ Nam hoặc 2 kh&aacute;ch lẻ Nữ ch&uacute;ng t&ocirc;i sẽ linh động gh&eacute;p v&agrave;o th&agrave;nh 1 ph&ograve;ng twin ph&ugrave; hợp, trong trường hợp kh&ocirc;ng c&oacute; kh&aacute;ch lẻ n&agrave;o kh&aacute;c để gh&eacute;p với qu&iacute; kh&aacute;ch, qu&iacute; kh&aacute;ch vui l&ograve;ng đ&oacute;ng ph&iacute; ph&ograve;ng đơn).</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#330066\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>GI&Aacute; V&Eacute; TRẺ EM: (t&iacute;nh theo ng&agrave;y / th&aacute;ng / năm sinh)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trẻ em từ 2 đến dưới 12 tuổi: 85% gi&aacute; tour trọn g&oacute;i người lớn (Kh&ocirc;ng c&oacute; chế độ giường ri&ecirc;ng).</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trẻ em dưới 2 tuổi: 35% gi&aacute; tour trọn g&oacute;i người lớn.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">*** Lưu &yacute;: Trẻ em ngủ chung giường với bố mẹ. Mỗi gia đ&igrave;nh chỉ được k&egrave;m 1 trẻ em, trẻ em thứ 2 đ&oacute;ng 100% để c&oacute; ti&ecirc;u chuẩn giường ri&ecirc;ng.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#330066\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>QUY TRÌNH ĐĂNG KÝ VÀ THỰC HI&Ecirc;̣N:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch vui lòng đem theo Passport (bản chính), và đ&oacute;ng <strong>cọc 20 triệu VNĐ</strong> khi đăng k&yacute; tour (trước ngày khởi hành &iacute;t nhất <strong>45 ng&agrave;y</strong>)</span></span>.</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ho&agrave;n tất thanh to&aacute;n tiền tour c&ograve;n lại trước ng&agrave;y khởi h&agrave;nh:</span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>15</strong><strong> ng&agrave;y</strong> l&agrave;m việc (đối với tour ng&agrave;y thường)</span></span>.</li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>25 ng&agrave;y</strong> l&agrave;m việc (đối với tour ng&agrave;y lễ, tết) </span></span>.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Khách hàng cung cấp h&ocirc;̀ sơ xin visa trước ngày khởi hành &iacute;t nhất <strong>05 tuần</strong>. </span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"color:black\">C&ocirc;ng ty sẽ hướng d&acirc;̃n thủ tục xin visa, c&aacute;ch đi&ecirc;̀n các m&acirc;̃u đơn visa, đăng ký ngày nộp hồ sơ, kh&aacute;ch h&agrave;ng phải c&oacute; mặt để nộp hồ sơ v&agrave; mang theo hồ sơ bản gốc để đối chiếu.</span></strong></span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#330066\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>GHI CH&Uacute;:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trường hợp đo&agrave;n kh&ocirc;ng đủ 10 kh&aacute;ch khởi h&agrave;nh (10 kh&aacute;ch đi v&agrave; về theo h&agrave;nh tr&igrave;nh tour), C&ocirc;ng ty c&oacute; quyền thay đổi, dời tour sang ng&agrave;y khởi h&agrave;nh gần nhất. Nếu kh&aacute;ch h&agrave;ng kh&ocirc;ng sắp xếp được c&ocirc;ng việc để tham gia tour kế tiếp, ch&uacute;ng t&ocirc;i sẽ ho&agrave;n trả lại tiền cọc tour/tiền tour sau khi đ&atilde; trừ đi lệ ph&iacute; xin visa của c&aacute;c kh&aacute;ch m&agrave; kh&ocirc;ng chịu th&ecirc;m bất kỳ chi ph&iacute; v&agrave; tr&aacute;ch nhiệm n&agrave;o.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đối với những kh&aacute;ch h&agrave;ng chỉ mua Land tour (tức dịch vụ mặt đặt tại nước muốn đến), C&ocirc;ng ty sẽ kh&ocirc;ng khuyến kh&iacute;ch kh&aacute;ch h&agrave;ng tự mua/xuất v&eacute; m&aacute;y bay khi chưa c&oacute; sự x&aacute;c nhận tour chắc chắn khởi h&agrave;nh từ C&ocirc;ng ty Ch&uacute;ng t&ocirc;i kh&ocirc;ng chịu tr&aacute;ch nhiệm về chi ph&iacute; chuyến đi: kh&aacute;ch sạn mua th&ecirc;m, v&eacute; m&aacute;y bay, visa... của kh&aacute;ch h&agrave;ng nếu tour kh&ocirc;ng khởi h&agrave;nh.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đại Sứ Qu&aacute;n &amp; Tổng <strong>L&atilde;nh Sự Qu&aacute;n khối Schengen y&ecirc;u cầu c&aacute;c đương đơn xin visa du lịch theo đo&agrave;n phải tr&igrave;nh diện lại hộ chiếu bản gốc sau khi kết th&uacute;c tour.</strong> V&igrave; vậy kh&aacute;ch h&agrave;ng vui l&ograve;ng gửi lại Hộ chiếu gốc cho Hướng Dẫn Vi&ecirc;n &ndash; Trưởng đo&agrave;n ng&agrave;y về để tr&igrave;nh diện cho ĐSQ/LSQ (cấp visa). Ch&uacute;ng t&ocirc;i sẽ ho&agrave;n trả lại hộ chiếu gốc sau khi đ&atilde; tr&igrave;nh diện xong (khoảng 03 ng&agrave;y l&agrave;m việc). </span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch mang quốc tịch nước ngo&agrave;i hoặc l&agrave; việt kiều phải c&oacute; visa rời mang theo l&uacute;c đi tour.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch mang quốc tịch nước ngo&agrave;i c&oacute; visa t&aacute;i nhập Việt Nam 01 lần, phải l&agrave;m visa t&aacute;i nhập VN để nhập cảnh v&agrave;o VN lần tiếp theo.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch mang 2 Quốc tịch hoặc Travel document (chưa nhập quốc tịch) vui l&ograve;ng th&ocirc;ng b&aacute;o với nh&acirc;n vi&ecirc;n b&aacute;n tour ngay thời điểm đăng k&yacute; tour v&agrave; nộp bản gốc k&egrave;m c&aacute;c giấy tờ c&oacute; li&ecirc;n quan (nếu c&oacute;). </span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Qu&yacute; kh&aacute;ch chỉ mang thẻ xanh (thẻ tạm tr&uacute; tại nước ngo&agrave;i) v&agrave; kh&ocirc;ng c&ograve;n hộ chiếu VN c&ograve;n hiệu lực th&igrave; kh&ocirc;ng du lịch sang nước thứ ba được.</strong></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trường hợp trẻ em đi với người nh&agrave; (kh&ocirc;ng phải Bố Mẹ) phải nộp k&egrave;m giấy ủy quyến được ch&iacute;nh quyền địa phương x&aacute;c nhận (do Bố Mẹ ủy quyền dắt đi tour).</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đối với kh&aacute;ch h&agrave;ng từ 75 tuổi &ndash; đến 79 tuổi: y&ecirc;u cầu k&yacute; cam kết sức khỏe với Cty &amp; giấy kh&aacute;m sức khỏe để đi du lịch nước ngo&agrave;i do b&aacute;c sĩ cấp. Cty khuyến kh&iacute;ch đ&oacute;ng th&ecirc;m ph&iacute; bảo hiểm cao cấp t&ugrave;y theo tour. Bất cứ sự cố n&agrave;o xảy ra tr&ecirc;n tour, C&ocirc;ng ty sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Kh&ocirc;ng nhận kh&aacute;ch h&agrave;ng từ 80 tuổi trở l&ecirc;n &amp; kh&aacute;ch h&agrave;ng mang thai từ th&aacute;ng thứ 5 trở l&ecirc;n. Kh&aacute;ch h&agrave;ng mang thai vui l&ograve;ng th&ocirc;ng b&aacute;o ngay khi đăng k&yacute; tour để được tư vấn.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">C&ocirc;ng ty c&oacute; quyền thay đổi h&atilde;ng h&agrave;ng kh&ocirc;ng vận chuyển v&agrave;o giờ ch&oacute;t t&ugrave;y thuộc v&agrave;o c&aacute;c h&atilde;ng h&agrave;ng kh&ocirc;ng, thời tiết&hellip;</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Giờ bay c&oacute; thể thay đổi m&agrave; kh&ocirc;ng th&ocirc;ng b&aacute;o trước do phụ thuộc v&agrave;o h&atilde;ng h&agrave;ng kh&ocirc;ng.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">T&ugrave;y theo đi&ecirc;̀u ki&ecirc;̣n thực tế m&agrave; chương tr&igrave;nh tham quan c&oacute; thể thay đổi h&agrave;nh tr&igrave;nh, thứ tự tuyến điểm cho ph&ugrave; hợp tuy nhi&ecirc;n c&aacute;c tuyến điểm Du Lịch v&acirc;̃n đảm bảo đ&acirc;̀y đủ như l&uacute;c ban đầu. Tuy nhi&ecirc;n, C&ocirc;ng ty sẽ được miễn trừ tr&aacute;ch nhiệm bảo đảm c&aacute;c điểm tham quan trong trường hợp kh&aacute;ch quan như:</span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Xảy ra thi&ecirc;n tai: b&atilde;o lụt, hạn h&aacute;n, động đất..</span></span></li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sự cố về an ninh: biểu t&igrave;nh, khủng bố, đ&igrave;nh c&ocirc;ng</span></span>.</li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sự cố về h&agrave;ng kh&ocirc;ng: dời, hủy, ho&atilde;n chuyến bay, trục trặc kỹ thuật bay, an ninh bay&hellip;</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nếu những trường hợp tr&ecirc;n xảy ra, C&ocirc;ng ty sẽ xem x&eacute;t để ho&agrave;n chi ph&iacute; kh&ocirc;ng tham quan cho kh&aacute;ch trong điều kiện c&oacute; thể (sau khi đ&atilde; trừ lại c&aacute;c dịch vụ đ&atilde; thực hiện: ph&iacute; l&agrave;m visa, tiền v&eacute; m&aacute;y bay&hellip;.v&agrave; kh&ocirc;ng chịu tr&aacute;ch nhiệm bồi thường th&ecirc;m bất kỳ chi ph&iacute; n&agrave;o kh&aacute;c).</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trường hợp Qu&yacute; kh&aacute;ch kh&ocirc;ng được xuất cảnh v&agrave; nhập cảnh vì lý do cá nh&acirc;n, C&ocirc;ng ty được miễn trừ tr&aacute;ch nhiệm v&agrave; kh&ocirc;ng ho&agrave;n trả tiền tour. Qu&yacute; kh&aacute;ch tự t&uacute;c chi ph&iacute; mua v&eacute; m&aacute;y bay quay về Việt Nam.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">T&ugrave;y theo t&igrave;nh h&igrave;nh cấp Visa của L&atilde;nh Sự Qu&aacute;n v&agrave; v&eacute; m&aacute;y bay, ng&agrave;y khởi h&agrave;nh c&oacute; thể dời lại từ 1 đến 7 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh ban đầu hoặc v&agrave;o đo&agrave;n khởi h&agrave;nh tiếp theo gần nhất hoặc c&oacute; thể sắp xếp lại chương tr&igrave;nh tour cho ph&ugrave; hợp.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hồ sơ xin visa sau khi nộp v&agrave;o L&atilde;nh Sự Qu&aacute;n sẽ kh&ocirc;ng được ho&agrave;n trả lại.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#330066\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>ĐIỀU KIỆN HUỶ TOUR:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">&nbsp;Trong trường hợp kh&ocirc;ng thể tham dự được tour, qu&yacute; kh&aacute;ch vui l&ograve;ng mang Bi&ecirc;n bản đăng k&yacute; tour &amp; bi&ecirc;n lai đ&oacute;ng tiền đến văn ph&ograve;ng Cty C&ocirc;ng ty để l&agrave;m thủ tục hủy/chuyển tour. Phải th&ocirc;ng b&aacute;o cho C&ocirc;ng ty bằng văn bản hoặc email (kh&ocirc;ng giải quyết c&aacute;c trường hợp li&ecirc;n hệ chuyển/hủy tour qua điện thoại) v&agrave; chịu ph&iacute; huỷ phạt như sau:</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><u>ĐỐI VỚI TOUR NG&Agrave;Y THƯỜNG: </u></strong></span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Huỷ ngay sau khi đăng k&yacute;: 30% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hủy trước ng&agrave;y khởi h&agrave;nh 30 ng&agrave;y (từ ng&agrave;y 30 trở về trước): 50% tổng gi&aacute; th&agrave;nh tour</span></span></li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hủy trước ng&agrave;y khởi h&agrave;nh 15 ng&agrave;y (từ ng&agrave;y 15 &ndash; ng&agrave;y thứ 30): 75% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Huỷ trong v&ograve;ng 15 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh (từ ng&agrave;y 15 &ndash; ng&agrave;y khởi h&agrave;nh): 100% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><u>ĐỐI VỚI TOUR NG&Agrave;Y LỄ, TẾT: </u></strong></span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><em>(L&agrave; c&aacute;c tour c&oacute; thời gian diễn ra rơi v&agrave;o một trong c&aacute;c ng&agrave;y lễ, tết theo quy định của nước Việt Nam)</em></span></span></li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Huỷ ngay sau khi đăng k&yacute;: 30% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hủy trước ng&agrave;y khởi h&agrave;nh 45 ng&agrave;y (từ ng&agrave;y 45 trở về trước): 50% tổng gi&aacute; th&agrave;nh tour</span></span></li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hủy trước ng&agrave;y khởi h&agrave;nh 30 ng&agrave;y (từ ng&agrave;y 30 &ndash; ng&agrave;y thứ 45): 75% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Huỷ trong v&ograve;ng 30 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh (từ ng&agrave;y 30 &ndash; ng&agrave;y khởi h&agrave;nh): 100% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"color:red\">*** Lưu &yacute;:</span></strong> B&ecirc;n cạnh việc kh&aacute;ch h&agrave;ng hủy tour sẽ dựa v&agrave;o c&aacute;c điều kiện hủy phạt như tr&ecirc;n. Đồng thời, đối với những kh&aacute;ch đ&atilde; c&oacute; visa Ch&acirc;u &Acirc;u xin visa theo đo&agrave;n của Cty C&ocirc;ng ty, ch&uacute;ng t&ocirc;i sẽ giữ hộ chiếu cho đến khi thời hạn visa Ch&acirc;u &Acirc;u kết th&uacute;c, hết hiệu lực được ph&eacute;p nhập cảnh; Hoặc sẽ th&ocirc;ng b&aacute;o với LSQ/ĐSQ (nơi cấp visa) để đ&oacute;ng dấu mộc &ldquo;Cancel &ndash; hủy&rdquo; visa của kh&aacute;ch. V&igrave; ch&uacute;ng t&ocirc;i chịu tr&aacute;ch nhiệm trong việc nhập cảnh v&agrave; xuất cảnh Ch&acirc;u &Acirc;u của qu&yacute; kh&aacute;ch.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">*** Trường hợp CHUYỂN/DỜI TOUR: Qu&yacute; kh&aacute;ch phải chịu chi ph&iacute; hủy tour theo quy định Cty C&ocirc;ng ty như tr&ecirc;n. C&aacute;c trường chuyển tour Cty sẽ xem x&eacute;t lại t&igrave;nh h&igrave;nh m&agrave; c&oacute; mức hỗ trợ kh&aacute;c nhau.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:.25in; margin-right:0in; text-align:justify\">&nbsp;</p>\r\n",
  "hinhanh": [
    {
      "filename": "paris về đêm.jpg",
      "aliasname": "743546be32493df78effb57a5d346a37_20170628020636.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "5950d6c12b063bc50f8b4567",
    "595345d72b063b82378b4567",
    "595345e42b063b82378b4568",
    "595345ef2b063b82378b4569"
  ],
  "date_post": ISODate("2017-06-28T14:39:31.411Z")
});
db.getCollection("tours").insert({
  "_id": ObjectId("5953c76d2b063bc6698b4567"),
  "tieude": "CHÂU ÂU: PHÁP - THỤY SĨ - Ý - VATICAN (08 NGÀY 07 ĐÊM)",
  "giatour": NumberInt(39990000),
  "ngaykhoihanh": ISODate("2017-08-25T00:00:00.0Z"),
  "ngayketthuc": ISODate("2017-09-01T00:00:00.0Z"),
  "mota": "Pháp luôn được xem là đất nước lãng mạn nhất thế giới, một quốc gia giàu truyền thống văn hóa, lịch sử. Không chỉ thu hút với nhiều công trình kiến trúc đặc sắc như tháp Eiffel, Nhà thờ Đức Bà Paris cổ kính, cung điện Versailles,… Pháp còn quyến rũ bởi phong cảnh thiên nhiên thơ mộng với những cánh đồng oải hương tuyệt đẹp hay dòng sông Seine yên bình, lãng mạn. Bên cạnh đó, nền ẩm thực Pháp được xếp vào hàng bậc nhất thế giới, cũng tạo nên sức hút khó cưỡng cho du khách đến đây.\r\n",
  "noidung": "<p style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>NG&Agrave;Y 1: TP</strong><strong>. HỒ CH&Iacute; MINH</strong><strong> - PARIS </strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>18:30</strong>&nbsp;&nbsp;&nbsp; Đo&agrave;n tập trung tại s&acirc;n bay T&acirc;n Sơn Nhất &ndash; Ga Quốc Tế.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>21:40</strong>&nbsp;&nbsp;&nbsp; Đo&agrave;n khởi h&agrave;nh đi Paris tr&ecirc;n chyến bay:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>TK 166 12JUN&nbsp; SGNIST 2140 0440</strong></span></span>.</li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>TK1821 13JUN&nbsp; ISTCDG 0655 0935.</strong></span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n nghỉ ngơi tr&ecirc;n m&aacute;y bay</span></span>.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>NG&Agrave;Y 2: PARIS </strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>09h35</strong>&nbsp;&nbsp; Đo&agrave;n đến <strong>s&acirc;n bay Charles De Gaul - Paris</strong>. Xe đưa Đo&agrave;n về trung t&acirc;m th&agrave;nh phố <strong>Paris</strong>, tham quan:</span></span>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Th&aacute;p Eiffel</strong> - biểu tượng của nước Ph&aacute;p xinh đẹp. <span style=\"background-color:white\">Hơn một trăm năm nay h&igrave;nh ảnh nước Ph&aacute;p v&agrave; <strong>thủ đ&ocirc; Paris</strong> gắn liền với th&aacute;p Eiffel. Người ta kh&ocirc;ng thể h&igrave;nh dung Paris m&agrave; lại kh&ocirc;ng c&oacute; th&aacute;p Eiffel</span></span></span>.</li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Arc De Triomphe</strong> -<strong> Khải Ho&agrave;n M&ocirc;n</strong> - l&agrave; một trong những c&ocirc;ng tr&igrave;nh biểu tượng của <strong>nước Ph&aacute;p</strong>. Nhiều sự kiện lịch sử quan trọng v&agrave; c&aacute;c c&ocirc;ng tr&igrave;nh đi&ecirc;u khắc nổi tiếng được tổ chức, trưng b&agrave;y ở đ&acirc;y, đặc biệt c&ocirc;ng tr&igrave;nh mang t&ecirc;n <strong>&ldquo;The Marseillaisve&rdquo;</strong> của đi&ecirc;u khắc gia nổi tiếng <strong>Francois Rude</strong>. </span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Champs Elysees</strong> - <strong>Đại lộ Thi&ecirc;n Đ&agrave;ng</strong> - l&agrave; <strong>đại lộ đẹp nhất Thế giới </strong>v&agrave; c&ograve;n l&agrave; nơi tập trung nhiều cửa h&agrave;ng thời trang sang trọng nhất của <strong>&ldquo;Kinh Đ&ocirc; &Aacute;nh S&aacute;ng Paris&rdquo;</strong>. </span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Điện Invalides</strong> - nơi c&oacute; lăng mộ của ho&agrave;ng đế <strong>Napoleon</strong>, được vua <strong>Louis XIV</strong> cho x&acirc;y dựng v&agrave;o cuối thế kỷ XVI.</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">​​​​​​​</span></span><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>12:00:&nbsp;</strong>Đo&agrave;n ăn trưa tại nh&agrave; h&agrave;ng địa phương, sau đ&oacute; Qu&yacute; kh&aacute;ch tiếp tục tham quan&nbsp;</span></span><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường Concorde</strong> - là m&ocirc;̣t c&ocirc;ng tr&igrave;nh ki&ecirc;́n trúc chào mừng sự h&ocirc;̀i phục sau cơn bạo b&ecirc;̣nh của vua <strong>Louis XV</strong>, <strong>Concorde</strong> thời đó có t&ecirc;n gọi là <strong>Quảng trường Louis XV</strong>. </span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n dạo quanh ngắm nh&igrave;n to&agrave;n cảnh th&agrave;nh phố như: <strong>nh&agrave; thờ Đức B&agrave; Paris</strong>, <strong>cầu Alexandre III</strong>, &hellip; </span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n tự do tham quan mua sắm tại <strong>Galleries La Fayette</strong> - được biết đến l&agrave; một trong 10 trung t&acirc;m mua sắm sang trọng nhất thế giới, l&agrave; một điểm đến th&uacute; vị m&agrave; du kh&aacute;ch kh&ocirc;ng n&ecirc;n bỏ lỡ.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>18:00:&nbsp;</strong>Đo&agrave;n d&ugrave;ng tối tại nh&agrave; h&agrave;ng địa phương.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>20:00:&nbsp;</strong><span style=\"background-color:white\">Đo&agrave;n check-in kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch nghỉ ngơi v&agrave; tự do kh&aacute;m ph&aacute; <strong>Paris</strong> về đ&ecirc;m.</span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>NG&Agrave;Y 3: PARIS &ndash; DIJON &ndash; LUCERNE </strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">07:00:&nbsp;</span></strong><span style=\"background-color:white\">B&aacute;o thức, Đo&agrave;n d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn, l&agrave;m thủ tục trả ph&ograve;ng.</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">08:00:&nbsp;</span></strong><span style=\"background-color:white\">Khởi h&agrave;nh đến th&agrave;nh phố<strong> Lucerne</strong> xinh đẹp của Thụy Sĩ. Tr&ecirc;n đường đi Đo&agrave;n c&oacute; cơ hội ngắm nh&igrave;n phong cảnh miền qu&ecirc; thơ mộng của nước Ph&aacute;p v&agrave; <strong>d&atilde;y n&uacute;i Alps</strong> của Thụy Sĩ. </span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">12:30:&nbsp;</span></strong><span style=\"background-color:white\">Tr&ecirc;n đường xe gh&eacute; tại <strong>Dijon</strong>, Đo&agrave;n d&ugrave;ng bữa trưa ở nh&agrave; h&agrave;ng địa phương tại <strong>Dijon</strong>.</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">13:30:&nbsp;</span></strong><span style=\"background-color:white\">Đo&agrave;n tiếp tục h&agrave;nh tr&igrave;nh đi Lucerne. </span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">17:30:&nbsp;</span></strong><span style=\"background-color:white\">Đến <strong>Lucerne</strong> đo&agrave;n tham quan:</span></span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Cầu gỗ cổ Chapel</span></strong><span style=\"background-color:white\"> v&agrave; tự do mua sắm đồ lưu niệm hay đồng hồ Thụy Sĩ.</span></span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Hồ Lucern</span></strong><span style=\"background-color:white\"> - ngắm nh&igrave;n đ&agrave;n thi&ecirc;n nga tr&ecirc;n hồ</span></span></span>.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">18:30:&nbsp;</span></strong><span style=\"background-color:white\">Đo&agrave;n ăn tối tại nh&agrave; h&agrave;ng địa phương</span></span></span>.</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">19:30:&nbsp;</span></strong><span style=\"background-color:white\">Đo&agrave;n về kh&aacute;ch sạn.</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">20:00:&nbsp;</span></strong><span style=\"background-color:white\">Đo&agrave;n nhận ph&ograve;ng </span><strong>Drei Koenige hoặc tương đương,</strong><span style=\"background-color:white\"><span style=\"color:#222222\"> tới </span>&nbsp;nghỉ đ&ecirc;m tại Lucerne.</span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>NG&Agrave;Y 4: LUCERNE - MILAN </strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>07:00:&nbsp;</strong>Đo&agrave;n thức dậy theo chu&ocirc;ng b&aacute;o thức, d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn. Sau đ&oacute;, Đo&agrave;n <span style=\"background-color:white\">l&agrave;m thủ tục trả ph&ograve;ng&nbsp;&nbsp; </span>khởi h&agrave;nh đi <strong>Milan.</strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Trưa </strong>đo&agrave;n tới <strong>Milan</strong>, tiếp tục khởi h&agrave;nh tham quan:</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Hồ Luzern</strong> - <span style=\"background-color:white\"><span style=\"color:#222222\">khung cảnh trong mơ của bờ hồ để lại ấn tượng s&acirc;u sắc cho du kh&aacute;ch mỗi khi gh&eacute; thăm. </span></span>Những c&ocirc;ng trình ki&ecirc;́n trúc n&ocirc;̉i ti&ecirc;́ng đều tọa lạc quanh bờ h&ocirc;̀, từ nhà thờ chính với hai tháp chu&ocirc;ng cao vút, nhà ga trung t&acirc;m đ&ecirc;́n các khách sạn lớn và nhà hát thành ph&ocirc;́.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Dying Lion</strong> - <span style=\"background-color:white\"><span style=\"color:#222222\">t&aacute;c phẩm đi&ecirc;u khắc của Bertel Thorvaldsen, đ&oacute; l&agrave; một ch&uacute; sư tử đang hấp hối bằng đ&aacute; nổi tiếng t&ocirc;n vinh sự hy sinh anh dũng của 800 l&iacute;nh đ&aacute;nh thu&ecirc; Thụy Sĩ bảo vệ Louis XVI tại Tuileries trong cuộc c&aacute;ch mạng Ph&aacute;p năm 1792.</span></span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Cầu Mill (<span style=\"color:#111111\">Spreuerbruecke) </span></strong><span style=\"color:#111111\">- nổi tiếng với những bức tranh m&agrave;u nghệ thuật.</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>13:00</strong> Đo&agrave;n ăn trưa tại nh&agrave; h&agrave;ng địa phương, sau đ&oacute; tiếp tục tham quan:</span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nh&agrave; h&aacute;t La Scala</strong> - l&agrave; một trong những <strong>nh&agrave; h&aacute;t lớn nhất ch&acirc;u &Acirc;u</strong>, nơi diễn ra những vở nhạc kịch ho&agrave;nh tr&aacute;ng v&agrave; kinh điển, nơi <strong>Verdi</strong>, <strong>Wagner</strong> tr&igrave;nh diễn t&aacute;c phẩm của m&igrave;nh v&agrave; ng&agrave;y nay n&oacute; cũng l&agrave; một trong những nh&agrave; h&aacute;t Opera h&agrave;ng đầu thế giới.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Cimitero Monumentale</strong> - rộng 250.000m2 được xem l&agrave; <strong>nghĩa trang đẹp nhất thế giới</strong>.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>C&ocirc;ng tr&igrave;nh kiến tr&uacute;c Arco della Pace</strong> ở <strong>c&ocirc;ng vi&ecirc;n Sempione</strong> - được x&acirc;y dựng v&agrave;o đầu thế kỷ XIX theo sự chỉ đạo của <strong>ho&agrave;ng đế Napoleon</strong>. L&agrave; nơi hấp dẫn cho những người đam m&ecirc; kiến tr&uacute;c đến chi&ecirc;m ngưỡng những thiết kế phức tạp của c&ocirc;ng tr&igrave;nh.</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch <strong>tự do mua sắm</strong> tại c&aacute;c trung t&acirc;m lớn ở <strong>Milan.</strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Tối </strong>đo&agrave;n d&ugrave;ng bữa tối tại nh&agrave; h&agrave;ng địa phương.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n check-in kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch tự do nghỉ ngơi v&agrave; tham quan Milan về đ&ecirc;m.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>NG&Agrave;Y 5:&nbsp; MILAN - VENICE</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">07:00:&nbsp;</span></strong><span style=\"background-color:white\">Đo&agrave;n d&ugrave;ng điểm t&acirc;m s&aacute;ng tại kh&aacute;ch sạn, l&agrave;m thủ tục trả ph&ograve;ng .</span></span></span></li>\r\n\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">08:00:&nbsp;</span></strong>Đo&agrave;n khởi h&agrave;nh đi Venice.</span></span></li>\r\n\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">12:00:&nbsp;</span></strong>Đo&agrave;n ăn trưa tại nh&agrave; h&agrave;ng địa phương.</span></span></li>\r\n\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">13:00:&nbsp;</span></strong>Đến <strong>Venice Mestre</strong>, Đo&agrave;n l&ecirc;n thuyền sang đảo Venice (đo&agrave;n tự t&uacute;c tiền v&eacute; t&agrave;u). </span></span></li>\r\n\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đến nơi Đo&agrave;n tham quan:</span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Cầu Than Thở</strong> - trước kia l&agrave; một phần của nh&agrave; t&ugrave; trung t&acirc;m, nơi từng giam giữ ch&agrave;ng Casanova nổi tiếng.</span></span></li>\r\n\t\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường St. Marco Basilica.</strong></span></span></li>\r\n\t\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Cung Điện Doges</strong> <strong>v&agrave; nh&agrave; m&aacute;y sản xuất đồ thuỷ tinh, pha l&ecirc; nổi tiếng của Italy</strong> - Cơ hội ngắm nh&igrave;n c&aacute;c sản phẩm được chế t&aacute;c từ thuỷ tinh, pha l&ecirc; nổi tiếng do những b&agrave;n tay t&agrave;i hoa của những nghệ nh&acirc;n người Italy tạo n&ecirc;n.</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">18:00:&nbsp;</span></strong>Đo&agrave;n l&ecirc;n t&agrave;u quay về lại <strong>Venice Mestre.</strong></span></span></li>\r\n\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">18:30:&nbsp;</span></strong>Đo&agrave;n tự t&uacute;c ăn tối tại nh&agrave; h&agrave;ng địa phương.</span></span></li>\r\n\t<li style=\"text-align:justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">20:00:&nbsp;</span></strong>Đo&agrave;n về kh&aacute;ch sạn Poppi Hotel hoặc tương đương nhận ph&ograve;ng nghỉ ngơi hoặc tự do tham quan th&agrave;nh phố về đ&ecirc;m.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>NG&Agrave;Y 6: VENICE - PISA - ROME </strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">07:00:&nbsp;</span></strong>Đo&agrave;n d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn, <span style=\"background-color:white\">l&agrave;m thủ tục trả ph&ograve;ng.</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>08:00:&nbsp;</strong>Đo&agrave;n<strong> </strong>khởi h&agrave;nh đi tham quan đi <strong>Pisa.</strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>11:30:&nbsp;</strong>Đến nơi, Đo&agrave;n ăn trưa tại nh&agrave; h&agrave;ng địa phương v&agrave; bắt đầu tham quan:</span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Th&aacute;p nghi&ecirc;ng Pisa</strong> -&nbsp; l&agrave; một trong bốn c&ocirc;ng tr&igrave;nh quan trọng của khu phức hợp gồm nh&agrave; thờ, nh&agrave; nguyện v&agrave; nghĩa trang được UNESCO c&ocirc;ng nhận l&agrave; <strong>di sản thế giới</strong>. Một trong những yếu tố quan trọng tạo n&ecirc;n sự hấp dẫn của t&ograve;a th&aacute;p n&agrave;y l&agrave; ở h&igrave;nh d&aacute;ng v&ocirc; c&ugrave;ng độc đ&aacute;o.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Pizza dei Miracoli</strong> - Kh&ocirc;ng giống c&aacute;c quảng trường l&aacute;t đ&aacute; c&oacute; đ&agrave;i phun nước lừng danh của &Yacute;, quảng trường <strong>Miracoli</strong> c&oacute; những b&atilde;i cỏ rộng lớn được cắt tỉa kh&eacute;o l&eacute;o được bao quanh bởi những bức tường cổ đại. L&agrave; nơi tọa lạc của một trong những t&ograve;a th&aacute;p ti&ecirc;u biểu nhất ở Ch&acirc;u &Acirc;u, một bộ sưu tập nghệ thuật trung cổ quan trọng v&agrave; một số di t&iacute;ch linh thi&ecirc;ng nhất của &Yacute;, quảng trường rộng lớn n&agrave;y ch&iacute;nh l&agrave; điểm du lịch phổ biến nhất tại Pisa. H&atilde;y leo l&ecirc;n <strong>Th&aacute;p Nghi&ecirc;ng</strong>, kh&aacute;m ph&aacute; lịch sử của &Yacute; v&agrave; t&igrave;m hiểu nh&agrave; thờ lớn, c&aacute;c tu viện v&agrave; nghĩa trang.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nh&agrave; thờ Santa Maria della Spina</strong> - tuy khi&ecirc;m tốn về quy m&ocirc; nhưng được b&ugrave; đắp ho&agrave;n hảo bởi vẻ đẹp của n&oacute;: mặt tiền m&agrave;u trắng trang tr&iacute; c&ocirc;ng phu được coi l&agrave; một trong những kiến tr&uacute;c ấn tượng nhất tr&ecirc;n to&agrave;n Ch&acirc;u &Acirc;u. Nh&agrave; thờ chiếm trọn một g&oacute;c nh&igrave;n ra d&ograve;ng s&ocirc;ng v&agrave; thu h&uacute;t du kh&aacute;ch bởi kiến tr&uacute;c G&ocirc;tic từ thế kỷ 13 của m&igrave;nh.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">C&aacute;c địa điểm kh&aacute;c với kiến tr&uacute;c độc đ&aacute;o như:&nbsp; <strong>Nh&agrave; thờ Baptistery, Qu&atilde;ng trường Knights&rsquo; Square.</strong></span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>12:30:&nbsp;</strong>Đo&agrave;n d&ugrave;ng bữa trưa tại nh&agrave; h&agrave;ng địa phương.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>13:30:&nbsp;</strong>Đo&agrave;n tiếp tục h&agrave;nh tr&igrave;nh khởi h&agrave;nh đi<strong> Rome.</strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>18:30:&nbsp;</strong>Đến <strong>Rome</strong>, Đo&agrave;n d&ugrave;ng bữa tối tự t&uacute;c tại nh&agrave; h&agrave;ng địa phương.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>20:00:&nbsp;</strong>Đo&agrave;n check-in kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch tự do nghỉ ngơi v&agrave; tham quan<strong> Rome</strong> về đ&ecirc;m.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>NG&Agrave;Y 7: ROME - VATICAN</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">07:00:&nbsp;</span></strong><span style=\"background-color:white\">B&aacute;o thức, đo&agrave;n ăn s&aacute;ng tại kh&aacute;ch sạn, l&agrave;m thủ tục trả ph&ograve;ng. &nbsp;</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">08:30:&nbsp;</span></strong><span style=\"background-color:white\">Đo&agrave;n khởi h&agrave;nh đi tham quan&nbsp;</span></span></span><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Đấu trường La M&atilde; (Colosseum)</span></strong><span style=\"background-color:white\"> - với kiến tr&uacute;c v&agrave; vẻ h&ugrave;ng vĩ g&acirc;y ấn tượng với bất kỳ ai đến đ&acirc;y d&ugrave; đ&atilde; hơn 2.000 năm tồn tại.</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">12:00:&nbsp;</span></strong><span style=\"background-color:white\">Đo&agrave;n d&ugrave;ng bữa trưa tại nh&agrave; h&agrave;ng địa phương. Sau đ&oacute;, Qu&yacute; kh&aacute;ch tiếp tục tham quan:</span></span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Quảng trường La M&atilde; </span></strong><span style=\"background-color:white\">- trung t&acirc;m t&ocirc;n gi&aacute;o, ch&iacute;nh trị v&agrave; thương mại của người <strong>La M&atilde; cổ đại</strong>. C&aacute;c di t&iacute;ch nổi tiếng nhất ở đ&acirc;y l&agrave; <strong>cổng Septimius Severus</strong>, cổng <strong>Titus</strong>, nh&agrave; của những<strong> trinh nữ Vestal</strong> v&agrave; <strong>đền sao Hỏa.</strong></span></span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Tham quan Đ&agrave;i phun nước Trevi</span></strong><span style=\"background-color:white\"> - tản bộ khu vực xung quanh Quảng trường T&acirc;y Ban Nha.</span></span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Qu&yacute; kh&aacute;ch tự do tham quan, mua sắm tại Rome.&nbsp;</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">16:30: Khởi h&agrave;nh ra s&acirc;n bay l&agrave;m thủ tục về Hồ Ch&iacute; Minh tr&ecirc;n chuyến bay:</span></strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>TK1864 18JUN&nbsp; FCOIST 1945 2325 .</strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>TK 166&nbsp; 19JUN&nbsp; ISTSGN 0215 2010.</strong></span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>NG&Agrave;Y 8: TP. HỒ CH&Iacute; MINH</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">20:10:&nbsp;</span></strong><span style=\"background-color:white\">Đo&agrave;n </span>đ&aacute;p chuyến bay đến s&acirc;n bay <strong>T&acirc;n Sơn Nhất</strong><span style=\"background-color:white\">:</span></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Kết th&uacute;c chuyến h&agrave;nh tr&igrave;nh.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Xin cảm ơn v&agrave; ch&agrave;o tạm biệt qu&yacute; kh&aacute;ch.</span></span>​​​​​​​</li>\r\n</ul>\r\n",
  "giave": "<p><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Gi&aacute; tour bao gồm</strong>:</span></span></span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">V&eacute; m&aacute;y bay quốc tế khứ hồi. <strong>SGN &ndash; CDG//FCO &ndash; SGN</strong></span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Lệ ph&iacute; visa Schengen</span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Kh&aacute;ch sạn 3 sao (ti&ecirc;u chuẩn 2 người ph&ograve;ng hoặc 3ng/ph&ograve;ng nếu lẻ nam/nữ)</span></span>.</li>\r\n\t<li><span style=\"font-family:Arial,Helvetica,sans-serif; font-size:14px\">C&aacute;c bữa ăn s&aacute;ng theo chương tr&igrave;nh</span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Xe vận chuyển m&aacute;y lạnh, đời mới theo chương tr&igrave;nh</span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hướng dẫn vi&ecirc;n theo từ Việt Nam suốt h&agrave;nh tr&igrave;nh</span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Bảo hiểm du lịch. Mức bồi thường tối đa 1.050.000.000VNĐ/trường hợp v&agrave; đối với kh&aacute;ch từ 65 tuổi trở l&ecirc;n 525.000.000VNĐ/trường hợp. Tất cả c&aacute;c vấn đề li&ecirc;n quan đến bảo hiểm do c&ocirc;ng ty bảo hiểm chịu tr&aacute;ch nhiệm v&agrave; chi trả </span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&agrave; tặng du lịch: bao da hộ chiếu, v&iacute; đựng thẻ</span></span></li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Gi&aacute; kh&ocirc;ng bao gồm:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hộ chiếu (c&ograve;n gi&aacute; trị &iacute;t nhất 06 th&aacute;ng t&iacute;nh đến ng&agrave;y về Việt Nam)</span></span></li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Phụ thu ph&ograve;ng đơn: 11.000.000 VNĐ/kh&aacute;ch</span></span></li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">V&eacute; v&agrave;o c&aacute;c điểm tham quan theo chương tr&igrave;nh</span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Kh&ocirc;ng bao gồm bữa ăn trưa v&agrave; tối</span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Chi ph&iacute; tham quan ngo&agrave;i chương tr&igrave;nh.</span></span></li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Chi ph&iacute; c&aacute; nh&acirc;n, h&agrave;nh l&yacute; qu&aacute; cước, giặt ủi, điện thoại &hellip;.</span></span></li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tiền TIP cho hướng dẫn vi&ecirc;n v&agrave; t&agrave;i xế địa phương (6&pound;/người/ng&agrave;y)</span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Phụ thu ph&iacute; xăng dầu h&agrave;ng kh&ocirc;ng tăng tại thời điểm xuất v&eacute; (nếu c&oacute;)</span></span>.</li>\r\n\t<li><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đối với kh&aacute;ch Việt Kiều Visa Việt Nam (01 lần) phải l&agrave;m visa nhập cảnh lại Việt Nam 735.000VNĐ/kh&aacute;ch (lấy tại cửa khẩu T&acirc;n Sơn Nhất c&oacute; gi&aacute; trị 01 th&aacute;ng/01 lần)</span></span>.</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>CHI PH&Iacute; C&Aacute;C HOẠT ĐỘNG &amp; ĐIỂM THAM QUAN (Gi&aacute; c&oacute; thể thay đổi):</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Tổng chi ph&iacute; v&eacute; v&agrave; hoạt động tham quan cần thiết (*): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;130.</span></span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Đấu trường Colosseum &ndash; Rome (*):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;12</span></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Du thuyền Gondola tại Venice (1 thuyền &iacute;t nhất 6 người)(*):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;30</span></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Bữa trưa c&ugrave;ng đo&agrave;n với m&oacute;n ăn đặc sản Venice (*):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;20</span></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Thuế v&agrave; lệ ph&iacute; v&agrave;o th&agrave;nh phố của &Yacute; v&agrave; Monaco (Bắt buộc):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;45.</span></span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Thuế v&agrave;o Venice + thuế ngồi thuyền + thuế qua đ&ecirc;m:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;15</span></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Thuế v&agrave;o Florence + thuế qua đ&ecirc;m:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;10</span></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Thuế v&agrave;o Rome + thuế qua đ&ecirc;m:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;10</span></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Thuế v&agrave;o Pisa: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;5</span></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Thuế v&agrave;o Monaco:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro;5</span></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">T&agrave;u Milan - Venice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=\"background-color:white\">&euro;10-15</span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in; text-align:justify\"><span style=\"margin-left:0in; margin-right:0in; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Những hồ sơ cần thiết xin visa:</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"background-color:white\">Hồ sơ c&aacute; nh&acirc;n:</span></strong></span></span>\r\n\r\n\t<ul>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Form xin thị thực theo mẫu</span></span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Hộ chiếu - c&ograve;n hiệu lực &iacute;t nhất ba th&aacute;ng sau ng&agrave;y thị thực hết hạn khi rời khỏi khối Schengen v&agrave; c&oacute; &iacute;t nhất hai trang trống (v&agrave; c&aacute;c bản sao của trang c&oacute; chứa c&aacute;c th&ocirc;ng tin nhận dạng v&agrave; tất cả c&aacute;c trang c&oacute; chứa thị thực hoặc được đ&oacute;ng dấu nhập cảnh</span></span></span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">2 h&igrave;nh 4x6, ph&ocirc;ng nền trắng</span></span></span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">CMND</span></span></span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Giấy đăng k&yacute; kết h&ocirc;n</span></span></span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Hộ khẩu</span></span></span></span>.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong><span style=\"background-color:white\">Hồ sơ c&ocirc;ng việc:</span></strong></span></span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Nếu l&agrave; nh&acirc;n vi&ecirc;n c&ocirc;ng ty:</span></span></span></span>\r\n\t<ul>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Hợp đồng lao động</span></span></span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Bản sao k&ecirc; mức lương , sao k&ecirc; t&agrave;i khoản ng&acirc;n h&agrave;ng 3 th&aacute;ng gần nhất..</span></span></span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Quyết định bổ nhiệm chức vụ ( nếu qu&yacute; kh&aacute;ch đang c&oacute; chức vụ trong c&ocirc;ng ty)</span></span></span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Đơn xin nghỉ ph&eacute;p để đi du lịch</span></span></span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Nếu l&agrave; đi c&ocirc;ng t&aacute;c th&igrave; đơn quyết định cử đi c&ocirc;ng t&aacute;c (bản gốc)</span></span></span></span>.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"background-color:white\"><span style=\"background-color:white\"><span style=\"font-family:Arial, Helvetica, sans-serif\"><span style=\"font-size:14px\">Chủ doanh nghiệp cần Giấy ph&eacute;p kinh doanh</span></span>:</span></span>\r\n\t<ul>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Giấy ph&eacute;p th&agrave;nh lập c&ocirc;ng ty hoặc Giấy ph&eacute;p đăng k&yacute; kinh doanh</span></span></span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Bi&ecirc;n lai thuế trong 3 th&aacute;ng gần nhất.</span></span></span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Chủ sở hữu đất đai / bất động sản th&igrave; cần c&oacute; giấy chứng nhận sở hữu cũng như c&aacute;c chứng minh t&agrave;i sản hay c&aacute;c yếu tố thể hiện c&aacute;c nguồn thu nhập hưởng lợi từ đ&oacute;;</span></span></span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Người nghỉ hưu th&igrave; cần thẻ hưu hoặc quyết định nghỉ hưu - chứng minh c&aacute;c phương tiện t&agrave;i ch&iacute;nh đủ để chi trả cho tất cả chi ph&iacute; trong suốt thời gian lưu tr&uacute; của Qu&yacute; vị;</span></span></span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong><span style=\"background-color:white\">Hồ sơ t&agrave;i ch&iacute;nh</span></strong></span></span></span>:\r\n\t<ul>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Giấy chứng nhận số dư ng&acirc;n h&agrave;ng hoặc giấy chứng nhận t&agrave;i khoản tiết kiệm.</span></span></span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Sổ tiết kiệm 200 triệu (bản photo + gốc)</span></span></span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: 0in; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"background-color:white\">Giấy tờ t&agrave;i sản.</span></span></span></span></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n",
  "hinhanh": [
    {
      "filename": "Coliseum.jpeg",
      "aliasname": "3066963827f335f58e0deb860b999ee3_20170628030632.jpeg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "5950d6c12b063bc50f8b4567",
    "595345d72b063b82378b4567",
    "595345ef2b063b82378b4569"
  ],
  "date_post": ISODate("2017-06-28T15:12:45.395Z")
});
db.getCollection("tours").insert({
  "_id": ObjectId("595501a82b063b441c8b4567"),
  "tieude": "CHÂU ÂU: PHÁP - LUXEMBOURG - ĐỨC - HÀ LAN - BỈ (09 NGÀY 08 ĐÊM)",
  "giatour": NumberInt(39990000),
  "ngaykhoihanh": ISODate("2017-08-10T00:00:00.0Z"),
  "ngayketthuc": ISODate("2017-08-18T00:00:00.0Z"),
  "mota": "Nhắc đến xứ sở hoa tulip ta liên tưởng ngay đến đất nước Hà Lan xinh đẹp. Nằm ở phía Tây châu Âu, đất nước của những chiếc cối xay gió khiến người ta thêm yêu bởi sự hòa nhã, thân thiện của người dân nơi đây.",
  "noidung": "<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 1 : VIETNAM &ndash; PARIS</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hướng dẫn vi&ecirc;n c&ocirc;ng ty đ&oacute;n qu&yacute; kh&aacute;ch tại s&acirc;n bay T&acirc;n Sơn Nhất/Nội B&agrave;i l&agrave;m thủ tục cho chuyến bay đi Paris - Ph&aacute;p.&nbsp;</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nghỉ đ&ecirc;m tr&ecirc;n m&aacute;y bay.</span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 2 : PARIS- REIMS -&nbsp; LUXEMBOURG&nbsp;(Ăn trưa, tối)</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch sẽ đến Paris, qu&yacute; kh&aacute;ch l&agrave;m thủ tục nhập cảnh. Xe đ&oacute;n đo&agrave;n tại s&acirc;n bay.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n khởi h&agrave;nh tới <strong>Th&agrave;nh phố Reims </strong>thuộc v&ugrave;ng rượu vang Champagne - &quot;thủ đ&ocirc; của xứ sở Champagne&rdquo;- trung t&acirc;m sản xuất loại vang trứ danh của Ph&aacute;p từ thế kỷ 17. C&aacute;ch thủ đ&ocirc; Paris 130km về ph&iacute;a Đ&ocirc;ng Bắc, Reims l&agrave; qu&ecirc; hương của rượu vang sủi tăm nổi tiếng nhất thế giới, l&agrave; điểm đến của những ai y&ecirc;u hương vị của những giọt rượu vang l&oacute;ng l&aacute;nh. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Điểm dừng ch&acirc;n cuối ng&agrave;y l&agrave; <strong>Luxembourg </strong>l&agrave; đất nước năng động, lịch l&atilde;m, b&igrave;nh y&ecirc;n v&agrave; lắm điều th&uacute; vị, với niềm tự h&agrave;o l&agrave; &ldquo;Tr&aacute;i tim xanh của Ch&acirc;u &Acirc;u&rdquo;; Luxembourg l&agrave; Di sản Văn h&oacute;a thế giới, được UNESCO c&ocirc;ng nhận danh hiệu &ldquo;Thủ đ&ocirc; văn h&oacute;a Ch&acirc;u &Acirc;u&rdquo; năm 1995 v&agrave; 2007, Luxembourg nằm gọn giữa c&aacute;c &ldquo;đại gia&rdquo; Ph&aacute;p, Đức, Bỉ; chẳng những kh&ocirc;ng bị th&ocirc;n t&iacute;nh, đồng h&oacute;a m&agrave; c&ograve;n vươn l&ecirc;n tầm v&oacute;c thế giới. Ngo&agrave;i tiếng Luxembourg, người d&acirc;n ở đ&acirc;y c&ograve;n th&ocirc;ng thạo c&aacute;c ng&ocirc;n ngữ kh&aacute;c như Ph&aacute;p, Đức, Bỉ, tiếng Anh v&agrave; tiếng mẹ đẻ. Luxembourg h&agrave;i h&ograve;a giữa cảnh quan thi&ecirc;n nhi&ecirc;n v&agrave; kiến tr&uacute;c.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">C&aacute;c kiến tr&uacute;c nối bật tại Luxembourg:</span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Viện Lập Ph&aacute;p (Place de Constitution)</strong>: nơi diễn ra c&aacute;c cuộc tranh luận v&agrave; bỏ phiếu th&ocirc;ng qua c&aacute;c dự luật.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường trung t&acirc;m thủ đ&ocirc; Luxembourg.</strong></span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Pont Adolphe:</strong> Chiếc cầu nổi tiếng đẹp nhất thủ đ&ocirc; Luxembourg, m&ocirc;t biểu tượng du lịch của th&agrave;nh phố v&agrave; khu phố cổ nơi ch&ocirc;n cất vị tướng t&agrave;i giỏi của Luxembourg Gorge Petrusse&nbsp; cũng c&oacute; thể xem như một nơi l&agrave;m rạng danh đất nước.</span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">19:30: D&ugrave;ng bữa tối tại nh&agrave; h&agrave;ng/kh&aacute;ch sạn địa phương.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">20:00: Qu&yacute; kh&aacute;ch nhận ph&ograve;ng v&agrave; nghỉ ngơi.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nghỉ đ&ecirc;m tại Luxembourg.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Hotel: Melia Luxembourg/Doubletree by Hilton Hotel - Luxembourg hoặc tương đương.&nbsp;</strong></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 3: LUXEMBOURG (Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn s&aacute;ng tại kh&aacute;ch sạn. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch sẽ rời th&agrave;nh phố Luxembourg v&agrave; tiến thẳng đến bi&ecirc;n giới <strong>Đức. </strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n tham quan th&agrave;nh phố lịch sử <strong>Trier,</strong> th&agrave;nh phố cổ xưa nhất của Đức v&agrave; l&agrave; nơi sinh của vị l&atilde;nh tụ Karl Marx, nh&agrave; tư tưởng, nh&agrave; kinh tế ch&iacute;nh trị, nh&agrave; l&atilde;nh đạo c&aacute;ch mạng của Hiệp hội Người lao động Quốc tế.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch sẽ tham quan:</span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tham quan b&ecirc;n ngo&agrave;i <strong>nơi sinh của vị l&atilde;nh tụ Karl Marx,</strong> nay được xem như l&agrave; bảo t&agrave;ng lưu giữ những hỉnh ảnh, kỉ vật của karl Marx.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Trier Cathedral:</strong> Th&aacute;nh đường Trier - L&agrave; th&aacute;nh đường l&acirc;u đời nhất trong th&agrave;nh phố v&agrave; cũng l&agrave; nh&agrave; thờ lớn nhất ở Trier. Từ năm 1986 n&oacute; đ&atilde; được v&agrave;o danh s&aacute;ch của UNESCO di sản thế giới. </span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Porta Nigra:</strong> Cổng th&agrave;nh đen - L&agrave; một cổng th&agrave;nh lớn thời La M&atilde;. Năm 1986 được Unesco c&ocirc;ng nhận l&agrave; di sản thế giới, di t&iacute;ch La M&atilde;. Được x&acirc;y dựng trong m&agrave;u x&aacute;m đ&aacute; sa thạch giữa 186 v&agrave; 200 sau C&ocirc;ng nguy&ecirc;n. </span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tiếp đến, đo&agrave;n đến <strong>Konlenz </strong>&ndash; thị trấn nẳm ở lưu vực s&ocirc;ng Rhine v&agrave; s&ocirc;ng Mosel. V&agrave;o m&ugrave;a h&egrave;, du kh&aacute;ch c&oacute; thể chọn thả m&igrave;nh tr&ecirc;n Du thuyền S&ocirc;ng Rhine ngắm cảnh đẹp thanh b&igrave;nh của th&agrave;nh phố v&agrave; v&ocirc; số c&aacute;c kiến tr&uacute;c l&acirc;u đ&agrave;i cổ, ph&aacute;o đ&agrave;i cổ tr&ecirc;n cao những ngọn n&uacute;i ch&oacute;t v&oacute;t <strong>(chi ph&iacute; tự t&uacute;c).</strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n dừng ch&acirc;n tham quan Ruedesheim để xem <strong>Đ&agrave;i tưởng niệm Niederwald</strong> &ndash; một tượng đ&agrave;i được x&acirc;y dựng v&agrave;o cuối thế kỷ 19 &ndash; để kỷ niệm sự ra đời của Đế chế Đức.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sau đ&oacute;, đo&agrave;n đến Frankfurt &ldquo;trung t&acirc;m t&agrave;i ch&iacute;nh lớn nhất Ch&acirc;u &Acirc;u&quot;. Tham quan:</span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nh&agrave; h&aacute;t cũ (Alte Oper).</strong></span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Roemerberg</strong> &ndash; trung t&acirc;m lịch sử của Frankfurt.</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nh&agrave; thờ St.Paul </strong>&ndash; nơi soạn thảo hiến ph&aacute;p thống nhất đầu ti&ecirc;n của nước Đức.&nbsp;</span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Phố Die Zeil &ndash;</strong> phố mua sắm nhộn nhịp nhất của ĐỨC</span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Hotel:Sheraton Congress Hotel Frankfurt / Sheraton Offenbach Hotel hoặc tương đương.&nbsp;</strong></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 4: FRANKFURT &ndash; BONN &ndash; COLOGNE - AMSTERDAM&nbsp; (Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">07:00: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">08:00: Khởi h&agrave;nh đi Bonn &ndash; thủ đ&ocirc; cũ của T&acirc;y Đức. Ch&uacute;ng ta đi thăm quan: </span></span></p>\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Beethoven House.</strong></span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Đại học Bonne.</strong></span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Nh&agrave; thờ Cologne, </strong>một trong những nh&agrave; thờ đẹp nhất Ch&acirc;u &Acirc;u theo kiến tr&uacute;c gothic. c&oacute; kiến tr&uacute;c cao 157m, tương đương với to&agrave; nh&agrave; 40 tầng, khi ngước nh&igrave;n bạn c&oacute; cảm gi&aacute;c dường như n&oacute; chạm đến bầu trời. Nh&agrave; thờ mang phong c&aacute;ch Gothic v&agrave; đ&atilde; được c&ocirc;ng nhận l&agrave; Di sản Thế giới v&agrave;o năm 1996.&nbsp; </span></span></p>\r\n\t\t</li>\r\n\t\t<li style=\"text-align: justify;\">\r\n\t\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Cung đường mua sắm Schildergasse.</strong></span></span></p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sau khi d&ugrave;ng bữa trưa, đo&agrave;n khởi h&agrave;nh đi H&agrave; Lan.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">19:30: Đo&agrave;n d&ugrave;ng bữa tối tại kh&aacute;ch sạn/ nh&agrave; h&agrave;ng địa phương . </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">20:00: Check-in kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch nhận ph&ograve;ng v&agrave; nghỉ ngơi.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nghỉ đ&ecirc;m tại Amsterdam (hoặc th&agrave;nh phố l&acirc;n cận).</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Hotel: Hampton by Hilton Hotel / Amsterdam Schiphol hoặc tương đương.&nbsp;</strong></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 5: AMSTERDAM &ndash; ZAANSE SCHANS- AMSTERDAM (Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">07:00: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">08:00: Khởi h&agrave;nh tham quan:</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường DAM</strong>, bao gồm: Cung điện Ho&agrave;ng gia v&agrave; đ&agrave;i tưởng niệm quốc gia. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Trung t&acirc;m sản xuất kim cương</strong>&nbsp; - Nh&agrave; m&aacute;y kim cương Coster. Q&uacute;y kh&aacute;ch c&oacute; cơ hội tận mắt quan s&aacute;t kỹ thuật chế t&aacute;c kim cương với kỹ thuật được sử dụng từ thế kỷ thứ 16.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n d&ugrave;ng cơm trưa.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nếu c&oacute; thời gian. Qu&yacute;&nbsp;kh&aacute;ch c&oacute; thể lựa chọn chương tr&igrave;nh&nbsp;- Du thuyền tr&ecirc;n những con k&ecirc;nh đ&agrave;o trứ danh ở Amsterdam&nbsp;<strong>(chi ph&iacute; tự t&uacute;c).</strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Buổi chiều, Đo&agrave;n dừng ch&acirc;n tại <strong>Zaanse Schans</strong> &ndash; thủ đ&ocirc; của đất nước cối xay gi&oacute; H&agrave; Lan.&nbsp;</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n đến tham quan Nh&agrave; m&aacute;y sản xuất guốc gỗ, nh&agrave; m&aacute;y sản xuất ph&ocirc; mai. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>18:30:</strong> D&ugrave;ng bữa tối tại nh&agrave; h&agrave;ng địa phương.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>20:00:&nbsp;</strong>Qu&yacute;&nbsp;kh&aacute;ch trở về kh&aacute;ch sạn nghỉ ngơi. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nghỉ đ&ecirc;m tại Amsterdam.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Hotel:Hampton by Hilton Hotel / Amsterdam Schiphol hoặc tương đương.</strong></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 6: AMSTERDAM &ndash; BRUSSELS - PARIS&nbsp; (Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">07:00: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">08:00: Đo&agrave;n khởi h&agrave;nh đi <strong>Brussels </strong>&ndash; thủ đ&ocirc; của Bỉ v&agrave; l&agrave; trung t&acirc;m ch&iacute;nh trị của li&ecirc;n minh Ch&acirc;u &Acirc;u.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Quảng trường Grand Place &ndash;</strong> khu phố cổ đẹp nhất Brussels được UNESCO c&ocirc;ng nhận l&agrave; di sản văn h&oacute;a Thế giới, gồm t&ograve;a đ&ocirc; ch&iacute;nh, nh&agrave; Maison du Duc (Nh&agrave; của c&ocirc;ng tước),..&nbsp; </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Tượng ch&uacute; b&eacute; đứng t&egrave; Manneken Pis, </strong>biểu tượng nổi tiếng của nước Bỉ.&nbsp; </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Bảo t&agrave;ng ph&acirc;n tử Atomium, </strong>một c&ocirc;ng tr&igrave;nh được x&acirc;y dựng cho hội chợ quốc tế tại Bruxelles (Expo &#39;58), c&oacute; chiều cao 103m.&nbsp; </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sau đ&oacute; ch&uacute;ng ta sẽ tới Bi&ecirc;n giới Ph&aacute;p.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">18:30: D&ugrave;ng bữa tối tại nh&agrave; h&agrave;ng địa phương.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">20:00:Check-in kh&aacute;ch sạn, qu&yacute; kh&aacute;ch nhận ph&ograve;ng v&agrave; nghỉ ngơi.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nghỉ đ&ecirc;m tại Ph&aacute;p. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Hotel: Residhome Paris Guyancourt / Balladins Hotel Villejuif hoặc tương đương.</strong></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 7: VERSAILLES - PARIS&nbsp; (Ăn 3 bữa)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">07:00: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">07:30. Ch&uacute;ng ta sẽ bắt đầu cuộc phi&ecirc;u lưu Paris với chuyến đi dọc theo đại lộ<strong> Champs Elysees </strong>nổi tiếng đến <strong>quảng trường Place de la Concorde</strong> - đ&oacute;ng một vai tr&ograve; quan trọng trong một trong những chương đen tối nhất của cuộc C&aacute;ch mạng Ph&aacute;p. Đo&agrave;n tham quan:<span style=\"display:none\">&nbsp;</span></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Arc de Triomph</strong>e&nbsp;- <strong>Khải Ho&agrave;n M&ocirc;n,</strong> một trong những biểu tượng lịch sử nổi tiếng của nước Ph&aacute;p.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>L&rsquo;hotel National des Invaliden &ndash; Nh&agrave; mộ của Napoleon.</strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>B&agrave;o t&agrave;ng Lourve (tham quan b&ecirc;n ngo&agrave;i).</strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Th&aacute;p Eiffel </strong>&ndash;biểu tượng nổi tiếng nhất của Ph&aacute;p, c&ocirc;ng tr&igrave;nh được x&acirc;y dựng nh&acirc;n kỷ niệm 100 năm c&aacute;ch mạng Ph&aacute;p th&agrave;nh c&ocirc;ng (đối với kh&aacute;ch c&oacute; nhu cầu l&ecirc;n tầng 2 th&aacute;p Eiffel &ndash; 11 euros/ kh&aacute;ch).</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Đại lộ Haussmann, </strong>thi&ecirc;n đường mua sắm ở trung t&acirc;m của Paris, nơi bạn sẽ được tự do mua sắm.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tiếp theo ch&uacute;ng ta sẽ đi du lịch tr&ecirc;n xe qua v&ugrave;ng ngoại &ocirc; Paris tới <strong>Cung đện Versailles </strong>lộng lẫy &ndash; nơi ở của Ho&agrave;ng gia cho đến khi cuộc c&aacute;ch mạng Ph&aacute;p năm 1789.</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Buổi chiều, đo&agrave;n qua lại Paris, d&ugrave;ng bữa tối. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sau đ&oacute; qu&yacute; kh&aacute;ch c&oacute; thể tự do tham quan Paris hoặc <strong>du ngoạn s&ocirc;ng Seine (chi ph&iacute; tự t&uacute;c).</strong></span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Hotel: Residhome Paris Guyancourt / Balladins Hotel Villejuif hoặc tương đương.</strong></span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>​​​​​​​</strong><span style=\"text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 8: PARIS - VIETNAM&nbsp;&nbsp; (Ăn 02 bữa)</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Buổi s&aacute;ng, sau khi d&ugrave;ng điểm t&acirc;m sang -&nbsp; xe v&agrave; hướng dẫn vi&ecirc;n&nbsp;đ&oacute;n đo&agrave;n ra s&acirc;n bay. Tới s&acirc;n bay, qu&yacute; kh&aacute;ch tập trung l&agrave;m thủ tục h&agrave;ng kh&ocirc;ng. M&aacute;y bay cất c&aacute;nh về Th&agrave;nh Phố Hồ Ch&iacute; Minh.&nbsp; </span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 9: TP.HỒ CH&Iacute; MINH/ H&Agrave; NỘI</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đo&agrave;n về tới Th&agrave;nh phố Hồ Ch&iacute; Minh/H&agrave; Nội. Trả đo&agrave;n tại s&acirc;n bay. Hẹn gặp lại qu&yacute; kh&aacute;ch v&agrave;o h&agrave;nh tr&igrave;nh tới.</span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\">&nbsp;</p>\r\n",
  "giave": "<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>GI&Aacute; TOUR BAO GỒM</strong><strong>:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-family:Arial,Helvetica,sans-serif; font-size:14px\">V&eacute; m&aacute;y bay chặng quốc tế: Tp.HCM &ndash; Paris // Paris&ndash; Tp.HCM</span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Thu&ecirc;́, phụ phí xăng d&acirc;̀u, phí an ninh, phí s&acirc;n bay phi trường 2 nước. </span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"color:#0070c0\">Kh&aacute;ch sạn từ 3 </span></strong><span style=\"color:#0070c0\">&ndash; <strong>&nbsp;4 sao</strong></span> đ&acirc;̀y đủ ti&ecirc;̣n nghi, ti&ecirc;u chuẩn ph&ograve;ng đ&ocirc;i. Trong trường hợp cần thiết vì lý do giới tính, ph&ograve;ng ba sẽ được bố tr&iacute;. </span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Thư mời Schengen.</span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hướng d&acirc;̃n vi&ecirc;n từ Việt Nam theo đoàn su&ocirc;́t tuy&ecirc;́n.</span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ăn u&ocirc;́ng, xe đưa đ&oacute;n, v&agrave; ph&iacute; tham quan theo chương trình</span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&agrave; tặng lưu niệm: n&oacute;n, &nbsp;bao da hộ chiếu</span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Bảo hi&ecirc;̉m du lịch qu&ocirc;́c t&ecirc;́ với mức đ&ecirc;̀n bù 1.000.000.000 VND/ trường hợp.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>GI&Aacute; TOUR KH&Ocirc;NG BAO GỒM:</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hộ chiếu còn hạn tr&ecirc;n sáu tháng.</span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Phí visa 3.000.000 vnđ</strong></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ch&iacute; ph&iacute; c&aacute; nh&acirc;n, h&agrave;nh l&yacute; qu&aacute; cước v&agrave; c&aacute;c chi ph&iacute; ph&aacute;t sinh ngo&agrave;i chương tr&igrave;nh.</span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tiền tips cho hướng dẫn vi&ecirc;n v&agrave; t&agrave;i xế địa phương:<strong> 10 Euro/ng&agrave;y/người x 7 ng&agrave;y</strong></span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Chi ph&iacute; dời ng&agrave;y, đổi h&agrave;nh tr&igrave;nh (đổi chặng), n&acirc;ng hạng v&eacute; m&aacute;y bay.</span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Phụ ph&iacute; ph&ograve;ng đơn 10.500.000 vnđ (trường hợp kh&aacute;ch đăng k&yacute; đi lẻ 1 m&igrave;nh, nếu đo&agrave;n khởi h&agrave;nh c&oacute; 2 kh&aacute;ch lẻ Nam hoặc 2 kh&aacute;ch lẻ Nữ ch&uacute;ng t&ocirc;i sẽ linh động gh&eacute;p v&agrave;o th&agrave;nh 1 ph&ograve;ng twin, trong trường hợp kh&ocirc;ng c&oacute; kh&aacute;ch lẻ n&agrave;o kh&aacute;c để gh&eacute;p với qu&iacute; kh&aacute;ch, qu&iacute; kh&aacute;ch vui l&ograve;ng đ&oacute;ng ph&iacute; ph&ograve;ng đơn).</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>GI&Aacute; V&Eacute; TRẺ EM: (t&iacute;nh theo ng&agrave;y/th&aacute;ng/năm sinh)</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trẻ em từ 2 đến dưới 12 tuổi: 80% gi&aacute; tour người lớn. (Kh&ocirc;ng c&oacute; chế độ giường)</span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trẻ em từ 2 đến dưới 12 tuổi: 100% gi&aacute; tour người lớn. (C&oacute; chế độ giường)</span></span>.</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trẻ em dưới 2 tuổi: 35% gi&aacute; tour trọn g&oacute;i người lớn.</span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">*** Lưu &yacute;: Trẻ em ngủ chung giường với bố mẹ. Mỗi gia đ&igrave;nh chỉ được k&egrave;m 1 trẻ em, trẻ em thứ 2 đ&oacute;ng 90% để c&oacute; ti&ecirc;u chuẩn giường ri&ecirc;ng.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>QUY TRÌNH ĐĂNG KÝ VÀ THỰC HI&Ecirc;̣N:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch vui lòng đem theo Passport (bản chính), và đ&oacute;ng <strong>cọc 20 triệu VNĐ</strong> khi đăng k&yacute; tour (trước ngày khởi hành &iacute;t nhất <strong>45 ng&agrave;y</strong>)</span></span>.</p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ho&agrave;n tất thanh to&aacute;n tiền tour c&ograve;n lại trước ng&agrave;y khởi h&agrave;nh:</span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>15 ng&agrave;y</strong> l&agrave;m việc (đối với tour ng&agrave;y thường)</span></span>.</p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>25 ng&agrave;y</strong> l&agrave;m việc (đối với tour ng&agrave;y lễ, tết) </span></span>.</p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Khách hàng cung cấp h&ocirc;̀ sơ xin visa trước ngày khởi hành &iacute;t nhất <strong>05 tuần</strong>. </span></span></p>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">\r\n\t<p><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">C&ocirc;ng ty&nbsp;sẽ hướng d&acirc;̃n thủ tục xin visa, c&aacute;ch đi&ecirc;̀n các m&acirc;̃u đơn visa, đăng ký ngày nộp hồ sơ, kh&aacute;ch h&agrave;ng phải c&oacute; mặt để nộp hồ sơ v&agrave; mang theo hồ sơ bảng gốc để đối chiếu.</span></span></p>\r\n\t</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>GHI CH&Uacute;:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trường hợp đo&agrave;n kh&ocirc;ng đủ 10 kh&aacute;ch khởi h&agrave;nh (10 kh&aacute;ch đi v&agrave; về theo h&agrave;nh tr&igrave;nh tour), c&ocirc;ng ty c&oacute; quyền thay đổi, dời tour sang ng&agrave;y khởi h&agrave;nh gần nhất. Nếu kh&aacute;ch h&agrave;ng kh&ocirc;ng sắp xếp được c&ocirc;ng việc để tham gia tour kế tiếp, ch&uacute;ng t&ocirc;i sẽ ho&agrave;n trả lại tiền cọc tour/tiền tour sau khi đ&atilde; trừ đi lệ ph&iacute; xin visa của c&aacute;c kh&aacute;ch m&agrave; kh&ocirc;ng chịu th&ecirc;m bất kỳ chi ph&iacute; v&agrave; tr&aacute;ch nhiệm n&agrave;o.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đối với những kh&aacute;ch h&agrave;ng chỉ mua Land tour (tức dịch vụ mặt đặt tại nước muốn đến), c&ocirc;ng ty sẽ kh&ocirc;ng khuyến kh&iacute;ch kh&aacute;ch h&agrave;ng tự mua/xuất v&eacute; m&aacute;y bay khi chưa c&oacute; sự x&aacute;c nhận tour chắc chắn khởi h&agrave;nh từ c&ocirc;ng ty. Ch&uacute;ng t&ocirc;i kh&ocirc;ng chịu tr&aacute;ch nhiệm về chi ph&iacute; chuyến đi: kh&aacute;ch sạn mua th&ecirc;m, v&eacute; m&aacute;y bay, visa... của kh&aacute;ch h&agrave;ng nếu tour kh&ocirc;ng khởi h&agrave;nh.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đại Sứ Qu&aacute;n &amp; Tổng L&atilde;nh Sự Qu&aacute;n khối Schengen y&ecirc;u cầu c&aacute;c đương đơn xin visa du lịch theo đo&agrave;n phải tr&igrave;nh diện lại hộ chiếu bản gốc sau khi kết th&uacute;c tour. V&igrave; vậy kh&aacute;ch h&agrave;ng vui l&ograve;ng gửi lại Hộ chiếu gốc cho Hướng Dẫn Vi&ecirc;n &ndash; Trưởng đo&agrave;n ng&agrave;y về để tr&igrave;nh diện cho ĐSQ/LSQ (cấp visa). Ch&uacute;ng t&ocirc;i sẽ ho&agrave;n trả lại hộ chiếu gốc sau khi đ&atilde; tr&igrave;nh diện xong (khoảng 03 ng&agrave;y l&agrave;m việc). </span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch mang quốc tịch nước ngo&agrave;i hoặc l&agrave; việt kiều phải c&oacute; visa rời mang theo l&uacute;c đi tour.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch mang quốc tịch nước ngo&agrave;i c&oacute; visa t&aacute;i nhập Việt Nam 01 lần, phải l&agrave;m visa t&aacute;i nhập VN để nhập cảnh v&agrave;o VN lần tiếp theo.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&yacute; kh&aacute;ch mang 2 Quốc tịch hoặc Travel document (chưa nhập quốc tịch) vui l&ograve;ng th&ocirc;ng b&aacute;o với nh&acirc;n vi&ecirc;n b&aacute;n tour ngay thời điểm đăng k&yacute; tour v&agrave; nộp bản gốc k&egrave;m c&aacute;c giấy tờ c&oacute; li&ecirc;n quan (nếu c&oacute;). </span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Qu&yacute; kh&aacute;ch chỉ mang thẻ xanh (thẻ tạm tr&uacute; tại nước ngo&agrave;i) v&agrave; kh&ocirc;ng c&ograve;n hộ chiếu VN c&ograve;n hiệu lực th&igrave; kh&ocirc;ng du lịch sang nước thứ ba được.</strong></span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trường hợp trẻ em đi với người nh&agrave; (kh&ocirc;ng phải Bố Mẹ) phải nộp k&egrave;m giấy ủy quyến được ch&iacute;nh quyền địa phương x&aacute;c nhận (do Bố Mẹ ủy quyền dắt đi tour).</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Đối với kh&aacute;ch h&agrave;ng từ 75 tuổi &ndash; đến 79 tuổi: y&ecirc;u cầu k&yacute; cam kết sức khỏe với Cty &amp; giấy kh&aacute;m sức khỏe để đi du lịch nước ngo&agrave;i do b&aacute;c sĩ cấp. Cty khuyến kh&iacute;ch đ&oacute;ng th&ecirc;m ph&iacute; bảo hiểm cao cấp t&ugrave;y theo tour. Bất cứ sự cố n&agrave;o xảy ra tr&ecirc;n tour, c&ocirc;ng ty sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Kh&ocirc;ng nhận kh&aacute;ch h&agrave;ng từ 80 tuổi trở l&ecirc;n &amp; kh&aacute;ch h&agrave;ng mang thai từ th&aacute;ng thứ 5 trở l&ecirc;n. Kh&aacute;ch h&agrave;ng mai thai vui l&ograve;ng th&ocirc;ng b&aacute;o ngay khi đăng k&yacute; tour để được tư vấn.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ch&uacute;ng t&ocirc;i&nbsp;c&oacute; quyền thay đổi h&atilde;ng hang kh&ocirc;ng vận chuyển v&agrave;o giờ ch&oacute;t t&ugrave;y thuộc v&agrave;o c&aacute;c h&atilde;ng h&agrave;ng kh&ocirc;ng, thời tiết&hellip;</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Giờ bay c&oacute; thể thay đổi m&agrave; kh&ocirc;ng th&ocirc;ng b&aacute;o trước do phụ thuộc v&agrave;o h&atilde;ng h&agrave;ng kh&ocirc;ng.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">T&ugrave;y theo đi&ecirc;̀u ki&ecirc;̣n thực tế m&agrave; chương tr&igrave;nh tham quan c&oacute; thể thay đổi h&agrave;nh tr&igrave;nh l&ecirc;n xuống cho ph&ugrave; hợp tuy nhi&ecirc;n c&aacute;c tuyến điểm Du Lịch v&acirc;̃n đảm bảo đ&acirc;̀y đủ như l&uacute;c ban đầu. Tuy nhi&ecirc;n,&nbsp; c&ocirc;ng ty sẽ được miễn trừ tr&aacute;ch nhiệm bảo đảm c&aacute;c điểm tham quan trong trường hợp kh&aacute;ch quan như:</span></span>\r\n\t<ul>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Xảy ra thi&ecirc;n tai: b&atilde;o lụt, hạn h&aacute;n, động đất..</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sự cố về an ninh: biểu t&igrave;nh, khủng bố, đ&igrave;nh c&ocirc;ng.</span></span></li>\r\n\t\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Sự cố về h&agrave;ng kh&ocirc;ng: dời, hủy, ho&atilde;n chuyến bay, trục trặc kỹ thuật bay, an ninh bay&hellip;</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nếu những trường hợp tr&ecirc;n xảy ra, c&ocirc;ng ty sẽ xem x&eacute;t để ho&agrave;n chi ph&iacute; kh&ocirc;ng tham quan cho kh&aacute;ch trong điều kiện c&oacute; thể (sau khi đ&atilde; trừ lại c&aacute;c dịch vụ đ&atilde; thực hiện: ph&iacute; l&agrave;m visa, tiền v&eacute; m&aacute;y bay&hellip;.v&agrave; kh&ocirc;ng chịu tr&aacute;ch nhiệm bồi thường th&ecirc;m bất kỳ chi ph&iacute; n&agrave;o kh&aacute;c).</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trường hợp Qu&yacute; kh&aacute;ch kh&ocirc;ng được xuất cảnh v&agrave; nhập cảnh vì lý do cá nh&acirc;n, ch&uacute;ng t&ocirc;i được miễn trừ tr&aacute;ch nhiệm v&agrave; kh&ocirc;ng ho&agrave;n trả tiền tour. Qu&yacute; kh&aacute;ch tự t&uacute;c chi ph&iacute; mua v&eacute; m&aacute;y bay quay về Việt Nam.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">T&ugrave;y theo t&igrave;nh h&igrave;nh cấp Visa của L&atilde;nh Sự Qu&aacute;n v&agrave; v&eacute; m&aacute;y bay, ng&agrave;y khởi h&agrave;nh c&oacute; thể dời lại từ 1 đến 7 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh ban đầu hoặc v&agrave;o đo&agrave;n khởi h&agrave;nh tiếp theo gần nhất.</span></span></li>\r\n\t<li style=\"text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hồ sơ xin visa sau khi nộp v&agrave;o L&atilde;nh Sự Qu&aacute;n sẽ kh&ocirc;ng được ho&agrave;n trả lại.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:-9.35pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>ĐIỀU KIỆN HUỶ TOUR:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Trong trường hợp kh&ocirc;ng thể tham dự được tour, qu&yacute; kh&aacute;ch vui l&ograve;ng mang Bi&ecirc;n bản đăng k&yacute; tour &amp; bi&ecirc;n lai đ&oacute;ng tiền đến văn ph&ograve;ng c&ocirc;ng ty để l&agrave;m thủ tục hủy/chuyển tour. Phải th&ocirc;ng b&aacute;o cho C&ocirc;ng ty bằng văn bản hoặc email (kh&ocirc;ng giải quyết c&aacute;c trường hợp li&ecirc;n hệ chuyển/hủy tour qua điện thoại) v&agrave; chịu ph&iacute; huỷ phạt như sau:</span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><u>ĐỐI VỚI TOUR NG&Agrave;Y THƯỜNG: </u></strong></span></span>\r\n\t<ul>\r\n\t\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Huỷ ngay sau khi đăng k&yacute;: 30% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hủy trước ng&agrave;y khởi h&agrave;nh 30 ng&agrave;y (từ ng&agrave;y 30 trở về trước): 50% tổng gi&aacute; th&agrave;nh tour</span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hủy trước ng&agrave;y khởi h&agrave;nh 15 ng&agrave;y (từ ng&agrave;y 15 &ndash; ng&agrave;y thứ 30): 75% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Huỷ trong v&ograve;ng 15 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh (từ ng&agrave;y 15 &ndash; ng&agrave;y khởi h&agrave;nh): 100% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><u>ĐỐI VỚI TOUR NG&Agrave;Y LỄ, TẾT: </u></strong></span></span>&nbsp;<span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">(L&agrave; c&aacute;c tour c&oacute; thời gian diễn ra rơi v&agrave;o một trong c&aacute;c ng&agrave;y lễ, tết theo quy định của nước Việt Nam)</span></span>\r\n\t<ul>\r\n\t\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Huỷ ngay sau khi đăng k&yacute;: 30% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hủy trước ng&agrave;y khởi h&agrave;nh 45 ng&agrave;y (từ ng&agrave;y 45 trở về trước): 50% tổng gi&aacute; th&agrave;nh tour</span></span>.</li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hủy trước ng&agrave;y khởi h&agrave;nh 30 ng&agrave;y (từ ng&agrave;y 30 &ndash; ng&agrave;y thứ 45): 75% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Huỷ trong v&ograve;ng 30 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh (từ ng&agrave;y 30 &ndash; ng&agrave;y khởi h&agrave;nh): 100% tổng gi&aacute; th&agrave;nh tour.</span></span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"color:#0070c0\">*** Lưu &yacute;:</span></strong> B&ecirc;n cạnh việc kh&aacute;ch h&agrave;ng hủy tour sẽ dựa v&agrave;o c&aacute;c điều kiện hủy phạt như tr&ecirc;n. Đồng thời, đối với những kh&aacute;ch đ&atilde; c&oacute; visa Ch&acirc;u &Acirc;u xin visa theo đo&agrave;n của Cty C&Ocirc;NG TY ch&uacute;ng t&ocirc;i sẽ giữ hỗ chiếu cho đến khi thời hạn visa Ch&acirc;u &Acirc;u kết th&uacute;c, hết hiệu lực được ph&eacute;p nhập cảnh; Hoặc sẽ th&ocirc;ng b&aacute;o với LSQ/ĐSQ (nơi cấp visa) để đ&oacute;ng dấu mộc &ldquo;Cancel &ndash; hủy&rdquo; visa của kh&aacute;ch. V&igrave; ch&uacute;ng t&ocirc;i chịu tr&aacute;ch nhiệm trong việc nhập cảnh v&agrave; xuất cảnh Ch&acirc;u &Acirc;u của qu&yacute; kh&aacute;ch.</span></span></li>\r\n\t<li style=\"margin-left: 0in; margin-right: -9.35pt; text-align: justify;\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">*** Trường hợp CHUYỂN/DỜI TOUR: Qu&yacute; kh&aacute;ch phải chịu chi ph&iacute; hủy tour theo quy định &nbsp;như tr&ecirc;n. C&aacute;c trường chuyển tour sẽ xem x&eacute;t lại t&igrave;nh h&igrave;nh m&agrave; c&oacute; mức hỗ trợ kh&aacute;c nhau.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:.25in; margin-right:0in; text-align:justify\">&nbsp;</p>\r\n\r\n<p style=\"margin-left:-40.5pt; margin-right:-.5in; text-align:center\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"color:#0070c0\">K&Iacute;NH CH&Uacute;C QU&Yacute; KH&Aacute;CH C&Oacute; MỘT CHUYẾN ĐI TH&Uacute; VỊ!!!</span></strong></span></span></p>\r\n",
  "hinhanh": [
    {
      "filename": "Zaanseschans.jpg",
      "aliasname": "f6a1717fed51c3af89e73797f5264dec_20170629010603.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "5950d6c12b063bc50f8b4567",
    "595345d72b063b82378b4567",
    "595345e42b063b82378b4568"
  ],
  "date_post": ISODate("2017-06-29T13:33:28.618Z")
});
db.getCollection("tours").insert({
  "_id": ObjectId("59550fc82b063b742f8b4567"),
  "tieude": "HÀN QUỐC: SEOUL – LÀNG BÍCH HỌA SONGWOL DONG BẢO TÀNG RONG BIỂN – PHIM TRƯỜNG EVERLAND – ĐẢO NAMI (04 NGÀY 04 ĐÊM)",
  "giatour": NumberInt(13700000),
  "ngaykhoihanh": ISODate("2017-07-30T00:00:00.0Z"),
  "ngayketthuc": ISODate("2017-08-03T00:00:00.0Z"),
  "mota": "Hàn Quốc được biết đến là xứ sở của món Kim Chi và cũng là nơi cho ra đời những bộ phim tình cảm nổi tiếng nhất thế giới.\r\n",
  "noidung": "<p style=\"margin-left:.05in; margin-right:0in; text-align:justify\"><span style=\"color:#660099\"><strong>Đ&Ecirc;M 1: TP. HCM &nbsp;- SEOUL (ĂN TR&Ecirc;N M&Aacute;Y BAY)</strong></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\">Hướng dẫn vi&ecirc;n c&ocirc;ng ty du lịch đ&oacute;n đo&agrave;n tại s&acirc;n bay T&acirc;n Sơn Nhất ga đi quốc&nbsp; tế, l&agrave;m thủ tục đ&aacute;p chuyến bay tới H&agrave;n Quốc.</li>\r\n\t<li style=\"text-align:justify\"><strong><span style=\"font-size:10.0pt\"><span style=\"color:black\">02 :30</span></span></strong><span style=\"font-size:10.0pt\"><span style=\"color:black\"> M&aacute;y bay cất c&aacute;nh đi</span></span><span style=\"font-size:10.0pt\"><span style=\"color:black\"> Seoul - H&agrave;n Quốc</span></span><span style=\"font-size:10.0pt\"><span style=\"color:black\">. Qu&yacute; kh&aacute;ch n</span></span><span style=\"font-size:10.0pt\"><span style=\"color:black\">ghỉ đ&ecirc;m</span></span><span style=\"font-size:10.0pt\"><span style=\"color:black\">, ăn tối tr&ecirc;n m&aacute;y bay.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:.05in; margin-right:0in; text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 1: SEOUL &ndash; L&Agrave;NG B&Iacute;CH HỌA &ndash; NAMI&nbsp;(ĂN 02 BỮA)</strong></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><strong>09:30:&nbsp;</strong>Qu&yacute; kh&aacute;ch đ&ecirc;́n s&acirc;n bay Quốc tế <strong>Incheon</strong>, <strong>Korea. </strong>Xe và hướng dẫn vi&ecirc;n&nbsp;địa phương đưa đ&oacute;n qu&yacute; kh&aacute;ch v&agrave; khởi h&agrave;nh tham quan:</li>\r\n\t<li><strong><span style=\"font-size:10.0pt\">Ng&ocirc;i l&agrave;ng B&iacute;ch họa Songwol dong FairyTale (Donghwa Maeul)</span></strong><span style=\"font-size:10.0pt\"> &ndash; Tại đ&acirc;y Qu&yacute; kh&aacute;ch sẽ được trở về tuổi thơ với c&aacute;c c&acirc;u chuyện cổ t&iacute;ch, những n&agrave;ng c&ocirc;ng ch&uacute;a Disney, t&ograve;a l&acirc;u đ&agrave;i tr&aacute;ng lệ đến c&aacute;c lo&agrave;i động vật, mu&ocirc;ng th&uacute; trong rừng.Tất cả c&aacute;c ng&otilde; ng&aacute;ch, bức tường đều được vẽ l&ecirc;n những bức tranh vui nhộn, lấy bối cảnh từ c&aacute;c bộ phim hoạt h&igrave;nh nổi tiếng. C&oacute; những bức tường l&agrave; c&aacute;c t&aacute;c phẩm đi&ecirc;u khoắc hoặc tượng tạc c&aacute;c con vật giống tạo h&igrave;nh 3D.</span></li>\r\n\t<li><strong><span style=\"font-size:10.0pt\">Phim trường nơi quay bộ phim &ldquo; &Ocirc;ng Ho&agrave;ng Mua sắm&rdquo;</span></strong><span style=\"font-size:10.0pt\"> bộ phim Drama mới của điện ảnh H&agrave;n Quốc</span></li>\r\n\t<li><strong><span style=\"font-size:10.0pt\">Bảo t&agrave;ng rong biển Lave Museum.</span></strong></li>\r\n\t<li><span style=\"font-size:10.0pt\">Qu&yacute; kh&aacute;ch tham gia <strong>lớp học c&aacute;ch l&agrave;m m&oacute;n cơm cuộn, kim chi v&agrave; thử trang phục Hanbok truyền thống.</strong></span></li>\r\n\t<li><strong>Trưa: </strong>Qu&yacute; kh&aacute;ch d&ugrave;ng bữa trưa tại nh&agrave; h&agrave;ng địa phương. Sau đ&oacute;, đoàn khởi h&agrave;nh đi tham quan:</li>\r\n\t<li><strong><span style=\"font-size:10.0pt\">Đảo Nami:</span></strong><span style=\"font-size:10.0pt\"> H&ograve;n đảo xinh đẹp nằm ở ph&iacute;a Nam của H&agrave;n Quốc, với kh&iacute; hậu m&aacute;t mẻ quanh năm, l&agrave; nơi c&aacute;c đ&ocirc;i t&igrave;nh nh&acirc;n thường gh&eacute; thăm v&agrave;o dịp cuối tuần. H&ograve;n đảo nổi tiếng sau khi bộ phim &quot;<strong>Bản t&igrave;nh ca m&ugrave;a đ&ocirc;ng&quot;.&nbsp;</strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></li>\r\n\t<li><strong><span style=\"font-size:10.0pt\"><span style=\"color:black\">Chiều:</span></span></strong><span style=\"font-size:10.0pt\"><span style=\"color:black\"> Qu&yacute; kh&aacute;ch d&ugrave;ng cơm tối. Sau đ&oacute; về kh&aacute;ch sạn nhận ph&ograve;ng nghỉ ngơi hoặc tự do kh&aacute;m ph&aacute; Seoul về đ&ecirc;m.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in; text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 2:&nbsp;SEOUL- SHOPPING &ndash; EVERLAND (ĂN BA BỮA)</strong></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><strong>07:00:&nbsp;</strong>Qu&yacute; Kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.&nbsp; Q&uacute;y kh&aacute;ch đi tham quan mua sắm tại c&aacute;c khu cửa h&agrave;ng nổi tiếng ở thủ đ&ocirc; Seoul &ndash; H&agrave;n Quốc:</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:10.0pt\">Tiếp tục cuộc h&agrave;nh tr&igrave;nh kh&aacute;m ph&aacute; l&agrave; <strong>Trung t&acirc;m</strong></span><strong><span style=\"font-size:10.0pt\"> nh&acirc;n s&acirc;m ch&iacute;nh phủ </span></strong><span style=\"font-size:10.0pt\">- nơ</span> <span style=\"font-size:10.0pt\">i được ch&iacute;nh phủ H&agrave;n Quốc bảo trợ v&agrave; tập đo&agrave;n <strong>Samsung</strong> cam kết về chất lượng sản phẩm.</span></li>\r\n\t<li style=\"text-align:justify\"><strong><span style=\"font-size:10.0pt\">Cửa h&agrave;ng mỹ phẩm nổi tiếng H&agrave;n Quốc</span></strong><span style=\"font-size:10.0pt\"> v&agrave; thưởng thức phong c&aacute;ch trang điểm H&agrave;n Quốc. </span><span style=\"font-size:10.0pt\">H&agrave;n Quốc l&agrave; một trong những nước đứng đầu thế giới về l&agrave;m đẹp v&agrave; c&ocirc;ng nghệ l&agrave;m đẹp, qu&yacute; kh&aacute;ch sẽ được tham quan v&agrave; sử dụng thử miễn ph&iacute; tất cả c&aacute;c loại mỹ phẩm nổi tiếng tại cửa h&agrave;ng mỹ phẩm Miranda.</span></li>\r\n\t<li style=\"text-align:justify\"><strong>Trưa:&nbsp;</strong>Đo&agrave;n d&ugrave;ng cơm trưa tại nh&agrave; h&agrave;ng địa phương. Sau đ&oacute; khởi h&agrave;nh tham quan v&agrave; vui chơi <strong>tại c&ocirc;ng vi&ecirc;n giải tr&iacute; Everland</strong>. Mặc d&ugrave; diện t&iacute;ch chỉ bằng một phần trăm của C&ocirc;ng vi&ecirc;n thế giới Walt Disney, nhưng Everland l&agrave; c&ocirc;ng vi&ecirc;n c&oacute; chủ đề đầu ti&ecirc;n lớn nhất ở H&agrave;n Quốc.C&ocirc;ng vi&ecirc;n Everland được chia l&agrave;m năm khu chủ đề gồm:\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\"><strong><span style=\"font-size:10.0pt\">Khu Global Fair</span></strong><span style=\"font-size:10.0pt\"> (Chợ to&agrave;n cầu).</span></li>\r\n\t\t<li style=\"text-align:justify\"><strong><span style=\"font-size:10.0pt\">Khu American adventure</span></strong><span style=\"font-size:10.0pt\"> (Khu phi&ecirc;u lưu mạo hiểm kiểu Mỹ).</span></li>\r\n\t\t<li style=\"text-align:justify\"><strong><span style=\"font-size:10.0pt\">Khu Magic land</span></strong><span style=\"font-size:10.0pt\"> (V&ugrave;ng đất huyền thoại).</span></li>\r\n\t\t<li style=\"text-align:justify\"><strong><span style=\"font-size:10.0pt\">Khu European adventure</span></strong><span style=\"font-size:10.0pt\"> (Khu phi&ecirc;u lưu mạo hiểm kiểu ch&acirc;u &Acirc;u) v&agrave; Zoo Topia (Vườn b&aacute;ch th&uacute;).</span></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\">Đo&agrave;n ăn tối tại nh&agrave; h&agrave;ng địa phương.</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:10.0pt\"><span style=\"color:black\">Khởi h&agrave;nh về lại Seoul v&agrave; thư gi&atilde;n với <strong>show nghệ thuật &ldquo;Fantastic show&rdquo;</strong> nổi tiếng của xứ sở kim chị. Sau đ&oacute;, Đo&agrave;n về lại kh&aacute;ch sạn nghỉ ngơi.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:4.5pt; text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 3: SEOUL- CITY TOUR (ĂN BA BỮA)</strong></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><strong>07:00:&nbsp;</strong>Qu&yacute; Kh&aacute;ch d&ugrave;ng bữa s&aacute;ng tại kh&aacute;ch sạn.&nbsp;Qu&yacute; kh&aacute;ch khởi h&agrave;nh tham quan:\r\n\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\"><strong>Cung điện Ho&agrave;ng Gia Gyeongbok 500 tuổi: </strong>là cung đi&ecirc;̣n lớn nh&acirc;́t trong ngũ cung, <span style=\"background-color:white\">đại diện cho quyền lực thống trị của triều đại phong ki&ecirc;́n cu&ocirc;́i cùng của Tri&ecirc;̀u Ti&ecirc;n được x&acirc;y dựng cách đ&acirc;y hơn 6</span>00 năm.</li>\r\n\t\t<li style=\"text-align:justify\"><strong>Dinh tổng thống &ldquo; The Blue House&rdquo;: </strong>nơi ở v&agrave; l&agrave;m việc của Tổng thống H&agrave;n Quốc, l&agrave; một trong những c&aacute;c c&ocirc;ng tr&igrave;nh kiến tr&uacute;c đẹp nhất của H&agrave;n Quốc.<strong> </strong></li>\r\n\t\t<li style=\"text-align:justify\">Su&ocirc;́i <strong>Chengonggyecheon </strong>chảy giữa lòng thành ph&ocirc;́.</li>\r\n\t\t<li style=\"text-align:justify\">Quảng trường <strong>Guanghwamun.</strong></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\"><strong>Trưa:&nbsp; </strong>Qu&yacute; kh&aacute;ch d&ugrave;ng bữa trưa tại nh&agrave; h&agrave;ng địa phương. Sau đ&oacute;, đo&agrave;n đi &nbsp;tham quan v&agrave; mua sắm tại:\r\n\t<ul>\r\n\t\t<li style=\"text-align:justify\">Cửa h&agrave;ng miễn thuế <strong>Donghwa Duty free.</strong></li>\r\n\t\t<li style=\"text-align:justify\">Kh&aacute;m ph&aacute; cửa h&agrave;ng Tinh dầu th&ocirc;ng đỏ, b&agrave;i thuốc doThần y Herjun s&aacute;ng chế - thần dược detox m&aacute;u, ph&ograve;ng chống bệnh tiểu đường, cao huyết &aacute;p, đột quỵ, mỡ trong m&aacute;u.</li>\r\n\t\t<li style=\"text-align:justify\">Nghi&ecirc;n cứu thuốc bổ trợ gan- chuy&ecirc;n trị đ&agrave;o thải chất độc ở gan, giảm men gan đối với những người men gan cao.</li>\r\n\t\t<li style=\"text-align:justify\"><strong>Chợ Dongdaemun </strong>nằm ngay trung t&acirc;m th&agrave;nh phố. Đến đ&acirc;y, du kh&aacute;ch c&oacute; thể tự do lựa chọn cho m&igrave;nh những bộ quần &aacute;o, nữ trang của c&aacute;c cửa h&agrave;ng thời trang h&agrave;ng đầu thế giới.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align:justify\"><strong><span style=\"font-size:10.0pt\"><span style=\"color:black\">18:00:&nbsp;</span></span></strong><span style=\"font-size:10.0pt\"><span style=\"color:black\">Qu&yacute; kh&aacute;ch d&ugrave;ng cơm tối tại nh&agrave; h&agrave;ng địa phương. Sau đ&oacute;, về kh&aacute;ch sạn nghỉ ngơi hoặc tự do kh&aacute;m ph&aacute;m <strong>thủ đ&ocirc; Seoul</strong> l&uacute;c về đ&ecirc;m.</span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:0in; margin-right:0in; text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 4: SEOUL - TP. HCM (ĂN S&Aacute;NG)</strong></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><strong>S&aacute;ng</strong>: Qu&yacute; kh&aacute;ch l&agrave;m thủ tục trả ph&ograve;ng, sau đ&oacute; khởi h&agrave;nh đến nh&agrave; h&agrave;ng d&ugrave;ng bữa s&aacute;ng.</li>\r\n\t<li style=\"text-align:justify\">Đ&aacute;p chuyến bay trở về Việt Nam.</li>\r\n\t<li style=\"text-align:justify\">Đến s&acirc;n bay T&acirc;n Sơn Nhất. Chia tay v&agrave; kết th&uacute;c chương tr&igrave;nh.</li>\r\n</ul>\r\n",
  "giave": "<p style=\"margin-left:0in; margin-right:27.0pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>DỊCH VỤ BAO GỒM:</strong></span></span></span></p>\r\n\r\n<ul style=\"list-style-type:disc\">\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">V&eacute; m&aacute;y bay khứ hồi: TP. Hồ Ch&iacute; Minh &ndash; Seoul &ndash; TP. Hồ Ch&iacute; Minh.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">H&agrave;nh l&iacute;: 7kg h&agrave;nh l&iacute; x&aacute;ch tay, h&agrave;nh l&iacute; k&yacute; gởi 20 kg.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"color:black\">Thuế s&acirc;n bay 2 nước, thuế an ninh h&agrave;ng kh&ocirc;ng v&agrave; phụ ph&iacute; nhi&ecirc;n liệu, thuế h&agrave;ng kh&ocirc;ng.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Nghỉ tại kh&aacute;ch sạn 3 sao: ti&ecirc;u chuẩn 2 người/ph&ograve;ng, nếu đo&agrave;n lẻ nam hoặc nữ th&igrave; ở ph&ograve;ng 3 giường.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">C&aacute;c bữa ăn theo chương tr&igrave;nh (c&aacute;c bữa ăn c&oacute; thể thay đổi ph&ugrave; hợp với tuyến điểm tuy nhi&ecirc;n vẫn đảm bảo đủ số lượng v&agrave; chất lượng bữa ăn tương đương hoặc hơn.)</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Visa nhập cảnh H&agrave;n Quốc</span></span>.</li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Vận chuyển bằng xe m&aacute;y lạnh hiện đại.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Ph&iacute; tham quan c&aacute;c điểm theo chương tr&igrave;nh.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hướng dẫn vi&ecirc;n nhiệt t&igrave;nh, kinh nghiệm đi trọn tuyến.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Qu&agrave; tặng: N&oacute;n , bao da hộ chiếu.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Bảo hiểm du lịch (Kh&ocirc;ng áp dụng cho người tr&ecirc;n 70 tu&ocirc;̉i trở l&ecirc;n).</span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>KH&Ocirc;NG BAO GỒM:</strong></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Hộ chiếu c&ograve;n hạn tr&ecirc;n 6 th&aacute;ng t&iacute;nh từ ng&agrave;y kết th&uacute;c tour.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Chi ph&iacute; c&aacute; nh&acirc;n, h&agrave;nh l&yacute; qu&aacute; cước, điện thoại, giặt ủi, tham quan ngo&agrave;i chương tr&igrave;nh.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Phụ thu visa H&agrave;n Quốc với kh&aacute;ch nước ngo&agrave;i: 500.000Usd/kh&aacute;ch.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Tips cho t&agrave;i xế địa phương v&agrave; hướng dẫn vi&ecirc;n: 24 Usd/kh&aacute;ch.</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\">Visa t&aacute;i nhập t&aacute;i nhập cho kh&aacute;ch quốc tịch nước ngo&agrave;i: 60 Usd/kh&aacute;ch</span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:black\">Phụ thu ph&ograve;ng đơn 4.500.000 vnđ/kh&aacute;ch.</span>&nbsp;&nbsp; </span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Đơn thuế gi&aacute; trị gia tăng (VAT)</span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>QUI TR&Igrave;NH ĐĂNG K&Yacute; V&Agrave; THANH TO&Aacute;N:</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:black\">Đợt 1: Qu&yacute; kh&aacute;ch đem theo hộ chiếu (Passport) bản gốc v&agrave; đ&oacute;ng cọc 10.000.000VNĐ để c&ocirc;ng ty tiến h&agrave;nh thực hiện l&agrave;m visa v&agrave; đặt cọc v&eacute; m&aacute;y bay cho qu&yacute; kh&aacute;ch.</span></span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:black\">Đợt 2: Qu&yacute; kh&aacute;ch ho&agrave;n tất thanh to&aacute;n hết phần tiền c&ograve;n lại trước 07 ng&agrave;y khởi h&agrave;nh (kh&ocirc;ng t&iacute;nh ng&agrave;y lễ, thứ 7 v&agrave; chủ nhật).</span></span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>ĐIỀU KHOẢN HỦY TOUR:</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:black\">Sau khi đặt cọc tour: chi ph&iacute; kh&ocirc;ng ho&agrave;n lại l&agrave; </span><strong>1.500.000 VNĐ/ kh&aacute;ch</strong> (Ph&iacute; đặt cọc v&eacute; m&aacute;y bay v&agrave; ph&iacute; xin thư mời, thư bảo l&atilde;nh).</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Trong thời gian L&atilde;nh sự x&eacute;t duyệt visa: chi ph&iacute; kh&ocirc;ng ho&agrave;n lại l&agrave; <strong>2.500.000 VNĐ/ kh&aacute;ch.</strong></span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Trường hợp Qu&yacute; kh&aacute;ch bị từ chối kh&ocirc;ng cấp visa: chi ph&iacute; kh&ocirc;ng ho&agrave;n lại l&agrave; <strong>2.500.000 VNĐ/kh&aacute;ch.</strong> </span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:black\">(Do c&aacute;c khoản đ&atilde; chi trả như: dịch thuật; thư bảo l&atilde;nh; lệ ph&iacute; visa; ph&iacute; đặt cọc v&eacute; m&aacute;y bay&hellip;)</span></span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-right:27.0pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>C&Aacute;C ĐIỀU KIỆN HỦY TOUR</strong><strong>:</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Nếu kh&aacute;ch hủy hoặc ho&atilde;n chuyến du lịch ngay sau khi L&atilde;nh sự qu&aacute;n đ&atilde; cấp visa: mất 100% tiền cọc tour.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">H</span></span></span><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">ủy hoặc ho&atilde;n chuyến du lịch trước 07 ng&agrave;y khởi h&agrave;nh: Ph&iacute; hủy tour l&agrave;&nbsp; 90% tr&ecirc;n tổng gi&aacute; tour.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Hủy hoặc ho&atilde;n chuyến du lịch từ 01 &ndash; 03 ng&agrave;y trước ng&agrave;y khởi h&agrave;nh: Ph&iacute; hủy tour l&agrave; 100% tr&ecirc;n tổng gi&aacute; tour.</span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-right:27pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>C&Aacute;C ĐIỀU LƯU &Yacute; KHI HỦY HOẶC HO&Atilde;N TOUR</strong><strong>:</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Huỷ bỏ chuyến đi phải được th&ocirc;ng b&aacute;o trực tiếp với C&ocirc;ng ty hoặc qua fax, email, tin nhắn điện thoại v&agrave; phải được C&ocirc;ng ty x&aacute;c nhận. Việc huỷ bỏ bằng điện thoại kh&ocirc;ng được chấp nhận. Nếu kh&ocirc;ng c&oacute; sự x&aacute;c nhận hợp lệ của c&ocirc;ng ty, xem như qu&yacute; kh&aacute;ch tự &yacute; hủy tour v&agrave; c&ocirc;ng ty sẽ căn cứ theo điều khoản hủy phạt tr&ecirc;n.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Thời g</span></span></span><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">ian hủy tour được t&iacute;nh cho ng&agrave;y l&agrave;m việc, kh&ocirc;ng t&iacute;nh thứ bảy, chủ nhật v&agrave; c&aacute;c ng&agrave;y Lễ Tết.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Trường hợp hủy hoặc ho&atilde;n chuyến du lịch rơi v&agrave;o 2 điều c&ugrave;ng một l&uacute;c th&igrave; ph&iacute; hủy tour sẽ được t&iacute;nh theo mức cao hơn.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Đối với những kh&aacute;ch đ&atilde; c&oacute; visa, c&ocirc;ng ty sẽ giữ hộ chiếu 3 th&aacute;ng ( thời hạn hiệu lực của visa ) hoặc đ&oacute;ng dấu hủy visa.</span></span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-right:27pt; text-align:justify\"><span style=\"color:#660099\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><strong>LƯU &Yacute;:</strong></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Đối với kh&aacute;ch tr&ecirc;n 70 tuổi, Q&uacute;y kh&aacute;ch sẽ đ&oacute;ng th&ecirc;m ph&iacute; bảo hiểm cao cấp (thay đổi t&ugrave;y theo tour).</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Gi&aacute; tour qu&yacute; kh&aacute;ch c&oacute; hộ chiếu nước ngo&agrave;i bằng gi&aacute; tour kh&aacute;ch Việt Nam.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Hồ sơ visa sau khi nộp v&agrave;o <strong>L&atilde;nh Sự Qu&aacute;n sẽ kh&ocirc;ng được</strong> ho&agrave;n trả lại.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Trường hợp Qu&yacute; kh&aacute;ch kh&ocirc;ng được xuất cảnh v&agrave; nhập cảnh vì lý do cá nh&acirc;n, c&ocirc;ng ty sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm v&agrave; sẽ kh&ocirc;ng ho&agrave;n trả tiền tour, Q&uacute;y kh&aacute;ch tự chi trả chi ph&iacute; ph&aacute;t sinh nếu c&oacute;.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">T&ugrave;y theo đi&ecirc;̀u ki&ecirc;̣n thực tế m&agrave; chương tr&igrave;nh tham quan, kh&aacute;ch sạn, c&oacute; thể thay đổi cho ph&ugrave; hợp, tuy nhi&ecirc;n t&ocirc;̉ng s&ocirc;́ đi&ecirc;̉m tham quan trong chương trình v&acirc;̃n đảm bảo đ&acirc;̀y đủ.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\">Do t&iacute;nh chất l&agrave; đo&agrave;n gh&eacute;p kh&aacute;ch lẻ, ch&uacute;ng t&ocirc;i c&oacute; tr&aacute;ch nhiệm nhận kh&aacute;ch cho đủ đo&agrave;n (10 kh&aacute;ch người lớn trở l&ecirc;n) th&igrave; đo&agrave;n sẽ khởi h&agrave;nh đ&uacute;ng lịch tr&igrave;nh. Nếu số lượng đo&agrave;n dưới 10 kh&aacute;ch, c&ocirc;ng ty sẽ th&ocirc;ng b&aacute;o cho kh&aacute;ch trước ng&agrave;y khởi h&agrave;nh 3 ng&agrave;y v&agrave; thỏa thuận lại ng&agrave;y khởi h&agrave;nh mới.</span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:#333333\">Đ&acirc;y l&agrave; chương tr&igrave;nh du lịch thuần t&uacute;y, Qu&yacute; kh&aacute;ch vui l&ograve;ng KH&Ocirc;NG ĐƯỢC T&Aacute;CH ĐO&Agrave;N m&agrave; kh&ocirc;ng th&ocirc;ng b&aacute;o trước cho ph&iacute;a c&ocirc;ng ty du lịch tại Việt Nam, ph&iacute; t&aacute;ch đo&agrave;n l&agrave; 200 usd/ng&agrave;y/kh&aacute;ch. Trong trường hợp qu&yacute; kh&aacute;ch t&aacute;ch đo&agrave;n&nbsp; m&agrave; kh&ocirc;ng th&ocirc;ng b&aacute;o trước, ngo&agrave;i việc phải chịu phạt ph&iacute; t&aacute;ch đo&agrave;n, HDV sẽ trực tiếp th&ocirc;ng b&aacute;o với Cục xuất nhập cảnh tại H&agrave;n Quốc. Đ&acirc;y l&agrave; vấn đề li&ecirc;n quan đến an to&agrave;n của du kh&aacute;ch cũng như quy định xuất nhập cảnh, lưu tr&uacute; của nước sở tại, v&igrave; vậy qu&yacute; kh&aacute;ch vui l&ograve;ng thực hiện đ&uacute;ng quy định.</span></span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:#333333\">Theo quy định của&nbsp; đối t&aacute;c H&agrave;n Quốc, qu&yacute; kh&aacute;ch KH&Ocirc;NG ĐƯỢC PH&Eacute;P để người th&acirc;n hoặc bạn b&egrave; ở b&ecirc;n H&agrave;n Quốc tham gia tour du lịch cũng như sử dụng dịch vụ (xe, kh&aacute;ch sạn, ăn uống,&hellip;) trong suốt qu&aacute; tr&igrave;nh tham quan. Nếu ph&aacute;t hiện vi phạm, qu&yacute; kh&aacute;ch sẽ phải đ&oacute;ng phạt gấp đ&ocirc;i tiền tour/kh&aacute;ch cho b&ecirc;n đối t&aacute;c H&agrave;n Quốc.&nbsp; </span></span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong><span style=\"color:red\">Chuyến bay v&agrave; giờ bay c&oacute; thể thay đổi giờ ch&oacute;t t&ugrave;y thuộc v&agrave;o c&aacute;c h&atilde;ng h&agrave;ng kh&ocirc;ng.</span></strong></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><span style=\"background-color:white\"><span style=\"color:#333333\">Trong những trường hợp kh&aacute;ch quan như: thi&ecirc;n tai, khủng bố&hellip;hoặc do sự cố hay c&oacute; sự thay đổi lịch tr&igrave;nh của c&aacute;c phương tiện vận chuyển c&ocirc;ng cộng như: m&aacute;y bay, t&agrave;u hỏa&hellip; c&ocirc;ng ty sẽ giữ quyền thay đổi lộ tr&igrave;nh bất cứ l&uacute;c n&agrave;o v&igrave; sự thuận tiện, an to&agrave;n cho Qu&yacute; kh&aacute;ch h&agrave;ng v&agrave; sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm bồi thường những thiệt hại ph&aacute;t sinh.</span></span></span></span></li>\r\n\t<li style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>Khi đăng k&yacute; tour du lịch, Qu&yacute; kh&aacute;ch vui l&ograve;ng đọc kỹ chương tr&igrave;nh, gi&aacute; tour v&agrave; c&aacute;c điều khoản bao gồm v&agrave; kh&ocirc;ng bao gồm trong chương tr&igrave;nh, c&aacute;c điều kiện hủy tour&hellip;Trong trường hợp Qu&yacute; kh&aacute;ch kh&ocirc;ng trực tiếp đăng k&yacute; tour m&agrave; do người kh&aacute;c đến đăng k&yacute;, Qu&yacute; kh&aacute;ch vui l&ograve;ng t&igrave;m hiểu kỹ chương tr&igrave;nh từ người đến đăng k&yacute;!</strong></span></span></li>\r\n</ul>\r\n\r\n<p style=\"margin-left:.5in; margin-right:-9.35pt; text-align:justify\">&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style=\"margin-left:.5in; margin-right:27.0pt; text-align:justify\">&nbsp;</p>\r\n",
  "hinhanh": [
    {
      "filename": "đất-nước-con-người-Hàn-Quốc.jpg",
      "aliasname": "62cd1d1387af952fe8bf70d14d9d806d_20170629020624.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "595504112b063b8c1f8b4567",
    "595504392b063b8c1f8b4568"
  ],
  "date_post": ISODate("2017-06-29T14:36:16.784Z")
});
db.getCollection("tours").insert({
  "_id": ObjectId("59564ade2b063b8e6a8b4567"),
  "tieude": "CHÂU ÂU: MONACO - MIỀN NAM NƯỚC PHÁP - TÂY BAN NHA (10 NGÀY 09 ĐÊM)",
  "giatour": NumberInt(44990000),
  "ngaykhoihanh": [
    ISODate("2017-08-28T00:00:00.0Z"),
    ISODate("2017-10-09T00:00:00.0Z"),
    ISODate("2017-11-12T00:00:00.0Z")
  ],
  "ngayketthuc": [
    ISODate("2017-09-06T00:00:00.0Z"),
    ISODate("2017-10-18T00:00:00.0Z"),
    ISODate("2017-11-21T00:00:00.0Z")
  ],
  "mota": "Tây ban Nha là điểm đến hàng đầu của du lịch nghỉ lễ và là nước được đến thăm nhiều thứ 2 trên Thế giới. Tây Ban Nha có ẩm thực phong phú và đa dạng với những món ăn được chế biến độc đáo thưởng thức cùng ly rượu vang thơm nồng.\r\n\r\n",
  "noidung": "<p><span style=\"color:#660099\"><strong>NG&Agrave;Y 01: TP. HỒ CH&Iacute; MINH - DUBAI</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Đo&agrave;n th&agrave;nh phố Hồ Ch&iacute; Minh tập trung tại s&acirc;n bay T&acirc;n Sơn Nhất &ndash; Ga đi quốc tế (cột số 12). Qu&yacute; kh&aacute;ch l&agrave;m thủ tục xuất cảnh đi Dubai &ndash; C&aacute;c Tiểu vương quốc Ả Rập thống nhất. M&aacute;y bay cất c&aacute;nh tr&ecirc;n chuyến bay EK&nbsp;393 - EK&nbsp;393 29AUG SGNDXB &nbsp;0035 - 0430.</li>\r\n\t<li>Đo&agrave;n H&agrave; Nội&nbsp;tập trung tại s&acirc;n bay Nội B&agrave;i &ndash; Ga đi quốc tế (Bảng điện tử A). Qu&yacute; kh&aacute;ch l&agrave;m thủ tục xuất cảnh đi Dubai &ndash; C&aacute;c Tiểu vương quốc Ả Rập thống nhất. M&aacute;y bay cất c&aacute;nh tr&ecirc;n chuyến bay EK&nbsp;389 - EK 389 &nbsp;SGNDXB &nbsp;2250 - 0545. Dừng kỹ thuật tại Rangoon &ndash; Myanmar khoảng 1 tiếng (Qu&yacute; kh&aacute;ch kh&ocirc;ng xuống m&aacute;y bay).</li>\r\n</ul>\r\n\r\n<p><strong><span style=\"color:#660099\">NG&Agrave;Y&nbsp;02: DUBAI &ndash; NICE - MONACO</span></strong></p>\r\n\r\n<ul>\r\n\t<li>09:05: M&aacute;y bay nối chuyến đi <strong>Nice. </strong>Chuyến bay dự kiến: EK&nbsp;77 &nbsp;29AUG DXBNCE &nbsp;0845-1340.</li>\r\n\t<li><strong>13:40: </strong>Đến Nice, đo&agrave;n l&agrave;m thủ tục nhập cảnh Ph&aacute;p.</li>\r\n\t<li><strong>13:45 :&nbsp;</strong>Xe đ&oacute;n đo&agrave;n đi tham quan:</li>\r\n\t<li><strong>Promenade des Anglais: </strong>Con đường ven biển đẹp nhất thế giới dọc theo bờ biển Nice nh&igrave;n ra Địa Trung Hải.</li>\r\n\t<li>Sau đ&oacute; đo&agrave;n đến&nbsp;<strong>C&ocirc;ng quốc Monaco,</strong> nổi tiếng về sự gi&agrave;u c&oacute;, xa hoa v&agrave; xinh đẹp của m&igrave;nh, tham quan:\r\n\t<ul>\r\n\t\t<li><strong>Bảo t&agrave;ng hải dương học&nbsp;(chụp h&igrave;nh b&ecirc;n ngo&agrave;i).</strong></li>\r\n\t\t<li><strong>Nh&agrave; thờ ch&aacute;nh t&ograve;a Monaco.</strong></li>\r\n\t\t<li><strong>C&ocirc;ng vi&ecirc;n c&acirc;y xanh ven biển tuyệt đẹp.</strong></li>\r\n\t\t<li><strong>Cung điện ho&agrave;ng gia Monaco.</strong></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Ngắm nh&igrave;n to&agrave;n cảnh đất nước từ tr&ecirc;n cao, đặc biệt l&agrave; vẻ đẹp của khu d&acirc;n cư v&agrave; <strong>bến du thuyền Monaco.</strong></li>\r\n\t<li>Đường đua xe hơi <strong>C&ocirc;ng thức 1 &ndash; chặng Monte Carlo.</strong></li>\r\n\t<li>Đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng nghỉ ngơi tại Nice.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;03 :NICE &ndash; XƯỞNG NƯỚC HOA FRAGONARD &ndash; CANNES - AVIGNON</strong></span></p>\r\n\r\n<ul>\r\n\t<li>06:30: Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>00:80: Tham quan <strong>Fragonard&nbsp;</strong>&ndash; một trong những thương hiệu sản xuất nước hoa nổi tiếng nhất của thủ phủ nước hoa Grasse của thế giới. Qu&yacute; kh&aacute;ch được giới thiệu về quy tr&igrave;nh, c&ocirc;ng nghệ v&agrave; nguy&ecirc;n liệu sản xuất nước hoa lừng danh của v&ugrave;ng, mua sắm nước hoa cao cấp với gi&aacute; ưu đ&atilde;i nhất</li>\r\n\t<li>10:00: Đo&agrave;n khởi h&agrave;nh đi&nbsp;<strong>Avignon</strong>, tr&ecirc;n đường gh&eacute; thăm&nbsp;<strong>Cannes&nbsp;&ndash;</strong> th&agrave;nh phố&nbsp;nổi tiếng khắp thế giới với Li&ecirc;n hoa phim Cannes danh gi&aacute; chỉ sau giải Oscar của Mỹ.</li>\r\n\t<li><strong>Con đường La croisette&nbsp;</strong>với cảnh quan tuyệt đẹp, độc đ&aacute;o với nhiều h&agrave;ng c&acirc;y cọ dừa v&agrave; c&aacute;c loại c&acirc;y nhiệt đới kh&aacute;c.</li>\r\n\t<li><strong>Palais des Festival&nbsp;</strong>&ndash; Cung đại hội nơi tổ chức Li&ecirc;n hoa phim Cannes danh gi&aacute; (tham quan b&ecirc;n ngo&agrave;i).</li>\r\n\t<li>Tiếp tục di chuyển về hướng t&acirc;y đi Avignon.</li>\r\n\t<li>Đến Avignon tham quan:\r\n\t<ul>\r\n\t\t<li><strong>Cầu Avignon&nbsp;</strong>&ndash; rất đẹp v&agrave; độc đ&aacute;o v&igrave; hiện tại chiếc cầu chỉ c&ograve;n một nữa.</li>\r\n\t\t<li><strong>Palais des Papas&nbsp;</strong>&ndash; Cung điện của c&aacute;c Gi&aacute;o ho&agrave;ng.</li>\r\n\t\t<li><strong>Dạo phố cổ Avignon.</strong></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Về kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;04: AVIGNON - CARCASSONE</strong></span></p>\r\n\r\n<ul>\r\n\t<li>06:30: Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Đo&agrave;n khởi h&agrave;nh đi<strong>&nbsp;Carcassone&nbsp;</strong>&ndash; hay c&ograve;n gọi l&agrave; tp ph&aacute;o đ&agrave;i v&igrave; to&agrave;n bộ tp nằm gọn trong 1 ph&aacute;p đ&agrave;i tr&ecirc;n n&uacute;i, carcassone l&agrave; một thị trấn y&ecirc;n b&igrave;nh với vẻ đẹp cổ k&iacute;nh với ch&uacute;t uy nghi&ecirc;m c&ograve;n s&oacute;t lại từ thời Trung cổ, đ&acirc;y l&agrave; 1 địa điểm rất &iacute;t c&oacute; tour n&agrave;o tổ chức đến Carcassone, tham quan:\r\n\t<ul>\r\n\t\t<li><strong>Ph&aacute;o đ&agrave;i carcassone&nbsp;</strong>&ndash; một trong những ph&aacute;o đ&agrave;i đẹp nhất v&agrave; lớn nhất ở ch&acirc;u &Acirc;u.</li>\r\n\t\t<li><strong>Dạo khu phố cổ nằm gọn b&ecirc;n trong bức tường th&agrave;nh.</strong></li>\r\n\t\t<li>Mua sắm c&aacute;c loại b&aacute;nh, kẹo, chocolate thơm ngon nổi tiếng tại đ&acirc;y.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Về kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y 05: CARCASSONNE - BARCELONA</strong></span></p>\r\n\r\n<ul>\r\n\t<li>06:30: Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Đo&agrave;n khởi h&agrave;nh đi&nbsp;<strong>Barcelona&nbsp;</strong>&ndash; một trong những v&ugrave;ng đất tự trị nổi tiếng nhất v&agrave; đẹp nhất của T&acirc;y Ban Nha, tham quan:\r\n\t<ul>\r\n\t\t<li><strong>Nh&agrave; thờ Sagrada Familia</strong>&nbsp;&ndash; kiến tr&uacute;c đặc biệt kh&ocirc;ng thể nhầm lẫn v&agrave;o đ&acirc;u được (tham quan b&ecirc;n ngo&agrave;i).</li>\r\n\t\t<li><strong>C&ocirc;ng vi&ecirc;n Guelle&nbsp;</strong>của kiến tr&uacute;c sư lừng danh Gaudi (tham quan b&ecirc;n ngo&agrave;i).</li>\r\n\t\t<li><strong>Dạo phố La Rambla</strong>&nbsp;- tận hưởng đời sống của người d&acirc;n Barcelona.</li>\r\n\t\t<li><strong>Nou Camp</strong>&nbsp;&ndash; S&acirc;n vận động&nbsp;của đội b&oacute;ng khổng lồ Barcelona (tham quan b&ecirc;n ngo&agrave;i).</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Về kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;06: BARCELONA - ZARAGOZA</strong></span></p>\r\n\r\n<ul>\r\n\t<li>06:30: Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Đo&agrave;n khởi h&agrave;nh đi&nbsp;Zaragoza&nbsp;&ndash; một tp lớn v&agrave; đ&aacute;ng xem nằm ở ph&iacute;a đ&ocirc;ng T&acirc;y Ban Nha.&nbsp;</li>\r\n\t<li><strong>Basilica de Nuestra Senora del Pilar</strong>&nbsp;&ndash; nh&agrave; thờ c&ocirc;ng gi&aacute;o La M&atilde; tuyệt đẹp, một trong những địa điểm tham quan h&uacute;t kh&aacute;ch nhất của Zaragoza.</li>\r\n\t<li><strong>C&acirc;y cầu đ&aacute; tuyệt đẹp bắc ngang d&ograve;ng s&ocirc;ng Ebro.</strong></li>\r\n\t<li><strong>Calle Alfonso</strong> - con phố đẹp nhất ở Zaragoza.</li>\r\n\t<li>18:00:&nbsp;Ăn tối, thưởng thức ẩm thực T&acirc;y Ban Nha&nbsp;v&agrave; vũ điệu Flamenco.</li>\r\n\t<li>Về kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;07: ZARAGOZA - MADRID</strong></span></p>\r\n\r\n<ul>\r\n\t<li>06:30: Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Đo&agrave;n khởi h&agrave;nh đi&nbsp;<strong>Madrid&nbsp;</strong>&ndash; thủ đ&ocirc; của TBN v&agrave; l&agrave; một trong những tp thu h&uacute;t nhiều kh&aacute;ch tham quan nhất ở ch&acirc;u &Acirc;u.</li>\r\n\t<li><strong>Palacio Real&nbsp;</strong>- Cung điện ho&agrave;ng gia: l&agrave; 1 điểm đến hấp dẫn, c&oacute; vị tr&iacute; rất quan trọng tại Madrid (tham quan b&ecirc;n ngo&agrave;i).</li>\r\n\t<li><strong>Quảng trường T&acirc;y Ban Nha.</strong></li>\r\n\t<li>Về kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;08: MADRID &ndash; CITY TOUR</strong></span></p>\r\n\r\n<ul>\r\n\t<li>06:30: Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Đo&agrave;n tiếp tục tham quan Madrid:</li>\r\n\t<li><strong>San Miguel&nbsp;&ndash;</strong> khu chợ b&aacute;n đầy đủ đặc sản địa phương như Tapas, tr&aacute;i c&acirc;y, nước &eacute;p tr&aacute;i c&acirc;y ơn đới&hellip;</li>\r\n\t<li>Đo&agrave;n tự do ăn trưa, thưởng thức ẩm thực, bia T&acirc;y Ban Nha&nbsp;tại đ&acirc;y.</li>\r\n\t<li><strong>Quảng trường&nbsp;Plaza Mayor.</strong></li>\r\n\t<li><strong>Quảng trường&nbsp;Puerta del Sol.</strong></li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;09: MADRID &ndash; TP. HỒ CH&Iacute; MINH</strong></span></p>\r\n\r\n<ul>\r\n\t<li>06:30: Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Đo&agrave;n tiếp tục tham quan Madrid:</li>\r\n\t<li><strong>Trường đấu b&ograve; t&oacute;t Madrid&nbsp;(tham quan b&ecirc;n ngo&agrave;i).</strong></li>\r\n\t<li><strong>Bernabeu </strong>&ndash; S&acirc;n vận động&nbsp;của đội b&oacute;ng khổng lồ Real Madrid&nbsp;(tham quan b&ecirc;n ngo&agrave;i).</li>\r\n\t<li>Mua sắm đến giờ ra s&acirc;n bay.</li>\r\n\t<li>Xe đưa đo&agrave;n ra s&acirc;n bay đ&oacute;n chuyến bay về th&agrave;nh phố Hồ Ch&iacute; Minh. Chuyến bay dự kiến:&nbsp;EK 144&nbsp; 5SEP MADDXB 2205 - 0715.</li>\r\n\t<li>Qu&yacute; kh&aacute;ch nghỉ ngơi tr&ecirc;n m&aacute;y bay. Qu&aacute; cảnh tại Dubai &ndash; tiếp tục mua sắm tại s&acirc;n bay Dubai.</li>\r\n\t<li>M&aacute;y bay nối chuyến về Hồ Ch&iacute; Minh. Chuyến bay dự kiến:&nbsp;EK&nbsp;&nbsp;392 6SEP &nbsp;DXBSGN &nbsp;0930-2000.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;10: TP. HỒ CH&Iacute; MINH</strong></span></p>\r\n\r\n<ul>\r\n\t<li>20.00: M&aacute;y bay hạ c&aacute;nh tại s&acirc;n bay T&acirc;n Sơn Nhất &ndash; th&agrave;nh phố Hồ Ch&iacute; Minh.</li>\r\n\t<li>Chia tay, kết th&uacute;c chuyến đi v&agrave; hẹn gặp lại Qu&yacute; kh&aacute;ch lần sau.</li>\r\n</ul>\r\n",
  "giave": "<p><span style=\"color:#660099\"><strong>GI&Aacute; TOUR BAO GỒM:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>V&eacute; m&aacute;y bay Quốc tế khứ hồi TP.HCM//HAN &ndash; NICE - MADRID &ndash; TP.HCM//HAN.</li>\r\n\t<li>Visa ch&acirc;u &Acirc;u + visa Dubai.</li>\r\n\t<li>8 đ&ecirc;m Kh&aacute;ch sạn 3-4 sao (2 người/ ph&ograve;ng), sẽ bố tr&iacute; ph&ograve;ng 3 nếu đo&agrave;n lẻ nam hoặc nữ.</li>\r\n\t<li>Xe m&aacute;y lạnh, cao cấp vận chuyển theo chương tr&igrave;nh.</li>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>Hướng dẫn vi&ecirc;n tiếng Việt theo đo&agrave;n suốt tuyến.</li>\r\n\t<li>Bảo hiểm du lịch quốc tế trị gi&aacute; 1 tỷ đồng.</li>\r\n\t<li>Nước uống, 1 chai/ ng&agrave;y/ người.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>GI&Aacute; TOUR KH&Ocirc;NG BAO GỒM:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Phụ ph&iacute; ph&ograve;ng đơn.</li>\r\n\t<li>Ăn trưa, tối.</li>\r\n\t<li>Tiền tips cho t&agrave;i xế 5 Euro/ Ng&agrave;y/ Người (55 euro).</li>\r\n\t<li>C&aacute;c chi ph&iacute; kh&aacute;c kh&ocirc;ng c&oacute; trong phần Bao gồm.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>GI&Aacute; V&Eacute; TRẺ EM: (t&iacute;nh theo ng&agrave;y/th&aacute;ng/năm sinh)</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Trẻ em từ 2 đến dưới 12 tuổi: 80% gi&aacute; tour người lớn. (Kh&ocirc;ng c&oacute; chế độ giường).</li>\r\n\t<li>Trẻ em từ 2 đến dưới 12 tuổi: 100% gi&aacute; tour người lớn. (C&oacute; chế độ giường).</li>\r\n\t<li>Trẻ em dưới 2 tuổi: 35% gi&aacute; tour trọn g&oacute;i người lớn.</li>\r\n\t<li>*** Lưu &yacute;: Trẻ em ngủ chung giường với bố mẹ. Mỗi gia đ&igrave;nh chỉ được k&egrave;m 1 trẻ em, trẻ em thứ 2 đ&oacute;ng 90% để c&oacute; ti&ecirc;u chuẩn giường ri&ecirc;ng.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\">QUY TRÌNH ĐĂNG KÝ VÀ THỰC HI&Ecirc;̣N:</span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p>Qu&yacute; kh&aacute;ch vui lòng đem theo Passport (bản chính), và đ&oacute;ng&nbsp;<strong>cọc 20 triệu VNĐ</strong>&nbsp;khi đăng k&yacute; tour (trước ngày khởi hành &iacute;t nhất&nbsp;<strong>45 ng&agrave;y</strong>).</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Ho&agrave;n tất thanh to&aacute;n tiền tour c&ograve;n lại trước ng&agrave;y khởi h&agrave;nh:</p>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>15 ng&agrave;y</strong>&nbsp;l&agrave;m việc (đối với tour ng&agrave;y thường).</p>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>25 ng&agrave;y</strong>&nbsp;l&agrave;m việc (đối với tour ng&agrave;y lễ, tết)&nbsp;.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Khách hàng cung cấp h&ocirc;̀ sơ xin visa trước ngày khởi hành &iacute;t nhất&nbsp;<strong>05 tuần</strong>.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>C&ocirc;ng ty&nbsp;sẽ hướng d&acirc;̃n thủ tục xin visa, c&aacute;ch đi&ecirc;̀n các m&acirc;̃u đơn visa, đăng ký ngày nộp hồ sơ, kh&aacute;ch h&agrave;ng phải c&oacute; mặt để nộp hồ sơ v&agrave; mang theo hồ sơ bảng gốc để đối chiếu.</p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>GHI CH&Uacute;:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Trường hợp đo&agrave;n kh&ocirc;ng đủ 10 kh&aacute;ch khởi h&agrave;nh (10 kh&aacute;ch đi v&agrave; về theo h&agrave;nh tr&igrave;nh tour), c&ocirc;ng ty c&oacute; quyền thay đổi, dời tour sang ng&agrave;y khởi h&agrave;nh gần nhất. Nếu kh&aacute;ch h&agrave;ng kh&ocirc;ng sắp xếp được c&ocirc;ng việc để tham gia tour kế tiếp, ch&uacute;ng t&ocirc;i sẽ ho&agrave;n trả lại tiền cọc tour/tiền tour sau khi đ&atilde; trừ đi lệ ph&iacute; xin visa của c&aacute;c kh&aacute;ch m&agrave; kh&ocirc;ng chịu th&ecirc;m bất kỳ chi ph&iacute; v&agrave; tr&aacute;ch nhiệm n&agrave;o.</li>\r\n\t<li>Đối với những kh&aacute;ch h&agrave;ng chỉ mua Land tour (tức dịch vụ mặt đặt tại nước muốn đến), c&ocirc;ng ty sẽ kh&ocirc;ng khuyến kh&iacute;ch kh&aacute;ch h&agrave;ng tự mua/xuất v&eacute; m&aacute;y bay khi chưa c&oacute; sự x&aacute;c nhận tour chắc chắn khởi h&agrave;nh từ c&ocirc;ng ty. Ch&uacute;ng t&ocirc;i kh&ocirc;ng chịu tr&aacute;ch nhiệm về chi ph&iacute; chuyến đi: kh&aacute;ch sạn mua th&ecirc;m, v&eacute; m&aacute;y bay, visa... của kh&aacute;ch h&agrave;ng nếu tour kh&ocirc;ng khởi h&agrave;nh.</li>\r\n\t<li>Đại Sứ Qu&aacute;n &amp; Tổng L&atilde;nh Sự Qu&aacute;n khối Schengen y&ecirc;u cầu c&aacute;c đương đơn xin visa du lịch theo đo&agrave;n phải tr&igrave;nh diện lại hộ chiếu bản gốc sau khi kết th&uacute;c tour. V&igrave; vậy kh&aacute;ch h&agrave;ng vui l&ograve;ng gửi lại Hộ chiếu gốc cho Hướng Dẫn Vi&ecirc;n &ndash; Trưởng đo&agrave;n ng&agrave;y về để tr&igrave;nh diện cho ĐSQ/LSQ (cấp visa). Ch&uacute;ng t&ocirc;i sẽ ho&agrave;n trả lại hộ chiếu gốc sau khi đ&atilde; tr&igrave;nh diện xong (khoảng 03 ng&agrave;y l&agrave;m việc).</li>\r\n\t<li>Qu&yacute; kh&aacute;ch mang quốc tịch nước ngo&agrave;i hoặc l&agrave; việt kiều phải c&oacute; visa rời mang theo l&uacute;c đi tour.</li>\r\n\t<li>Qu&yacute; kh&aacute;ch mang quốc tịch nước ngo&agrave;i c&oacute; visa t&aacute;i nhập Việt Nam 01 lần, phải l&agrave;m visa t&aacute;i nhập VN để nhập cảnh v&agrave;o VN lần tiếp theo.</li>\r\n\t<li>Qu&yacute; kh&aacute;ch mang 2 Quốc tịch hoặc Travel document (chưa nhập quốc tịch) vui l&ograve;ng th&ocirc;ng b&aacute;o với nh&acirc;n vi&ecirc;n b&aacute;n tour ngay thời điểm đăng k&yacute; tour v&agrave; nộp bản gốc k&egrave;m c&aacute;c giấy tờ c&oacute; li&ecirc;n quan (nếu c&oacute;).</li>\r\n\t<li><strong>Qu&yacute; kh&aacute;ch chỉ mang thẻ xanh (thẻ tạm tr&uacute; tại nước ngo&agrave;i) v&agrave; kh&ocirc;ng c&ograve;n hộ chiếu VN c&ograve;n hiệu lực th&igrave; kh&ocirc;ng du lịch sang nước thứ ba được.</strong></li>\r\n\t<li>Trường hợp trẻ em đi với người nh&agrave; (kh&ocirc;ng phải Bố Mẹ) phải nộp k&egrave;m giấy ủy quyến được ch&iacute;nh quyền địa phương x&aacute;c nhận (do Bố Mẹ ủy quyền dắt đi tour).</li>\r\n\t<li>Đối với kh&aacute;ch h&agrave;ng từ 75 tuổi &ndash; đến 79 tuổi: y&ecirc;u cầu k&yacute; cam kết sức khỏe với Cty &amp; giấy kh&aacute;m sức khỏe để đi du lịch nước ngo&agrave;i do b&aacute;c sĩ cấp. Cty khuyến kh&iacute;ch đ&oacute;ng th&ecirc;m ph&iacute; bảo hiểm cao cấp t&ugrave;y theo tour. Bất cứ sự cố n&agrave;o xảy ra tr&ecirc;n tour, c&ocirc;ng ty sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm.</li>\r\n\t<li>Kh&ocirc;ng nhận kh&aacute;ch h&agrave;ng từ 80 tuổi trở l&ecirc;n &amp; kh&aacute;ch h&agrave;ng mang thai từ th&aacute;ng thứ 5 trở l&ecirc;n. Kh&aacute;ch h&agrave;ng mai thai vui l&ograve;ng th&ocirc;ng b&aacute;o ngay khi đăng k&yacute; tour để được tư vấn.</li>\r\n\t<li>Ch&uacute;ng t&ocirc;i&nbsp;c&oacute; quyền thay đổi h&atilde;ng hang kh&ocirc;ng vận chuyển v&agrave;o giờ ch&oacute;t t&ugrave;y thuộc v&agrave;o c&aacute;c h&atilde;ng h&agrave;ng kh&ocirc;ng, thời tiết&hellip;</li>\r\n\t<li>Giờ bay c&oacute; thể thay đổi m&agrave; kh&ocirc;ng th&ocirc;ng b&aacute;o trước do phụ thuộc v&agrave;o h&atilde;ng h&agrave;ng kh&ocirc;ng.</li>\r\n\t<li>T&ugrave;y theo đi&ecirc;̀u ki&ecirc;̣n thực tế m&agrave; chương tr&igrave;nh tham quan c&oacute; thể thay đổi h&agrave;nh tr&igrave;nh l&ecirc;n xuống cho ph&ugrave; hợp tuy nhi&ecirc;n c&aacute;c tuyến điểm Du Lịch v&acirc;̃n đảm bảo đ&acirc;̀y đủ như l&uacute;c ban đầu. Tuy nhi&ecirc;n,&nbsp; c&ocirc;ng ty sẽ được miễn trừ tr&aacute;ch nhiệm bảo đảm c&aacute;c điểm tham quan trong trường hợp kh&aacute;ch quan như:\r\n\t<ul>\r\n\t\t<li>Xảy ra thi&ecirc;n tai: b&atilde;o lụt, hạn h&aacute;n, động đất..</li>\r\n\t\t<li>Sự cố về an ninh: biểu t&igrave;nh, khủng bố, đ&igrave;nh c&ocirc;ng.</li>\r\n\t\t<li>Sự cố về h&agrave;ng kh&ocirc;ng: dời, hủy, ho&atilde;n chuyến bay, trục trặc kỹ thuật bay, an ninh bay&hellip;</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Nếu những trường hợp tr&ecirc;n xảy ra, c&ocirc;ng ty sẽ xem x&eacute;t để ho&agrave;n chi ph&iacute; kh&ocirc;ng tham quan cho kh&aacute;ch trong điều kiện c&oacute; thể (sau khi đ&atilde; trừ lại c&aacute;c dịch vụ đ&atilde; thực hiện: ph&iacute; l&agrave;m visa, tiền v&eacute; m&aacute;y bay&hellip;.v&agrave; kh&ocirc;ng chịu tr&aacute;ch nhiệm bồi thường th&ecirc;m bất kỳ chi ph&iacute; n&agrave;o kh&aacute;c).</li>\r\n\t<li>Trường hợp Qu&yacute; kh&aacute;ch kh&ocirc;ng được xuất cảnh v&agrave; nhập cảnh vì lý do cá nh&acirc;n, ch&uacute;ng t&ocirc;i được miễn trừ tr&aacute;ch nhiệm v&agrave; kh&ocirc;ng ho&agrave;n trả tiền tour. Qu&yacute; kh&aacute;ch tự t&uacute;c chi ph&iacute; mua v&eacute; m&aacute;y bay quay về Việt Nam.</li>\r\n\t<li>T&ugrave;y theo t&igrave;nh h&igrave;nh cấp Visa của L&atilde;nh Sự Qu&aacute;n v&agrave; v&eacute; m&aacute;y bay, ng&agrave;y khởi h&agrave;nh c&oacute; thể dời lại từ 1 đến 7 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh ban đầu hoặc v&agrave;o đo&agrave;n khởi h&agrave;nh tiếp theo gần nhất.</li>\r\n\t<li>Hồ sơ xin visa sau khi nộp v&agrave;o L&atilde;nh Sự Qu&aacute;n sẽ kh&ocirc;ng được ho&agrave;n trả lại.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>ĐIỀU KIỆN HUỶ TOUR:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Trong trường hợp kh&ocirc;ng thể tham dự được tour, qu&yacute; kh&aacute;ch vui l&ograve;ng mang Bi&ecirc;n bản đăng k&yacute; tour &amp; bi&ecirc;n lai đ&oacute;ng tiền đến văn ph&ograve;ng c&ocirc;ng ty để l&agrave;m thủ tục hủy/chuyển tour. Phải th&ocirc;ng b&aacute;o cho C&ocirc;ng ty bằng văn bản hoặc email (kh&ocirc;ng giải quyết c&aacute;c trường hợp li&ecirc;n hệ chuyển/hủy tour qua điện thoại) v&agrave; chịu ph&iacute; huỷ phạt như sau:</li>\r\n\t<li><strong><u>ĐỐI VỚI TOUR NG&Agrave;Y THƯỜNG:</u></strong>\r\n\t<ul>\r\n\t\t<li>Huỷ ngay sau khi đăng k&yacute;: 30% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Hủy trước ng&agrave;y khởi h&agrave;nh 30 ng&agrave;y (từ ng&agrave;y 30 trở về trước): 50% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Hủy trước ng&agrave;y khởi h&agrave;nh 15 ng&agrave;y (từ ng&agrave;y 15 &ndash; ng&agrave;y thứ 30): 75% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Huỷ trong v&ograve;ng 15 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh (từ ng&agrave;y 15 &ndash; ng&agrave;y khởi h&agrave;nh): 100% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><strong><u>ĐỐI VỚI TOUR NG&Agrave;Y LỄ, TẾT:&nbsp;</u></strong>&nbsp;(L&agrave; c&aacute;c tour c&oacute; thời gian diễn ra rơi v&agrave;o một trong c&aacute;c ng&agrave;y lễ, tết theo quy định của nước Việt Nam)\r\n\t<ul>\r\n\t\t<li>Huỷ ngay sau khi đăng k&yacute;: 30% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Hủy trước ng&agrave;y khởi h&agrave;nh 45 ng&agrave;y (từ ng&agrave;y 45 trở về trước): 50% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Hủy trước ng&agrave;y khởi h&agrave;nh 30 ng&agrave;y (từ ng&agrave;y 30 &ndash; ng&agrave;y thứ 45): 75% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Huỷ trong v&ograve;ng 30 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh (từ ng&agrave;y 30 &ndash; ng&agrave;y khởi h&agrave;nh): 100% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><strong>*** Lưu &yacute;:</strong>&nbsp;B&ecirc;n cạnh việc kh&aacute;ch h&agrave;ng hủy tour sẽ dựa v&agrave;o c&aacute;c điều kiện hủy phạt như tr&ecirc;n. Đồng thời, đối với những kh&aacute;ch đ&atilde; c&oacute; visa Ch&acirc;u &Acirc;u xin visa theo đo&agrave;n của Cty C&Ocirc;NG TY ch&uacute;ng t&ocirc;i sẽ giữ hỗ chiếu cho đến khi thời hạn visa Ch&acirc;u &Acirc;u kết th&uacute;c, hết hiệu lực được ph&eacute;p nhập cảnh; Hoặc sẽ th&ocirc;ng b&aacute;o với LSQ/ĐSQ (nơi cấp visa) để đ&oacute;ng dấu mộc &ldquo;Cancel &ndash; hủy&rdquo; visa của kh&aacute;ch. V&igrave; ch&uacute;ng t&ocirc;i chịu tr&aacute;ch nhiệm trong việc nhập cảnh v&agrave; xuất cảnh Ch&acirc;u &Acirc;u của qu&yacute; kh&aacute;ch.</li>\r\n\t<li>*** Trường hợp CHUYỂN/DỜI TOUR: Qu&yacute; kh&aacute;ch phải chịu chi ph&iacute; hủy tour theo quy định &nbsp;như tr&ecirc;n. C&aacute;c trường chuyển tour sẽ xem x&eacute;t lại t&igrave;nh h&igrave;nh m&agrave; c&oacute; mức hỗ trợ kh&aacute;c nhau.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:center\"><span style=\"color:#660099\"><strong>K&Iacute;NH CH&Uacute;C QU&Yacute; KH&Aacute;CH C&Oacute; MỘT CHUYẾN ĐI TH&Uacute; VỊ!!!</strong></span></p>\r\n",
  "hinhanh": [
    {
      "filename": "tây ban nha.jpg",
      "aliasname": "fa260371ce1b16f2635d0f3458fac7e6_20170701050704.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "5950d6c12b063bc50f8b4567",
    "595345d72b063b82378b4567",
    "5956442a2b063b1c618b4567"
  ],
  "date_post": ISODate("2017-07-26T09:40:56.708Z"),
  "giagiamtour": NumberInt(0),
  "stick": NumberInt(1)
});
db.getCollection("tours").insert({
  "_id": ObjectId("595736f12b063b99358b4567"),
  "tieude": "CHÂU ÂU: DUBAI - ĐỨC- TIỆP KHẮC - HUNGARY - ÁO - THUỴ SĨ (12 NGÀY 12 ĐÊM)",
  "giatour": NumberInt(49990000),
  "ngaykhoihanh": [
    ISODate("2017-12-03T00:00:00.0Z")
  ],
  "ngayketthuc": [
    ISODate("2017-12-13T00:00:00.0Z")
  ],
  "mota": "Nếu Engelberg, ngôi làng nhỏ trong thung lũng dưới đỉnh Titlis của dãy núi Alps Thụy Sỹ được mệnh danh là nơi thiên thần cư ngụ, thì đỉnh Titlis chính là ngọn núi thần tiên bởi không gian tuyết trắng bao la.",
  "noidung": "<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;01: TP. HỒ CH&Iacute; MINH - DUBAI</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Đo&agrave;n th&agrave;nh phố Hồ Ch&iacute; Minh, qu&yacute; kh&aacute;ch tập trung tại s&acirc;n bay T&acirc;n Sơn Nhất &ndash; Ga đi quốc tế (cột số 12) l&agrave;m thủ tục xuất cảnh đi&nbsp;Dubai &ndash; C&aacute;c Tiểu vương quốc Ả Rập thống nhất. M&aacute;y bay cất c&aacute;nh tr&ecirc;n chuyến bay EK 39 - EK&nbsp; 393 &nbsp; 3DEC &nbsp;SGNDXB &nbsp; 2355- &nbsp;0425.</li>\r\n\t<li>Đo&agrave;n H&agrave; Nội, qu&yacute; kh&aacute;ch tập trung tại s&acirc;n bay Nội B&agrave;i &ndash; Ga đi quốc tế (Bảng điện tử cột G)&nbsp;l&agrave;m thủ tục xuất cảnh đi&nbsp;Dubai &ndash; C&aacute;c Tiểu vương quốc Ả Rập thống nhất. M&aacute;y bay cất c&aacute;nh tr&ecirc;n chuyến bay EK&nbsp;389 -&nbsp;EK&nbsp;389 &nbsp;HANDXB &nbsp;2250- 0505. Dừng kỹ thuật tại Rangoon &ndash; Myanmar khoảng 1 tiếng (Qu&yacute; kh&aacute;ch&nbsp;kh&ocirc;ng xuống m&aacute;y bay).</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y 02:&nbsp;DUBAI</strong></span></p>\r\n\r\n<ul>\r\n\t<li>04:25: M&aacute;y bay hạ c&aacute;nh xuống s&acirc;n bay quốc tế Dubai.</li>\r\n\t<li>Hai đo&agrave;n Hồ Ch&iacute; Minh v&agrave; H&agrave; Nội gặp nhau&nbsp;- L&agrave;m thủ tục nhập cảnh Dubai.</li>\r\n\t<li>06:00: Xe v&agrave; hướng dẫn vi&ecirc;n địa phương đ&oacute;n đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng, ăn s&aacute;ng.</li>\r\n\t<li>Sau đ&oacute; bắt đầu kh&aacute;m ph&aacute; <strong>Tiểu vương quốc Dubai:</strong>\r\n\t<ul>\r\n\t\t<li><strong>Burj Al Arab </strong>&ndash; Kh&aacute;ch sạn 7 sao đầu ti&ecirc;n tr&ecirc;n thế giới.</li>\r\n\t\t<li><strong>Atlantis the Palm</strong> &ndash; kh&aacute;ch sạn đẹp nhất thế giới, một c&ocirc;ng tr&igrave;nh lấn biển tuyệt đẹp v&agrave; l&agrave; 1 kỳ quan nh&acirc;n tạo của con người.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Ăn trưa tại nh&agrave; h&agrave;ng Trung Hoa Chinese Palace hay Triều Ti&ecirc;n.</li>\r\n\t<li>Đo&agrave;n về kh&aacute;ch sạn chuẩn bị chuyến đi <strong>Safari</strong>. Trải nghiệm cảm gi&aacute;c ngồi xe si&ecirc;u sang, kh&aacute;m ph&aacute; sa mạc Dubai.</li>\r\n\t<li>Ăn tối thực đơn babercue thịt nướng.</li>\r\n\t<li>Về kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;03: DUBAI - PRAGUE</strong></span></p>\r\n\r\n<ul>\r\n\t<li>05:30: Trả ph&ograve;ng &ndash; xe đưa đo&agrave;n ra s&acirc;n bay.</li>\r\n\t<li>09:05: M&aacute;y bay nối chuyến đi <strong>Prague.</strong>&nbsp;Chuyến bay dự kiến: EK&nbsp;139 &nbsp; 5DEC &nbsp;DXBPRG &nbsp; 0855 - 1240.</li>\r\n\t<li>13:30: Đến <strong>Prague, </strong>đo&agrave;n l&agrave;m thủ tục nhập cảnh Cộng ho&agrave; S&eacute;c.</li>\r\n\t<li>15:00: Xe đ&oacute;n đo&agrave;n đi&nbsp;<strong>Quảng trường Wenceslas Square</strong>, tự do tham quan v&agrave; mua sắm&nbsp;gi&agrave;y Bata nổi tiếng của Tiệp Khắc.</li>\r\n\t<li>17:00: Đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng nghỉ ngơi.</li>\r\n\t<li>Tự do kh&aacute;m ph&aacute; <strong>Thủ đ&ocirc; Tiệp Khắc cũ,</strong> hay tham gia c&ugrave;ng trưởng đo&agrave;n trải nghiệm cảm gi&aacute;c đi t&agrave;u điện ngầm, thưởng thức bia v&agrave; c&aacute;c m&oacute;n ngon truyền thống của Tiệp Khắc (chi ph&iacute; tự t&uacute;c).</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;04:&nbsp;&nbsp;PRAGUE - BRATISLAVA</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Bắt đầu kh&aacute;m ph&aacute; thủ đ&ocirc; cổ k&iacute;nh Prague - một trong những th&agrave;nh phố đẹp v&agrave; c&oacute; sức hấp dẫn nhất ở ch&acirc;u &Acirc;u:</li>\r\n\t<li><strong>L&acirc;u đ&agrave;i Praha, Nh&agrave; thờ lớn Saint-Vitus.</strong></li>\r\n\t<li>Con đường V&agrave;ng Golden Lane.</li>\r\n\t<li><strong>C&acirc;y cầu đ&aacute; Charles </strong>nổi tiếng.</li>\r\n\t<li>Khu phố cổ với chiếc đồng hồ thi&ecirc;n văn học.</li>\r\n\t<li><strong>Tham quan chợ Sapa </strong>&ndash; khu chợ người Việt lớn nhất tại ch&acirc;u &Acirc;u &ndash; t&igrave;m hiểu đời sống của cộng đồng tại đ&acirc;y.</li>\r\n\t<li>Thưởng thức c&aacute;c m&oacute;n ăn Việt Nam nổi tiếng như: Phở, b&uacute;n ngan, b&uacute;n b&ograve; Huế&hellip;(chi ph&iacute; tự t&uacute;c)13:00&nbsp;&nbsp; Khởi h&agrave;nh đi Bratislava &ndash; thủ đ&ocirc; của Slovakia, tham quan:</li>\r\n\t<li><strong>L&acirc;u đ&agrave;i Bratislava.</strong></li>\r\n\t<li><strong>Khu phố cổ Bratislava</strong>.</li>\r\n\t<li>18:00: &nbsp;C&ocirc;ng ty mời cả đo&agrave;n d&ugrave;ng 1 bữa ăn truyền thống (b&ograve; beefsteak v&agrave; c&aacute;) của đất nước <strong>Slovakia.</strong></li>\r\n\t<li>20:00: Đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng nghỉ ngơi.​</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;05: BRATISLAVA - BUDAPEST</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: H&agrave;nh tr&igrave;nh từ Bratislava đến thủ đ&ocirc; <strong>Budapest, t</strong>h&agrave;nh phố được mệnh danh l&agrave; Paris của đ&ocirc;ng &Acirc;u.</li>\r\n\t<li><strong>Great Market Hall </strong>&ndash; khu chợ nổi tiếng tại Budapest &ndash; qu&yacute; kh&aacute;ch c&oacute; thể d&ugrave;ng bữa trưa tại đ&acirc;y với nhiều m&oacute;n ngon địa phương hấp dẫn.</li>\r\n\t<li><strong>Cầu lớn Elizabeth</strong> v&agrave; cầu X&iacute;ch với kiến tr&uacute;c độc đ&aacute;o bắc ngang d&ograve;ng s&ocirc;ng xanh Danube.</li>\r\n\t<li><strong>L&acirc;u đ&agrave;i Fisherman&#39;s v&agrave; Nh&agrave; thờ Matthias Church</strong>.</li>\r\n\t<li><strong>Castle Hill</strong> &ndash; nh&igrave;n to&agrave;n cảnh th&agrave;nh phố Budapest.</li>\r\n\t<li>Đặc biệt l&agrave; qu&yacute; kh&aacute;ch c&oacute; cơ hội l&ecirc;n đồi Gellert để chi&ecirc;m ngưỡng bức tranh th&agrave;nh phố Budapest m&agrave; nhiều du kh&aacute;ch cho l&agrave; cảnh tượng đẹp nhất thế giới.</li>\r\n\t<li><strong>Quảng trường Anh H&ugrave;ng.</strong></li>\r\n\t<li>18:00: C&ocirc;ng ty&nbsp;mời cả đo&agrave;n d&ugrave;ng 1 bữa ăn thuần Việt tại nh&agrave; h&agrave;ng Việt Nam.</li>\r\n\t<li>20:00: Đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y 06: BUDAPEST - VIENNA</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Xe đưa đo&agrave;n đến Vienna, thủ đ&ocirc; của nước &Aacute;o, tham quan:</li>\r\n\t<li><strong>Cung điện Sch&ouml;nbrunn</strong> của Đế qu&ocirc;c &Aacute;o-Hungary (chụp h&igrave;nh b&ecirc;n ngo&agrave;i).</li>\r\n\t<li><strong>Hofburg Palace </strong>&ndash; cung điện m&ugrave;a h&egrave; (tham quan b&ecirc;n ngo&agrave;i).</li>\r\n\t<li><strong>Nh&agrave; h&aacute;t lớn Opera Vienna.</strong></li>\r\n\t<li><strong>Nh&agrave; thờ kiến tr&uacute;c Baroque St.</strong> <strong>Charles borromeo.</strong></li>\r\n\t<li><strong>Nh&agrave; thờ lớn St. Stephan.</strong></li>\r\n\t<li>Tự do tham quan, mua sắm, thưởng thức đặc sản địa phương tr&ecirc;n phố đi bộ.</li>\r\n\t<li>20:00: Đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;07: VIENNA - HALLSTATT - MUNICH</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Khởi h&agrave;nh đi&nbsp;<strong>Hallstatt.</strong></li>\r\n\t<li>Đến Hallstatt, đi bộ tham quan ng&ocirc;i l&agrave;ng được mệnh danh l&agrave; đẹp nhất thế giới với c&aacute;c điểm tham quan:</li>\r\n\t<li><strong>Hồ Hallstatt đẹp như tranh.</strong></li>\r\n\t<li><strong>D&atilde;y nh&agrave; tr&ecirc;n v&aacute;ch n&uacute;i tuyệt đẹp.</strong></li>\r\n\t<li><strong>Qu&atilde;ng trường trung t&acirc;m Hallstatt.</strong></li>\r\n\t<li>Mua sắm muối được lấy từ mỏ tr&ecirc;n n&uacute;i &ndash;&nbsp;đặc sản của Hallstatt.</li>\r\n\t<li>14:00: Sau đ&oacute;, tiếp tục h&agrave;nh tr&igrave;nh hướng tới Munich, Đức, tham quan:</li>\r\n\t<li><strong>Quảng trường trung t&acirc;m&nbsp;Marienplatz.</strong></li>\r\n\t<li><strong>Khu chợ nổi tiếng&nbsp;Viktualienmarkt,</strong> qu&yacute; kh&aacute;ch tha hồ mua sắm, thưởng thức bia v&agrave; x&uacute;c x&iacute;ch nổi tiếng của Đức, cũng như c&aacute;c loại hải sản v&agrave; tr&aacute;i c&acirc;y &ocirc;n đới như cherry, d&acirc;u t&acirc;y, việt quất&hellip;</li>\r\n\t<li>20:00: Đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;08: MUNICH - N&Uacute;I TUYẾT TITLIS - LUCERN - ZURICH</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: H&agrave;nh tr&igrave;nh đến&nbsp;<strong>Engelberg&nbsp;- Thụy Sĩ,</strong> qu&yacute; kh&aacute;ch c&oacute; cơ hội trải nghiệm cảm gi&aacute;c ngồi c&aacute;p treo kh&aacute;m ph&aacute; Đỉnh N&uacute;i tuyết vĩnh cửu mount Titlis trong 45p (chi ph&iacute; tự t&uacute;c).</li>\r\n\t<li>Từ đỉnh cao nhất, ngắm nh&igrave;n to&agrave;n cảnh thi&ecirc;n nhi&ecirc;n h&ugrave;ng vĩ, chắc chắn sẽ mang đến cho du kh&aacute;ch trải nghiệm c&oacute; một kh&ocirc;ng hai trong đời.</li>\r\n\t<li>15:30: Đo&agrave;n đến thị trấn nhỏ&nbsp;<strong>Lucerne&nbsp;</strong>với cảnh đẹp như tranh thuộc miền trung Thụy Sĩ:</li>\r\n\t<li>Đi bộ tham quan c&acirc;y <strong>cầu gỗ Chapel </strong>cỗ nhất ch&acirc;u &Acirc;u, hồ Lucern, v&agrave; Tượng sư tử đ&aacute; - biểu tượng của tinh thần dũng cảm v&agrave; trung th&agrave;nh của d&acirc;n tộc Thụy Sĩ.</li>\r\n\t<li>Đi dạo phố mua sắm&nbsp;Socola v&agrave; đồng hồ nổi tiếng của Thụy Sĩ.</li>\r\n\t<li>20:00: Đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng nghỉ ngơi tại Zurich (c&aacute;ch Lucern 45 ph&uacute;t).</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;09: ZURICH - RHEIN FALLS - TITISEE - FRANKFURT</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>08:00: Tham quan&nbsp;<strong>Zurich,</strong> th&agrave;nh phố lớn nhất v&agrave; l&agrave; trung t&acirc;m t&agrave;i ch&iacute;nh của Thụy Sĩ:</li>\r\n\t<li><strong>Bahnhofstrasse&nbsp;</strong>&ndash; khu trung t&acirc;m downtown của Zurich.</li>\r\n\t<li><strong>Trụ sở FIFA </strong>&ndash; li&ecirc;n đo&agrave;n b&oacute;ng đ&aacute; thế giới.</li>\r\n\t<li><strong>Dolder Grand </strong>&ndash; kh&aacute;ch sạn đẹp nhất ch&acirc;u &Acirc;u.</li>\r\n\t<li>Tiếp tục h&agrave;nh tr&igrave;nh đến<strong>&nbsp;Schaffhausen:</strong></li>\r\n\t<li>Chi&ecirc;m ngưỡng vẻ đẹp kỳ vĩ của <strong>th&aacute;c Rhine Falls.</strong></li>\r\n\t<li>Thưởng thức x&uacute;c x&iacute;ch thơm ngon nổi tiếng tại đ&acirc;y.</li>\r\n\t<li>Tr&ecirc;n đường về Frankfurt, xe dừng lại tại thị trấn Titisee với cảnh đẹp n&ecirc;n thơ, qu&yacute; kh&aacute;ch c&oacute; cơ hội mua sắm đồng hồ c&uacute;c cu nổi tiếng tại đ&acirc;y.</li>\r\n\t<li>19:30: Về đến Frankfurt, nhận ph&ograve;ng kh&aacute;ch sạn.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;10: FRANKFURT &ndash; TP. HỒ CH&Iacute; MINH</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>09:00:Trả ph&ograve;ng, xe đ&oacute;n đo&agrave;n đi tham quan&nbsp;Frankfurt:</li>\r\n\t<li><strong>Quảng trường&nbsp;Romerberg</strong>&ndash;&nbsp; với d&atilde;y phố kiến tr&uacute;c v&ocirc; c&ugrave;ng độc đ&aacute;o.</li>\r\n\t<li><strong>My Zeil shopping street</strong>&nbsp;&ndash; phố mua sắm nhộn nhịp nhất Frankfurt.</li>\r\n\t<li>Qu&yacute; kh&aacute;ch c&oacute; đủ thời gian để mua sắm từ c&aacute;c thương hiệu thời trang nổi tiếng đến gi&aacute; rẻ, hoặc v&agrave;o si&ecirc;u thị mua qu&agrave; mỹ phẩm, tr&aacute;i c&acirc;y tươi..về cho gia đ&igrave;nh v&agrave; bạn b&egrave;.</li>\r\n\t<li>16:00: Xe đ&oacute;n đo&agrave;n ra s&acirc;n bay, tiếp tục mua sắm v&agrave; l&agrave;m thủ tục ho&agrave;n thuế tại s&acirc;n bay Frankfurt.</li>\r\n\t<li>17:00: L&agrave;m thủ tục xuất cảnh.</li>\r\n\t<li>20:30: M&aacute;y bay cất c&aacute;nh tr&ecirc;n chuyến bay&nbsp;EK 48&nbsp;&nbsp;12DEC FRADXB &nbsp;2030 - 0555.</li>\r\n\t<li>Qu&aacute; cảnh 3,5 tiếng tại Dubai &ndash; mua sắm đặc sản ch&agrave; l&agrave; về cho gia đ&igrave;nh.</li>\r\n\t<li>Nối chuyến về Việt Nam -&nbsp;EK&nbsp;392 &nbsp;14DEC DXBSGN &nbsp;0940 - 1935.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;11: TP. HỒ CH&Iacute; MINH</strong></span></p>\r\n\r\n<ul>\r\n\t<li>19:35: M&aacute;y bay hạ c&aacute;nh tại s&acirc;n bay T&acirc;n Sơn Nhất - th&agrave;nh phố Hồ Ch&iacute; Minh.</li>\r\n\t<li>Chia tay, kết th&uacute;c chuyến đi v&agrave; hẹn gặp lại Qu&yacute; kh&aacute;ch lần sau.</li>\r\n</ul>\r\n",
  "giave": "<p><span style=\"color:#660099\"><strong>GI&Aacute; TOUR BAO GỒM:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>V&eacute; m&aacute;y bay Quốc tế khứ hồi TP.HCM//HN&ndash;PRAGUE&ndash;FRANKFURT&ndash;TP.HCM//HN.</li>\r\n\t<li>Visa ch&acirc;u &Acirc;u + visa Dubai.</li>\r\n\t<li>8 đ&ecirc;m Kh&aacute;ch sạn 3-4 sao (2 người/ ph&ograve;ng), sẽ bố tr&iacute; ph&ograve;ng 3 nếu đo&agrave;n lẻ nam hoặc nữ.</li>\r\n\t<li>Xe m&aacute;y lạnh, cao cấp vận chuyển theo chương tr&igrave;nh.</li>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li>2 bữa trưa, tối tại Dubai.</li>\r\n\t<li>Hướng dẫn vi&ecirc;n tiếng Việt theo đo&agrave;n suốt tuyến.</li>\r\n\t<li>Bảo hiểm du lịch quốc tế trị gi&aacute; 1 tỷ đồng.</li>\r\n\t<li>Nước uống, 1 chai/ ng&agrave;y/ người.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>GI&Aacute; TOUR KH&Ocirc;NG BAO GỒM:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Phụ ph&iacute; ph&ograve;ng đơn.</li>\r\n\t<li>Ăn trưa, tối.</li>\r\n\t<li>Tiền tips cho t&agrave;i xế 5 Euro/ Ng&agrave;y/ Người (55 euro).</li>\r\n\t<li>C&aacute;c chi ph&iacute; kh&aacute;c kh&ocirc;ng c&oacute; trong phần Bao gồm.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>GI&Aacute; V&Eacute; TRẺ EM: (t&iacute;nh theo ng&agrave;y/th&aacute;ng/năm sinh)</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Trẻ em từ 2 đến dưới 12 tuổi: 80% gi&aacute; tour người lớn. (Kh&ocirc;ng c&oacute; chế độ giường).</li>\r\n\t<li>Trẻ em từ 2 đến dưới 12 tuổi: 100% gi&aacute; tour người lớn. (C&oacute; chế độ giường).</li>\r\n\t<li>Trẻ em dưới 2 tuổi: 35% gi&aacute; tour trọn g&oacute;i người lớn.</li>\r\n\t<li>*** Lưu &yacute;: Trẻ em ngủ chung giường với bố mẹ. Mỗi gia đ&igrave;nh chỉ được k&egrave;m 1 trẻ em, trẻ em thứ 2 đ&oacute;ng 90% để c&oacute; ti&ecirc;u chuẩn giường ri&ecirc;ng.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>QUY TRÌNH ĐĂNG KÝ VÀ THỰC HI&Ecirc;̣N:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p>Qu&yacute; kh&aacute;ch vui lòng đem theo Passport (bản chính), và đ&oacute;ng&nbsp;<strong>cọc 20 triệu VNĐ</strong>&nbsp;khi đăng k&yacute; tour (trước ngày khởi hành &iacute;t nhất&nbsp;<strong>45 ng&agrave;y</strong>).</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Ho&agrave;n tất thanh to&aacute;n tiền tour c&ograve;n lại trước ng&agrave;y khởi h&agrave;nh:</p>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>15 ng&agrave;y</strong>&nbsp;l&agrave;m việc (đối với tour ng&agrave;y thường).</p>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>25 ng&agrave;y</strong>&nbsp;l&agrave;m việc (đối với tour ng&agrave;y lễ, tết)&nbsp;.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Khách hàng cung cấp h&ocirc;̀ sơ xin visa trước ngày khởi hành &iacute;t nhất&nbsp;<strong>05 tuần</strong>.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>C&ocirc;ng ty&nbsp;sẽ hướng d&acirc;̃n thủ tục xin visa, c&aacute;ch đi&ecirc;̀n các m&acirc;̃u đơn visa, đăng ký ngày nộp hồ sơ, kh&aacute;ch h&agrave;ng phải c&oacute; mặt để nộp hồ sơ v&agrave; mang theo hồ sơ bảng gốc để đối chiếu.</p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>GHI CH&Uacute;:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Trường hợp đo&agrave;n kh&ocirc;ng đủ 10 kh&aacute;ch khởi h&agrave;nh (10 kh&aacute;ch đi v&agrave; về theo h&agrave;nh tr&igrave;nh tour), c&ocirc;ng ty c&oacute; quyền thay đổi, dời tour sang ng&agrave;y khởi h&agrave;nh gần nhất. Nếu kh&aacute;ch h&agrave;ng kh&ocirc;ng sắp xếp được c&ocirc;ng việc để tham gia tour kế tiếp, ch&uacute;ng t&ocirc;i sẽ ho&agrave;n trả lại tiền cọc tour/tiền tour sau khi đ&atilde; trừ đi lệ ph&iacute; xin visa của c&aacute;c kh&aacute;ch m&agrave; kh&ocirc;ng chịu th&ecirc;m bất kỳ chi ph&iacute; v&agrave; tr&aacute;ch nhiệm n&agrave;o.</li>\r\n\t<li>Đối với những kh&aacute;ch h&agrave;ng chỉ mua Land tour (tức dịch vụ mặt đặt tại nước muốn đến), c&ocirc;ng ty sẽ kh&ocirc;ng khuyến kh&iacute;ch kh&aacute;ch h&agrave;ng tự mua/xuất v&eacute; m&aacute;y bay khi chưa c&oacute; sự x&aacute;c nhận tour chắc chắn khởi h&agrave;nh từ c&ocirc;ng ty. Ch&uacute;ng t&ocirc;i kh&ocirc;ng chịu tr&aacute;ch nhiệm về chi ph&iacute; chuyến đi: kh&aacute;ch sạn mua th&ecirc;m, v&eacute; m&aacute;y bay, visa... của kh&aacute;ch h&agrave;ng nếu tour kh&ocirc;ng khởi h&agrave;nh.</li>\r\n\t<li>Đại Sứ Qu&aacute;n &amp; Tổng L&atilde;nh Sự Qu&aacute;n khối Schengen y&ecirc;u cầu c&aacute;c đương đơn xin visa du lịch theo đo&agrave;n phải tr&igrave;nh diện lại hộ chiếu bản gốc sau khi kết th&uacute;c tour. V&igrave; vậy kh&aacute;ch h&agrave;ng vui l&ograve;ng gửi lại Hộ chiếu gốc cho Hướng Dẫn Vi&ecirc;n &ndash; Trưởng đo&agrave;n ng&agrave;y về để tr&igrave;nh diện cho ĐSQ/LSQ (cấp visa). Ch&uacute;ng t&ocirc;i sẽ ho&agrave;n trả lại hộ chiếu gốc sau khi đ&atilde; tr&igrave;nh diện xong (khoảng 03 ng&agrave;y l&agrave;m việc).</li>\r\n\t<li>Qu&yacute; kh&aacute;ch mang quốc tịch nước ngo&agrave;i hoặc l&agrave; việt kiều phải c&oacute; visa rời mang theo l&uacute;c đi tour.</li>\r\n\t<li>Qu&yacute; kh&aacute;ch mang quốc tịch nước ngo&agrave;i c&oacute; visa t&aacute;i nhập Việt Nam 01 lần, phải l&agrave;m visa t&aacute;i nhập VN để nhập cảnh v&agrave;o VN lần tiếp theo.</li>\r\n\t<li>Qu&yacute; kh&aacute;ch mang 2 Quốc tịch hoặc Travel document (chưa nhập quốc tịch) vui l&ograve;ng th&ocirc;ng b&aacute;o với nh&acirc;n vi&ecirc;n b&aacute;n tour ngay thời điểm đăng k&yacute; tour v&agrave; nộp bản gốc k&egrave;m c&aacute;c giấy tờ c&oacute; li&ecirc;n quan (nếu c&oacute;).</li>\r\n\t<li><strong>Qu&yacute; kh&aacute;ch chỉ mang thẻ xanh (thẻ tạm tr&uacute; tại nước ngo&agrave;i) v&agrave; kh&ocirc;ng c&ograve;n hộ chiếu VN c&ograve;n hiệu lực th&igrave; kh&ocirc;ng du lịch sang nước thứ ba được.</strong></li>\r\n\t<li>Trường hợp trẻ em đi với người nh&agrave; (kh&ocirc;ng phải Bố Mẹ) phải nộp k&egrave;m giấy ủy quyến được ch&iacute;nh quyền địa phương x&aacute;c nhận (do Bố Mẹ ủy quyền dắt đi tour).</li>\r\n\t<li>Đối với kh&aacute;ch h&agrave;ng từ 75 tuổi &ndash; đến 79 tuổi: y&ecirc;u cầu k&yacute; cam kết sức khỏe với Cty &amp; giấy kh&aacute;m sức khỏe để đi du lịch nước ngo&agrave;i do b&aacute;c sĩ cấp. Cty khuyến kh&iacute;ch đ&oacute;ng th&ecirc;m ph&iacute; bảo hiểm cao cấp t&ugrave;y theo tour. Bất cứ sự cố n&agrave;o xảy ra tr&ecirc;n tour, c&ocirc;ng ty sẽ kh&ocirc;ng chịu tr&aacute;ch nhiệm.</li>\r\n\t<li>Kh&ocirc;ng nhận kh&aacute;ch h&agrave;ng từ 80 tuổi trở l&ecirc;n &amp; kh&aacute;ch h&agrave;ng mang thai từ th&aacute;ng thứ 5 trở l&ecirc;n. Kh&aacute;ch h&agrave;ng mai thai vui l&ograve;ng th&ocirc;ng b&aacute;o ngay khi đăng k&yacute; tour để được tư vấn.</li>\r\n\t<li>Ch&uacute;ng t&ocirc;i&nbsp;c&oacute; quyền thay đổi h&atilde;ng hang kh&ocirc;ng vận chuyển v&agrave;o giờ ch&oacute;t t&ugrave;y thuộc v&agrave;o c&aacute;c h&atilde;ng h&agrave;ng kh&ocirc;ng, thời tiết&hellip;</li>\r\n\t<li>Giờ bay c&oacute; thể thay đổi m&agrave; kh&ocirc;ng th&ocirc;ng b&aacute;o trước do phụ thuộc v&agrave;o h&atilde;ng h&agrave;ng kh&ocirc;ng.</li>\r\n\t<li>T&ugrave;y theo đi&ecirc;̀u ki&ecirc;̣n thực tế m&agrave; chương tr&igrave;nh tham quan c&oacute; thể thay đổi h&agrave;nh tr&igrave;nh l&ecirc;n xuống cho ph&ugrave; hợp tuy nhi&ecirc;n c&aacute;c tuyến điểm Du Lịch v&acirc;̃n đảm bảo đ&acirc;̀y đủ như l&uacute;c ban đầu. Tuy nhi&ecirc;n,&nbsp; c&ocirc;ng ty sẽ được miễn trừ tr&aacute;ch nhiệm bảo đảm c&aacute;c điểm tham quan trong trường hợp kh&aacute;ch quan như:\r\n\t<ul>\r\n\t\t<li>Xảy ra thi&ecirc;n tai: b&atilde;o lụt, hạn h&aacute;n, động đất..</li>\r\n\t\t<li>Sự cố về an ninh: biểu t&igrave;nh, khủng bố, đ&igrave;nh c&ocirc;ng.</li>\r\n\t\t<li>Sự cố về h&agrave;ng kh&ocirc;ng: dời, hủy, ho&atilde;n chuyến bay, trục trặc kỹ thuật bay, an ninh bay&hellip;</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Nếu những trường hợp tr&ecirc;n xảy ra, c&ocirc;ng ty sẽ xem x&eacute;t để ho&agrave;n chi ph&iacute; kh&ocirc;ng tham quan cho kh&aacute;ch trong điều kiện c&oacute; thể (sau khi đ&atilde; trừ lại c&aacute;c dịch vụ đ&atilde; thực hiện: ph&iacute; l&agrave;m visa, tiền v&eacute; m&aacute;y bay&hellip;.v&agrave; kh&ocirc;ng chịu tr&aacute;ch nhiệm bồi thường th&ecirc;m bất kỳ chi ph&iacute; n&agrave;o kh&aacute;c).</li>\r\n\t<li>Trường hợp Qu&yacute; kh&aacute;ch kh&ocirc;ng được xuất cảnh v&agrave; nhập cảnh vì lý do cá nh&acirc;n, ch&uacute;ng t&ocirc;i được miễn trừ tr&aacute;ch nhiệm v&agrave; kh&ocirc;ng ho&agrave;n trả tiền tour. Qu&yacute; kh&aacute;ch tự t&uacute;c chi ph&iacute; mua v&eacute; m&aacute;y bay quay về Việt Nam.</li>\r\n\t<li>T&ugrave;y theo t&igrave;nh h&igrave;nh cấp Visa của L&atilde;nh Sự Qu&aacute;n v&agrave; v&eacute; m&aacute;y bay, ng&agrave;y khởi h&agrave;nh c&oacute; thể dời lại từ 1 đến 7 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh ban đầu hoặc v&agrave;o đo&agrave;n khởi h&agrave;nh tiếp theo gần nhất.</li>\r\n\t<li>Hồ sơ xin visa sau khi nộp v&agrave;o L&atilde;nh Sự Qu&aacute;n sẽ kh&ocirc;ng được ho&agrave;n trả lại.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>ĐIỀU KIỆN HUỶ TOUR:</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Trong trường hợp kh&ocirc;ng thể tham dự được tour, qu&yacute; kh&aacute;ch vui l&ograve;ng mang Bi&ecirc;n bản đăng k&yacute; tour &amp; bi&ecirc;n lai đ&oacute;ng tiền đến văn ph&ograve;ng c&ocirc;ng ty để l&agrave;m thủ tục hủy/chuyển tour. Phải th&ocirc;ng b&aacute;o cho C&ocirc;ng ty bằng văn bản hoặc email (kh&ocirc;ng giải quyết c&aacute;c trường hợp li&ecirc;n hệ chuyển/hủy tour qua điện thoại) v&agrave; chịu ph&iacute; huỷ phạt như sau:</li>\r\n\t<li><span style=\"color:#660099\"><strong>ĐỐI VỚI TOUR NG&Agrave;Y THƯỜNG:</strong></span>\r\n\t<ul>\r\n\t\t<li>Huỷ ngay sau khi đăng k&yacute;: 30% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Hủy trước ng&agrave;y khởi h&agrave;nh 30 ng&agrave;y (từ ng&agrave;y 30 trở về trước): 50% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Hủy trước ng&agrave;y khởi h&agrave;nh 15 ng&agrave;y (từ ng&agrave;y 15 &ndash; ng&agrave;y thứ 30): 75% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Huỷ trong v&ograve;ng 15 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh (từ ng&agrave;y 15 &ndash; ng&agrave;y khởi h&agrave;nh): 100% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><span style=\"color:#660099\"><strong>ĐỐI VỚI TOUR NG&Agrave;Y LỄ, TẾT:&nbsp;&nbsp;</strong></span>(L&agrave; c&aacute;c tour c&oacute; thời gian diễn ra rơi v&agrave;o một trong c&aacute;c ng&agrave;y lễ, tết theo quy định của nước Việt Nam)\r\n\t<ul>\r\n\t\t<li>Huỷ ngay sau khi đăng k&yacute;: 30% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Hủy trước ng&agrave;y khởi h&agrave;nh 45 ng&agrave;y (từ ng&agrave;y 45 trở về trước): 50% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Hủy trước ng&agrave;y khởi h&agrave;nh 30 ng&agrave;y (từ ng&agrave;y 30 &ndash; ng&agrave;y thứ 45): 75% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t\t<li>Huỷ trong v&ograve;ng 30 ng&agrave;y so với ng&agrave;y khởi h&agrave;nh (từ ng&agrave;y 30 &ndash; ng&agrave;y khởi h&agrave;nh): 100% tổng gi&aacute; th&agrave;nh tour.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><span style=\"color:#660099\"><strong>*** Lưu &yacute;:</strong></span>&nbsp;B&ecirc;n cạnh việc kh&aacute;ch h&agrave;ng hủy tour sẽ dựa v&agrave;o c&aacute;c điều kiện hủy phạt như tr&ecirc;n. Đồng thời, đối với những kh&aacute;ch đ&atilde; c&oacute; visa Ch&acirc;u &Acirc;u xin visa theo đo&agrave;n của Cty C&Ocirc;NG TY ch&uacute;ng t&ocirc;i sẽ giữ hỗ chiếu cho đến khi thời hạn visa Ch&acirc;u &Acirc;u kết th&uacute;c, hết hiệu lực được ph&eacute;p nhập cảnh; Hoặc sẽ th&ocirc;ng b&aacute;o với LSQ/ĐSQ (nơi cấp visa) để đ&oacute;ng dấu mộc &ldquo;Cancel &ndash; hủy&rdquo; visa của kh&aacute;ch. V&igrave; ch&uacute;ng t&ocirc;i chịu tr&aacute;ch nhiệm trong việc nhập cảnh v&agrave; xuất cảnh Ch&acirc;u &Acirc;u của qu&yacute; kh&aacute;ch.</li>\r\n\t<li>*** Trường hợp CHUYỂN/DỜI TOUR: Qu&yacute; kh&aacute;ch phải chịu chi ph&iacute; hủy tour theo quy định &nbsp;như tr&ecirc;n. C&aacute;c trường chuyển tour sẽ xem x&eacute;t lại t&igrave;nh h&igrave;nh m&agrave; c&oacute; mức hỗ trợ kh&aacute;c nhau.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:center\"><span style=\"color:#660099\"><strong>K&Iacute;NH CH&Uacute;C QU&Yacute; KH&Aacute;CH C&Oacute; MỘT CHUYẾN ĐI TH&Uacute; VỊ!!!</strong></span></p>\r\n",
  "hinhanh": [
    {
      "filename": "dinh_nui_tuyet_titlis.jpg",
      "aliasname": "411ea216c907d5f2f0610f369655ccee_20170723020736.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "5950d6c12b063bc50f8b4567",
    "595345e42b063b82378b4568",
    "595737422b063b99358b4568",
    "595737552b063b99358b4569"
  ],
  "date_post": ISODate("2017-07-23T02:58:41.474Z"),
  "giagiamtour": NumberInt(0)
});
db.getCollection("tours").insert({
  "_id": ObjectId("597417892b063bc3638b4567"),
  "tieude": "NHẬT BẢN XINH ĐẸP - CUNG ĐƯỜNG VÀNG (06 NGÀY 05 ĐÊM, KHÔNG TÍNH NGÀY BAY)",
  "giatour": NumberInt(39900000),
  "giagiamtour": NumberInt(34900000),
  "ngaykhoihanh": [
    ISODate("2017-09-15T00:00:00.0Z")
  ],
  "ngayketthuc": [
    ISODate("2017-09-21T00:00:00.0Z")
  ],
  "mota": "Điểm nổi bật:\r\nTham quan Núi Phú sĩ, cố đô Kyoto.\r\nHái trái cây tại vườn, thưởng thức bò Kobe.\r\nTham quan và mua sắm tại thủ đô Tokyo.",
  "noidung": "<p style=\"text-align:justify\"><span style=\"color:#660099\"><strong>Đ&Ecirc;M KHỞI H&Agrave;NH&nbsp;(15/09)</strong></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\"><strong>19:30:&nbsp;</strong>Qu&yacute; kh&aacute;ch c&oacute; mặt tại s&acirc;n bay quốc tế T&acirc;n Sơn Nhất, trưởng đo&agrave;n hướng dẫn qu&yacute;&nbsp;kh&aacute;ch l&agrave;m thủ tục đ&oacute;n chuyến bay NH832 khởi h&agrave;nh l&uacute;c 22:15&nbsp;đi Nhật Bản.</li>\r\n\t<li style=\"text-align: justify;\">Qu&yacute;&nbsp;kh&aacute;ch nghỉ đ&ecirc;m tr&ecirc;n m&aacute;y bay.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 1&nbsp;(16/09): NARITA - TOKYO (-/T/C)</strong></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">Đến s&acirc;n bay quốc tế Narita, qu&yacute; kh&aacute;ch di chuyển đi&nbsp;<strong>Tokyo</strong>, tham quan:\r\n\r\n\t<ul>\r\n\t\t<li>Tham quan ch&ugrave;a cổ<strong>&nbsp;Asakusa Kannon&nbsp;</strong>v&agrave; phố mua sắm<strong>&nbsp;Nakamise.</strong></li>\r\n\t\t<li><strong>Tokyo Skytree:&nbsp;</strong>Th&aacute;p truyền h&igrave;nh cao nhất Nhật Bản&nbsp;<em>(chụp h&igrave;nh tại Asakusa)</em></li>\r\n\t\t<li><em>Chụp h&igrave;nh b&ecirc;n ngo&agrave;i</em>&nbsp;Ho&agrave;ng cung Nhật Bản&nbsp;<strong>Imperial Palace</strong>: L&agrave; nơi ở của Nhật Ho&agrave;ng. Khu&ocirc;n vi&ecirc;n Ho&agrave;ng cung rộng lớn như một c&ocirc;ng vi&ecirc;n, nằm trong khu Chiyoda của Tokyo</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li style=\"text-align: justify;\">Tham quan mua sắm tại<strong>&nbsp;trung t&acirc;m Shinjuku.</strong></li>\r\n\t<li style=\"text-align: justify;\">Ăn tối. Về nhận ph&ograve;ng kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 2&nbsp;(17/09): FUJI MOUNTAIN - OSHINO HAKKAI (S/T/C)</strong></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">Ăn s&aacute;ng tại kh&aacute;ch sạn. Di chuyển đến khu vực <strong>n&uacute;i Ph&uacute; Sĩ.</strong></li>\r\n\t<li style=\"text-align: justify;\"><strong>H&aacute;i tr&aacute;i c&acirc;y tại vườn:&nbsp;</strong>qu&yacute; kh&aacute;ch sẽ được tham quan v&agrave; tận tay h&aacute;i những loại tr&aacute;i c&acirc;y theo m&ugrave;a&nbsp;tươi ngon, hấp dẫn.</li>\r\n\t<li style=\"text-align: justify;\"><strong>N&uacute;i Ph&uacute; Sĩ:&nbsp;</strong>l&agrave; ngọn n&uacute;i cao nhất Nhật Bản so với mực nước biển l&agrave; 3776 m&eacute;t&nbsp; v&agrave; cũng l&agrave; biểu tượng nổi tiếng của quốc gia n&agrave;y. Đ&acirc;y cũng l&agrave; danh lam thắng cảnh, di t&iacute;ch lịch sử, v&agrave; đ&atilde; được c&ocirc;ng nhận l&agrave; Di sản Văn h&oacute;a Thế Giới. Xe sẽ đưa qu&yacute; kh&aacute;ch l&ecirc;n trạm thứ 5 với độ cao 2300m nếu thời tiết cho ph&eacute;p.</li>\r\n\t<li style=\"text-align: justify;\"><strong>Ng&ocirc;i l&agrave;ng Oshino Hakkai</strong>&nbsp;&ndash; nằm ngay dưới ch&acirc;n n&uacute;i Ph&uacute; Sĩ, đ&acirc;y l&agrave; điểm đến l&iacute; tưởng cho du kh&aacute;ch kh&aacute;m ph&aacute; nếp sống xưa cũ c&ograve;n vẹn nguy&ecirc;n của người Nhật.</li>\r\n\t<li style=\"text-align: justify;\">Ăn tối v&agrave; nhận ph&ograve;ng kh&aacute;ch sạn nghỉ ngơi, thưởng thức tắm nước n&oacute;ng onsen.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 3&nbsp;(18/09): KAWAGUCHIKO&nbsp;- HAKONE - NAGOYA (S/T/C)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">Ăn s&aacute;ng tại kh&aacute;ch sạn. Đo&agrave;n di chuyển tham quan:</li>\r\n\t<li style=\"text-align: justify;\"><strong>Thung lũng Owakudani:&nbsp;</strong>Từ thung lũng Owakudani đến lưng chừng n&uacute;i Soun, nh&igrave;n xuống dưới khoảng 130m l&agrave; một khung cảnh tuyệt t&aacute;c với những cuộn kh&oacute;i trắng d&agrave;y đặc m&agrave; ng&agrave;y xưa được gọi l&agrave; thung lũng địa ngục.</li>\r\n\t<li style=\"text-align: justify;\"><strong>Hồ Ashi</strong>&nbsp;&ndash; thưởng ngoạn phong cảnh n&uacute;i hồ đầy thơ mộng bằng du thuyền 30&rsquo;.</li>\r\n\t<li style=\"text-align: justify;\">Ăn trưa. Di chuyển đến khu vực Nagoya</li>\r\n\t<li style=\"text-align: justify;\">Tham quan&nbsp;<strong>Osu Kannon District</strong>.</li>\r\n\t<li style=\"text-align: justify;\">Đo&agrave;n ăn tối v&agrave; nhận ph&ograve;ng kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 4&nbsp; (19/09):&nbsp;KYOTO&nbsp;- OSAKA (S/T/C)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">Ăn s&aacute;ng tại kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch sẽ tham quan đền&nbsp;<strong>Fushimi Inari</strong>&nbsp;danh tiếng - tọa lạc tr&ecirc;n n&uacute;i Inari.</li>\r\n\t<li style=\"text-align: justify;\">Ăn trưa</li>\r\n\t<li style=\"text-align: justify;\"><strong>Trung t&acirc;m dệt Nishijinori,&nbsp;</strong>xem tr&igrave;nh diễn trang phục truyền thống kimono.</li>\r\n\t<li style=\"text-align: justify;\"><strong>Ch&ugrave;a V&agrave;ng Kinkakuji -&nbsp;</strong>V&atilde;n cảnh nổi tiếng nhất Kyoto v&agrave; được UNESCO c&ocirc;ng nhận l&agrave; di sản văn h&oacute;a thế giới. Tầng 2 v&agrave; 3 của ng&ocirc;i ch&ugrave;a được d&aacute;t v&agrave;ng nổi bật .</li>\r\n\t<li style=\"text-align: justify;\"><strong>Di chuyển về Osaka.</strong>&nbsp;</li>\r\n\t<li style=\"text-align: justify;\">Ăn tối, nhận ph&ograve;ng kh&aacute;ch sạn, nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 5&nbsp;(20/09): OSAKA - KOBE&nbsp;(S/T/C)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">Ăn s&aacute;ng tại kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch khởi h&agrave;nh tham quan:</li>\r\n\t<li style=\"text-align: justify;\"><strong>Bảo t&agrave;ng Nh&agrave; m&aacute;y rượu Sake Hakutsuru: &nbsp;</strong>nơi m&agrave; du kh&aacute;ch c&oacute; cơ hội hiểu th&ecirc;m về quy tr&igrave;nh chế biến v&agrave; nếm thử hương vị rượu sake truyền th&ocirc;ng Nhật Bản.</li>\r\n\t<li style=\"text-align: justify;\"><strong>Kobe Haborland.&nbsp;</strong>&nbsp;Qu&yacute; kh&aacute;ch tham quan, chụp h&igrave;nh v&agrave; mua sắm tại khu vực cảng Kobe.</li>\r\n\t<li style=\"text-align: justify;\"><strong>Ăn trưa với m&oacute;n b&ograve; Kobe</strong>&nbsp;trứ danh.</li>\r\n\t<li style=\"text-align: justify;\">Đo&agrave;n di chuyển đi&nbsp;<strong>Osaka,&nbsp;</strong>tham quan:</li>\r\n\t<li style=\"text-align: justify;\"><strong>L&acirc;u đ&agrave;i Osaka</strong>&nbsp;<em>(tham quan b&ecirc;n ngo&agrave;i)</em>&nbsp;- L&acirc;u đ&agrave;i Osaka được khởi c&ocirc;ng từ năm 1583 v&agrave; trải qua nhiều lần tr&ugrave;ng tu nhưng đ&acirc;y vẫn l&agrave; một trong những c&ocirc;ng tr&igrave;nh tuyệt đẹp kh&ocirc;ng thể bỏ lỡ khi đến với Osaka.</li>\r\n\t<li style=\"text-align: justify;\">Qu&yacute; kh&aacute;ch di chuyển đến s&acirc;n bay nội địa Itami, đ&oacute;n chuyến bay đi Tokyo. Đến s&acirc;n bay Haneda, di chuyển về kh&aacute;ch sạn ăn tối v&agrave; nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p style=\"text-align:justify\"><span style=\"text-align:justify\"><span style=\"color:#660099\"><strong>NG&Agrave;Y 6&nbsp;(21/09): NARITA - TP.HCM (S/-/-)</strong></span></span></p>\r\n\r\n<ul>\r\n\t<li style=\"text-align: justify;\">Ăn s&aacute;ng tại kh&aacute;ch sạn.</li>\r\n\t<li style=\"text-align: justify;\">Tham quan&nbsp;<strong>ch&ugrave;a Narita</strong>.&nbsp; Nhiều to&agrave; nh&agrave; rộng lớn c&oacute; thể nh́&igrave;n thấy trong khu&ocirc;n vi&ecirc;n ch&ugrave;a Naritasan, bao gồm to&agrave; ch&aacute;nh điện mới v&agrave; hội trường, một ng&ocirc;i ch&ugrave;a ba tầng v&agrave; một đền thờ gọi l&agrave; Đại Cổ Tự Ḥ&ograve;a b&igrave;nh. Ngo&agrave;i ra c̣&ograve;n c&oacute; một c&ocirc;ng vi&ecirc;n thanh tịnh được kết hợp cả hai truyền thống của Nhật Bản v&agrave; T&acirc;y Phương. Điểm th&iacute;ch th&uacute; của du kh&aacute;ch khi đến thăm viếng ng&ocirc;i Cổ Tự Naritasan l&agrave; phong cảnh h&ugrave;ng tr&aacute;ng v&agrave; y&ecirc;n tĩnh của ng&ocirc;i ch&ugrave;a</li>\r\n\t<li style=\"text-align: justify;\">Mua sắm tại Aeon Mall Narita,&nbsp;<strong>ăn trưa tự t&uacute;c</strong>.&nbsp;&nbsp;&nbsp;</li>\r\n\t<li style=\"text-align: justify;\">Đo&agrave;n khởi h&agrave;nh ra s&acirc;n bay quốc tế&nbsp;<strong>Narita</strong>, l&agrave;m thủ tục đ&aacute;p chuyến bay&nbsp;<strong>NH833&nbsp;l&uacute;c&nbsp;</strong><strong>18:55</strong>&nbsp;&nbsp;&nbsp;về Tp. Hồ Ch&iacute; Minh. Kết th&uacute;c chuyến tham quan, hẹn gặp lại.</li>\r\n</ul>\r\n",
  "hinhanh": [
    {
      "filename": "canh-dep-nui-phu-si-mua-thu-1.jpg",
      "aliasname": "3d89c2aceeeae52f84070cbbb7d9fc6d_20170723030705.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "595088f62b063b794d8b4567"
  ],
  "date_post": ISODate("2017-07-23T03:27:05.886Z")
});
db.getCollection("tours").insert({
  "_id": ObjectId("597427a72b063b55798b4567"),
  "tieude": "KỲ NGHỈ VUI TRÊN CUNG ĐƯỜNG VÀNG (05 NGÀY 04 ĐÊM, KHÔNG BAO GỒM NGÀY BAY)",
  "giatour": NumberInt(35900000),
  "giagiamtour": NumberInt(0),
  "ngaykhoihanh": [
    ISODate("2017-09-06T00:00:00.0Z")
  ],
  "ngayketthuc": [
    ISODate("2017-09-11T00:00:00.0Z")
  ],
  "mota": "Điểm nổi bật:\r\n- ĐĂNG KÝ SỚM TRƯỚC NGÀY 06/08 GIẢM 2.000.000 VNĐ/KHÁCH.\r\nNúi Phú sĩ.\r\nHái trái theo mùa.\r\nThưởng thức bò Kobe.\r\nMua sắm tại Gotemba outlet.",
  "noidung": "<p><span style=\"color:#660099\"><strong>Đ&Ecirc;M KHỞI H&Agrave;NH (06/9)</strong></span></p>\r\n\r\n<ul>\r\n\t<li>21:00 Qu&yacute; kh&aacute;ch c&oacute; mặt tại s&acirc;n bay quốc tế T&acirc;n Sơn Nhất, Trưởng đo&agrave;n hướng dẫn Qu&yacute; kh&aacute;ch l&agrave;m thủ tục đ&oacute;n chuyến bay&nbsp;<strong>VN320 (0030 0720)&nbsp;</strong>đi&nbsp;<strong>Kansai</strong>.</li>\r\n\t<li>Qu&yacute; kh&aacute;ch nghỉ đ&ecirc;m tr&ecirc;n m&aacute;y bay.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y&nbsp;1 (07/9): TP. HCM - KANSAI - KOBE - OSAKE (-T/C)</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Đo&agrave;n di chuyển đi&nbsp;<strong>Osaka,&nbsp;</strong>tham quan:Tại s&acirc;n bay quốc tế Kansai, qu&yacute; kh&aacute;ch di chuyển đi&nbsp;<strong>Kobe</strong>, tham quan:\r\n\r\n\t<ul>\r\n\t\t<li><strong>Bảo t&agrave;ng Nh&agrave; m&aacute;y rượu Sake Hakutsuru: &nbsp;</strong>nơi m&agrave; du kh&aacute;ch c&oacute; cơ hội hiểu th&ecirc;m về quy tr&igrave;nh chế biến v&agrave; nếm thử hương vị rượu sake truyền th&ocirc;ng Nhật Bản.</li>\r\n\t\t<li><strong>Tham quan khu phố Kitano cho:&nbsp;</strong>Kitano thuộc th&agrave;nh phố &nbsp;<strong>Kobe, </strong>c&oacute; nhiều t&ograve;a nh&agrave; mang d&aacute;ng dấp, phong c&aacute;ch phương T&acirc;y được x&acirc;y dựng từ sau thời đại Bakumatsu (cuối thời Mạc Phủ), Meiji, v&agrave;&nbsp;ng&agrave;y nay được ph&aacute;t triển th&agrave;nh khu du lịch.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><strong>Ăn trưa với m&oacute;n b&ograve; Kobe</strong>&nbsp;trứ danh.</li>\r\n\t<li><strong>L&acirc;u đ&agrave;i Osaka</strong>&nbsp;<em>(tham quan b&ecirc;n ngo&agrave;i)</em>&nbsp;- L&acirc;u đ&agrave;i Osaka được khởi c&ocirc;ng từ năm 1583 v&agrave; trải qua nhiều lần tr&ugrave;ng tu nhưng đ&acirc;y vẫn l&agrave; một trong những c&ocirc;ng tr&igrave;nh tuyệt đẹp kh&ocirc;ng thể bỏ lỡ khi đến với Osaka.</li>\r\n\t<li>Mua sắm thỏa th&iacute;ch tại trung t&acirc;m sầm uất<strong>&nbsp;Shinsaibashi.</strong></li>\r\n\t<li>Ăn tối. Về nhận ph&ograve;ng kh&aacute;ch sạn nghỉ ngơi tại khu vực Osaka.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y 2 (08/9): OSAKA - KYOTO - NAGOYA (S/T/C)</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Đo&agrave;n di chuyển đến Kyoto bằng t&agrave;u Shinkansen.Ăn s&aacute;ng tại kh&aacute;ch sạn. &nbsp;</li>\r\n\t<li>Tham quan đền&nbsp;<strong>Fushami Inari</strong>&nbsp;danh tiếng-tọa lạc tr&ecirc;n n&uacute;i Inari.</li>\r\n\t<li>Ăn trưa.</li>\r\n\t<li><strong>Ch&ugrave;a V&agrave;ng Kinkakuji -&nbsp;</strong>V&atilde;n cảnh nổi tiếng nhất Kyoto v&agrave; được UNESCO c&ocirc;ng nhận l&agrave; di sản văn h&oacute;a thế giới. Tầng 2 v&agrave; 3 của ng&ocirc;i ch&ugrave;a được d&aacute;t v&agrave;ng nổi bật .</li>\r\n\t<li><strong>Ch&ugrave;a Thanh thủy Kiyomizudera:&nbsp;</strong>nằm tr&ecirc;n sườn núi, nổi tiếng với ba d&ograve;ng nước thi&ecirc;ng trong vắt.</li>\r\n\t<li>Tr&ecirc;n đường đến thăm đền Kiyomizu, dọc hai b&ecirc;n đường c&oacute; nhiều cửa h&agrave;ng lưu niệm. Ng&ocirc;i đền l&agrave; di sản của thế giới. Khi đứng tr&ecirc;n sảnh lớn của ng&ocirc;i đền, c&oacute; thể bạn sẽ tự hỏi l&agrave;m thế n&agrave;o n&oacute; được x&acirc;y dựng bằng c&aacute;ch sử dụng những trụ cột 12m dựng tr&ecirc;n v&aacute;ch n&uacute;i m&agrave; kh&ocirc;ng sử dụng nền m&oacute;ng.</li>\r\n\t<li><strong>Đo&agrave;n di chuyển đến Nagoya</strong>.</li>\r\n\t<li>Ăn tối v&agrave; nhận ph&ograve;ng kh&aacute;ch sạn nghỉ ngơi.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y 3 (09/9): NAGOYA - KAWAGUCHIKO (S/T/C)</strong></span></p>\r\n\r\n<ul>\r\n\t<li><strong>Hồ Ashi</strong>&nbsp;&ndash; thưởng ngoạn phong cảnh n&uacute;i hồ đầy thơ mộng bằng du thuyền 10&rsquo;.Ăn s&aacute;ng tại kh&aacute;ch sạn. Đo&agrave;n di chuyển đến Kawaguchiko, an trưa.</li>\r\n\t<li>Tham quan mua sắm tại&nbsp;<strong>Gotemba Premium Outlets</strong>: l&agrave; khu mua sắm h&agrave;ng đầu của Nhật.</li>\r\n\t<li>Đo&agrave;n ăn tối v&agrave; nhận ph&ograve;ng kh&aacute;ch sạn nghỉ ngơi, trải nghiệm&nbsp;<strong>tắm nước n&oacute;ng onsen.</strong></li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y 4 (10/9): KAWAGUCHIKO - TOKYO (S/T/C)</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Ăn s&aacute;ng tại kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch sẽ tham quan:\r\n\t<ul>\r\n\t\t<li><strong>N</strong><strong>&uacute;i Ph&uacute; Sĩ:&nbsp;</strong>l&agrave; ngọn n&uacute;i cao nhất Nhật Bản so với mực nước biển l&agrave; 3776 m&eacute;t&nbsp; v&agrave; cũng l&agrave; biểu tượng nổi tiếng của quốc gia n&agrave;y. Đ&acirc;y cũng l&agrave; danh lam thắng cảnh, di t&iacute;ch lịch sử, v&agrave; đ&atilde; được c&ocirc;ng nhận l&agrave; Di sản Văn h&oacute;a Thế Giới. Xe sẽ đưa qu&yacute; kh&aacute;ch l&ecirc;n trạm thứ 5 với độ cao 2300m nếu thời tiết cho ph&eacute;p.Ăn s&aacute;ng tại kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch sẽ tham quan:</li>\r\n\t\t<li><strong>Ng&ocirc;i l&agrave;ng Oshino Hakkai</strong>&nbsp;&ndash; nằm ngay dưới ch&acirc;n n&uacute;i Ph&uacute; Sĩ, đ&acirc;y l&agrave; điểm đến l&iacute; tưởng cho du kh&aacute;ch kh&aacute;m ph&aacute; nếp sống xưa cũ c&ograve;n vẹn nguy&ecirc;n của người Nhật.</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>&nbsp;Ăn trưa.</li>\r\n\t<li>Trải nghiệm hoạt động&nbsp;<strong>thu hoạch v&agrave; thưởng thức tr&aacute;i c&acirc;y theo m&ugrave;a.</strong></li>\r\n\t<li>Khởi h&agrave;nh đi&nbsp;<strong>Tokyo.</strong></li>\r\n\t<li>Ăn tối v&agrave; check in tại kh&aacute;ch sạn.</li>\r\n</ul>\r\n\r\n<p><span style=\"color:#660099\"><strong>NG&Agrave;Y 05 (11/9): TOKYO - NARITA (S/T-)</strong></span></p>\r\n\r\n<ul>\r\n\t<li>Tham quan ch&ugrave;a cổ<strong>&nbsp;Asakusa Kannon&nbsp;</strong>v&agrave; phố mua sắm<strong>&nbsp;Nakamise.</strong>Ăn s&aacute;ng tại kh&aacute;ch sạn. Qu&yacute; kh&aacute;ch khởi h&agrave;nh tham quan:\r\n\r\n\t<ul>\r\n\t\t<li><strong>Tokyo Skytree:&nbsp;</strong>Th&aacute;p truyền h&igrave;nh cao nhất Nhật Bản&nbsp;<em>(chụp h&igrave;nh b&ecirc;n ngo&agrave;i)</em></li>\r\n\t\t<li><em>Chụp h&igrave;nh b&ecirc;n ngo&agrave;i</em>&nbsp;Ho&agrave;ng cung Nhật Bản&nbsp;<strong>Imperial Palace</strong>: L&agrave; nơi ở của Nhật Ho&agrave;ng. Khu&ocirc;n vi&ecirc;n Ho&agrave;ng cung rộng lớn như một c&ocirc;ng vi&ecirc;n, nằm trong khu Chiyoda của Tokyo</li>\r\n\t\t<li>Tham quan mua sắm tại<strong>&nbsp;trung t&acirc;m Shinjuku.</strong></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Đo&agrave;n khởi h&agrave;nh ra s&acirc;n bay quốc tế&nbsp;<strong>Narita</strong>, l&agrave;m thủ tục đ&aacute;p chuyến bay VN303 l&uacute;c 19h00 về&nbsp;<strong>TP. Hồ&nbsp;Ch&iacute; Minh</strong>.</li>\r\n\t<li>Kết th&uacute;c chuyến tham quan, hẹn gặp lại.</li>\r\n</ul>\r\n",
  "hinhanh": [
    {
      "filename": "đền nagoya.jpg",
      "aliasname": "a25603d7577ccf686751b759ae57fb4a_20170723040724.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "id_danhmuctour": [
    "594f53be2b063b32148b456a"
  ],
  "id_danhmucdiemden": [
    "595088f62b063b794d8b4567"
  ],
  "date_post": ISODate("2017-07-27T15:53:13.173Z"),
  "giave": "<p>Vui l&ograve;ng li&ecirc;n hệ để biết th&ecirc;m chi tiết.</p>\r\n",
  "stick": NumberInt(0)
});

/** tuvanvisa records **/
db.getCollection("tuvanvisa").insert({
  "_id": ObjectId("596e128b2b063bf61e8b4567"),
  "tieude": "Tất tần tật kinh nghiệm xin visa du lịch Hàn Quốc",
  "mota": "Visa du lịch Hàn Quốc chia thành nhiều loại khác nhau với những quy định riêng. Việc xin visa du lịch Hàn Quốc không quá khó nếu như bạn chuẩn bị đầy đủ hồ sơ giấy tờ lãnh sự quán yêu cầu. ",
  "noidung": "<h2><a href=\"https://cdn3.ivivu.com/2015/03/visa-du-lich-han-quoc-ivivu.com_.jpg\"><img alt=\"Hàn Quốc là một điểm đến du lịch yêu thích của du khách Việt.\" src=\"https://cdn3.ivivu.com/2015/03/visa-du-lich-han-quoc-ivivu.com_.jpg\" style=\"height:617px; width:915px\" title=\"Hàn Quốc là một điểm đến du lịch yêu thích của du khách Việt.\" /></a></h2>\r\n\r\n<p>H&agrave;n Quốc l&agrave; một điểm đến du lịch y&ecirc;u th&iacute;ch của du kh&aacute;ch Việt. Ảnh: Changwoncity.wordpress.com</p>\r\n\r\n<h4>ĐI Đ&Acirc;U ĐỂ XIN VISA DU LỊCH H&Agrave;N QUỐC?</h4>\r\n\r\n<p>Trước hết, bạn n&ecirc;n tới Ph&ograve;ng L&atilde;nh sự &ndash;&nbsp;<strong>Đại sứ qu&aacute;n H&agrave;n Quốc tại H&agrave; Nội tại tầng 7, t&ograve;a nh&agrave; Charmvit 117 Trần Duy Hưng</strong>&nbsp;hoặc&nbsp;<strong>Tổng l&atilde;nh sự qu&aacute;n H&agrave;n Quốc tại TP HCM ở 107 đường Nguyễn Du, quận 1</strong>&nbsp;để nghe những hướng dẫn cụ thể về việc xin visa nhập cảnh v&agrave;o H&agrave;n v&agrave; lấy mẫu đơn xin visa (Application Form).</p>\r\n\r\n<p>Đối với những người sinh từ Đ&agrave; Nẵng trở ra ph&iacute;a Bắc th&igrave; đăng k&yacute; tại Đại sứ qu&aacute;n H&agrave;n Quốc tại H&agrave; Nội. Nếu muốn nộp trong L&atilde;nh sự qu&aacute;n H&agrave;n Quốc tại TP HCM cần bổ sung th&ecirc;m: Hộ khẩu thường tr&uacute; trong khu vực từ Đ&agrave; Nẵng trở v&agrave;o c&aacute;c tỉnh ph&iacute;a Nam (dịch v&agrave; c&ocirc;ng chứng tư ph&aacute;p) v&agrave; hợp đồng lao động d&agrave;i hạn (đ&iacute;nh k&egrave;m bản dịch tiếng Anh c&ocirc;ng chứng tư ph&aacute;p).</p>\r\n\r\n<p>Đối với những người sinh ở những khu vực c&ograve;n lại th&igrave; nộp tại TP HCM, trường hợp muốn nộp hồ sơ xin visa tại H&agrave; Nội cũng phải bổ sung giấy tờ tương tự như tr&ecirc;n.</p>\r\n\r\n<h4>C&Aacute;C LOẠI GIẤY TỜ CẦN THIẾT</h4>\r\n\r\n<p><strong>1. Hộ chiếu:</strong>&nbsp;C&ograve;n hạn tr&ecirc;n 6 th&aacute;ng đối với trường hợp xin visa đi dưới 90 ng&agrave;y.</p>\r\n\r\n<p><strong>2. Đơn xin cấp visa</strong>&nbsp;(c&oacute; d&aacute;n 1 tấm h&igrave;nh 3,5 &times; 4,5cm, chụp trong 3 th&aacute;ng gần nhất), xin tại Đại sự qu&aacute;n H&agrave;n Quốc hoặc&nbsp;<a href=\"http://vnm-hochiminh.mofat.go.kr/worldlanguage/asia/vnm-hochiminh/main/index.jsp\" target=\"_blank\"><strong>dowload</strong>&nbsp;<strong>tại đ&acirc;y</strong></a>.</p>\r\n\r\n<p>Lưu &yacute;: Đơn chỉ khai bằng tiếng H&agrave;n hoặc tiếng Anh. Họ t&ecirc;n, ng&agrave;y th&aacute;ng năm sinh ghi trong đơn xin cấp Visa phải đ&uacute;ng với nội dung ghi trong hộ chiếu. Trong trường hợp trẻ em c&oacute; c&ugrave;ng hộ chiếu với bố mẹ th&igrave; d&aacute;n th&ecirc;m ảnh em b&eacute; l&ecirc;n mục 34 trong Đơn xin cấp visa.</p>\r\n\r\n<p><strong>3. Giấy tờ chứng minh nghề nghiệp</strong>, bản gốc v&agrave; bản dịch tiếng Anh hoặc tiếng H&agrave;n c&oacute; c&ocirc;ng chứng nh&agrave; nước:</p>\r\n\r\n<p>&ndash; Hợp đồng lao động hoặc giấy bổ nhiệm chức vụ</p>\r\n\r\n<p>&ndash; Nếu c&oacute; t&ecirc;n tr&ecirc;n giấy chứng nhận đăng k&yacute; kinh doanh th&igrave; c&oacute; thể chứng minh nghề nghiệp bằng giấy n&agrave;y.</p>\r\n\r\n<p><iframe height=\"150\" scrolling=\"no\" src=\"https://www.ivivu.com/hothotel/?placeslug=korea-republic-of&amp;number=1&amp;width=481&amp;wmode=transparent\" width=\"100%\"></iframe></p>\r\n\r\n<p>&ndash; Đơn xin nghỉ ph&eacute;p đi du lịch</p>\r\n\r\n<p><strong>4. Giấy tờ chứng minh năng lực t&agrave;i ch&iacute;nh</strong>&nbsp;(bản gốc v&agrave; bản dịch tiếng Anh hoặc tiếng H&agrave;n c&oacute; c&ocirc;ng chứng nh&agrave; nước):</p>\r\n\r\n<p>&ndash; Sổ tiết kiệm c&oacute; số tiền gửi &iacute;t nhất 5.000 USD hoặc 100.000.000 VND</p>\r\n\r\n<p>&ndash; C&aacute;c loại giấy tờ bổ sung (photo): Sổ đỏ &ndash; Nh&agrave; đất, chứng kho&aacute;n, &ocirc; t&ocirc;,&hellip;</p>\r\n\r\n<p>&ndash; Giấy x&aacute;c nhận mức lương 3 th&aacute;ng gần nhất (c&oacute; thể nhờ c&ocirc;ng ty x&aacute;c nhận hoặc d&ugrave;ng bản k&ecirc; giao dịch tại ng&acirc;n h&agrave;ng, hoặc bảng lương c&oacute; dấu của c&ocirc;ng ty)</p>\r\n\r\n<p>&ndash; Giấy nộp thuế thu nhập c&aacute; nh&acirc;n cấp 3 th&aacute;ng gần nhất</p>\r\n\r\n<p>&ndash; Giấy chứng nhận tham gia bảo hiểm x&atilde; hội cấp 3 th&aacute;ng gần nhất</p>\r\n\r\n<p>&ndash; Trong trường hợp bạn kh&ocirc;ng c&oacute; đủ khả năng t&agrave;i ch&iacute;nh, c&oacute; thể chứng minh năng lực t&agrave;i ch&iacute;nh của người th&acirc;n của bạn, k&egrave;m theo giấy tờ chứng minh quan hệ gia đ&igrave;nh c&oacute; x&aacute;c nhận của ch&iacute;nh quyền địa phương. Đối với độ tuổi vị th&agrave;nh ni&ecirc;n phải c&oacute; giấy đồng &yacute; của bố mẹ, giấy chứng nhận quan hệ gia đ&igrave;nh.</p>\r\n\r\n<p>- Nếu đ&atilde; về hưu: Quyết định nghỉ hưu hoặc sổ hưu tr&iacute;.</p>\r\n\r\n<p>Miễn giấy tờ chứng minh năng lực t&agrave;i ch&iacute;nh đối với c&aacute;c trường hợp sau: Người l&agrave;m ở cơ quan ch&iacute;nh phủ: bổ sung giấy x&aacute;c nhận nh&acirc;n vi&ecirc;n hoặc c&ocirc;ng nh&acirc;n vi&ecirc;n chức; Từng đi c&aacute;c nước trong khối OECD (trong 5 năm gần nhất) hoặc từng đi H&agrave;n Quốc tr&ecirc;n 2 lần. Cần bổ sung giấy tờ x&aacute;c nhận việc xuất nhập cảnh c&aacute;c nước (bản sao visa). Danh s&aacute;ch c&aacute;c nước thuộc&nbsp;<a href=\"http://www.mofahcm.gov.vn/vi/tintuc_sk/tulieu/nr060206163738/nr060207090236/ns060207090304/newsitem_print_preview\" target=\"_blank\"><strong>khối OECD</strong></a>.</p>\r\n\r\n<p><strong>5. Giấy tờ kh&aacute;c</strong></p>\r\n\r\n<p>&ndash; Chứng minh thư photo c&ocirc;ng chứng.</p>\r\n\r\n<p>&ndash; Lịch tr&igrave;nh tham quan k&egrave;m bản dịch tiếng Anh hoặc tiếng H&agrave;n (kh&ocirc;ng cần c&ocirc;ng chứng) trong đ&oacute; ghi địa chỉ của những nơi sẽ thăm quan.</p>\r\n\r\n<p>&ndash; Giấy x&aacute;c nhận đ&atilde;&nbsp;<a href=\"https://www.ivivu.com/?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\" target=\"_blank\"><strong>đặt ph&ograve;ng kh&aacute;ch sạn</strong></a>&nbsp;(trong trường hợp ở nh&agrave; người quen th&igrave; viết địa chỉ cư tr&uacute; v&agrave; số điện thoại li&ecirc;n lạc cụ thể trong lịch tr&igrave;nh tham quan)</p>\r\n\r\n<p><strong>6. Lệ ph&iacute;</strong></p>\r\n\r\n<p>&ndash; 30USD với hồ sơ nộp xin visa đi dưới 90 ng&agrave;y (visa du lịch thường l&agrave; dạng n&agrave;y)</p>\r\n\r\n<p>&ndash; 50USD với hồ sơ nộp xin visa đi một lần tr&ecirc;n 90 ng&agrave;y</p>\r\n\r\n<p>Chỉ thu lệ ph&iacute; bằng tiền Đ&ocirc;la Mỹ (USD). Những hồ sơ bị từ chối kh&ocirc;ng trả lại hồ sơ v&agrave; lệ ph&iacute; đ&atilde; nộp.</p>\r\n\r\n<h4>MỘT SỐ LƯU &Yacute; KHI PHỎNG VẤN XIN VISA</h4>\r\n\r\n<p>Xin visa&nbsp;<em>du lịch H&agrave;n Quốc</em>&nbsp;phần lớn kh&ocirc;ng cần phỏng vấn song vẫn c&oacute; một số trường hợp Đại sứ qu&aacute;n y&ecirc;u cầu. Khi đ&oacute;, bạn n&ecirc;n t&igrave;m hiểu kỹ c&aacute;c th&ocirc;ng tin tr&ecirc;n website của Đại sứ qu&aacute;n hoặc Bộ Ngoại Giao H&agrave;n Quốc để khi trả lời phỏng vấn cho tr&ocirc;i chảy.</p>\r\n\r\n<p>Bạn phải cho họ thấy rằng bạn c&oacute; một c&ocirc;ng việc, cuộc sống ổn định tại Việt Nam; bạn c&oacute; nhiều mối quan hệ r&agrave;ng buộc v&agrave; chắc chắn sau chuyến đi bạn buộc phải quay trở về v&agrave; khi lưu tr&uacute; tại H&agrave;n Quốc, bạn biết m&igrave;nh sẽ đi đ&acirc;u, l&agrave;m g&igrave;. Điều quan trọng l&agrave; khi đến phỏng vấn, bạn h&atilde;y cứ tỏ ra đ&agrave;ng ho&agrave;ng, tự tin v&agrave; thoải m&aacute;i với t&acirc;m l&yacute; kh&ocirc;ng xin được visa lần n&agrave;y th&igrave; xin lần sau, kh&ocirc;ng đi được H&agrave;n Quốc th&igrave; đi nước kh&aacute;c.</p>\r\n\r\n<h4>THỜI GIAN L&Agrave;M VIỆC CỦA BỘ PHẬN CẤP VISA</h4>\r\n\r\n<p>- Thời gian tiếp nhận hồ sơ: từ 9h đến 12h tất cả c&aacute;c ng&agrave;y trong tuần từ thứ hai đến thứ s&aacute;u (trừ những ng&agrave;y nghỉ lễ của sứ qu&aacute;n).</p>\r\n\r\n<p>- Thời gian trả kết quả: từ 14h đến 16h tất cả c&aacute;c ng&agrave;y trong tuần từ thứ hai đến thứ s&aacute;u (trừ những ng&agrave;y nghỉ lễ của sứ qu&aacute;n).</p>\r\n\r\n<p>- Thời gian nhận kết quả thường l&agrave; khoảng 8 ng&agrave;y l&agrave;m việc kể từ ng&agrave;y nộp đơn xin.</p>\r\n\r\n<p>- Khi đến nộp hồ sơ v&agrave; nhận visa, bạn h&atilde;y nhớ mang theo chứng minh thư gốc.</p>\r\n\r\n<h4>H&Agrave;N QUỐC ĐANG C&Oacute; CH&Iacute;NH S&Aacute;CH NỚI LỎNG VISA CHO DU KH&Aacute;CH VIỆT</h4>\r\n\r\n<p><a href=\"https://cdn3.ivivu.com/2015/03/chi-mat-3-ngay-de-xin-visa-di-han-quoc-1-ivivu1.jpg\"><img alt=\"Thủ tục xin visa du lịch Hàn Quốc ngày càng dễ dàng hơn với công dân Việt.\" src=\"https://cdn3.ivivu.com/2015/03/chi-mat-3-ngay-de-xin-visa-di-han-quoc-1-ivivu1.jpg\" style=\"height:408px; width:595px\" title=\"Thủ tục xin visa du lịch Hàn Quốc ngày càng dễ dàng hơn với công dân Việt.\" /></a></p>\r\n\r\n<p>Thủ tục xin visa du lịch H&agrave;n Quốc ng&agrave;y c&agrave;ng dễ d&agrave;ng hơn với c&ocirc;ng d&acirc;n Việt. Ảnh: ST</p>\r\n\r\n<p>Ch&iacute;nh s&aacute;ch thị thực mới được Tổng cục Du lịch H&agrave;n Quốc tại Việt Nam v&agrave; L&atilde;nh sự qu&aacute;n H&agrave;n Quốc tại TP.HCM giới thiệu v&agrave;o th&aacute;ng 7/2014.</p>\r\n\r\n<p>Theo đ&oacute;, H&agrave;n Quốc quyết định nới lỏng visa theo đo&agrave;n v&agrave; visa nhiều lần cho du kh&aacute;ch Việt.</p>\r\n\r\n<p>Với visa theo đo&agrave;n, chỉ cần 5 người du lịch bằng nguồn t&agrave;i trợ của doanh nghiệp thuộc 500 doanh nghiệp lớn của Việt Nam c&oacute; danh s&aacute;ch tr&ecirc;n trang web www.vnr500.com.vn, doanh nghiệp c&oacute; doanh thu tr&ecirc;n 5 triệu đ&ocirc; la Mỹ/năm v&agrave; đo&agrave;n thể du lịch tham quan học tập &ndash; &aacute;p dụng cho cấp trung học trở xuống l&agrave; được thực hiện visa loại n&agrave;y.</p>\r\n\r\n<p>Những du kh&aacute;ch tr&ecirc;n chỉ mất 3 ng&agrave;y để xin visa với lệ ph&iacute; chỉ 15 đ&ocirc; la Mỹ/người thay v&igrave; 20 đ&ocirc; la Mỹ v&agrave; 7 ng&agrave;y như th&ocirc;ng thường v&agrave; kh&ocirc;ng phải khai b&aacute;o nhập cảnh khi v&agrave;o H&agrave;n Quốc với điều kiện l&agrave; phải xin visa qua 14 c&ocirc;ng ty du lịch được l&atilde;nh sự qu&aacute;n chỉ định v&agrave; xuất nhập cảnh c&ugrave;ng chuyến bay.<br />\r\nVisa đi lại nhiều lần cũng được mở rộng cấp cho nhiều người từ hướng dẫn vi&ecirc;n du lịch, người đ&atilde; đến H&agrave;n Quốc tr&ecirc;n một lần, người c&oacute; thu nhập tr&ecirc;n 8.000 đ&ocirc; la Mỹ/năm&hellip;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Cập nhật&nbsp;mới:</strong>&nbsp;Theo Bộ Văn h&oacute;a, Thể thao v&agrave; Du lịch H&agrave;n Quốc, nước n&agrave;y sẽ miễn thị thực nhập cảnh trong v&ograve;ng 5 ng&agrave;y đối với c&aacute;c đo&agrave;n du lịch từ c&aacute;c nước Đ&ocirc;ng Nam &Aacute; đi đến đảo Jeju, trung chuyển tại s&acirc;n bay Incheon v&agrave; Gimhae của H&agrave;n Quốc bắt đầu từ th&aacute;ng 5/2017, qua đ&oacute; tạo cho họ cơ hội thăm thủ đ&ocirc; Seoul hay c&aacute;c th&agrave;nh phố kh&aacute;c của H&agrave;n Quốc.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h4>HIỆU LỰC CỦA VISA</h4>\r\n\r\n<p>3 th&aacute;ng kể từ ng&agrave;y cấp v&agrave; chỉ c&oacute; gi&aacute; trị xuất nhập cảnh một lần.</p>\r\n",
  "hinhanh": [
    {
      "filename": "brady-bellini-48081.jpg",
      "aliasname": "3c2ed31f818ebc5f015398fd52044cf9_20170718010710.jpg",
      "mota": "",
      "orders": "0"
    }
  ],
  "hienthi": NumberInt(1),
  "orders": NumberInt(0),
  "date_post": ISODate("2017-07-26T09:42:55.924Z")
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("593815efd893980011000029"),
  "username": "admin",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "roles": NumberInt(3),
  "hinhanh": ObjectId("59aa25e57247ae0c0f000033"),
  "logs": [
    {
      "in": ISODate("2017-06-07T15:04:20.0Z")
    },
    {
      "in": ISODate("2017-06-25T06:08:40.680Z")
    },
    {
      "in": ISODate("2017-06-25T14:41:46.572Z")
    },
    {
      "out": ISODate("2017-06-25T14:44:07.643Z")
    },
    {
      "in": ISODate("2017-06-26T04:04:41.766Z")
    },
    {
      "in": ISODate("2017-06-26T09:40:01.801Z")
    },
    {
      "in": ISODate("2017-06-26T15:47:36.634Z")
    },
    {
      "in": ISODate("2017-06-27T07:02:30.176Z")
    },
    {
      "in": ISODate("2017-06-28T04:00:34.186Z")
    },
    {
      "out": ISODate("2017-06-28T04:05:57.157Z")
    },
    {
      "in": ISODate("2017-06-28T04:44:57.633Z")
    },
    {
      "in": ISODate("2017-06-28T05:57:50.172Z")
    },
    {
      "out": ISODate("2017-06-28T07:22:50.895Z")
    },
    {
      "in": ISODate("2017-06-28T13:17:45.273Z")
    },
    {
      "out": ISODate("2017-06-28T15:18:36.731Z")
    },
    {
      "in": ISODate("2017-06-29T12:07:36.727Z")
    },
    {
      "out": ISODate("2017-06-29T14:37:18.451Z")
    },
    {
      "in": ISODate("2017-06-30T08:28:48.109Z")
    },
    {
      "out": ISODate("2017-06-30T08:32:57.802Z")
    },
    {
      "in": ISODate("2017-06-30T12:26:59.913Z")
    },
    {
      "in": ISODate("2017-07-01T05:00:06.737Z")
    },
    {
      "in": ISODate("2017-07-03T02:09:46.186Z")
    },
    {
      "out": ISODate("2017-07-03T02:10:32.961Z")
    },
    {
      "in": ISODate("2017-07-11T13:26:45.435Z")
    },
    {
      "in": ISODate("2017-07-18T09:10:10.668Z")
    },
    {
      "in": ISODate("2017-07-18T13:43:36.964Z")
    },
    {
      "in": ISODate("2017-07-21T04:18:55.912Z")
    },
    {
      "in": ISODate("2017-07-23T02:45:04.960Z")
    },
    {
      "in": ISODate("2017-07-25T07:18:43.834Z")
    },
    {
      "in": ISODate("2017-07-26T01:52:28.192Z")
    },
    {
      "in": ISODate("2017-07-26T09:38:52.606Z")
    },
    {
      "in": ISODate("2017-07-27T15:43:54.635Z")
    },
    {
      "in": ISODate("2017-07-27T18:08:49.571Z")
    },
    {
      "in": ISODate("2017-08-23T08:28:34.800Z")
    },
    {
      "out": ISODate("2017-08-23T08:44:32.844Z")
    },
    {
      "in": ISODate("2017-08-24T06:38:40.335Z")
    },
    {
      "in": ISODate("2017-09-02T03:09:16.0Z")
    }
  ],
  "hoten": "Phan Minh Trung",
  "namsinh": NumberInt(0),
  "sodienthoai": "123456789",
  "diachi": "TPHCM",
  "email": "trungminhphan@gmail.com"
});
