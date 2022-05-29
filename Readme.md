@tootallnate/ina260
===================
### Read values from the INA260 bi-directional current and power monitor

This Node.js module reads values from the [Adafruit INA260 High or Low Side Voltage, Current, Power Sensor](https://www.adafruit.com/product/4226) over the I2C bus on a Raspberry Pi.

## Example

```typescript
import * as i2c from 'i2c-bus';
import { INA260 } from '@tootallnate/ina260';

const bus = i2c.openSync(1);
const ina260 = new INA260(bus);

while (true) {
  const [voltage, current, power] = await Promise.all([
    ina260.readVoltage(),
    ina260.readCurrent(),
    ina260.readPower(),
  ]);
  console.log({ voltage, current, power });

  // Sleep for 1 second
  await new Promise((r) => setTimeout(r, 1000));
}
```
