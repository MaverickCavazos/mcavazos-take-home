export type BlockType = 'header' | 'hero' | 'footer' | 'custom';
export interface Block {
  id?: number;
  type: BlockType;
  position: number;
  configData: any;
};