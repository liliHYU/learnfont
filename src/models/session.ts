import { platform } from '@/helper/config/filters';
import { deserializeArr, filterMapperProperty, mapperProperty } from 'type-json-mapper';

// 未声明的属性字段将不会被添加

export class Session {
  @mapperProperty('id')
  public id: string;
  @mapperProperty('path')
  public path: string;
  @filterMapperProperty('stay_time', (val: string) => parseFloat(val) / 1000)
  public stayTime: number;
  @filterMapperProperty('platform', (val: string) => platform[val])
  public platform: string;
  @mapperProperty('terminal')
  public terminal: string;
  @mapperProperty('user_id')
  public userId: string;
  @mapperProperty('ip')
  public ip: string;
  @mapperProperty('etime', 'datetime')
  public etime: string;
  @mapperProperty('ltime', 'datetime')
  public ltime: string;
  @mapperProperty('page_title')
  public pageTitle: string;
  @mapperProperty('language')
  public language: string;
  @mapperProperty('province')
  public province: string;
  @mapperProperty('events')
  public events: string;
}

export const tableDeserialize = (tableData: Session[]) => deserializeArr(Session, tableData);
