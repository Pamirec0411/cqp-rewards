import { Oracle } from "./core/oracle.js";

const gem1 = { key: "gem1", value: 1 };
const gem2 = { key: "gem2", value: 1 };
const gem3 = { key: "gem3", value: 1 };

const USDT_15 = { key: "USDT", value: 0.15e6 };
const USDT_20 = { key: "USDT", value: 0.20e6 };
const USDT_34 = { key: "USDT", value: 0.34e6 };
const USDT_50 = { key: "USDT", value: 0.50e6 };
const USDT_75 = { key: "USDT", value: 0.75e6 };
const USDT_100 = { key: "USDT", value: 1.00e6 };
const USDT_125 = { key: "USDT", value: 1.25e6 };
const USDT_133 = { key: "USDT", value: 1.33e6 };
const USDT_150 = { key: "USDT", value: 1.50e6 };
const USDT_175 = { key: "USDT", value: 1.75e6 };
const USDT_200 = { key: "USDT", value: 2.00e6 };
const USDT_500 = { key: "USDT", value: 5.00e6 };
const USDT_1000 = { key: "USDT", value: 10.00e6 };
const USDT_1500 = { key: "USDT", value: 15.00e6 };
const USDT_2500 = { key: "USDT", value: 25.00e6 };
const USDT_5000 = { key: "USDT", value: 50.00e6 };
const USDT_10000 = { key: "USDT", value: 100.00e6 };

const USDT_300000 = { key: "USDT", value: 3000.00e6 };
const USDT_1250000 = { key: "USDT", value: 12500.00e6 };
const USDT_2500000 = { key: "USDT", value: 25000.00e6 };

const TON_01 = { key: "TON", value: 0.01e9 };
const TON_03 = { key: "TON", value: 0.03e9 };
const TON_05 = { key: "TON", value: 0.05e9 };
const TON_10 = { key: "TON", value: 0.1e9 };
const TON_15 = { key: "TON", value: 0.15e9 };
const TON_20 = { key: "TON", value: 0.20e9 };
const TON_25 = { key: "TON", value: 0.25e9 };
const TON_30 = { key: "TON", value: 0.30e9 };
const TON_35 = { key: "TON", value: 0.35e9 };
const TON_50 = { key: "TON", value: 0.50e9 };
const TON_75 = { key: "TON", value: 0.75e9 };
const TON_100 = { key: "TON", value: 1.00e9 };
const TON_200 = { key: "TON", value: 2.00e9 };
const TON_300 = { key: "TON", value: 3.00e9 };
const TON_500 = { key: "TON", value: 5.00e9 };
const TON_1000 = { key: "TON", value: 10.00e9 };

const TON_60000 = { key: "TON", value: 600.00e9 };
const TON_200000 = { key: "TON", value: 2000.00e9 };

export function makeOracleInstanceV1() {
	const oracle = Oracle.make(1048576, [ "dig", "open" ]);

	oracle.addPredictions("dig", 135845, { ...gem1, cycle: 1 }, [ "open" ]);
	oracle.addPredictions("dig", 36225, { ...gem2, cycle: 1 }, [ "open" ]);
	oracle.addPredictions("dig", 9057, { ...gem3, cycle: 1 }, [ "open" ]);
	oracle.addPredictions("dig", 181127, null, [ "open" ]);

	// oracle.addPredictions("open", 0, { ...gem1, cycle: 1 });
	// oracle.addPredictions("open", 0, { ...gem2, cycle: 1 });
	// oracle.addPredictions("open", 0, { ...gem3, cycle: 1 });

	oracle.addPredictions("open", 162700, { ...USDT_15, cycle: 1 });
	oracle.addPredictions("open", 100100, { ...USDT_20, cycle: 1 });
	oracle.addPredictions("open", 25000, { ...USDT_34, cycle: 1 });
	oracle.addPredictions("open", 10000, { ...USDT_50, cycle: 1 });
	oracle.addPredictions("open", 5000, { ...USDT_75, cycle: 1 });
	oracle.addPredictions("open", 2500, { ...USDT_100, cycle: 1 });
	oracle.addPredictions("open", 2500, { ...USDT_125, cycle: 1 });
	oracle.addPredictions("open", 2500, { ...USDT_133, cycle: 1 });
	oracle.addPredictions("open", 1500, { ...USDT_150, cycle: 1 });
	oracle.addPredictions("open", 1500, { ...USDT_175, cycle: 1 });
	oracle.addPredictions("open", 1000, { ...USDT_200, cycle: 1 });
	oracle.addPredictions("open", 1000, { ...USDT_500, cycle: 1 });
	oracle.addPredictions("open", 500, { ...USDT_1000, cycle: 1 });
	oracle.addPredictions("open", 500, { ...USDT_1500, cycle: 1 });
	// oracle.addPredictions("open", 0, { ...USDT_2500, cycle: 1 });
	// oracle.addPredictions("open", 0, { ...USDT_5000, cycle: 1 });
	// oracle.addPredictions("open", 0, { ...USDT_10000, cycle: 1 });
	
	oracle.addPredictions("open", 10, { ...USDT_300000, cycle: 1, super: true });
	oracle.addPredictions("open", 1, { ...USDT_2500000, cycle: 1, jackpot: true });

	oracle.addPredictions("open", 192500, { ...TON_01, cycle: 1 });
	oracle.addPredictions("open", 80000, { ...TON_03, cycle: 1 });
	oracle.addPredictions("open", 60000, { ...TON_05, cycle: 1 });
	oracle.addPredictions("open", 15000, { ...TON_10, cycle: 1 });
	oracle.addPredictions("open", 7500, { ...TON_15, cycle: 1 });
	oracle.addPredictions("open", 5000, { ...TON_20, cycle: 1 });
	oracle.addPredictions("open", 2500, { ...TON_25, cycle: 1 });
	oracle.addPredictions("open", 2000, { ...TON_30, cycle: 1 });
	oracle.addPredictions("open", 2000, { ...TON_35, cycle: 1 });
	oracle.addPredictions("open", 1500, { ...TON_50, cycle: 1 });
	oracle.addPredictions("open", 500, { ...TON_75, cycle: 1 });
	oracle.addPredictions("open", 500, { ...TON_100, cycle: 1 });
	oracle.addPredictions("open", 500, { ...TON_200, cycle: 1 });
	oracle.addPredictions("open", 500, { ...TON_300, cycle: 1 });
	//oracle.addPredictions("open", 20, { ...TON_500, cycle: 1 });
	//oracle.addPredictions("open", 20, { ...TON_1000, cycle: 1 });
	
	oracle.addPredictions("open", 10, { ...TON_60000, cycle: 1, super: true });
	oracle.addPredictions("open", 1, { ...TON_200000, cycle: 1, jackpot: true });

	oracle.validatePredictions("dig");
	oracle.validatePredictions("open", { minimalChance: 100 });

	return oracle;
}
