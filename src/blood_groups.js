'use strict'
const groups = [
		{group: "I", literal: "O",	childs: [[0],	[0,1],	[0,2],		[1,2]]},
		{group: "II", literal: "A", childs: [[0,1],	[0,1],	[0,1,2,3],	[1,2,3]]},
		{group: "III", literal: "B", childs: [[0,2], [0,1,2,3],	[1,2],	[1,2,3]],},
		{group: "IV", literal: "AB", childs: [[1,2], [1,2,3],	[1,2,3],	[1,2,3]]}
	];
export default {
		displayGroup(groupNumber) {
			return `${groups[groupNumber].group}(${groups[groupNumber].literal})`;
		},
		getChildRh(motherRh, fatherRh) {
			if(motherRh === '-' && fatherRh === "-") return "-";
			return "+-";
		},
		getChildGroup(motherGroup, fatherGroup) {
			return groups[motherGroup].childs[fatherGroup];
		},
		isRisky(motherRh, fatherRh) {
			return (motherRh === '-' && fatherRh === '+')
		}
	};
