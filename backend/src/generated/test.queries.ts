/** Types generated for queries found in "src/test.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetName' parameters type */
export interface IGetNameParams {
  id: number | null | void;
}

/** 'GetName' return type */
export interface IGetNameResult {
  name: string;
}

/** 'GetName' query type */
export interface IGetNameQuery {
  params: IGetNameParams;
  result: IGetNameResult;
}

const getNameIR: any = {"name":"getName","params":[{"name":"id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":55,"b":56,"line":4,"col":12}]}}],"usedParamSet":{"id":true},"statement":{"body":"SELECT name\nFROM names\nWHERE id = :id","loc":{"a":20,"b":56,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT name
 * FROM names
 * WHERE id = :id
 * ```
 */
export const getName = new PreparedQuery<IGetNameParams,IGetNameResult>(getNameIR);


