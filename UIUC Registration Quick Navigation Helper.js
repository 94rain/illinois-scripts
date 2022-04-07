// ==UserScript==
// @name         UIUC Registration Quick Navigation Helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  (Deprecated, for historical reference)
// @author       94rain
// @match        *://ui2web1.apps.uillinois.edu/BANPROD1/*
// @match        *://login.uillinois.edu/*
// @match        *://shibboleth.illinois.edu/*
// @grant        none
// ==/UserScript==
let current_url = window.location.href;
let login_url1 =
    'https://shibboleth.illinois.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s1'
let login_url2 =
    'https://shibboleth.illinois.edu/idp/profile/SAML2/Redirect/SSO?execution=e2s1'
let login_url3 =
    'https://webprod.admin.uillinois.edu/ssa/servlet/SelfServiceLogin?appName=edu.uillinois.aits.SelfServiceLogin&dad=BANPROD1'
let reg_menu_url =
    'https://ui2web1.apps.uillinois.edu/BANPROD1/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu'
let reg_agreementLook_url =
    'https://ui2web1.apps.uillinois.edu/BANPROD1/twbkwbis.P_GenMenu?name=bmenu.P_RegAgreementLook'
let reg_search_url =
    'https://ui2web1.apps.uillinois.edu/BANPROD1/bwskfcls.p_sel_crse_search'
let reg_termSelection_url =
    'https://ui2web1.apps.uillinois.edu/BANPROD1/bwckgens.p_proc_term_date'
let

    if (current_url == login_url1 || current_url == login_url2) {
  document.getElementsByTagName('input')[2].click();
}

if (current_url == login_url3) {
  document.getElementsByTagName('a')[15].click();
  document.getElementsByTagName('input').BTN_LOGIN.click();
}

if (current_url == reg_menu_url) {
  document.getElementsByTagName('a')[15].click();
}
if (current_url == reg_agreementLook_url) {
  document.getElementsByTagName('a')[17].click();
}

if (current_url == reg_search_url) {
  document.getElementsByTagName('Select').p_term[1].selected = true;
  document.getElementsByTagName('input')[3].click();
}

if (current_url == reg_termSelection_url) {
  document.getElementsByTagName('select').sel_subj.value = 'CS';
  //    x=document.getElementsByTagName("input");x.SUB_BTN.click();
}