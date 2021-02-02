if test "$#" -ne 1; then
    echo "Illegal number of parameters"
    exit 2
fi

if [[ "$1" =~ ^(network|world|control|bots|api)$ ]]; then
    ./node_modules/.bin/ts-node ./node_modules/moleculer/bin/moleculer-runner.js --hot -e --repl --config src/BrokerConfig.ts src/services/**/$1.service.ts
else
    echo "Illegal parameters"
fi