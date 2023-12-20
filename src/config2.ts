import * as process from "process";
import * as yaml from 'js-yaml'
import {readFile} from 'fs/promises'
import {join} from 'path'
export default async () => {
  const configFilePath = join(process.cwd(), 'aaa.yaml')
  const config = await readFile(configFilePath, {
    encoding: 'utf-8'
  })

  return yaml.load(config)
}