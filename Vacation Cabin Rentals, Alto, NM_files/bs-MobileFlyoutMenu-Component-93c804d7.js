define("@widget/LAYOUT/bs-MobileFlyoutMenu-Component-93c804d7.js",["exports","~/c/bs-_rollupPluginBabelHelpers","~/c/bs-Toggle","~/c/bs-AbsLink"],(function(e,a,t,o){"use strict";class l extends(global.React||guac.react).Component{constructor(){super(...arguments),this.handleChange=this.handleChange.bind(this),this.state={open:this.props.alwaysOpen}}handleChange(e){this.setState({open:this.props.alwaysOpen||e})}render(){const{item:e,styles:l,domainName:n,renderMode:r,pageRoute:s,alwaysOpen:c,enableActiveFlyoutMenu:i}=this.props,{open:g}=this.state;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,null,(global.React||guac.react).createElement(t.T,a.a({},this.props,{style:l.link,onChange:this.handleChange,"data-edit-interactive":!0,isActive:i&&(p=e.navigation,(global._||guac.lodash).some(p,{active:!0}))}),(global.React||guac.react).createElement("span",{style:{pointerEvents:"none"}},e.name),!c&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{icon:"chevronDown",size:"small",rotate:g?"180":"0",style:{position:"relative",marginLeft:"xsmall",color:"inherit",flexShrink:"0",pointerEvents:"none"}})),g&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.List.Nested,{role:"menu"},e.navigation.map((e=>(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.ListItem,{tag:"li",key:e.pageId,style:l.subListItem,role:"menuitem"},(global.React||guac.react).createElement(o.A,{tag:"a",style:{...l.sublink,...e.active?l.activeSublink:{fontWeight:"normal"}},href:e.href,target:e.target,rel:"_blank"===e.target?"noopener":"","data-page":e.pageId,"data-edit-interactive":!0,"data-close":!0,renderMode:r,domainName:n,pageRoute:s,"data-aid":"MOBILE_NAV_SUBLINK",isActive:e.active,groupType:"Sub"},(global.React||guac.react).createElement("span",null,e.name)))))));var p}}l.propTypes={item:(global.PropTypes||guac["prop-types"]).object.isRequired,styles:(global.PropTypes||guac["prop-types"]).object.isRequired,domainName:(global.PropTypes||guac["prop-types"]).string,renderMode:(global.PropTypes||guac["prop-types"]).string,pageRoute:(global.PropTypes||guac["prop-types"]).string,alwaysOpen:(global.PropTypes||guac["prop-types"]).bool,enableActiveFlyoutMenu:(global.PropTypes||guac["prop-types"]).bool},e.default=l,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-MobileFlyoutMenu-Component-93c804d7.js.map
