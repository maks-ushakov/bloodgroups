import 'babel-polyfill';
import chai from 'chai';
import BGrp from '../js/blood_groups.js';

const expect = chai.expect;

describe('Blood groups', function() {
	describe('Display group', () => {
		const groups = ['I(O)', 'II(A)', 'III(B)', 'IV(AB)'];
		
		it('can display blood group as string', () => {
			expect(BGrp.displayGroup(0)).to.be.a('string');
		});

		for (let i = 0; i < groups.length; i++) {
			it(`For group number ${i} expect answer ${groups[i]}`, () => {
				expect(BGrp.displayGroup(i)).to.equal(groups[i]);
			});
		}
	});
	
	describe('Get possible child groups', () => {
		const child = [
			[[0],	[0,1],	[0,2],		[1,2]],
			[[],	[0,1],	[0,1,2,3],	[1,2,3]],
			[[],	[],		[1,2],		[1,2,3]],
			[[],	[],		[],			[1,2,3]]
		]; 

		it('Expect getChildGroups() return an array', () => {
			expect(BGrp.getChildGroup(0,3)).to.be.instanceof(Array);
		});
		
		for(let m = 0; m < child.length; m++) {
			for(let f = m; f < child[m].length; f++) {
				it(`If parents have groups ${m + 1} and ${f + 1} expect to return [${child[m][f]}]`, () => {
					expect(BGrp.getChildGroup(m,f)).to.deep.equal(child[m][f]);
				});
			}
		}
	});

	describe("Get possible child's Rh", () => {
		const RhSign = ["-", "+"];
		const RhChild = [
			['-','+-'],
			['+-','+-']
		];

		for (let m = 0; m < 2; m++) {
			for (let f = 0; f < 2; f++) {
				it(`If mother has Rh(${RhSign[m]}) and father has Rh(${RhSign[f]}) expect child has Rh(${RhChild[m][f]})`, () => {
					expect(BGrp.getChildRh(RhSign[m], RhSign[f])).to.equal(RhChild[m][f]);
				});
			}
		}
	});

	describe('Can show risk factor for mather', () => {
		const RhSign = ["-", "+"];
		const risk = [
		//father Rh(-)	Rh(+)
				[false, true], // mother Rh(-)
				[false, false] // mother Rh(+)
		];

		it('Expect isRisky() return boolean', () => {
			expect(BGrp.isRisky('-','-')).to.be.a('boolean');
		});

		for (let m = 0; m < 2; m++) {
			for (let f = 0; f < 2; f++) {
				it(`If mother has Rh(${RhSign[m]}) and father has Rh(${RhSign[f]}) expect isRisky() return ${risk[m][f]}`, () => {
					expect(BGrp.isRisky(RhSign[m], RhSign[f])).to.equal(risk[m][f]);
				});
			}
		}
	});
	

});
