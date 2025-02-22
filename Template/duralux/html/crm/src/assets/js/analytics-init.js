"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Daterange Picker !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	var start = moment().subtract(29, "days");
	var end = moment();

	function cb(start, end) {
		$("#reportrange span").html(start.format("MMM D, YY") + " - " + end.format("MMM D, YY"));
	}

	$("#reportrange").daterangepicker(
		{
			startDate: start,
			endDate: end,
			ranges: {
				Today: [moment(), moment()],
				Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
				"Last 7 Days": [moment().subtract(6, "days"), moment()],
				"Last 30 Days": [moment().subtract(29, "days"), moment()],
				"This Month": [moment().startOf("month"), moment().endOf("month")],
				"Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
			},
		},
		cb
	);

	cb(start, end);
});

/*
<--!----------------------------------------------------------------!-->
<--! Bounce Rate !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 80,
			sparkline: {
				enabled: !0,
			},
		},
		series: [
			{
				name: "Bounce Rate (Avg)",
				data: [25, 60, 20, 90, 45, 100, 45, 100, 55],
			},
		],
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
		yaxis: {
			min: 0,
		},
		colors: ["#64748a"],
	};
	var chart = new ApexCharts(document.querySelector("#bounce-rate"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Page Views !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 80,
			sparkline: {
				enabled: !0,
			},
		},
		series: [
			{
				name: "Page Views (Avg)",
				data: [25, 60, 20, 90, 45, 100, 45, 100, 55],
			},
		],
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
		yaxis: {
			min: 0,
		},
		colors: ["#3454d1"],
	};
	var chart = new ApexCharts(document.querySelector("#page-views"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Site Impression !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 80,
			sparkline: {
				enabled: !0,
			},
		},
		series: [
			{
				name: "Site Impression (Avg)",
				data: [25, 60, 20, 90, 45, 100, 45, 100, 55],
			},
		],
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
		yaxis: {
			min: 0,
		},
		colors: ["#e49e3d"],
	};
	var chart = new ApexCharts(document.querySelector("#site-impressions"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Conversions Rate !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "area",
			height: 80,
			sparkline: {
				enabled: !0,
			},
		},
		series: [
			{
				name: "Site Impression (Avg)",
				data: [25, 60, 20, 90, 45, 100, 45, 100, 55],
			},
		],
		stroke: {
			width: 1,
			curve: "smooth",
		},
		fill: {
			opacity: [0.85, 0.25, 1, 1],
			gradient: {
				inverseColors: !1,
				shade: "light",
				type: "vertical",
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100, 100, 100],
			},
		},
		yaxis: {
			min: 0,
		},
		colors: ["#25b865"],
	};
	var chart = new ApexCharts(document.querySelector("#conversions-rate"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Visitors Overview !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 370,
			type: "area",
			stacked: !1,
			toolbar: {
				show: !1,
			},
		},
		xaxis: {
			categories: ["JAN/22", "FEB/22", "MAR/22", "APR/22", "MAY/22", "JUN/22", "JUL/22"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "11px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: -22,
				offsetY: 0,
				style: {
					fontSize: "11px",
					color: "#64748b",
				},
			},
		},
		stroke: {
			curve: "smooth",
			width: [1, 1, 1, 1],
			dashArray: [3, 3, 3, 3],
			lineCap: "round",
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
			borderColor: "#ebebf3",
			row: {
				colors: ["#ebebf3", "transparent"],
				opacity: 0.02,
			},
		},
		legend: {
			show: !1,
		},
		colors: ["#3454d1", "#25b865", "#d13b4c"],
		dataLabels: {
			enabled: !1,
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.3,
				stops: [0, 90, 100],
			},
		},
		series: [
			{
				name: "Unique Visitors",
				data: [20, 45, 10, 75, 35, 80, 40],
				type: "area",
			},
			{
				name: "Unique Page Views",
				data: [25, 60, 20, 90, 45, 100, 55],
				type: "area",
			},
			{
				name: "Unique Impression",
				data: [30, 40, 15, 70, 30, 85, 45],
				type: "area",
			},
		],
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "K";
				},
			},
			style: {
				fontSize: "12px",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#visitors-overview-statistics-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Campaign Analytics !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			type: "bar",
			height: 370,
			toolbar: {
				show: !1,
			},
		},
		series: [
			{
				name: "Online Campaign",
				data: [44, 55, 41, 64, 22, 43, 21, 41, 64, 22, 43, 21],
			},
			{
				name: "Offline Campaign",
				data: [53, 32, 33, 52, 13, 44, 32, 33, 52, 13, 44, 32],
			},
		],
		plotOptions: {
			bar: {
				horizontal: !1,
				endingShape: "rounded",
				columnWidth: "30%",
			},
		},
		dataLabels: {
			enabled: !1,
			offsetX: -6,
			style: {
				fontSize: "12px",
				colors: ["#fff"],
			},
		},
		stroke: {
			show: !1,
			width: 1,
			colors: ["#fff"],
		},
		colors: ["#E1E3EA", "#3454d1"],
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					colors: "#64748b",
					fontFamily: "Inter",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (o) {
					return +o + "K";
				},
				style: {
					color: "#64748b",
					fontFamily: "Inter",
				},
			},
		},
		grid: {
			strokeDashArray: 3,
			borderColor: "#e9ecef",
		},
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
		legend: {
			show: !1,
			fontFamily: "Inter",
			labels: {
				colors: "#64748b",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#campaign-alytics-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Social Radar !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Facebook",
				data: [80, 50, 30, 40, 100, 20],
			},
			{
				name: "Twitter",
				data: [20, 30, 40, 80, 20, 80],
			},
			{
				name: "Youtube",
				data: [44, 76, 78, 13, 43, 10],
			},
		],
		chart: {
			height: 376,
			type: "radar",
			toolbar: {
				show: !1,
			},
		},
		colors: ["#3454D1", "#41B2C4", "#EA4D4D"],
		xaxis: {
			categories: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri"],
		},
		yaxis: {
			show: !1,
		},
		stroke: {
			show: !1,
			width: 0.5,
		},
		tooltip: {
			y: {
				formatter: function (o) {
					return +o + "K";
				},
			},
			style: {
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
		legend: {
			show: !0,
			height: 65,
			offsetY: -35,
			labels: {
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
	};

	var chart = new ApexCharts(document.querySelector("#social-radar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Coundown Timer !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$('[data-time-countdown="countdown_1"]').timeTo(new Date("Tue Feb 23 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"));
	$('[data-time-countdown="countdown_2"]').timeTo(new Date("Tue Feb 25 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"));
	$('[data-time-countdown="countdown_3"]').timeTo(new Date("Tue Feb 24 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"));
	$('[data-time-countdown="countdown_4"]').timeTo(new Date("Tue Feb 22 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"));
	$('[data-time-countdown="countdown_5"]').timeTo(new Date("Tue Feb 20 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"));
});

/*
<--!----------------------------------------------------------------!-->
<--! Progresss Circle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".goal-progress-1").circleProgress({
		max: 100,
		value: 40,
		textFormat: "percent",
	});
	$(".goal-progress-2").circleProgress({
		max: 100,
		value: 65,
		textFormat: "percent",
	});
	$(".goal-progress-3").circleProgress({
		max: 100,
		value: 50,
		textFormat: "percent",
	});
	$(".goal-progress-4").circleProgress({
		max: 100,
		value: 75,
		textFormat: "percent",
	});
});
