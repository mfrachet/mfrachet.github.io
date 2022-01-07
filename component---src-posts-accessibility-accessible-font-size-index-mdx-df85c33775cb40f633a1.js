"use strict";(self.webpackChunkmarvin_frachet=self.webpackChunkmarvin_frachet||[]).push([[712],{5834:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return c}});var n=a(3366),s=(a(7294),a(4983)),o=a(4655),i=["components"],r={},l={_frontmatter:r},p=o.Z;function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)(p,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As front-end developers, our job is to provide a valid experience to people using our applications. Some of these users may not have excellent sight and will need to adjust the size of what they see on the screen to be able to read things correctly."),(0,s.kt)("p",null,"Using web browsers, these people have multiple ways to solve the text sizing problem including:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"zoom-in using the browser's built-in zoom functionality (",(0,s.kt)("code",{parentName:"li",className:"language-text"},"cmd + plus")," on OSX)"),(0,s.kt)("li",{parentName:"ul"},"defining a preferred font-size in their browser settings")),(0,s.kt)("p",null,"The built-in zoom functionality is a very nice feature: it reduces the viewport width and zoom-in the content directly. It can trigger responsive mechanisms such as media-queries. For instance, if you zoom enough on this website, you'll see the menu disappearing and a navbar appearing."),(0,s.kt)("p",null,"Concerning the preferred font-size set in the browser settings, there is a debate where some people argue that the zoom functionality is enough to provide a valid user experience. However, I personally think that if some users have defined a custom font-size in their preferences, I have to respect that and provide them with a valid experience."),(0,s.kt)("h2",null,"How to deal with users' preferred font-size?"),(0,s.kt)("p",null,"The answer to this problem is to adjust the content displayed on a website based on the users' preferred font-size. While this might sound obvious, it's not that obvious in practice."),(0,s.kt)("p",null,"To create UIs on the web, we use the CSS language. In this language, ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"},"multiple units can be applied to properties"),". The CSS language itself doesn't take part in any of these and leaves the developers to choose what is the most convenient for them."),(0,s.kt)("p",null,"For me, the easiest to represent as a concept is the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"px")," one: it's an absolute tangible unit representing a concrete shape on the screen. The problem with ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"px")," is that it's an absolute tangible unit representing a concrete shape on the screen."),(0,s.kt)("p",null,"Let's illustrate that. The following is a Codesandbox with a paragraph of ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"font-size: 10px"),":"),(0,s.kt)("iframe",{src:"https://codesandbox.io/embed/laughing-shape-sm2xi?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"laughing-shape-sm2xi",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.kt)("p",null,"Now, I'm going to change my preferred ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"font-size")," in ",(0,s.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox")," following these steps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open the Firefox preferences (",(0,s.kt)("code",{parentName:"li",className:"language-text"},"cmd + ,")," on OSX)"),(0,s.kt)("li",{parentName:"ul"},'In the "General" section, go to the "Language and Appearance" sub-section'),(0,s.kt)("li",{parentName:"ul"},'Change the value of the "Size" dropdown')),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/a3a98b4ddceff76c9458d3550f91dc78/133ae/ffscreen.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"92.02453987730061%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAACWElEQVQ4y41USXLbMBDUd+KYBEBw33eJkizJUpyqXHJK5f8/6FSPRZmOl+TQBRIAe7pn4UorC608KGWhtA+tLRzHg+OYN3BdD7zvegm+hh3cuMMXW+POZLLP71fapjDpCONnQuzqCHnRoK5alGWLqupQ1z2aZkCSFFDKg9Y+lAmhTQilieCFMElKDOMOno1Epeta5HGAoqiR5zWKokFZNkIeBMmzSjohgbizNzKuqzBMMfQbhEEitmyQomwmeF4IayMBnwne5SpEVLnATWGWVdjtDqjqHlVewo1GJOsf6OoGTTOibUex3LYDeHd2IYRX4iVWUZRKnhjZaCs5bMcDTsczjoILzucnDMNGLDOPS5Uz5vfVc8SXKivXg/VCRFEmFknCNY5zJHEuueW5/ojw701jAsRxIYQkyfNKnhmUuHM83GsfDiv7P4QswjTtJa/DMEl1s6yUc9/4KLVBpQ1yZeDOVb5+S3xIuNns8fj4DX2/EZVJ0eKY5/iVx/hZFfidWBwen/DwcJK0vFGoFpHu7/XN4u2cCrVFpTQqV6G1Fm03oml6EfGpZTYzyeYenBvYVczdFcq/BV2KeZdwuz1gmh6w3x+RpuWr5JsFPi3KMso8FYxO++/9KF79MP5VZTbyOG5lMgjONJXO801wn3vLgojlubEJmWUb4XA4S4Uvl+8Yxwl9v5Zqn04XmRzmeJ6aJaEonIvAfuMFNvZ6nCR/JCZ2u6O0x35/uvbls2oG5XjOjS+EzBeHv+vWiMIUjgqQlQP6bpTGpnVa8/1Y8jqPIZVxjytFzDn8A1TxUDTgrHcCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Firefox settings at the user preferred font-size position",title:"Firefox settings at the user preferred font-size position",src:"/static/a3a98b4ddceff76c9458d3550f91dc78/a6d36/ffscreen.png",srcSet:["/static/a3a98b4ddceff76c9458d3550f91dc78/222b7/ffscreen.png 163w","/static/a3a98b4ddceff76c9458d3550f91dc78/ff46a/ffscreen.png 325w","/static/a3a98b4ddceff76c9458d3550f91dc78/a6d36/ffscreen.png 650w","/static/a3a98b4ddceff76c9458d3550f91dc78/e548f/ffscreen.png 975w","/static/a3a98b4ddceff76c9458d3550f91dc78/3c492/ffscreen.png 1300w","/static/a3a98b4ddceff76c9458d3550f91dc78/133ae/ffscreen.png 1424w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,s.kt)("p",null,"With my new preferred font-size set, I'm going to check back ",(0,s.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/laughing-shape-sm2xi?file=/src/index.js"},"the Codesandbox above"),". What I can see is that the paragraph has still a font-size of ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"10px")," and that the content has not been adjusted with my preferred font-size: it has not scaled."),(0,s.kt)("p",null,"Let's check the associated CSS rule:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"css"},(0,s.kt)("pre",{parentName:"div",className:"language-css"},(0,s.kt)("code",{parentName:"pre",className:"language-css"},(0,s.kt)("span",{parentName:"code",className:"token selector"},"p")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token property"},"font-size"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":")," 10px",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,s.kt)("p",null,"The ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"font-size: 10px")," declaration means that the font-size of the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"<p>")," element will ",(0,s.kt)("strong",{parentName:"p"},"always be 10 pixels no matter what happens"),"."),(0,s.kt)("h2",null,"What can we do instead?"),(0,s.kt)("p",null,'As mentioned earlier, it exists multiple CSS units and some of these are "relative units". In this post, I will deal with the ',(0,s.kt)("code",{parentName:"p",className:"language-text"},"rem")," one. ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"1rem"),' corresponds to "1 time the font size of the root element".'),(0,s.kt)("p",null,"In this new Codesandbox, I've modified the paragraph to have a font-size of ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"1rem"),":"),(0,s.kt)("iframe",{src:"https://codesandbox.io/embed/nifty-murdock-0huf0?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"nifty-murdock-0huf0",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.kt)("p",null,"When modifying the preferred font-size of the browser, we can see that the text has been scaled. If I modify this setting again, the text on the screen will change accordingly."),(0,s.kt)("p",null,"Let's check the associated CSS stylesheet:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"css"},(0,s.kt)("pre",{parentName:"div",className:"language-css"},(0,s.kt)("code",{parentName:"pre",className:"language-css"},(0,s.kt)("span",{parentName:"code",className:"token selector"},"body")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token property"},"font-size"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":")," 100%",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n\n",(0,s.kt)("span",{parentName:"code",className:"token selector"},"p")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token property"},"font-size"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":")," 1rem",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,s.kt)("p",null,"The ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"font-size: 100%;")," declaration tells the browser to use the users' preferred font-size as a default. In modern browsers, the default font size is set to ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"16px"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"font-size: 1rem;")," declaration tells the browser that the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"<p>")," tag should be displayed using 1 time the size of the base font size (",(0,s.kt)("code",{parentName:"p",className:"language-text"},"16px")," in this case)"),(0,s.kt)("p",null,"As a result, the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"body")," font-size relates to the users' preferences and the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"rem")," unit relates to the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"body")," font-size: the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"rem")," unit scales based on the users' preferences."))}c.isMDXComponent=!0},4655:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),s=a(4983),o=a(5414),i=a(9429),r={};function l(e){var t=e.children,a=e.pageContext.frontmatter;return n.createElement(s.Zo,{components:r},n.createElement(i.L,null,n.createElement(o.q,null,n.createElement("html",{lang:"en"}),n.createElement("title",null,a.title),n.createElement("meta",{name:"description",content:a.excerpt}),n.createElement("meta",{property:"og:description",content:a.excerpt}),n.createElement("meta",{name:"keywords",content:"HTML, CSS, JavaScript, Accessibility, A11y, e2e, tests, testing, React, React Native"}),n.createElement("meta",{property:"og:title",content:a.title}),n.createElement("meta",{property:"og:image",content:a.metaImage}),n.createElement("meta",{name:"author",content:"Marvin Frachet"})),n.createElement("main",{"aria-labelledby":"title",className:"wrapper"},n.createElement("h1",{id:"title"},a.title),t)))}},3366:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}a.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-posts-accessibility-accessible-font-size-index-mdx-df85c33775cb40f633a1.js.map