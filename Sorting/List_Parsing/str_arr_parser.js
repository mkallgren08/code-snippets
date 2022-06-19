// given an array of strings that contain a domain and the number of visits to each domain, return a list 
// of all sub-domains and the total visits to them

// A subdomain is defined an address ending at the last character of the string and beginning either at the 
// start of the string or with a '.'. Example: '.com', 'yahoo.com', and 'mobile.yahoo.com' are all subdomains,
// but 'mobile.yahoo' is NOT

const count=[
  "900, google.com",
  "30, yahoo.com",
  "50, mobile.yahoo.com",
  "30, sports.mobile.yahoo.com",
  "42, en.wikipedia.org",
  "13, nl.wikipedia.org",
  "21, overflow.com",
  "22, stackoverflow.com",
  "24, gmail.google.com"
]

subDomainVisits = (list) => {
  const list2=[];
  list.forEach((i)=>{
    list2.push(i.split(","))
  });
  console.log("List 2")
  console.log(list2)
  let sub_doms=[];
  list2.forEach((i)=>{
    i=i[1].trim().split(".");
    console.log(i);
    let sub_dom="";
    for (let j=i.length-1;j>-1;j--){
      sub_dom=`.${i[j]}${sub_dom}`
      // if(j===0){
      //   sub_dum=sub_dom.substring(1);
      //   sub_dom=`#${sub_dom}`;
      // }
         
      sub_doms.indexOf(sub_dom)===-1?(sub_doms.push(sub_dom)):null
    }
    
  })
  console.log("Sub Domains")
  console.log(sub_doms)

  const res= new Map();

  sub_doms.forEach((i)=>{
    let key=i.substring(1)
    // let key=i.replace("#.","#")
    console.log(key)
    let count=0
    let regex=new RegExp(`(\\#|\\.)${key}`,"g")
    console.log(regex)
    list2.forEach((item)=>{
      const matchArr=item[1].match(regex);
      if(matchArr){
        console.log("mastchArr: "+matchArr)
      }
      // matchArr.length>0?count+=parseInt(item[0]):null
      item[1].indexOf(key)>-1?count+=parseInt(item[0]):null
    })
    console.log(key, count)
    res.set(key, count)
  })
  console.log(res)
  return res
};

subDomainVisits(count);