class List{
    #list = [];
    get size(){
        return this.#list.length;
    }
 
    add(item){
        this.#list.push(item);
        this.#list.sort((a,b) => a-b)
    }
    remove(index){
        if (index < 0 || index >= this.#list.length) {
            throw new Error("Invalid Index");
        }
        this.#list.splice(index, 1);
    }
    get(index){
        if (index < 0 || index >= this.#list.length) {
            throw new Error("Invalid Index");
        }
        return this.#list[index];
    }
}