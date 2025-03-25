import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';  
import { fileURLToPath } from 'url';
import { Funko } from '../models/FunkPop.js';
import { Logger } from '../utils/Logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FunkoService {
  private userDir: string;

  constructor(private username: string) {
    this.userDir = path.join(__dirname, '..', '..', 'data', this.username);
    if (!fs.existsSync(this.userDir)) {
      fs.mkdirSync(this.userDir, { recursive: true });
    }
  }

  private getFunkoFilePath(funkoId: string): string {
    return path.join(this.userDir, `${funkoId}.json`);
  }

  addFunko(funko: Omit<Funko, 'id'>): void {
    const id = uuidv4();
    const newFunko = new Funko(
      id,
      funko.name,
      funko.description,
      funko.type,
      funko.genre,
      funko.franchise,
      funko.number,
      funko.exclusive,
      funko.specialFeatures,
      funko.marketValue
    );
  
    const filePath = this.getFunkoFilePath(id);
    fs.writeFileSync(filePath, JSON.stringify(newFunko, null, 2));
    Logger.success(`Funko ${newFunko.name} added successfully with ID ${id}.`);
  }

  modifyFunko(funko: Funko): void {  // Corregido el nombre
    const filePath = this.getFunkoFilePath(funko.id);
    if (!fs.existsSync(filePath)) {
      Logger.error(`Funko with ID ${funko.id} does not exist.`);
      return;
    }
    fs.writeFileSync(filePath, JSON.stringify(funko, null, 2));
    Logger.success(`Funko ${funko.name} modified successfully.`);
  }

  removeFunko(funkoId: string): void {
    const filePath = this.getFunkoFilePath(funkoId);
    if (!fs.existsSync(filePath)) {
      Logger.error(`Funko with ID ${funkoId} does not exist.`);
      return;
    }
    fs.unlinkSync(filePath);
    Logger.success(`Funko with ID ${funkoId} removed successfully.`);
  }

  listFunkos(): Funko[] {
    const files = fs.readdirSync(this.userDir);
    const funkos: Funko[] = [];
    files.forEach((file) => {
      if (file.endsWith('.json')) {
        const data = fs.readFileSync(path.join(this.userDir, file), 'utf-8');
        const funko = JSON.parse(data);
        funkos.push(funko);  // ← Ahora sí almacena los Funkos en la lista
      }
    });
    return funkos;
  }

  getFunko(funkoId: string): Funko | undefined {
    const filePath = this.getFunkoFilePath(funkoId);
    if (!fs.existsSync(filePath)) {
      Logger.error(`Funko with ID ${funkoId} does not exist.`);
      return undefined;
    }
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
    return new Funko(
      data.id,
      data.name,
      data.description,
      data.type,
      data.genre,
      data.franchise,
      data.number,
      data.exclusive,
      data.specialFeatures,
      data.marketValue
    );
  }
  
}
