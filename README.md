This utility is to be used with Aggie, the social media aggregator used for election monitoring. It facilitates the addition of multiple facebook sources, which need to be defined in a tab separated values file.

# Usage

1. Clone or download the repository
2. Install the package `npm install`
3. Run `node addSources`. The program defaults to `https://127.0.0.1` for the server address and `sources.tsv` for the list of sources. You can specify different ones with argumements `--file`, `--baseurl`.

The program expects the file to have the following format:

facebook_id name url
