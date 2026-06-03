const FEED_LIST = [
  {
    "name": "츄르비츠(20kcal/1봉)",
    "kcalPerGram": 1.6
  },
  {
    "name": "챠오츄르(7kcal/개)",
    "kcalPerGram": 0.5
  },
  {
    "name": "건사료(ANF)",
    "kcalPerGram": 3.5
  },
  {
    "name": "velixer RS/W",
    "kcalPerGram": 0.95
  },
  {
    "name": "velixer R/C",
    "kcalPerGram": 1.14
  },
  {
    "name": "velixer low fat",
    "kcalPerGram": 0.78
  },
  {
    "name": "velixer I/C",
    "kcalPerGram": 1.1
  },
  {
    "name": "(F)키튼 건사료",
    "kcalPerGram": 4.08
  },
  {
    "name": "(F)엔케어 플러스",
    "kcalPerGram": 0.76
  },
  {
    "name": "(F)w/d 캔",
    "kcalPerGram": 1.21
  },
  {
    "name": "(F)w/d 건사료",
    "kcalPerGram": 3.225
  },
  {
    "name": "(F)Urinary 건사료",
    "kcalPerGram": 3.87
  },
  {
    "name": "(F)Urinary s/o 파우치",
    "kcalPerGram": 0.91
  },
  {
    "name": "(F)Renal Liquid",
    "kcalPerGram": 1.0
  },
  {
    "name": "(F)Renal / Fish 파우치",
    "kcalPerGram": 0.95
  },
  {
    "name": "(F)Renal / chicken 파우치",
    "kcalPerGram": 1.17
  },
  {
    "name": "(F)P/a 캔",
    "kcalPerGram": 0.93
  },
  {
    "name": "(F)P/a 스틱",
    "kcalPerGram": 0.5
  },
  {
    "name": "(F)Mother&Baby 캣 건사료",
    "kcalPerGram": 4.43
  },
  {
    "name": "(F)Mather&Baby cat 캔",
    "kcalPerGram": 0.95
  },
  {
    "name": "(F)k/d 캔",
    "kcalPerGram": 1.01
  },
  {
    "name": "(F)intestinal 건사료",
    "kcalPerGram": 4.08
  },
  {
    "name": "(F)i/d 캔",
    "kcalPerGram": 1.07
  },
  {
    "name": "(F)Hepatic 건사료",
    "kcalPerGram": 4.12
  },
  {
    "name": "(F)GI/a 캔",
    "kcalPerGram": 0.9
  },
  {
    "name": "(F)GI/a 스틱",
    "kcalPerGram": 0.9
  },
  {
    "name": "(F)GI 파우치",
    "kcalPerGram": 0.955
  },
  {
    "name": "(F)A/a 캔",
    "kcalPerGram": 0.96
  },
  {
    "name": "(F)A/a 스틱",
    "kcalPerGram": 0.6
  },
  {
    "name": "(C/F)엔케어",
    "kcalPerGram": 1.0
  },
  {
    "name": "(C/F)벳큐어 V/A",
    "kcalPerGram": 0.786
  },
  {
    "name": "(C/F)벳큐어 intestinal",
    "kcalPerGram": 1.34
  },
  {
    "name": "(C/F)벳큐어 inte low",
    "kcalPerGram": 1.12
  },
  {
    "name": "(C/F)벳큐어 E/A",
    "kcalPerGram": 1.35
  },
  {
    "name": "(C/F)Recovery 캔",
    "kcalPerGram": 1.14
  },
  {
    "name": "(C/F)recovery Liquid",
    "kcalPerGram": 1.0
  },
  {
    "name": "(C/F)a/d 캔",
    "kcalPerGram": 1.17
  },
  {
    "name": "(C)하이포알러지 건사료",
    "kcalPerGram": 4.08
  },
  {
    "name": "(C)시그니처o/s",
    "kcalPerGram": 1.5
  },
  {
    "name": "(C)나샘(오리)",
    "kcalPerGram": 3.4
  },
  {
    "name": "(C)나샘(닭)",
    "kcalPerGram": 3.4
  },
  {
    "name": "(C)z/d 건사료",
    "kcalPerGram": 3.56
  },
  {
    "name": "(C)w/d 캔",
    "kcalPerGram": 0.89
  },
  {
    "name": "(C)w/d 건사료",
    "kcalPerGram": 3.1
  },
  {
    "name": "(C)Urinary 파우치",
    "kcalPerGram": 0.93
  },
  {
    "name": "(C)Urinary s/o 캔",
    "kcalPerGram": 0.96
  },
  {
    "name": "(C)STARTER 캔",
    "kcalPerGram": 3.3
  },
  {
    "name": "(C)Renal캔",
    "kcalPerGram": 1.58
  },
  {
    "name": "(C)Renal 건사료",
    "kcalPerGram": 3.98
  },
  {
    "name": "(C)Renal Liquid",
    "kcalPerGram": 1.5
  },
  {
    "name": "(C)R/R  캔",
    "kcalPerGram": 0.48
  },
  {
    "name": "(C)r/d캔",
    "kcalPerGram": 0.85
  },
  {
    "name": "(C)puppy 건사료",
    "kcalPerGram": 5.2
  },
  {
    "name": "(C)P/a 캔",
    "kcalPerGram": 0.9
  },
  {
    "name": "(C)P/a 스틱",
    "kcalPerGram": 0.5
  },
  {
    "name": "(C)k/d 캔",
    "kcalPerGram": 0.97
  },
  {
    "name": "(C)k/d 건",
    "kcalPerGram": 4.0
  },
  {
    "name": "(C)Intestinal 캔",
    "kcalPerGram": 1.1
  },
  {
    "name": "(C)intestinal 건사료",
    "kcalPerGram": 4.12
  },
  {
    "name": "(C)Inte low fat 캔",
    "kcalPerGram": 0.94
  },
  {
    "name": "(C)inte low fat 건사료",
    "kcalPerGram": 3.46
  },
  {
    "name": "(C)i/d 캔",
    "kcalPerGram": 1.03
  },
  {
    "name": "(C)i/d 건사료",
    "kcalPerGram": 3.59
  },
  {
    "name": "(C)i/d low fat 캔",
    "kcalPerGram": 0.81
  },
  {
    "name": "(C)Hepatic 캔",
    "kcalPerGram": 1.41
  },
  {
    "name": "(C)Hepatic 건사료",
    "kcalPerGram": 3.9
  },
  {
    "name": "(C)GI/a 파우치",
    "kcalPerGram": 0.85
  },
  {
    "name": "(C)GI/a 스틱",
    "kcalPerGram": 0.9
  },
  {
    "name": "(C)GI LowFat Lquid",
    "kcalPerGram": 1.0
  },
  {
    "name": "(C)GI high Energy Liquid",
    "kcalPerGram": 1.5
  },
  {
    "name": "(C)Cadiac 캔",
    "kcalPerGram": 1.24
  },
  {
    "name": "(C)Cadiac 건사료",
    "kcalPerGram": 4.14
  },
  {
    "name": "(C)A/a 캔",
    "kcalPerGram": 0.93
  },
  {
    "name": "(C)A/a 스틱",
    "kcalPerGram": 0.6
  },
  {
    "name": "(C)스타터 건사료",
    "kcalPerGram": 2.65
  },
  {
    "name": "(C)하이포알러지 습식",
    "kcalPerGram": 0.33
  },
  {
    "name": "(F) K/D 건",
    "kcalPerGram": 4.83
  },
  {
    "name": "(F) i/d 건",
    "kcalPerGram": 3.9
  },
  {
    "name": "(F) inte BIOME",
    "kcalPerGram": 1.22
  },
  {
    "name": "(C)puppy 습",
    "kcalPerGram": 0.94
  },
  {
    "name": "(C)VOM GL/H LOWFAT",
    "kcalPerGram": 0.66
  },
  {
    "name": "(F) 인테+하이포(건)",
    "kcalPerGram": 4.03
  }
];
