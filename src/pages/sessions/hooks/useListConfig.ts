import { FilterItem } from 'components/filterGroup';
import { OperateBtn } from 'components/tableOprate';
import { ColumnConfig } from 'components/tableView';

export enum EventTypes {
  API = 'api',
  DOM = 'dom',
  PERFORMANCE = 'performance',
  ROUTE = 'route',
  ERROR = 'error',
  CONSOLE = 'console',
  CUSTOMER = 'customer',
  VUE = 'vue',
  LIFECYCLE = 'lifeCycle',
  EXTEND = 'extend',
  RECORD = 'record'
}

export enum TableOperateType {
  DETAIL = 'detail',
  PLAY = 'play'
}

const filterFormItems: FilterItem[] = [
  {
    renderType: 'input',
    label: '会话ID',
    prop: 'id'
  },
  {
    renderType: 'input',
    label: '页面路径',
    prop: 'path'
  },
  {
    prop: 'platform',
    label: '平台',
    renderType: 'select',
    options: [
      {
        value: 'browser',
        label: '浏览器端'
      },
      {
        value: 'wechat',
        label: '微信小程序'
      },
      {
        value: 'nodejs',
        label: 'NodeJS'
      }
    ]
  },
  {
    renderType: 'input',
    label: '用户ID',
    prop: 'user_id'
  }
];

const tableOprates: OperateBtn[] = [
  {
    cmd: 'copy',
    label: '批量复制ID',
    position: 'left',
    plain: true,
    icon: 'DocumentCopy'
  }
];

const tableConfig: ColumnConfig[] = [
  {
    prop: 'id',
    label: 'ID',
    width: 320,
    plugins: ['copy']
  },
  {
    prop: 'path',
    width: 180,
    label: '页面路径'
  },
  {
    prop: 'stayTime',
    label: '停留时间（s）',
    width: 158,
    sortable: true,
    config: {
      sortParam: 'sort',
      orderParam: 'order',
      sortVal: 'stay_time',
      ascVal: 'asc',
      descVal: 'desc'
    }
  },
  {
    prop: 'platform',
    width: 108,
    label: '平台'
  },
  {
    prop: 'terminal',
    label: '终端'
  },
  {
    prop: 'userId',
    label: '用户ID'
  },
  {
    prop: 'ip',
    label: 'IP地址'
  },
  {
    prop: 'etime',
    width: 158,
    label: '开始时间',
    sortable: true,
    config: {
      sortParam: 'sort',
      orderParam: 'order',
      sortVal: 'etime',
      ascVal: 'asc',
      descVal: 'desc'
    }
  },
  {
    type: 'operation',
    label: '操作',
    operates: [
      {
        cmd: TableOperateType.DETAIL,
        label: '详情'
      },
      {
        cmd: TableOperateType.PLAY,
        label: '播放',
        condition: {
          prop: 'events',
          cmd: 'notempty'
        }
      }
    ]
  }
];

function tagType(type: EventTypes) {
  switch (type) {
    case EventTypes.ERROR:
    case EventTypes.VUE:
      return 'danger';
    case EventTypes.CUSTOMER:
      return '';
    default:
      return 'info';
  }
}

export default function useListConfig() {
  return {
    dataPath: 'list',
    tableOprates,
    filterFormItems,
    tableConfig,
    tagType,
  };
}
