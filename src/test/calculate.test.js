import calculate from "../logic/calculate"
import operate from "../logic/operate"

describe("testing calculate.js logic", () =>{

  test("test calculate.js value on next", () => {
    const result = calculate({ next: null, total: null, operation: null }, "25")
    expect(result.next).toBe("25")
  })
  
  test("testing calculate.js value on total", () => {
    const result = calculate({ next: "10", total: "25", operation: "+" }, '=')
    expect(result.total).toBe("35")
  })

  test("testing calculate.js value on operation", () => {
    const result = calculate({ next: null, total: null, operation: null }, '+')
    expect(result.operation).toBe("+")
  })
})

describe('testing operate.js logic', () => {
  test('testing sum for operate.js', () => {
    const result = operate("20","25","+");
    expect(result).toBe("45")
  })

  test('testing rest for operate.js', () => {
    const result = operate("20","25","-");
    expect(result).toBe("-5")
  })

  test('testing mult for operate.js', () => {
    const result = operate("20","2","x");
    expect(result).toBe("40")
  })

  test('testing division for operate.js', () => {
    const result = operate("20","2","÷");
    expect(result).toBe("10")
  })
})