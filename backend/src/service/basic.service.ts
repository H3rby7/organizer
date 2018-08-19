import BasicDAO from '../dao/basic.dao';
import logger from '../logger';

class BasicService<T> {

    constructor(protected name: string,
        protected readonly dao: BasicDAO<T>) {

    }

    getCount(): Promise<number> {
        logger.debug(`getting ${this.name} count`);
        return this.dao.count();
    }

    getAll(): Promise<T[]> {
        logger.debug(`getting all ${this.name}s`);
        return this.dao.findAll();
    }

    getById(id: string): Promise<T> {
        logger.debug(`Getting ${this.name} with id: ${id}`)
        return this.dao.findOneById(id);
    }

    deleteById(id: string): Promise<boolean> {
        logger.debug(`Deleting ${this.name} with id: ${id}`)
        return this.dao.deleteOneById(id);
    }

    createNew(basicObject: T): Promise<T> {
        if (!basicObject) {
            logger.error(`Requires a ${this.name} to create`)
            return Promise.reject(`Cannot create ${this.name}, without a ${this.name}`);
        };
        logger.debug(`creating new ${this.name}`);
        return this.dao.insertOne(basicObject);
    }

    updateById(id: string, basicObject: T): Promise<T> {
        if (!id || !basicObject) {
            logger.error(`Cannot update ${this.name} with id: ${id} using object: ${JSON.stringify(basicObject)}`)
            return Promise.reject(`Cannot update ${this.name} with id: ${id} using object: ${JSON.stringify(basicObject)}`);
        };
        return this.dao.updateOne(id, basicObject);
    }

}

export default BasicService;