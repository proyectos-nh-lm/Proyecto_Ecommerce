"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Progresss Circle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".goal-prigress").circleProgress({
		max: 100,
		value: 63,
		textFormat: "percent",
	});
	$(".sales-progress-1").circleProgress({
		max: 100,
		value: 50,
		textFormat: function () {
			return "$450 USD";
		},
	});
	$(".sales-progress-2").circleProgress({
		max: 100,
		value: 60,
		textFormat: function () {
			return "$550 USD";
		},
	});
	$(".sales-progress-3").circleProgress({
		max: 100,
		value: 70,
		textFormat: function () {
			return "$850 USD";
		},
	});
	$(".sales-progress-4").circleProgress({
		max: 100,
		value: 80,
		textFormat: function () {
			return "$900 USD";
		},
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Leads !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 352,
			width: "100%",
			stacked: !1,
			type: "bar",
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			show: !1,
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
				distributed: true,
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "K";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: colors,
		series: [
			{
				name: "Leads",
				data: [20, 30, 40, 50, 46, 42, 38, 34, 30, 28, 26, 25],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23", "JUL/23", "AUG/23", "SEP/23", "OCT/23", "NOV/23", "DEC/23"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "10px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: -5,
				offsetY: 0,
				style: {
					color: "#64748b",
				},
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: !1,
				},
			},
			yaxis: {
				lines: {
					show: !1,
				},
			},
		},
		dataLabels: {
			enabled: !1,
		},
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
		legend: {
			show: !1,
			labels: {
				fontSize: "12px",
				colors: "#64748b",
			},
			fontSize: "12px",
			fontFamily: "Inter",
		},
	};
	var chart = new ApexCharts(document.querySelector("#leads-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Proposal !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 352,
			width: "100%",
			stacked: !1,
			type: "bar",
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			show: !1,
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
				distributed: true,
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "K";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: colors,
		series: [
			{
				name: "Proposal",
				data: [28, 30, 32, 35, 38, 41, 44, 47, 50, 40, 30, 20],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23", "JUL/23", "AUG/23", "SEP/23", "OCT/23", "NOV/23", "DEC/23"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "10px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: -5,
				offsetY: 0,
				style: {
					color: "#64748b",
				},
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: !1,
				},
			},
			yaxis: {
				lines: {
					show: !1,
				},
			},
		},
		dataLabels: {
			enabled: !1,
		},
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
		legend: {
			show: !1,
			labels: {
				fontSize: "12px",
				colors: "#64748b",
			},
			fontSize: "12px",
			fontFamily: "Inter",
		},
	};
	var chart = new ApexCharts(document.querySelector("#proposal-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Contract !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 352,
			width: "100%",
			stacked: !1,
			type: "bar",
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			show: !1,
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
				distributed: true,
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "K";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: colors,
		series: [
			{
				name: "Contract",
				data: [10, 20, 30, 40, 50, 60, 55, 50, 45, 40, 35, 30],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23", "JUL/23", "AUG/23", "SEP/23", "OCT/23", "NOV/23", "DEC/23"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "10px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: -5,
				offsetY: 0,
				style: {
					color: "#64748b",
				},
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: !1,
				},
			},
			yaxis: {
				lines: {
					show: !1,
				},
			},
		},
		dataLabels: {
			enabled: !1,
		},
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
		legend: {
			show: !1,
			labels: {
				fontSize: "12px",
				colors: "#64748b",
			},
			fontSize: "12px",
			fontFamily: "Inter",
		},
	};
	var chart = new ApexCharts(document.querySelector("#contract-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Project !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 352,
			width: "100%",
			stacked: !1,
			type: "bar",
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			show: !1,
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "20%",
				distributed: true,
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "K";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: colors,
		series: [
			{
				name: "Project",
				data: [10, 20, 30, 40, 50, 60, 65, 50, 45, 40, 35, 30],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23", "JUL/23", "AUG/23", "SEP/23", "OCT/23", "NOV/23", "DEC/23"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "10px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + "K";
				},
				offsetX: -5,
				offsetY: 0,
				style: {
					color: "#64748b",
				},
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: !1,
				},
			},
			yaxis: {
				lines: {
					show: !1,
				},
			},
		},
		dataLabels: {
			enabled: !1,
		},
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
		legend: {
			show: !1,
			labels: {
				fontSize: "12px",
				colors: "#64748b",
			},
			fontSize: "12px",
			fontFamily: "Inter",
		},
	};
	var chart = new ApexCharts(document.querySelector("#project-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Earnings  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Earnings",
				data: [25, 60, 20, 90, 45, 100, 55],
			},
		],
		chart: {
			type: "area",
			height: 125,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 2,
			curve: "smooth",
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.5,
				stops: [0, 90, 100],
			},
		},
		colors: ["#25b865"],
		grid: {
			show: !1,
		},
		legend: {
			show: !1,
		},
		dataLabels: {
			enabled: !1,
		},
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "K";
				},
			},
			style: {
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#earnings-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Expense  !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		series: [
			{
				name: "Expenses",
				data: [25, 60, 20, 90, 45, 100, 55],
			},
		],
		chart: {
			type: "area",
			height: 125,
			toolbar: {
				show: !1,
			},
			sparkline: {
				enabled: !0,
			},
		},
		stroke: {
			width: 2,
			curve: "smooth",
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.2,
				opacityTo: 0.5,
				stops: [0, 90, 100],
			},
		},
		colors: ["#d13b4c"],
		grid: {
			show: !1,
		},
		legend: {
			show: !1,
		},
		dataLabels: {
			enabled: !1,
		},
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "K";
				},
			},
			style: {
				colors: "#64748b",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#expense-area-chart"), options);
	chart.render();
});
