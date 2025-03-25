import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { FunkoService } from './services/FunkoService.js';
import { funkoGenre } from './enums/FunkoGenre.js';
import { funkoType } from './enums/FunkoType.js';
import { Funko } from './models/FunkoPop.js';

// Parse command-line arguments and execute commands with yargs
yargs(hideBin(process.argv))
  /**
   * Command to add a new Funko to the collection.
   * @param {Object} argv - The arguments passed to the command.
   * @param {string} argv.username - The username associated with the Funko.
   * @param {string} argv.id - The ID of the Funko.
   * @param {string} argv.name - The name of the Funko.
   * @param {string} argv.description - The description of the Funko.
   * @param {funkoType} argv.type - The type of the Funko (e.g., Pop, Dorbz).
   * @param {funkoGenre} argv.genre - The genre of the Funko (e.g., Movies, TV Shows).
   * @param {string} argv.franchise - The franchise to which the Funko belongs.
   * @param {number} argv.number - The unique number assigned to the Funko.
   * @param {boolean} argv.exclusive - Whether the Funko is exclusive.
   * @param {string} argv.specialFeatures - Special features of the Funko.
   * @param {number} argv.marketValue - The market value of the Funko.
   */
  .command(
    'add',
    'Add a Funko',
    {
      username: { description: 'Username', alias: 'u', type: 'string', demandOption: true },
      id: { description: 'Funko ID', alias: 'i', type: 'string', demandOption: true },
      name: { description: 'Funko Name', alias: 'n', type: 'string', demandOption: true },
      description: { description: 'Funko Description', alias: 'd', type: 'string', demandOption: true },
      type: { description: 'Funko Type', alias: 't', type: 'string', choices: Object.values(funkoType), demandOption: true },
      genre: { description: 'Funko Genre', alias: 'g', type: 'string', choices: Object.values(funkoGenre), demandOption: true },
      franchise: { description: 'Funko Franchise', alias: 'f', type: 'string', demandOption: true },
      number: { description: 'Funko Number', alias: 'num', type: 'number', demandOption: true },
      exclusive: { description: 'Funko Exclusive', alias: 'e', type: 'boolean', demandOption: true },
      specialFeatures: { description: 'Funko Special Features', alias: 's', type: 'string', demandOption: true },
      marketValue: { description: 'Funko Market Value', alias: 'm', type: 'number', demandOption: true }
    },
    (argv) => {
      const service = new FunkoService(argv.username as string);
      const funko = new Funko(
        argv.id as string,
        argv.name as string,
        argv.description as string,
        argv.type as funkoType,
        argv.genre as funkoGenre,
        argv.franchise as string,
        argv.number as number,
        argv.exclusive as boolean,
        argv.specialFeatures as string,
        argv.marketValue as number
      );
      service.addFunko(funko);
    }
  )
  
  /**
   * Command to modify an existing Funko in the collection.
   * @param {Object} argv - The arguments passed to the command.
   * @param {string} argv.username - The username associated with the Funko.
   * @param {string} argv.id - The ID of the Funko to modify.
   * @param {string} argv.name - The new name of the Funko.
   * @param {string} argv.description - The new description of the Funko.
   * @param {funkoType} argv.type - The new type of the Funko.
   * @param {funkoGenre} argv.genre - The new genre of the Funko.
   * @param {string} argv.franchise - The new franchise of the Funko.
   * @param {number} argv.number - The new number of the Funko.
   * @param {boolean} argv.exclusive - The new exclusivity status of the Funko.
   * @param {string} argv.specialFeatures - The new special features of the Funko.
   * @param {number} argv.marketValue - The new market value of the Funko.
   */
  .command(
    'modify',
    'Modify a Funko',
    {
      username: { description: 'Username', alias: 'u', type: 'string', demandOption: true },
      id: { description: 'Funko ID', alias: 'i', type: 'string', demandOption: true },
      name: { description: 'Funko Name', alias: 'n', type: 'string', demandOption: true },
      description: { description: 'Funko Description', alias: 'd', type: 'string', demandOption: true },
      type: { description: 'Funko Type', alias: 't', type: 'string', choices: Object.values(funkoType), demandOption: true },
      genre: { description: 'Funko Genre', alias: 'g', type: 'string', choices: Object.values(funkoGenre), demandOption: true },
      franchise: { description: 'Funko Franchise', alias: 'f', type: 'string', demandOption: true },
      number: { description: 'Funko Number', alias: 'num', type: 'number', demandOption: true },
      exclusive: { description: 'Funko Exclusive', alias: 'e', type: 'boolean', demandOption: true },
      specialFeatures: { description: 'Funko Special Features', alias: 's', type: 'string', demandOption: true },
      marketValue: { description: 'Funko Market Value', alias: 'm', type: 'number', demandOption: true }
    },
    (argv) => {
      const service = new FunkoService(argv.username as string);
      const funko = new Funko(
        argv.id as string,
        argv.name as string,
        argv.description as string,
        argv.type as funkoType,
        argv.genre as funkoGenre,
        argv.franchise as string,
        argv.number as number,
        argv.exclusive as boolean,
        argv.specialFeatures as string,
        argv.marketValue as number
      );
      service.modifyFunko(funko);
    }
  )

  /**
   * Command to remove a Funko from the collection.
   * @param {Object} argv - The arguments passed to the command.
   * @param {string} argv.username - The username associated with the Funko.
   * @param {string} argv.id - The ID of the Funko to remove.
   */
  .command(
    'remove',
    'Remove a Funko',
    {
      username: { description: 'Username', alias: 'u', type: 'string', demandOption: true },
      id: { description: 'Funko ID', alias: 'i', type: 'string', demandOption: true }
    },
    (argv) => {
      const service = new FunkoService(argv.username as string);
      service.removeFunko(argv.id as string);
    }
  )

  /**
   * Command to list all Funkos in the collection.
   * @param {Object} argv - The arguments passed to the command.
   * @param {string} argv.username - The username associated with the Funkos.
   */
  .command(
    'list',
    'List all Funkos',
    {
      username: { description: 'Username', alias: 'u', type: 'string', demandOption: true }
    },
    (argv) => {
      const service = new FunkoService(argv.username as string);
      const funkos = service.listFunkos();
      funkos.forEach((funko) => {
        funko.printInfo();
      });
    }
  )

  /**
   * Command to show the details of a specific Funko.
   * @param {Object} argv - The arguments passed to the command.
   * @param {string} argv.username - The username associated with the Funko.
   * @param {string} argv.id - The ID of the Funko to show.
   */
  .command(
    'show',
    'Show details of a Funko',
    {
      username: { description: 'Username', alias: 'u', type: 'string', demandOption: true },
      id: { description: 'Funko ID', alias: 'i', type: 'string', demandOption: true }
    },
    (argv) => {
      const service = new FunkoService(argv.username as string);
      const funko = service.getFunko(argv.id as string);
      if (funko) {
        funko.printInfo();
      } else {
        console.log('Funko not found');
      }
    }
  )

  /**
   * Enforces at least one command before proceeding.
   */
  .demandCommand(1, 'You need at least one command before moving on')
  
  .help()
  
  .argv;
