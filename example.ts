import * as i2c from 'i2c-bus';
import { INA260 } from './src';

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
