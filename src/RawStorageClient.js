export default class RawStorageClient {

  constructor(rawArchive) {
    this.rawArchive = rawArchive
  }

  read(archiveId) {
    return Promise.resolve(this.rawArchive)
  }

  write(archiveId, data) {
    // nope, this is used read-only
  }

}