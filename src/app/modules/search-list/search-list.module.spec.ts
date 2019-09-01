import { SearchListModule } from './search-list.module';

describe('SearchListModule', () => {
  let searchListModule: SearchListModule;

  beforeEach(() => {
    searchListModule = new SearchListModule();
  });

  it('should create an instance', () => {
    expect(searchListModule).toBeTruthy();
  });
});
