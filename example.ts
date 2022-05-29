import * as i2c from 'i2c-bus';
import { INA260 } from './';

const bus = i2c.openSync(1);
const ina = new INA260(bus);

while (true) {
  const [voltage, current, power] = await Promise.all([
    ina.readVoltage(),
    ina.readCurrent(),
    ina.readPower(),
  ]);
  console.log({ voltage, current, power });

  // Sleep for 1 second
  await new Promise((r) => setTimeout(r, 1000));
}