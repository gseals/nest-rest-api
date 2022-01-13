import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '3939393939',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '48484848',
      name: 'Item Two',
      qty: 50,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
