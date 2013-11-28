var grunt = require('grunt');
var fs = require('fs');

exports.sync= {
  main: function(test) {
    'use strict';

    test.expect(3);

    var actual = fs.readdirSync('tmp/sync_test_files').sort();
    var expected = fs.readdirSync('test/expected/sync_test_files').sort();
    test.deepEqual(expected, actual, 'should sync several files');

    actual = fs.readdirSync('tmp/sync_test_mix').sort();
    expected = fs.readdirSync('test/expected/sync_test_mix').sort();
    test.deepEqual(expected, actual, 'should sync a mix of folders and files');

    actual = fs.readdirSync('tmp/sync_test_v0.1.0').sort();
    expected = fs.readdirSync('test/expected/sync_test_v0.1.0').sort();
    test.deepEqual(expected, actual, 'should parse both dest and src templates');

    test.done();
  },

  flatten: function(test) {
    'use strict';

    test.expect(1);

    var actual = fs.readdirSync('tmp/sync_test_flatten').sort();
    var expected = fs.readdirSync('test/expected/sync_test_flatten').sort();
    test.deepEqual(expected, actual, 'should create a flat structure');

    test.done();
  },

  single: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/single.js');
    var expected = grunt.file.read('test/expected/single.js');
    test.equal(expected, actual, 'should allow for single file sync');

    test.done();
  },

  mode: function(test) {
    'use strict';

    test.expect(1);

    test.equal(fs.lstatSync('tmp/mode.js').mode.toString(8).slice(-3), '444');

    test.done();
  }
};