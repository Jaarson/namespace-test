const { add, multiply } = require('../src/index.js')

function test(name, fn) {
  try {
    fn()
    console.log(`✓ ${name}`)
  } catch (error) {
    console.error(`✗ ${name}`)
    console.error(error.message)
    process.exit(1)
  }
}

function assertEquals(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Expected ${expected} but got ${actual}`)
  }
}

// Tests
test('add(2, 3) should return 5', () => {
  assertEquals(add(2, 3), 5)
})

test('multiply(4, 5) should return 20', () => {
  assertEquals(multiply(4, 5), 20)
})

console.log('\nAll tests passed! 🎉')
