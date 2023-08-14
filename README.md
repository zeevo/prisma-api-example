# Prisma API Example

## Generate Prisma client

```
# prisma generate
npm run prisma:generate
```

## Migrate DB

```
# prisma migrate dev
npm run prisma:migrate
```

## Start server

```
npm start
```

## curl usage

read all.

```sh
curl -s http://localhost:3001/animals
```

create record.

```sh
curl -d '{"species": "s", "genus": "g", "class": "c"}' -H 'Content-Type: application/json' http://localhost:3001/animals
```
