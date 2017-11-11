/*
 * Test the protocol-decoder
 * by Roger Camargo - Dez 2016
 */
var assert = require('assert');

var requirejs = require('requirejs');
requirejs.config({
  baseUrl: __dirname + '/../libs/',
  catchError: true
});

var Decoder = requirejs('protocol-decoder');
var RAW = requirejs('RAW');

describe("IR.Decoder", function() {

    it('Checks the SAMSUNG protocol decoder', function(done){
      // const volPlus1 = [4508,4409,586,409,559,435,560,430,560,435,560,1430,533,1451,560,435,559,436,559,1425,559,1430,534,1451,560,1429,560,435,555,436,559,435,560,435,559,4393,560,435,559,436,559,435,534,461,533,1452,559,1430,560,1425,560,435,534,1451,560,1430,559,1426,559,435,533,462,559,435,556,435,559,1430,560,435,560,430,560,435,559,1426,563];
      const volPlus1 = [4590,4335,510,510,510,510,510,510,510,510,510,1530,510,1530,510,510,510,510,510,1530,510,1530,510,1530,510,1530,510,510,510,510,510,510,510,510,510,4335,510,510,510,510,510,510,510,510,510,1530,510,1530,510,1530,510,510,510,1530,510,1530,510,1530,510,510,510,510,510,510,510,510,510,1530,510,510,510,510,510,510,510,1530,510];
      const volPlus2 = [4509,4410,586,409,533,462,559,436,529,465,555,1430,560,1426,559,435,560,435,534,1452,559,1431,555,1430,560,1425,560,435,560,435,560,435,529,462,559,4398,559,435,534,457,560,435,559,436,559,1426,559,1431,559,1426,560,435,560,1425,586,1404,560,1426,560,435,560,435,555,435,534,461,560,1430,555,435,559,436,559,435,560,1425,560];
      const volPlus3 = [4534,4383,560,435,559,435,534,461,559,431,559,1430,559,1426,559,436,559,435,560,1425,560,1429,534,1451,559,1430,560,435,555,435,559,436,559,435,559,4392,560,435,559,436,559,436,533,457,559,1430,560,1426,559,1430,559,431,559,1430,534,1451,559,1430,560,435,529,461,560,435,559,436,559,1430,529,461,559,435,560,435,559,1425,559];
      const volPlus4 = [4508,4410,559,435,560,435,529,465,555,435,560,1429,533,1452,559,436,533,461,534,1451,560,1430,528,1456,560,1429,530,465,529,461,559,435,560,436,559,4397,555,435,534,461,559,436,533,461,529,1456,560,1429,530,1456,533,461,534,1455,555,1430,560,1430,529,461,559,436,533,461,559,435,556,1429,559,435,534,461,559,436,529,1455,560];
      const vPlusCode = Decoder.analyse(volPlus1).code;

      
      const volMin1 = [4534,4382,560,435,559,436,559,435,559,431,533,1456,559,1426,559,436,533,461,559,1430,559,1426,559,1429,560,1425,559,435,560,435,585,409,533,457,534,4422,559,435,534,461,559,431,560,435,560,435,560,435,559,435,534,1451,559,1430,534,1451,559,1430,559,431,559,1430,559,1430,533,1452,559,435,559,436,533,457,563,431,559,1430,585];
      const volMin2 = [4506,4408,560,435,559,435,534,461,555,434,534,1455,560,1425,559,436,533,461,559,1425,560,1429,559,1425,534,1455,533,461,534,461,555,435,559,435,560,4396,533,461,555,435,559,436,559,435,534,457,559,436,559,435,534,1450,564,1425,559,1425,560,1430,559,435,559,1425,560,1429,559,1426,559,435,560,435,559,431,559,435,559,1430,533];
      const volMin3 = [4533,4383,559,435,560,435,559,431,560,435,559,1430,559,1426,559,435,559,435,560,1425,560,1429,560,1429,560,1425,559,435,560,435,559,435,560,430,560,4395,560,435,559,435,559,431,534,461,559,435,559,436,559,435,534,1451,560,1430,559,1426,564,1425,559,435,534,1451,560,1429,560,1425,559,436,559,435,560,435,555,435,560,1430,559];
      const volMin4 = [4511,4409,533,461,533,462,554,440,555,435,560,1430,533,1452,559,435,533,461,534,1452,559,1430,559,1425,534,1455,560,435,529,461,559,435,560,435,559,4396,559,436,555,435,559,435,560,435,533,461,529,466,555,435,560,1430,555,1429,560,1429,560,1425,559,435,559,1430,559,1425,533,1456,533,461,555,435,560,435,559,435,560,1429,529];
      const volMinCode = Decoder.analyse(volMin1).code;
      
      assert.equal(Decoder.compareRawArrays(volPlus1, volPlus2), true)
      assert.equal(Decoder.compareRawArrays(volPlus2, volPlus3), true)
      assert.equal(Decoder.compareRawArrays(volPlus3, volPlus4), true)

      assert.equal(Decoder.compareRawArrays(volMin1, volMin2), true)
      assert.equal(Decoder.compareRawArrays(volMin2, volMin3), true)
      assert.equal(Decoder.compareRawArrays(volMin3, volMin4), true)

      // Different codes
      assert.notEqual(vPlusCode, volMinCode);
      assert.equal(Decoder.compareRawArrays(volPlus1, volMin1), false);
      assert.equal(Decoder.compareRawArrays(volPlus2, volMin2), false);
      assert.equal(Decoder.compareRawArrays(volPlus3, volMin3), false);
      assert.equal(Decoder.compareRawArrays(volPlus4, volMin4), false);


      done();
    });

    

});
