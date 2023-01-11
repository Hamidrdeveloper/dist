"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5718],{65718:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(50189),n=a(27378),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"}}]},name:"home",theme:"filled"},i=a(92788),l=function(e,t){return n.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};l.displayName="HomeFilled";var c=n.forwardRef(l),d=(a(95171),a(60071)),s=a(31602),m=a(96740);const b=a(26761).ZP.div`
  display: flex;

  .breadcrumb {
    display: flex;
    height: 50px;
    z-index: 1;

    &__inner {
      position: relative;
      z-index: 2;
    }

    & a {
      position: relative;
      display: flex;
      align-items: center;
      text-decoration: none;
      height: 100%;
      padding: 0 30px;
      background: #d1d1d1;
      color: ${({theme:e})=>e.colors.main};

      &:last-child {
        pointer-events: none;
      }

      &:not(:first-child) {
        padding-left: 50px;
      }

      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 52px;
        top: -1px;
        right: -25px;
        bottom: -2px;
        background-color: #d1d1d1;
        transform: scale(0.707) rotate(45deg);
        border-top: 3px solid #eef1f6;
        border-right: 3px solid #eef1f6;
        z-index: 1;
      }

      &:last-child {
        color: #fff;
        position: relative;
        padding-right: 8px;
        background: ${({theme:e})=>e.colors.main};

        &::before {
          content: '';
          position: absolute;
          display: inline-block;
          width: 50px;
          top: 0px;
          right: -25px;
          bottom: 0px;
          background-color: ${({theme:e})=>e.colors.main};
          transform: scale(0.707) rotate(45deg);
          z-index: 1;
        }

        &::after {
          content: none;
        }
      }

      &:first-child {
        color: #666;
        background: #fff;
        border-radius: 8px 0 0 8px;

        &::after {
          background: #fff;
        }
      }
    }
  }
`;var p={MainContainer:b};var f=({module:e,routes:t})=>{const{t:a}=(0,d.$)(),r=(0,m.s0)(),o=t||(null==e?void 0:e.breadcrumbItems);return n.createElement(p.MainContainer,null,n.createElement("div",{className:"breadcrumb"},n.createElement(s.rU,{to:"/admin/dashboard"},n.createElement("span",{className:"breadcrumb__inner"},n.createElement(c,{style:{fontSize:16,marginRight:4}}),n.createElement("span",{className:"breadcrumb__title"},a("Global.Home")))),(o||[]).map(((e,t)=>0===t?n.createElement("a",{onClick:()=>r(-1),key:`breadcrumb-${t}`},n.createElement("span",{className:"breadcrumb__inner"},n.createElement("span",{className:"breadcrumb__title"},e.breadcrumbName))):n.createElement(s.rU,{to:e.path,key:`breadcrumb-${t}`},n.createElement("span",{className:"breadcrumb__inner"},n.createElement("span",{className:"breadcrumb__title"},e.breadcrumbName)))))))}}}]);