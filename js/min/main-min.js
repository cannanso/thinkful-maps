!function(){function t(){for(var t=$("#location-select"),a=0;a<s.data.length;a++)t.append('<option value="'+a+'">'+s.data[a].location.name+"</option>"),i.setVariables(s.data[a]);t[0].selectedIndex=0}function a(t,a){var e=new google.maps.Marker({map:o,position:a,title:"Click for images",index:t});e.addListener("click",function(){o.setZoom(10),o.setCenter(e.getPosition()),i.showImages(e.index)})}function e(){for(var t=$("#location-select").find("option:selected").text(),e=0;e<i.name.length;e++)i.name[e]===t&&(o.setCenter(i.latLong[e]),a(e,i.latLong[e]))}function n(){var a={lat:-34.397,lng:150.644};o=new google.maps.Map(document.getElementById("map-canvas"),{center:a,scrollwheel:!1,zoom:6}),t(),e()}var o,i={name:[],latLong:[],images:[],link:[],likes:[],comments:[],period:[],setVariables:function(t){this.name.push(t.location.name),this.latLong.push({lat:t.location.latitude,lng:t.location.longitude}),this.images.push(t.images.standard_resolution)},showImages:function(t){$("#map-canvas").animate({height:300}),$(".details").fadeIn("slow"),$(".image-wrapper img").attr({src:this.images[t].url,alt:this.name[t]})}},s={pagination:{next_url:"https://api.instagram.com/v1/users/336431628/media/recent?max_id=1076860697341162914_336431628&client_id=5f79be679d5a459ab4c98dfe864968d9",next_max_id:"1076860697341162914_336431628"},meta:{code:200},data:[{attribution:null,tags:[],location:{latitude:46.559166667,name:"Swiss Alps",longitude:8.561388889,id:251375084},comments:{},filter:"Normal",created_time:"1445359136",link:"https://instagram.com/p/9EQAr6mXZ1/",likes:{},images:{low_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/12107517_906875396073167_730637494_n.jpg",width:320,height:320},thumbnail:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e35/12107517_906875396073167_730637494_n.jpg",width:150,height:150},standard_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12107517_906875396073167_730637494_n.jpg",width:640,height:640}},users_in_photo:[],caption:{},type:"image",id:"1100074624883455605_336431628",user:{username:"googlemaps",profile_picture:"https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11875412_714080972057676_1731705035_a.jpg",id:"336431628",full_name:"Google Maps"}},{attribution:null,tags:["austria","googlemaps"],location:{latitude:48.3,name:"Linz, Austria",longitude:14.3,id:213122165},comments:{},filter:"Normal",created_time:"1445012921",link:"https://instagram.com/p/857qKtmXZ_/",likes:{},images:{low_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e35/12107559_123297081359554_960441800_n.jpg",width:320,height:320},thumbnail:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e35/12107559_123297081359554_960441800_n.jpg",width:150,height:150},standard_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12107559_123297081359554_960441800_n.jpg",width:640,height:640}},users_in_photo:[],caption:{},type:"image",id:"1097170366706054783_336431628",user:{username:"googlemaps",profile_picture:"https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11875412_714080972057676_1731705035_a.jpg",id:"336431628",full_name:"Google Maps"}},{attribution:null,tags:["googlemaps","barcelona"],location:{latitude:41.3833,name:"Barcelona, Spain",longitude:2.18333,id:213100244},comments:{},filter:"Normal",created_time:"1444933476",link:"https://instagram.com/p/83kIS5GXSG/",likes:{},images:{low_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/s320x320/e35/10723754_1515738058747178_1141339091_n.jpg",width:320,height:320},thumbnail:{url:"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/s150x150/e35/10723754_1515738058747178_1141339091_n.jpg",width:150,height:150},standard_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/10723754_1515738058747178_1141339091_n.jpg",width:640,height:640}},users_in_photo:[],caption:{},type:"image",id:"1096503934003541126_336431628",user:{username:"googlemaps",profile_picture:"https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11875412_714080972057676_1731705035_a.jpg",id:"336431628",full_name:"Google Maps"}}]};$(document).ready(function(){n(),$("#location-select").change(function(){$("#map-canvas").animate({height:500}),e()})})}();