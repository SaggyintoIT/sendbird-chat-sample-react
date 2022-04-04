export declare const createDatabaseHost: (dbname: string) => string;
export declare const createCollectionPath: (dbname: string, collectionName: string) => string;
export declare const createDatabaseMetadataKey: (dbname: string) => string;
export declare const createCollectionLock: (dbname: string, collectionName: string) => string;
export declare const createCollectionMetadataKey: (dbname: string, collectionName: string) => string;
export declare const createTransactionMetadataKey: (dbname: string, collectionName: string) => string;
export declare const createTransactionRecordsetKey: (dbname: string, collectionName: string) => string;
export declare const createBlockManagerMetadataKey: (dbname: string, collectionName: string) => string;
export declare const createBlockKeyPrefix: (dbname: string, collectionName: string) => string;
export declare const createBlockKey: (dbname: string, collectionName: string, hashLevel: number, hashKey: string) => string;
export declare const createIndexerKey: (dbname: string, collectionName: string, namespace: string) => string;
export declare const createBtreeId: (dbname: string, collectionName: string, namespace: string) => string;
export declare const createBlobIdPrefix: (dbname: string, collectionName: string) => string;
export declare const createBlobId: (dbname: string, collectionName: string, blobId: string, index?: number) => string;
