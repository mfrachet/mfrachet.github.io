"use strict";(self.webpackChunkmarvin_frachet=self.webpackChunkmarvin_frachet||[]).push([[61],{5441:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return l}});var n=t(3366),s=(t(7294),t(4983)),o=t(4655),i=["components"],p={},r={_frontmatter:p},c=o.Z;function l(e){var a=e.components,t=(0,n.Z)(e,i);return(0,s.kt)(c,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The JAMstack has been talked about in recent years like a way to create static websites that scales very well in many different ways.\nSince it becomes more and more mainstream, it made sense to people to think about how to apply older patterns that we like in this\nquite particular context."),(0,s.kt)("p",null,"In this post, I will share with you ",(0,s.kt)("strong",{parentName:"p"},"my vision")," of A/B testing with the JAMstack."),(0,s.kt)("h2",null,"But first, why do we use the JAMstack?"),(0,s.kt)("p",null,"According to ",(0,s.kt)("a",{parentName:"p",href:"https://jamstack.org/"},"jamstack.org"),", we use it because:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"it's about building ",(0,s.kt)("strong",{parentName:"li"},"simple static pages")," (HTML files)"),(0,s.kt)("li",{parentName:"ul"},"most of the job is made at build-time, no potential leak at runtime, it's more ",(0,s.kt)("strong",{parentName:"li"},"secured")),(0,s.kt)("li",{parentName:"ul"},"static pages are basically HTML files and thus ",(0,s.kt)("strong",{parentName:"li"},"load very fast")),(0,s.kt)("li",{parentName:"ul"},"we benefit from ",(0,s.kt)("strong",{parentName:"li"},"cheap hosting")," (putting files on a server and there we go)"),(0,s.kt)("li",{parentName:"ul"},"it's ",(0,s.kt)("strong",{parentName:"li"},"highly scalable"),", just put the files on another machine and scaling is done"),(0,s.kt)("li",{parentName:"ul"},"it already exists great tools to create amazing sites (",(0,s.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/"},"Gatsbyjs"),", ",(0,s.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Nextjs"),", ",(0,s.kt)("a",{parentName:"li",href:"https://www.11ty.dev/"},"11ty"),", ",(0,s.kt)("a",{parentName:"li",href:"https://jamstack.org/generators/"},"etc..."),")")),(0,s.kt)("h2",null,"Why do we use A/B testing?"),(0,s.kt)("p",null,"People use A/B testing to measure which variant of a website is more appreciated by their users. The idea is simply to provide different visual representations\nof some data and check which one attracts more people."),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"507px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/d14d0d3eef1c8849bccf93f62cfcbda9/3ebb1/ab-tests.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"90.18404907975462%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE8ElEQVQ4y01Ue2hTVxj/cpM0uUl6k9u8Y5q0TZukeSdNl6Q39+bm1aZp7r2J1ndBtzGhWF91ffmitviouqlzCk6dMEWGMFHrGOgE/5i2MGUwxjadGzIQQW0nuj8mm2TcNgUPXL5zz/nxO7/v+53zAVQGhpqlQqTKKkKkBpEQ1YuFcvXCnkiIQpVIsfALYqFMLUQkPI6Pi+QSvRTeGjUAIAMAJQBYAGARAOgq6xIAqBYKqqRCRIIAgAYAFBWcHQDqKnP+cHklgpZq3tnUFTzu58JnvYXQSRcXPuvmwp97M96JsMvcbasciOgwjyXl2WPvDBxzsuEzTV3BE41dwROOfPBTR9Z7wMarnVP4fmoqOlJ8mR5gnsYH2efUIDuTHOZeUP1dj7O0a3ewohQcJs41xM6Sg+xMYoB5Rgyyz8kB5hk9UnxFrkvfJTHUXMvj8NXxrxM7ul+TQ8VZYrj4ghpiZ6gR7i9qgHmSTbvHPQCA8kCnifMNMk+Tw9wsNcw+p4bZmdQQ+4zcxr0g17f/RGGo2QogABVp2+FZ5rvs5pq/8DKuU/7iOxe8hegVVz5yye2p7zVX6gZmNWFjIpeCS4hvfSuoKW93/Ja3GPvGx0WvBXMt5wNVIiVfT5Bp12iM9ducgaZ97mZ9n9lpVUDNRINPN2rzGhltLW8OhiDViAwAG7SK1JutUt3GWpFuq5X/JPpes9jQb0E0YgEY5wg9o6SLvNbdkbu7ts19roNYXBcK389sS03RmztGm3Mt8w6aIajCDTeoRPZxgaEf5PLJPzq7Ug9z+fSjfFf6TjKdNqMobyDIPXvjDuJKkc5O90Tc5zKxbkvQ+yp/MPx7dpTY72Ld8ymHIKxSaX9IpejXXJF4WWDaZhiGnmU48p/ikuiPmfY2nUTSyBMqfIcSTcRkiU5Pr461ns/HrCaVZaVN73nPZQrFDFg9fxcRAAEmlagK9obGJc5Ge8HZ6Fxrs9Uts+idy+q1LWub9C6ZEKmdJzyYaCQmS8nM9Kpo4AITZfxSy6NNGPn3dlX8QBYN8Fns5e0za7Si8TVE1cXtbZJ972YhQyquLhY5ymM1sZ/7sLhViTTNEXonKDtxtURnplfF/F+ykaIXrXu8pSb+ZpcmsT8tn6vhOgAE0Sp1+KktpHb6kzb12a0ZKOXwm0tRb3lcRz7owymHWtjAE1Z7JygHMVlKZaZWEcGLbKQzoKj7cxMe/3enJvVRuzzEG/chgADRKo3Ykd6k+vbhCH56cxpKHapby6Xu8m4t8XADTjrUwtoFQjsxWcouEOb9cp4w8WaXhj6ak/Mpy5bzCvWqRdjRXkp950gUP70lA/mU6vpS1Fce05L3+/C2sFE0T+j/mLYTV4uZ9O2V0cBFtpULyesfbcTp/3Zpksc65X6ekBKAUKCUmbAjvQn1d4cJ/OSmDHSm8K9Yib88po3/sl6VaDGK5t6yIng87aBudCfb7/VEQ5dL0WJI0fCkH0+WxzSJkwUFrxANAogQvcqIndiQ0dw7HsHP9GegM6m+zEkC5b26xK99OL2QssK+NVzn2RMnWj/LtjgO0MFCSGG42YO1fv+BKjJGy/g2JasBkCIWnVoxvqZNdX64tXpkRRqSRPWZDon9t401ses9WNSinL82mkr/MwGA4a1eqKlEXAAgrTQIA1SJcUE1qgGJ2FDB6CVCMIkR0PPz/wETLEEBTmVEzQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Visual representation of two different variants of an A/B tests",title:"Visual representation of two different variants of an A/B tests",src:"/static/d14d0d3eef1c8849bccf93f62cfcbda9/3ebb1/ab-tests.png",srcSet:["/static/d14d0d3eef1c8849bccf93f62cfcbda9/222b7/ab-tests.png 163w","/static/d14d0d3eef1c8849bccf93f62cfcbda9/ff46a/ab-tests.png 325w","/static/d14d0d3eef1c8849bccf93f62cfcbda9/3ebb1/ab-tests.png 507w"],sizes:"(max-width: 507px) 100vw, 507px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,s.kt)("p",null,"If the visitors of the variant A come more often than the visitors of the variant B, then we can assume that variant A is a more viable solution to represent the data on the page."),(0,s.kt)("h2",null,"How do we use A/B testing in non JAMstack applications?"),(0,s.kt)("p",null,"In applications that are not built on top of the JAMstack, the idea is quite straightforward."),(0,s.kt)("p",null,"When opening the application, it will make a request to a remote server to get the different available variants. Then, based on some conditions in the codebase, we are able to display the good variant to the good user."),(0,s.kt)("p",null,"The following is an example of a client-side A/B test written with ",(0,s.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"Reactjs"),":"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"jsx"},(0,s.kt)("pre",{parentName:"div",className:"language-jsx"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},(0,s.kt)("span",{parentName:"code",className:"token keyword"},"const")," ",(0,s.kt)("span",{parentName:"code",className:"token function-variable function"},"App")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=>")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"const")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{")," variant",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," isLoading ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token function"},"useABVariant"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n  ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"if")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"isLoading",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"return")," ",(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"p"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token plain-text"},"Preparing the application..."),(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"p"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n\n  ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"if")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"variant ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"===")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},'"A"'),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"return")," ",(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token plain-text"},"Here's the A variant!"),(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n\n  ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"return")," ",(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token plain-text"},"Here's the B variant!"),(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";")))),(0,s.kt)("p",null,"As we see in the snippet, the code is executed in the user's browser. Also notice ",(0,s.kt)("strong",{parentName:"p"},"the loading information while the request is pending")," before being able to display the variant content."),(0,s.kt)("p",null,"The following is a tiny sandbox allowing to switch on and off a feature flag to display a new variant of a homepage. When using services like ",(0,s.kt)("a",{parentName:"p",href:"https://launchdarkly.com/"},"LaunchDarkly"),", this is exactly the kind of actions you're provided with."),(0,s.kt)("h2",null,"Why A/B testing on the JAMstack is different?"),(0,s.kt)("p",null,"Remember one of the main arguments of building on top of the JAMstack is ",(0,s.kt)("strong",{parentName:"p"},"fast page loading")," (performance)."),(0,s.kt)("p",null,'When dealing with A/B tests the "standard way", ',(0,s.kt)("strong",{parentName:"p"},"we need to make an HTTP request to get the different variants"),". Making an HTTP request means that ",(0,s.kt)("strong",{parentName:"p"},"there is a delay")," between the moment we ask for the variants and the moment we get them back from the server."),(0,s.kt)("p",null,"The problem is that ",(0,s.kt)("strong",{parentName:"p"},"making the HTTP request is so critical")," that we can't show anything else than a loading information to the user before resolving the variants and being able to show them the good content."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"In a static environment, we are waiting for a dynamic information to display meaningful information.")),(0,s.kt)("p",null,'When A/B testing the "standard way", using runtime information will ',(0,s.kt)("strong",{parentName:"p"},"make the application performances worse by increasing the time for the displaying the first meaningful content"),'. Loading static pages should be "instant" but relying on an HTTP request and an intermediate loading state before displaying the content will take extra time and decrease the experience.'),(0,s.kt)("p",null,"In some scenarios, ",(0,s.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/lighthouse"},"Lighthouse")," performance score can drop by around ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"25")," points (up to you to determine if it's significant or not)."),(0,s.kt)("p",null,"Also note that some tools helping building applications using the JAMstack ",(0,s.kt)("strong",{parentName:"p"},"don't even run JavaScript at all"),", meaning that it's not possible to rely on HTTP requests to access remote data at runtime."),(0,s.kt)("h2",null,"How to make A/B testing in a JAMstack fashion?"),(0,s.kt)("p",null,"The JAMstack is about ",(0,s.kt)("strong",{parentName:"p"},"building static pages"),". Taking this notion to the extreme, we can imagine creating a dedicated set of static pages for different variants and host them in different places, like for example, different machines."),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/9a1136bf754c1c343818847a924e420e/0fcea/machine-ab.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.5521472392638%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAADT0lEQVQ4y1WTy28bVRTGvzvv94xnbKfYjjMepXLsUOJXbI8dJX5gmTwaVWpqiaYPiihBRrIaQqJQVRUCCVixYFG6AYlHU1WlK4REFkD/AnZQISQ2LEsRLKASLIxmPK7ClY7u1T3n/s53z70HAAQAHAAFQApAGAADgAcgBuYNAoANTAIwBSAZ+Jlg35vBqWIcETXLaGKCMySbs9Q0S1O8F0AFhzFOSkDxImeKAmvIPKsrEh8RKcIoT0QxtEgDMAFMBuoiAKIA1AA0VshThKWDBHEAVmDjM+OkYBJm1Vor3Sz36l/M9dy7uZOFD6tOtB1vZK6DoQRfIUVYrwSspabNldwHudPlT/Mb5c/netU7OSfaTngl4RhlBJx3Xo28vPj98l730eLO2sPmK92fukWnP3my9Ak4RvOBLC17tWYy8Q1rq/Njc2f9z+aVtd+aO+t/NMrT29PD4RCqEGd9meHwjDK/emG2emZrZqXwmn157mrKCWXCZ2f7oAnjAwmhPYWcKafk3jMD+4XivvNi/vXUpfz2dNo6ccyvCS2MgOK0qFbuddy5bzvV3UYr96C2Uz+XLCbvFs9DoXkfyBD/1TmDgfJrq154/Fyz9nClVX+03HH7dtIZ/vs7YgI/AqppS6sdrLvVw43aZrc081mtVmwkjiXeKuYg0HSgkPhAgVDyle5Sdm+5nb9RKWTutLKlU3bY+z6weGb0bWRH12u3V93CYc/d3YzM/twXn71U5JxbpwXoPGSMXoUHRXlFV9mPt8u4fa3y0ikr8ctAaQ9c4bgXYhuUD2TllK67B6v1wtdnalfPxbJ/7ZqNfkWyDzd16DwZAT2FFPGupEdu7Ve4L98tv3M2mfznDXPx2pKc+h9QTYf0hXvrC8X7z7vXL8ZOPN4LtQeuZH9zQYchEOkJkGN8oHWw71JfvVd5sxeb+ns/1Hq7LaeGw/uY1Ci/hqxka3r+/aVK9qPl8mBjIvNgS1s4nxOS313UoXBHgIR4VzZCNwcl6sb2/OVOdOqHLW1xUBVtLyQq+36/B3lW40xuQjIMhVaejtC6xhNR5cjRTuH8XiXgmeMxjaSeMiSOqLMR2rREokzIxGt2HygHUDow9kiz84EfwZ4UzOPY8ZqhiL8W/gMiSJPsNFH7iAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Visual representation of two machines hosting two different variants of an A/B test",title:"Visual representation of two machines hosting two different variants of an A/B test",src:"/static/9a1136bf754c1c343818847a924e420e/a6d36/machine-ab.png",srcSet:["/static/9a1136bf754c1c343818847a924e420e/222b7/machine-ab.png 163w","/static/9a1136bf754c1c343818847a924e420e/ff46a/machine-ab.png 325w","/static/9a1136bf754c1c343818847a924e420e/a6d36/machine-ab.png 650w","/static/9a1136bf754c1c343818847a924e420e/0fcea/machine-ab.png 851w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The machine 1")," owns all the statically generated HTML pages impacted by the variant A and ",(0,s.kt)("strong",{parentName:"p"},"the machine 2")," owns all of the statically generated HTML pages of the variant B."),(0,s.kt)("p",null,"Since pages are statically generated at build time, we can rely on environment variables to display the good variant content:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"jsx"},(0,s.kt)("pre",{parentName:"div",className:"language-jsx"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},(0,s.kt)("span",{parentName:"code",className:"token keyword"},"const")," ",(0,s.kt)("span",{parentName:"code",className:"token constant"},"AB_EXPERIMENT_VARIANT")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," process",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"env",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,s.kt)("span",{parentName:"code",className:"token constant"},"AB_EXPERIMENT_VARIANTS"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"const")," ",(0,s.kt)("span",{parentName:"code",className:"token function-variable function"},"App")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=>")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"if")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token constant"},"AB_EXPERIMENT_VARIANT")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"===")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},'"A"'),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"return")," ",(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token plain-text"},"Here's the A variant!"),(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n\n  ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"return")," ",(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token plain-text"},"Here's the B variant!"),(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},";")))),(0,s.kt)("p",null,"The next step is to rely on some kind of proxy to route the different users to one of the two variants and make sure they always see that variant."),(0,s.kt)("p",null,"Remember, ",(0,s.kt)("strong",{parentName:"p"},"we can't rely on runtime information to store the variant"),", like an authenticated user id for example. We need to rely on something else. Hopefully, ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"HTTP Cookies")," exist that allow for a client-server kind of data sharing. We can benefit from them to store the actual variant requested by the user and make sure that they will always get routed to that variant."),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/2c489a0b63ed1026677b36dfbac2cc3e/0fcea/cookie-ab.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"148.46625766871168%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAECklEQVRIx62US2wbVRSGz52ZOy/PjN+xY8dJE8d2nGRs1w1xEo+bxMFRW0d5OLTNgybpIqhEgKCQJgjBqqUCNawBIXWBkLKhkUpRVQnWrcQKqSsWwBIJiQ1QHuoC3fExHUCmSZUrHY089/qb//znnAvw+MUDQBAjBIewBABoAQAFodxhQCMAEAWANlR8KEtHtU+8/AAQAIBW9I7iuwiCCZ4jaAN5HJDBOjAaqbJnHPfYR8L4bMHgD1IY0fGbYPAOdU0VstRkDAkPegDAhfvcQSvd8C2MfhkAoAKA5viQim20r6U6wDEER9ErFm7cd+0XaGCaYSzIEYwovmtHlftWqGABCKqljhDRPwH93fci2HNqkwYPH7SpeSyI2CQD15NMitSkPbiDpNnoO+aR73/UCxi0WREoAGHt0FX3jijoleLwkTzqP6Jh5TsBiO7oTbtQlCOCKFG37NMSnCoFqSQYEs+JjbHSEMj8lAnheVHQFF2OCi6phSqiT+IIlf/OUBH9BBu2y3HnsV7zOjKwPSWEF1B5HJu+Df8Tc8w8cJmOc4HVsS+PPVf5yny+8nVmuXhrINk61TLRfxkETrZT5jmRpSOGPTljpXSnd718L7Nevtf/wuR9czC+wTqC0+SwDSRWcjvyUvm78pvVh4XXZ3+zNk58O252rEVO5j8Eyms2kPIqAwqJ1invhclvrK25h8XXZn61Nmd/LxV73krZs2r02dcXH4gmPbkztVx2oWaOp8/EV1KriU53p3+mawZ4wqv1inC2Qk0KqjOpZ+ILfc+mFtMLiXN9S6lM0GRpE4266kBPIeAb3jtZNG89PXT5eDV3v7hZqkUzbe+bp8HFizZQIMQGUgLa9+XSsT9OVawfq5OlX6ZOFd9IJmyF/bpeB/oGW33W3tzI4Oe14bUxM/1R8WjBigYim9kkSDyHCkECYldaPT9Z6r1QLeevDeZ6Ph7vLiwnAqygpFOX6kDvQMhv3Zgeyd6cH3pnxZ/+4aI6upSl7dfnZNBFHDOmUKIMqNHd7TzcvvrU6eVY6OctzbpSUZhCbqiNR2A+5Lc+nS5lP5sfeXsp1PfTRd/E+bzSvjtvgCGSR0BFZEAjeP3VgnLzyvDLi92xB5e8ozsn9AQDFqJCHegfifhGb9eso1+cLeyshswHW97y+oAS2zurgyE1gCARXbGBvk+2CuKdd4dfXIzH/tz2jH0wrXezE9kQKjR6/cHsVWs0sTNefGXKb95dMyZm01Jsd14HF/1Pyl73tfUh4b2NUvV4uOvuml65ZKk97ETcywmNYZd4F9UEn6xqMpHbdE6ReJAo949JofZZAiIX8askGnAJPFEjOtFcFNSIzjVY9pUv46yKjutdwTl2O4AGXgCNs9K/Qv0LmkST0p5pAisAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Visual representation of a proxy routing an HTTP request to the good machine for an A/B test",title:"Visual representation of a proxy routing an HTTP request to the good machine for an A/B test",src:"/static/2c489a0b63ed1026677b36dfbac2cc3e/a6d36/cookie-ab.png",srcSet:["/static/2c489a0b63ed1026677b36dfbac2cc3e/222b7/cookie-ab.png 163w","/static/2c489a0b63ed1026677b36dfbac2cc3e/ff46a/cookie-ab.png 325w","/static/2c489a0b63ed1026677b36dfbac2cc3e/a6d36/cookie-ab.png 650w","/static/2c489a0b63ed1026677b36dfbac2cc3e/0fcea/cookie-ab.png 851w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,s.kt)("h2",null,"Observations on this approach"),(0,s.kt)("p",null,"The first observations to push upfront is that ",(0,s.kt)("strong",{parentName:"p"},"we have kept the page loading performances provided by default by the JAMstack"),". We don't have to wait for runtime computations to display content on the page."),(0,s.kt)("p",null,"The second observation is about the tradeoffs we decided to make: we shifted the A/B testing responsibility ",(0,s.kt)("strong",{parentName:"p"},"closer to the infrastructure layer"),". The proxy has an important role to play in this scenario."),(0,s.kt)("p",null,'Also note that we need more "places" to put the different variants: 1 variant corresponds to 1 website that corresponds to 1 set of static pages that should entirely be hosted. ',(0,s.kt)("strong",{parentName:"p"},"The more we have variants, the more we may pay for hosting"),":"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/5ca1379724776ace7b90ea96f8722942/e67dd/all-variants.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.16564417177914%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVQ4y62TzWsTURTFz7yZNx+ZaZKZTFLzoSkm/crYxBgzaSYmQrHQFjTqQppFFBVBQylpdeHCna4ClW4KIqRFF1IqQhEXIqIbQfAf8M9R3vQN6EoMvTDMm7v43XPPeQP8uwiAJAAVx1QigCgA+ThgFEAcgM6hIX6WR1U2xh+dwynvk1GAEoAwgBSAcQAR3hupBAAKAI2HIfPvQJ36P2v6q5Wyt6DQCAEElQgSTkTLEASR+rELEuFDYcvyX9cheCtchcahfyqUBUEMACoPhgggfs+klJgyVQuWKRxJIkoopk/F4+FCTCQy5T7Jhpaxo/rpcZVGQrwnEkkOy1SzNUnxBytEFHlgMeaxwESkLdfsNj/Nr3rv62mrFijUVr3D4s3W54abX08EIV0rDSdvt37UFoovUkeKVbGfn7G+ehedN3OlCd+usZmEXttuVwatrnM95ARA9bC5kv/QWq72Jh2b0fKAaPT7+QdrncpuM8WBkF66urV7r3pudrPr+LZFztpGdX/Ze3c3WXk4TZl8Egc0fXt9aqdXKB9cEpPALzxjXr9+nFvb8qo/ryIDdNitkr4vwhw+TVbw6j6bzIAJozJcqn/s2dWBS3xghhm/96Sw9ejM+S+X4QNZ/87KQm6/3azvzWczgQ3duaXYRvu517iyU9YYUKDEiDVS1uK0ZtqKn6oksTQvlCI1x7TcODOd+H/I4OSE+bbopjdyRSNYeTa7adyofct1SgeniKTR3wXITgocv0lVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"A visual representation of a project having 4 different variants",title:"A visual representation of a project having 4 different variants",src:"/static/5ca1379724776ace7b90ea96f8722942/a6d36/all-variants.png",srcSet:["/static/5ca1379724776ace7b90ea96f8722942/222b7/all-variants.png 163w","/static/5ca1379724776ace7b90ea96f8722942/ff46a/all-variants.png 325w","/static/5ca1379724776ace7b90ea96f8722942/a6d36/all-variants.png 650w","/static/5ca1379724776ace7b90ea96f8722942/e548f/all-variants.png 975w","/static/5ca1379724776ace7b90ea96f8722942/3c492/all-variants.png 1300w","/static/5ca1379724776ace7b90ea96f8722942/e67dd/all-variants.png 1801w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,s.kt)("p",null,"There's also one side effect that I find positive (but it can feel negative) is that it can be hard to combine multiple A/B experiments."),(0,s.kt)("p",null,"Let's say that we have 2 pages and that we want to run an experiment on both the pages:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"What can be a visual representation of these scenarios at the hosting level?"),(0,s.kt)("li",{parentName:"ul"},"Should we create 4 different websites, one for each variant?"),(0,s.kt)("li",{parentName:"ul"},"Should we create N different websites with combinations of variants?")),(0,s.kt)("h2",null,"References"),(0,s.kt)("p",null,"If you're using ",(0,s.kt)("a",{parentName:"p",href:""},"Netlify")," for hosting your websites, they have a feature called ",(0,s.kt)("a",{parentName:"p",href:"https://docs.netlify.com/site-deploys/split-testing/"},"Split-testing")," that allows for these kind of testing using a branch based approach."),(0,s.kt)("p",null,"If you have any other references in mind concerning A/B testing or Split Testing on top of the JAMstack, feel free to drop them on ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/mfrachet"},"Twitter"),"."))}l.isMDXComponent=!0},4655:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(7294),s=t(4983),o=t(5414),i=t(9429),p={};function r(e){var a=e.children,t=e.pageContext.frontmatter;return n.createElement(s.Zo,{components:p},n.createElement(i.L,null,n.createElement(o.q,null,n.createElement("html",{lang:"en"}),n.createElement("title",null,t.title),n.createElement("meta",{name:"description",content:t.excerpt}),n.createElement("meta",{property:"og:description",content:t.excerpt}),n.createElement("meta",{name:"keywords",content:"HTML, CSS, JavaScript, Accessibility, A11y, e2e, tests, testing, React, React Native"}),n.createElement("meta",{property:"og:title",content:t.title}),n.createElement("meta",{property:"og:image",content:t.metaImage}),n.createElement("meta",{name:"author",content:"Marvin Frachet"})),n.createElement("main",{"aria-labelledby":"title",className:"wrapper"},n.createElement("h1",{id:"title"},t.title),a)))}},3366:function(e,a,t){function n(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}t.d(a,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-posts-a-b-testing-with-the-jamstack-index-mdx-24a7f670e8dde9f9e34e.js.map