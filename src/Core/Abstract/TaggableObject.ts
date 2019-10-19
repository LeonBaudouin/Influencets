export abstract class TaggableObject {
    
    private static tagMap: Map<string, TaggableObject[]> = new Map() 
    private tags: string[]

    constructor(tags: string[]) {
        this.tags = tags;
        this.addAllToTagMap();
    }

    private addAllToTagMap() {
        this.tags.forEach(this.addToTagMap.bind(this));
    }

    private addToTagMap(tag: string) {
        if (TaggableObject.tagMap.has(tag)) {
            TaggableObject.tagMap.get(tag).push(this)
        } else {
            TaggableObject.tagMap.set(tag, [this])
        }
    }

    private removeFromTagMap(tag: string) {
        if (TaggableObject.tagMap.has(tag)) {
            const index = TaggableObject.tagMap.get(tag).indexOf(this);
            if (index > -1) {
                TaggableObject.tagMap.get(tag).splice(index, 1);
            }
        }
    }

    public getTags() {
        return this.tags
    }

    public hasTag(tag: string) {
        return this.tags.includes(tag);
    }

    public addTag(tag: string) {
        this.tags.push(tag);
        this.addToTagMap(tag);
    }

    public removeTag(tag: string) {
        if (this.hasTag(tag)) {
            const index = this.tags.indexOf(tag);
            this.tags.splice(index, 1);
            this.removeFromTagMap(tag);
        }
    }

    public static getByTag(tag: string) {
        if (TaggableObject.tagMap.has(tag)) {
            return TaggableObject.tagMap.get(tag)
        }
        return []
    }
}
