// ==UserScript==
// @name         UIUC Registration helper (new)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       94rain
// @match        *://ui2web1.apps.uillinois.edu/BANPROD1/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @require      https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js

// ==/UserScript==
    (function() {
    'use strict';

    $('body').append("<div> <form action='/BANPROD1/bwskfcls.P_GetCrse' method='post' onsubmit='return checkSubmit()'> \
		<select name='term_in' size='1' id='term_id'>\
			<option value='120231'>Spring 2023</option> \
			<option value='120228'>Fall 2022</option> \
			<option value='120225'>Summer 2022</option> \
			<option value='120221'>Spring 2022</option>  \
		</select> \
    	<input type='hidden' name='sel_subj' value='dummy'> \
    	<input name='sel_subj' list='subjectList'> <datalist id='subjectList'> \
    	  <option>MATH</option><option>CS</option> \
    	</datalist> \
    	<input name='SEL_CRSE' list='courseList'> <datalist id='courseList'> \
    	  <option>491</option><option>498</option><option>598</option><option>473</option> \
    	</datalist> \
    	<input type='hidden' name='SEL_TITLE' value=''> \
    	<input type='hidden' name='BEGIN_HH' value='0'> \
    	<input type='hidden' name='BEGIN_MI' value='0'> \
    	<input type='hidden' name='BEGIN_AP' value='a'> \
    	<input type='hidden' name='SEL_DAY' value='dummy'> \
    	<input type='hidden' name='SEL_PTRM' value='dummy'> \
    	<input type='hidden' name='END_HH' value='0'> \
    	<input type='hidden' name='END_MI' value='0'> \
    	<input type='hidden' name='END_AP' value='a'> \
    	<input type='hidden' name='SEL_CAMP' value='dummy'> \
    	<input type='hidden' name='SEL_SCHD' value='dummy'> \
    	<input type='hidden' name='SEL_SESS' value='dummy'> \
    	<input type='hidden' name='SEL_INSTR' value='dummy'> \
    	<input type='hidden' name='SEL_INSTR' value='%'> \
    	<input type='hidden' name='SEL_ATTR' value='dummy'> \
    	<input type='hidden' name='SEL_ATTR' value='%'> \
    	<input type='hidden' name='SEL_LEVL' value='dummy'> \
    	<input type='hidden' name='SEL_LEVL' value='%'> \
    	<input type='hidden' name='SEL_INSM' value='dummy'> \
    	<input type='hidden' name='sel_dunt_code' value=''> \
    	<input type='hidden' name='sel_dunt_unit' value=''> \
    	<input type='hidden' name='call_value_in' value=''> \
    	<input type='hidden' name='rsts' value='dummy'> \
    	<input type='hidden' name='crn' value='dummy'> \
    	<input type='hidden' name='path' value='1'> \
    	<input type='submit' name='SUB_BTN' value='View Sections'> </form> \
    	<form action='/BANPROD1/bwckschd.p_disp_detail_sched' method='get'> \
			<select name='term_in' size='1' id='term_id'>\
				<option value='120231'>Spring 2023</option> \
				<option value='120228'>Fall 2022</option> \
				<option value='120225'>Summer 2022</option> \
				<option value='120221'>Spring 2022</option>  \
			</select> \
    		<input type='text' name='crn_in'  value=''> \
    		<input type='submit' value='View CRN Detail'> </form> \
    	<form action='/BANPROD1/bwskfreg.P_AltPin' method='post'>\
    		<label for='term_id'><span>Term</span></label> \
    		<select name='term_in' size='1' id='term_id'>\
				<option value='120231'>Spring 2023</option> \
				<option value='120228'>Fall 2022</option> \
				<option value='120225'>Summer 2022</option> \
				<option value='120221'>Spring 2022</option>  \
			</select> \
			<button type='submit' class=\"btn btn-primary\">Add/Drop</button> \
    	</form> \
    	<form action='bwskotrn.P_ViewTran' method='post'> \
    		<input type='hidden' name='levl' value=''> \
			<input type='hidden' name='tprt' value='WEB'> \
			<input type='submit' value='View Transcript'> \
		</form> \
                     </div>");

})();
