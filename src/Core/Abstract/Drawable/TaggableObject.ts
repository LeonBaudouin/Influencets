export abstract class TaggableObject {
  protected static tagMap: Map<string, TaggableObject[]> = new Map()
  protected tags: string[]

  constructor(tags: string[]) {
    this.tags = tags
    this.addAllToTagMap()
  }

  protected addAllToTagMap(): void {
    this.tags.forEach(this.addToTagMap.bind(this))
  }

  protected removeAllToTagMap(): void {
    this.tags.forEach(this.removeFromTagMap.bind(this))
  }

  protected addToTagMap(tag: string): void {
    if (TaggableObject.tagMap.has(tag)) {
      TaggableObject.tagMap.get(tag).push(this)
    } else {
      TaggableObject.tagMap.set(tag, [this])
    }
  }

  protected removeFromTagMap(tag: string): void {
    if (TaggableObject.tagMap.has(tag)) {
      const index = TaggableObject.tagMap.get(tag).indexOf(this)
      if (index > -1) {
        TaggableObject.tagMap.get(tag).splice(index, 1)
      }
    }
  }

  public getTags(): string[] {
    return this.tags
  }

  public hasTag(tag: string): boolean {
    return this.tags.includes(tag)
  }

  public addTag(tag: string): void {
    this.tags.push(tag)
    this.addToTagMap(tag)
  }

  public removeTag(tag: string): void {
    if (this.hasTag(tag)) {
      const index = this.tags.indexOf(tag)
      this.tags.splice(index, 1)
      this.removeFromTagMap(tag)
    }
  }

  public static getByTag(tag: string): TaggableObject[] {
    if (TaggableObject.tagMap.has(tag)) {
      return TaggableObject.tagMap.get(tag)
    }
    return []
  }
}
