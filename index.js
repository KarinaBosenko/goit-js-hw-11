import{a as f,S as h,i as n}from"./assets/vendor-BgmC94F3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="53039261-652763fc75278139e9d77d75b";function p(o){return f.get("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let y=new h(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){l.innerHTML=o.map(t=>`
    <li class="gallery-item">
    <a href="${t.largeImageURL}">
    <img src="${t.webformatURL}" alt="${t.tags}"/>
    </a>
    <ul class="descr">
    <li class="descr-item">
    <h3>Likes</h3>
    <p>${t.likes}</p>
    </li>
    <li class="descr-item">
    <h3>Views</h3>
    <p>${t.views}</p>
    </li>
    <li class="descr-item">
    <h3>Comments </h3>
    <p>${t.comments}</p>
    </li>
    <li class="descr-item">
    <h3>Downloads </h3>
    <p>${t.downloads}</p>
    </li>
    </ul>
      </li>`).join(""),y.refresh()}function L(){l.innerHTML=""}function w(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const d=document.querySelector(".form"),b=document.querySelector('[name="search-text"]');d.addEventListener("submit",S);function S(o){o.preventDefault(),L(),w();const t=b.value.trim();if(!t){n.warning({message:"Enter a search word!",position:"topRight"}),c();return}p(t).then(({data:s})=>{if(s.hits.length<=0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(s.hits)}).catch(()=>{n.error({message:"Oops! Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{d.reset(),c()})}
//# sourceMappingURL=index.js.map
